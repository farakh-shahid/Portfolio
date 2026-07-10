'use client'

import { useReducedMotion } from 'framer-motion'
import { useEffect, useRef } from 'react'

const DOT_WHITE = '255, 255, 255'
const ACCENT = '124, 115, 255'
const ACCENT_SOFT = '160, 150, 255'
const MOUSE_RADIUS = 150
const MOUSE_GLOW_RADIUS = 210

type Star = {
  y: number
  baseX: number
  vy: number
  size: number
  phase: number
  alpha: number
  ox: number
  oy: number
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
        vy: (Math.random() > 0.5 ? 1 : -1) * (0.04 + Math.random() * 0.09),
        size: 0.65 + Math.random() * 1.05,
        phase: Math.random() * Math.PI * 2,
        alpha: 0.14 + Math.random() * 0.18,
        ox: 0,
        oy: 0,
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

    const heroCoversPoint = (x: number, y: number) => {
      const hero = document.querySelector('[data-hero-section]')
      if (!hero) return false
      const rect = hero.getBoundingClientRect()
      return x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom
    }

    const sx = (s: Star) => s.baseX + s.ox
    const sy = (s: Star) => s.y + s.oy

    const step = () => {
      time += 0.016

      if (finePointer) {
        smooth.x += (mouse.x - smooth.x) * 0.11
        smooth.y += (mouse.y - smooth.y) * 0.11
      }

      for (const s of stars) {
        s.y += s.vy
        s.baseX += Math.sin(time * 0.26 + s.phase) * 0.03

        if (s.vy > 0 && s.y > height + 8) {
          s.y = -8
          s.baseX = Math.random() * width
        } else if (s.vy < 0 && s.y < -8) {
          s.y = height + 8
          s.baseX = Math.random() * width
        }

        if (s.baseX < -8) s.baseX = width + 8
        if (s.baseX > width + 8) s.baseX = -8

        s.ox *= 0.9
        s.oy *= 0.9

        if (finePointer && mouse.active && !heroCoversPoint(smooth.x, smooth.y)) {
          const dx = sx(s) - smooth.x
          const dy = sy(s) - smooth.y
          const d = Math.hypot(dx, dy)
          if (d < MOUSE_RADIUS && d > 1) {
            const force = (1 - d / MOUSE_RADIUS) * 0.18
            s.ox += (dx / d) * force
            s.oy += (dy / d) * force
          }
        }
      }
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height)

      const hero = document.querySelector('[data-hero-section]')
      const heroRect = hero?.getBoundingClientRect()

      if (finePointer && mouse.active && !heroCoversPoint(smooth.x, smooth.y)) {
        const glow = ctx.createRadialGradient(
          smooth.x,
          smooth.y,
          0,
          smooth.x,
          smooth.y,
          MOUSE_GLOW_RADIUS,
        )
        glow.addColorStop(0, `rgba(${ACCENT}, 0.12)`)
        glow.addColorStop(0.45, `rgba(${ACCENT_SOFT}, 0.05)`)
        glow.addColorStop(1, 'rgba(124, 115, 255, 0)')
        ctx.fillStyle = glow
        ctx.fillRect(0, 0, width, height)
      }

      for (const s of stars) {
        const x = sx(s)
        const y = sy(s)

        if (heroRect && x >= heroRect.left && x <= heroRect.right && y >= heroRect.top && y <= heroRect.bottom) {
          continue
        }

        const twinkle = 0.9 + Math.sin(time * 1.02 + s.phase) * 0.1
        let alpha = s.alpha * twinkle
        let purpleMix = 0

        if (finePointer && mouse.active && !heroCoversPoint(smooth.x, smooth.y)) {
          const d = Math.hypot(x - smooth.x, y - smooth.y)
          if (d < MOUSE_RADIUS) {
            const strength = 1 - d / MOUSE_RADIUS
            alpha = Math.min(0.72, alpha + strength * 0.32)
            purpleMix = strength
          }
        }

        const r = s.size * twinkle

        if (purpleMix > 0.05) {
          ctx.beginPath()
          ctx.arc(x, y, r * 2.8, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(${ACCENT}, ${purpleMix * 0.24})`
          ctx.fill()

          ctx.beginPath()
          ctx.arc(x, y, r * 1.6, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(${ACCENT_SOFT}, ${purpleMix * 0.3})`
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
