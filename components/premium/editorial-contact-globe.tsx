'use client'

import { useReducedMotion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import * as THREE from 'three'

const RADIUS = 2.05
// Each node doubles as a "stack" anchor for the floating card
const ARC_CITIES = [
  { lat: 33.68, lng: 73.04, stack: 'AWS', sub: 'Lambda · SQS' },
  { lat: 51.51, lng: -0.13, stack: 'React', sub: 'Next.js' },
  { lat: 37.77, lng: -122.42, stack: 'Node.js', sub: 'GraphQL' },
  { lat: 40.71, lng: -74.01, stack: 'PostgreSQL', sub: 'Redis' },
  { lat: 1.35, lng: 103.82, stack: 'TypeScript', sub: 'tRPC' },
  { lat: -23.55, lng: -46.63, stack: 'Docker', sub: 'Kubernetes' },
  { lat: 48.86, lng: 2.35, stack: 'Redis', sub: 'BullMQ' },
  { lat: -33.87, lng: 151.21, stack: 'Azure', sub: 'Functions' },
  { lat: 19.43, lng: -99.13, stack: 'CI/CD', sub: 'GitHub Actions' }
] as const
// slower, calmer fade; two cards run offset so one appears while the other holds
const CARD_CYCLE = 4.4

function latLngToVec3(lat: number, lng: number, r: number) {
  const phi = (lat * Math.PI) / 180
  const theta = (lng * Math.PI) / 180
  return new THREE.Vector3(
    r * Math.cos(phi) * Math.cos(theta),
    r * Math.sin(phi),
    r * Math.cos(phi) * Math.sin(theta),
  )
}

function arcCurve(start: THREE.Vector3, end: THREE.Vector3) {
  const mid = start.clone().add(end).normalize().multiplyScalar(RADIUS * 1.4)
  return new THREE.QuadraticBezierCurve3(start, mid, end)
}

export function EditorialContactGlobe() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)
  const cardStackRef = useRef<HTMLSpanElement>(null)
  const cardSubRef = useRef<HTMLSpanElement>(null)
  const card2Ref = useRef<HTMLDivElement>(null)
  const card2StackRef = useRef<HTMLSpanElement>(null)
  const card2SubRef = useRef<HTMLSpanElement>(null)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    let renderer: THREE.WebGLRenderer
    try {
      renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true })
    } catch {
      return
    }

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100)
    camera.position.set(0, 0.12, 6.0)

    const globe = new THREE.Group()
    scene.add(globe)

    const positions: number[] = []
    const colors: number[] = []
    const total = 6400
    const cLand = new THREE.Color(0x9b92ff)
    const cWarm = new THREE.Color(0xff9fd6)
    const cCool = new THREE.Color(0x6c63ff)

    // even dot coverage across the whole sphere, minus a few small
    // high-frequency noise gaps so it reads textured (small patches, not continents)
    for (let i = 0; i < total; i++) {
      const y = 1 - (i / (total - 1)) * 2
      const rad = Math.sqrt(Math.max(0, 1 - y * y))
      const theta = Math.PI * (3 - Math.sqrt(5)) * i
      const x = Math.cos(theta) * rad
      const z = Math.sin(theta) * rad
      const lng = Math.atan2(z, x) * (180 / Math.PI)

      const noise = Math.sin(x * 7.3) * Math.sin(y * 6.7) * Math.sin(z * 7.9)
      if (noise > 0.45) continue

      positions.push(x * RADIUS, y * RADIUS, z * RADIUS)
      const t = (lng + 180) / 360
      const mix = cCool.clone().lerp(cWarm, t * 0.55).lerp(cLand, 0.35)
      colors.push(mix.r, mix.g, mix.b)
    }

    const geometry = new THREE.BufferGeometry()
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3))
    geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3))

    const sprite = document.createElement('canvas')
    sprite.width = sprite.height = 64
    const ctx = sprite.getContext('2d')
    if (!ctx) return
    const g = ctx.createRadialGradient(32, 32, 0, 32, 32, 32)
    g.addColorStop(0, 'rgba(255,255,255,1)')
    g.addColorStop(0.35, 'rgba(200,190,255,0.9)')
    g.addColorStop(1, 'rgba(108,99,255,0)')
    ctx.fillStyle = g
    ctx.beginPath()
    ctx.arc(32, 32, 32, 0, Math.PI * 2)
    ctx.fill()

    const texture = new THREE.CanvasTexture(sprite)
    const points = new THREE.Points(
      geometry,
      new THREE.PointsMaterial({
        size: 0.055,
        map: texture,
        vertexColors: true,
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        opacity: 0.92,
      }),
    )
    globe.add(points)

    const arcGroup = new THREE.Group()
    const cityVecs = ARC_CITIES.map((c) => latLngToVec3(c.lat, c.lng, RADIUS))
    const pairs: [number, number][] = [
      [0, 1],
      [0, 2],
      [1, 3],
      [2, 3],
    ]

    type Arc = {
      curve: THREE.QuadraticBezierCurve3
      line: THREE.Line
      pulse: THREE.Sprite
      offset: number
    }
    const arcs: Arc[] = []

    const pulseTex = (() => {
      const c = document.createElement('canvas')
      c.width = c.height = 48
      const p = c.getContext('2d')!
      const rg = p.createRadialGradient(24, 24, 0, 24, 24, 24)
      // tight blue star: bright small core, quick falloff (minimal glow)
      rg.addColorStop(0, 'rgba(226,236,255,1)')
      rg.addColorStop(0.28, 'rgba(150,178,255,0.7)')
      rg.addColorStop(0.6, 'rgba(120,150,255,0.12)')
      rg.addColorStop(1, 'rgba(120,150,255,0)')
      p.fillStyle = rg
      p.beginPath()
      p.arc(24, 24, 24, 0, Math.PI * 2)
      p.fill()
      return new THREE.CanvasTexture(c)
    })()

    for (let k = 0; k < pairs.length; k++) {
      const [a, b] = pairs[k]
      const curve = arcCurve(cityVecs[a], cityVecs[b])
      const pts = curve.getPoints(72)
      const lineGeo = new THREE.BufferGeometry().setFromPoints(pts)
      const line = new THREE.Line(
        lineGeo,
        new THREE.LineBasicMaterial({
          color: 0x8b84ff,
          transparent: true,
          opacity: 0.32,
          blending: THREE.AdditiveBlending,
        }),
      )
      arcGroup.add(line)

      // traveling pulse: a small blue star flowing along the arc
      const pulse = new THREE.Sprite(
        new THREE.SpriteMaterial({
          map: pulseTex,
          transparent: true,
          depthWrite: false,
          blending: THREE.AdditiveBlending,
          color: 0x9db4ff,
        }),
      )
      pulse.scale.setScalar(0.12)
      arcGroup.add(pulse)

      arcs.push({ curve, line, pulse, offset: k / pairs.length })
    }

    // marker dot at every stack anchor point
    for (const v of cityVecs) {
      const dot = new THREE.Mesh(
        new THREE.SphereGeometry(0.028, 8, 8),
        new THREE.MeshBasicMaterial({ color: 0xe8e4ff }),
      )
      dot.position.copy(v)
      arcGroup.add(dot)
    }
    globe.add(arcGroup)

    const reduced = reduceMotion || window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let spin = 0
    let dragX = 0
    let dragY = 0
    let pointerX = 0
    let pointerY = 0
    let dragging = false
    let lastX = 0
    let lastY = 0

    let viewW = canvas.clientWidth
    let viewH = canvas.clientHeight
    const resize = () => {
      const w = canvas.clientWidth
      const h = canvas.clientHeight
      viewW = w
      viewH = h
      if (canvas.width !== w || canvas.height !== h) renderer.setSize(w, h, false)
      camera.aspect = w / Math.max(h, 1)
      camera.updateProjectionMatrix()
    }

    const onMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect()
      pointerX = ((e.clientX - rect.left) / rect.width - 0.5) * 2
      pointerY = ((e.clientY - rect.top) / rect.height - 0.5) * 2
      if (dragging && !reduced) {
        dragY += (e.clientX - lastX) * 0.006
        dragX += (e.clientY - lastY) * 0.006
        dragX = Math.max(-0.8, Math.min(0.8, dragX))
      }
      lastX = e.clientX
      lastY = e.clientY
    }

    const onDown = () => {
      dragging = true
    }
    const onUp = () => {
      dragging = false
    }

    canvas.addEventListener('pointermove', onMove)
    canvas.addEventListener('pointerdown', onDown)
    window.addEventListener('pointerup', onUp)
    window.addEventListener('resize', resize)
    resize()

    const clock = new THREE.Clock()
    let frameId = 0
    const camDir = new THREE.Vector3()
    const worldPos = new THREE.Vector3()
    const tmp = new THREE.Vector3()

    const facingOf = (i: number) => {
      tmp.copy(cityVecs[i]).applyMatrix4(globe.matrixWorld)
      const normal = tmp.clone().normalize()
      camDir.copy(camera.position).sub(tmp).normalize()
      return normal.dot(camDir) // >0 => front of globe
    }

    type CardState = {
      el: HTMLDivElement | null
      stackEl: HTMLSpanElement | null
      subEl: HTMLSpanElement | null
      offset: number // time offset so the two cards are out of phase
      cycle: number
      anchor: number
    }
    // two cards, half a cycle apart => one appears while the other holds
    const cardStates: CardState[] = [
      { el: null, stackEl: null, subEl: null, offset: 0, cycle: -1, anchor: 0 },
      {
        el: null,
        stackEl: null,
        subEl: null,
        offset: CARD_CYCLE * 0.5,
        cycle: -1,
        anchor: 3,
      },
    ]

    const updateCards = (t: number) => {
      cardStates[0].el = cardRef.current
      cardStates[0].stackEl = cardStackRef.current
      cardStates[0].subEl = cardSubRef.current
      cardStates[1].el = card2Ref.current
      cardStates[1].stackEl = card2StackRef.current
      cardStates[1].subEl = card2SubRef.current

      globe.updateMatrixWorld()

      for (let c = 0; c < cardStates.length; c++) {
        const card = cardStates[c]
        if (!card.el) continue
        const other = cardStates[(c + 1) % cardStates.length]

        const localT = t + card.offset
        const cycle = Math.floor(localT / CARD_CYCLE)
        if (cycle !== card.cycle) {
          card.cycle = cycle
          // random front-facing node, different from this card's last spot AND the other card's spot
          const candidates: number[] = []
          for (let i = 0; i < cityVecs.length; i++) {
            if (i !== card.anchor && i !== other.anchor && facingOf(i) > 0.25) {
              candidates.push(i)
            }
          }
          if (candidates.length) {
            card.anchor = candidates[Math.floor(Math.random() * candidates.length)]
          } else {
            card.anchor = (card.anchor + 1) % cityVecs.length
          }
          if (card.stackEl) card.stackEl.textContent = ARC_CITIES[card.anchor].stack
          if (card.subEl) card.subEl.textContent = ARC_CITIES[card.anchor].sub
        }

        // slow, calm fade in/out envelope
        const phase = (localT % CARD_CYCLE) / CARD_CYCLE
        let env = 1
        if (phase < 0.24) env = phase / 0.24
        else if (phase > 0.76) env = (1 - phase) / 0.24

        worldPos.copy(cityVecs[card.anchor]).applyMatrix4(globe.matrixWorld)
        const normal = worldPos.clone().normalize()
        camDir.copy(camera.position).sub(worldPos).normalize()
        const facing = normal.dot(camDir)
        const facingSmooth = Math.max(0, Math.min(1, (facing - 0.05) / 0.35))

        const projected = worldPos.clone().project(camera)
        const sx = (projected.x * 0.5 + 0.5) * viewW
        const sy = (-projected.y * 0.5 + 0.5) * viewH

        card.el.style.transform = `translate(${sx}px, ${sy}px) translate(-50%, -140%)`
        card.el.style.opacity = String(env * facingSmooth)
      }
    }

    const animate = () => {
      frameId = requestAnimationFrame(animate)
      const t = clock.getElapsedTime()

      if (!reduced) {
        spin += 0.0006
        const parallax = pointerX * 0.22
        globe.rotation.y = spin + dragY + parallax
        const targetX = dragX + pointerY * 0.16
        globe.rotation.x += (targetX - globe.rotation.x) * 0.05
      }

      const travel = 0.32
      arcs.forEach((arc, i) => {
        const mat = arc.line.material as THREE.LineBasicMaterial
        mat.opacity = 0.24 + Math.sin(t * 1.4 + i * 1.1) * 0.12

        // pulse travels start -> end on a loop
        const prog = ((t * travel + arc.offset) % 1)
        const pos = arc.curve.getPointAt(prog)
        arc.pulse.position.copy(pos)
        const pm = arc.pulse.material as THREE.SpriteMaterial
        // fade in at start, out at end for a clean "shooting" feel
        pm.opacity = Math.sin(prog * Math.PI) * 0.85
      })

      updateCards(t)

      renderer.render(scene, camera)
    }

    animate()

    return () => {
      cancelAnimationFrame(frameId)
      canvas.removeEventListener('pointermove', onMove)
      canvas.removeEventListener('pointerdown', onDown)
      window.removeEventListener('pointerup', onUp)
      window.removeEventListener('resize', resize)
      geometry.dispose()
      texture.dispose()
      pulseTex.dispose()
      points.material.dispose()
      arcs.forEach((arc) => {
        arc.line.geometry.dispose()
        ;(arc.line.material as THREE.Material).dispose()
        ;(arc.pulse.material as THREE.Material).dispose()
      })
      renderer.dispose()
    }
  }, [reduceMotion])

  return (
    <div className="editorial-globe-shell">
      <canvas ref={canvasRef} className="editorial-contact-globe-canvas" aria-hidden />
      <div ref={cardRef} className="editorial-globe-card" aria-hidden>
        <span className="editorial-globe-card-icon" />
        <span className="editorial-globe-card-text">
          <span ref={cardStackRef} className="editorial-globe-card-stack">
            AWS
          </span>
          <span ref={cardSubRef} className="editorial-globe-card-sub">
            Lambda · SQS
          </span>
        </span>
      </div>
      <div ref={card2Ref} className="editorial-globe-card" aria-hidden>
        <span className="editorial-globe-card-icon" />
        <span className="editorial-globe-card-text">
          <span ref={card2StackRef} className="editorial-globe-card-stack">
            PostgreSQL
          </span>
          <span ref={card2SubRef} className="editorial-globe-card-sub">
            Redis
          </span>
        </span>
      </div>
    </div>
  )
}
