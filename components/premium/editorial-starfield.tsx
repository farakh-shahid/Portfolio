'use client'

import { useReducedMotion } from 'framer-motion'
import { useEffect, useRef } from 'react'

const DOT_WHITE = '255, 255, 255'
const ACCENT = '124, 115, 255'
const ACCENT_SOFT = '160, 150, 255'
const HOVER_RADIUS = 190
const LINK_DIST = 118
const NEAR_LIMIT = 7
const GRID_SPACING = 46
const GLOW_RADIUS = 220

type Mode = 'constellation' | 'grid' | 'glow'

// section id -> effect. Anything not listed falls back to DEFAULT_MODE.
const SECTION_MODES: Record<string, Mode> = {}
const DEFAULT_MODE: Mode = 'grid'

type Star = {
  y: number
  baseX: number
  vy: number
  size: number
  phase: number
  alpha: number
}

export function EditorialStarfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    if (reduceMotion) return

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches

    let width = 0
    let height = 0
    let stars: Star[] = []
    let frameId = 0
    let time = 0

    const mouse = { x: -9999, y: -9999, active: false }
    const smooth = { x: -9999, y: -9999 }

    const count = () => (width < 760 ? 44 : 76)

    const spawn = () => {
      stars = Array.from({ length: count() }, () => ({
        y: Math.random() * height,
        baseX: Math.random() * width,
        vy: (Math.random() > 0.5 ? 1 : -1) * (0.03 + Math.random() * 0.05),
        size: 0.65 + Math.random() * 1.05,
        phase: Math.random() * Math.PI * 2,
        alpha: 0.14 + Math.random() * 0.18,
      }))
    }

    const resize = () => {
      width = window.innerWidth
      height = window.innerHeight
      const dpr = Math.min(window.devicePixelRatio, 2)
      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      spawn()
    }

    const heroRectNow = () =>
      document.querySelector('[data-hero-section]')?.getBoundingClientRect()
    const globeRectNow = () =>
      document.querySelector('[data-globe-zone]')?.getBoundingClientRect()

    // decide effect based on which mapped section the cursor is inside
    const modeAt = (x: number, y: number): Mode => {
      for (const id in SECTION_MODES) {
        const el = document.getElementById(id)
        if (!el) continue
        const r = el.getBoundingClientRect()
        if (x >= r.left && x <= r.right && y >= r.top && y <= r.bottom) {
          return SECTION_MODES[id]
        }
      }
      return DEFAULT_MODE
    }

    const step = () => {
      time += 0.016

      if (finePointer) {
        smooth.x += (mouse.x - smooth.x) * 0.14
        smooth.y += (mouse.y - smooth.y) * 0.14
      }

      for (const s of stars) {
        s.y += s.vy
        s.baseX += Math.sin(time * 0.2 + s.phase) * 0.02

        if (s.vy > 0 && s.y > height + 8) {
          s.y = -8
          s.baseX = Math.random() * width
        } else if (s.vy < 0 && s.y < -8) {
          s.y = height + 8
          s.baseX = Math.random() * width
        }

        if (s.baseX < -8) s.baseX = width + 8
        if (s.baseX > width + 8) s.baseX = -8
      }
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height)

      const heroRect = heroRectNow()
      const globeRect = globeRectNow()
      const inRect = (rect: DOMRect | undefined, x: number, y: number) =>
        !!rect && x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom
      const inHero = (x: number, y: number) =>
        inRect(heroRect, x, y) || inRect(globeRect, x, y)

      const active = finePointer && mouse.active && !inHero(smooth.x, smooth.y)
      const mode: Mode = active ? modeAt(smooth.x, smooth.y) : DEFAULT_MODE

      // --- soft glow (glow mode) ---
      if (active && mode === 'glow') {
        const glow = ctx.createRadialGradient(
          smooth.x,
          smooth.y,
          0,
          smooth.x,
          smooth.y,
          GLOW_RADIUS,
        )
        glow.addColorStop(0, `rgba(${ACCENT}, 0.12)`)
        glow.addColorStop(0.5, `rgba(${ACCENT_SOFT}, 0.05)`)
        glow.addColorStop(1, 'rgba(124, 115, 255, 0)')
        ctx.fillStyle = glow
        ctx.fillRect(0, 0, width, height)
      }

      // --- faint grid dots near cursor (grid mode) ---
      if (active && mode === 'grid') {
        const gx0 = Math.floor((smooth.x - GLOW_RADIUS) / GRID_SPACING) * GRID_SPACING
        const gy0 = Math.floor((smooth.y - GLOW_RADIUS) / GRID_SPACING) * GRID_SPACING
        for (let gx = gx0; gx < smooth.x + GLOW_RADIUS; gx += GRID_SPACING) {
          for (let gy = gy0; gy < smooth.y + GLOW_RADIUS; gy += GRID_SPACING) {
            if (inHero(gx, gy)) continue
            const d = Math.hypot(gx - smooth.x, gy - smooth.y)
            if (d > GLOW_RADIUS) continue
            const prox = 1 - d / GLOW_RADIUS
            ctx.beginPath()
            ctx.arc(gx, gy, 0.8 + prox * 1.1, 0, Math.PI * 2)
            ctx.fillStyle = `rgba(${ACCENT}, ${0.06 + prox * 0.34})`
            ctx.fill()
          }
        }
      }

      // --- constellation links (constellation mode) ---
      let near: { s: Star; x: number; y: number; prox: number }[] = []
      if (active && mode === 'constellation') {
        for (const s of stars) {
          const x = s.baseX
          const y = s.y
          if (inHero(x, y)) continue
          const d = Math.hypot(x - smooth.x, y - smooth.y)
          if (d < HOVER_RADIUS) near.push({ s, x, y, prox: 1 - d / HOVER_RADIUS })
        }
        near.sort((a, b) => b.prox - a.prox)
        near = near.slice(0, NEAR_LIMIT)

        for (let i = 0; i < near.length; i++) {
          for (let j = i + 1; j < near.length; j++) {
            const a = near[i]
            const b = near[j]
            const ld = Math.hypot(a.x - b.x, a.y - b.y)
            if (ld < LINK_DIST) {
              const strength = (1 - ld / LINK_DIST) * Math.min(a.prox, b.prox)
              ctx.beginPath()
              ctx.moveTo(a.x, a.y)
              ctx.lineTo(b.x, b.y)
              ctx.strokeStyle = `rgba(${ACCENT}, ${strength * 0.4})`
              ctx.lineWidth = 0.7
              ctx.stroke()
            }
          }
        }
      }

      const litProx = new Map(near.map((n) => [n.s, n.prox]))

      for (const s of stars) {
        const x = s.baseX
        const y = s.y
        if (inHero(x, y)) continue

        const twinkle = 0.9 + Math.sin(time * 1.02 + s.phase) * 0.1
        let alpha = s.alpha * twinkle
        let prox = 0

        if (active) {
          const d = Math.hypot(x - smooth.x, y - smooth.y)
          if (mode === 'constellation') {
            prox = litProx.get(s) ?? 0
          } else if (d < GLOW_RADIUS) {
            prox = (1 - d / GLOW_RADIUS) * (mode === 'glow' ? 1 : 0.85)
          }
          if (prox > 0) alpha = Math.min(0.8, alpha + prox * 0.4)
        }

        const r = s.size * twinkle

        if (prox > 0.05) {
          ctx.beginPath()
          ctx.arc(x, y, r * 2.6, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(${ACCENT}, ${prox * 0.2})`
          ctx.fill()

          ctx.beginPath()
          ctx.arc(x, y, r * 1.5, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(${ACCENT_SOFT}, ${prox * 0.28})`
          ctx.fill()
        }

        ctx.beginPath()
        ctx.arc(x, y, r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${DOT_WHITE}, ${alpha})`
        ctx.fill()
      }

      frameId = requestAnimationFrame(tick)
    }

    const tick = () => {
      step()
      draw()
    }

    const onMove = (event: MouseEvent) => {
      if (!finePointer) return
      mouse.x = event.clientX
      mouse.y = event.clientY
      mouse.active = true
    }

    const onLeave = () => {
      mouse.active = false
    }

    resize()
    window.addEventListener('resize', resize)
    window.addEventListener('mousemove', onMove, { passive: true })
    window.addEventListener('mouseleave', onLeave)
    frameId = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(frameId)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseleave', onLeave)
    }
  }, [reduceMotion])

  if (reduceMotion) return null

  return <canvas ref={canvasRef} className="editorial-starfield" aria-hidden />
}
