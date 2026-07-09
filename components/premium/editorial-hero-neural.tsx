'use client'

import { useReducedMotion } from 'framer-motion'
import { useEffect, useRef } from 'react'

const FADE_WHITE = '255, 255, 255'
const PARTICLE_COUNT = 68
const LINK_DISTANCE = 128
const MOUSE_RADIUS = 155

type Particle = {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  phase: number
}

function dist(a: Particle, b: Particle) {
  return Math.hypot(a.x - b.x, a.y - b.y)
}

export function EditorialHeroNeural() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    if (reduceMotion) return

    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    if (!finePointer) return

    const canvas = canvasRef.current
    const hero = canvas?.closest('[data-hero-section]')
    if (!canvas || !hero) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let width = 0
    let height = 0
    let particles: Particle[] = []
    let visible = 1
    let time = 0
    let frameId = 0

    const mouse = { x: -9999, y: -9999, active: false }
    const smooth = { x: -9999, y: -9999 }

    const spawn = () => {
      particles = Array.from({ length: PARTICLE_COUNT }, () => {
        const angle = Math.random() * Math.PI * 2
        const speed = 0.12 + Math.random() * 0.2
        return {
          x: Math.random() * width,
          y: Math.random() * height,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          size: 1.1 + Math.random() * 1.2,
          phase: Math.random() * Math.PI * 2,
        }
      })
    }

    const resize = () => {
      const rect = hero.getBoundingClientRect()
      width = rect.width
      height = rect.height
      const dpr = Math.min(window.devicePixelRatio, 2)
      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      if (!particles.length) spawn()
    }

    const updateVisibility = () => {
      const rect = hero.getBoundingClientRect()
      const progress = Math.min(Math.max(-rect.top / Math.max(rect.height, 1), 0), 1)
      visible = 1 - progress * 0.9
      canvas.style.opacity = String(Math.max(visible, 0.1))
    }

    const step = () => {
      time += 0.016
      smooth.x += (mouse.x - smooth.x) * 0.12
      smooth.y += (mouse.y - smooth.y) * 0.12

      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy
        p.vx += Math.sin(time * 0.32 + p.phase) * 0.002
        p.vy += Math.cos(time * 0.27 + p.phase) * 0.002

        if (p.x < 0 || p.x > width) {
          p.vx *= -1
          p.x = Math.max(0, Math.min(width, p.x))
        }
        if (p.y < 0 || p.y > height) {
          p.vy *= -1
          p.y = Math.max(0, Math.min(height, p.y))
        }

        if (mouse.active && visible > 0.05) {
          const dx = p.x - smooth.x
          const dy = p.y - smooth.y
          const d = Math.hypot(dx, dy)
          if (d < MOUSE_RADIUS && d > 1) {
            const force = (1 - d / MOUSE_RADIUS) * 0.01
            p.vx += (dx / d) * force
            p.vy += (dy / d) * force
          }
        }

        const maxSpeed = 0.38
        const speed = Math.hypot(p.vx, p.vy)
        if (speed > maxSpeed) {
          p.vx = (p.vx / speed) * maxSpeed
          p.vy = (p.vy / speed) * maxSpeed
        }
      }
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height)
      if (visible < 0.05) {
        frameId = requestAnimationFrame(tick)
        return
      }

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const d = dist(particles[i], particles[j])
          if (d < LINK_DISTANCE) {
            const strength = (1 - d / LINK_DISTANCE) * visible
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(${FADE_WHITE}, ${0.04 + strength * 0.12})`
            ctx.lineWidth = 0.75
            ctx.stroke()
          }
        }
      }

      if (mouse.active && visible > 0.05) {
        for (const p of particles) {
          const d = Math.hypot(p.x - smooth.x, p.y - smooth.y)
          if (d < MOUSE_RADIUS) {
            const strength = 1 - d / MOUSE_RADIUS
            ctx.beginPath()
            ctx.moveTo(smooth.x, smooth.y)
            ctx.lineTo(p.x, p.y)
            ctx.strokeStyle = `rgba(${FADE_WHITE}, ${strength * 0.24 * visible})`
            ctx.lineWidth = 0.8
            ctx.stroke()
          }
        }
      }

      for (const p of particles) {
        const pulse = 0.9 + Math.sin(time * 1.3 + p.phase) * 0.1
        let alpha = 0.12 * visible * pulse

        if (mouse.active && visible > 0.05) {
          const d = Math.hypot(p.x - smooth.x, p.y - smooth.y)
          if (d < MOUSE_RADIUS) {
            const strength = 1 - d / MOUSE_RADIUS
            alpha = 0.12 + strength * 0.28
          }
        }

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size * pulse, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${FADE_WHITE}, ${alpha})`
        ctx.fill()
      }

      frameId = requestAnimationFrame(tick)
    }

    const tick = () => {
      step()
      draw()
    }

    const onMove = (event: MouseEvent) => {
      const rect = hero.getBoundingClientRect()
      mouse.x = event.clientX - rect.left
      mouse.y = event.clientY - rect.top
      mouse.active =
        mouse.x >= 0 && mouse.x <= rect.width && mouse.y >= 0 && mouse.y <= rect.height
    }

    const onLeave = () => {
      mouse.active = false
    }

    const resizeObserver = new ResizeObserver(resize)
    resizeObserver.observe(hero)

    resize()
    updateVisibility()
    window.addEventListener('mousemove', onMove, { passive: true })
    window.addEventListener('scroll', updateVisibility, { passive: true })
    hero.addEventListener('mouseleave', onLeave)
    frameId = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(frameId)
      resizeObserver.disconnect()
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('scroll', updateVisibility)
      hero.removeEventListener('mouseleave', onLeave)
    }
  }, [reduceMotion])

  if (reduceMotion) return null

  return <canvas ref={canvasRef} className="editorial-hero-neural" aria-hidden />
}
