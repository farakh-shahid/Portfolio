'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export function ParticleScene() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

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
    const camera = new THREE.PerspectiveCamera(55, 1, 0.1, 100)
    camera.position.z = 5.2
    const group = new THREE.Group()
    scene.add(group)

    const count = 2600
    const radius = 2.05
    const positions = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const y = 1 - (i / (count - 1)) * 2
      const rad = Math.sqrt(1 - y * y)
      const theta = Math.PI * (3 - Math.sqrt(5)) * i
      positions[i * 3] = Math.cos(theta) * rad * radius
      positions[i * 3 + 1] = y * radius
      positions[i * 3 + 2] = Math.sin(theta) * rad * radius
    }

    const geometry = new THREE.BufferGeometry()
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))

    const spriteCanvas = document.createElement('canvas')
    spriteCanvas.width = spriteCanvas.height = 64
    const ctx = spriteCanvas.getContext('2d')
    if (!ctx) return

    const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32)
    gradient.addColorStop(0, 'rgba(255,244,214,1)')
    gradient.addColorStop(0.4, 'rgba(203,167,90,.8)')
    gradient.addColorStop(1, 'rgba(203,167,90,0)')
    ctx.fillStyle = gradient
    ctx.beginPath()
    ctx.arc(32, 32, 32, 0, Math.PI * 2)
    ctx.fill()

    const texture = new THREE.Texture(spriteCanvas)
    texture.needsUpdate = true

    const material = new THREE.PointsMaterial({
      size: 0.07,
      map: texture,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      color: 0xcba75a,
    })

    const points = new THREE.Points(geometry, material)
    group.add(points)

    const core = new THREE.Mesh(
      new THREE.IcosahedronGeometry(1.25, 1),
      new THREE.MeshBasicMaterial({ color: 0x35507a, wireframe: true, transparent: true, opacity: 0.12 }),
    )
    group.add(core)

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let targetX = 0
    let targetY = 0
    let mouseX = 0
    let mouseY = 0
    let baseX = 1.5
    let baseY = 0
    let heroHeight = window.innerHeight

    const onMouseMove = (event: MouseEvent) => {
      mouseX = event.clientX / window.innerWidth - 0.5
      mouseY = event.clientY / window.innerHeight - 0.5
    }

    const resize = () => {
      const width = canvas.clientWidth
      const height = canvas.clientHeight
      if (canvas.width !== width || canvas.height !== height) {
        renderer.setSize(width, height, false)
      }
      camera.aspect = width / Math.max(height, 1)
      camera.updateProjectionMatrix()
      baseX = width > 820 ? 1.5 : 0
      baseY = width > 820 ? 0 : 0.5
      const scale = width > 820 ? 1 : width > 480 ? 0.8 : 0.66
      group.scale.setScalar(scale)
      const hero = document.querySelector('.classic-root .hero')
      heroHeight = hero instanceof HTMLElement ? hero.offsetHeight : window.innerHeight
    }

    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('resize', resize)
    resize()

    const clock = new THREE.Clock()
    let frameId = 0

    const animate = () => {
      frameId = requestAnimationFrame(animate)
      const heroProgress = Math.min(window.scrollY / Math.max(heroHeight, 1), 1)
      const scrollMax = document.documentElement.scrollHeight - window.innerHeight
      const pageProgress = scrollMax > 0 ? Math.min(window.scrollY / scrollMax, 1) : 0

      canvas.style.opacity = String(Math.max(1 - heroProgress * 0.68, 0.32))
      const time = clock.getElapsedTime()
      group.position.x = baseX
      group.position.y = baseY + 0.6 - (reduced ? 0 : pageProgress * 2.2)

      if (!reduced) {
        targetX += (mouseY * 0.5 - targetX) * 0.05
        targetY += (mouseX * 0.6 - targetY) * 0.05
        group.rotation.x = targetX + Math.sin(time * 0.1) * 0.05
        group.rotation.y = targetY + time * 0.06
        core.rotation.x -= 0.0015
        core.rotation.y -= 0.0022
        points.material.size = 0.066 + Math.sin(time * 0.8) * 0.006
      }

      renderer.render(scene, camera)
    }

    animate()

    return () => {
      cancelAnimationFrame(frameId)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('resize', resize)
      geometry.dispose()
      material.dispose()
      texture.dispose()
      renderer.dispose()
    }
  }, [])

  return <canvas id="scene" ref={canvasRef} aria-hidden="true" />
}
