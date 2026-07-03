'use client'

import { useReducedMotion } from 'framer-motion'
import { useEffect, useRef } from 'react'

type Point = { x: number; y: number }

const SPACING = 52
const CONNECT = 155
const ACCENT = '108, 99, 255'

function drawDiamond(ctx: CanvasRenderingContext2D, x: number, y: number, size: number, alpha: number) {
  ctx.save()
  ctx.translate(x, y)
  ctx.rotate(Math.PI / 4)
  ctx.fillStyle = `rgba(${ACCENT}, ${alpha})`
  ctx.fillRect(-size / 2, -size / 2, size, size)
  ctx.restore()
}

export function EditorialHeroMesh() {
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

    let points: Point[] = []
    const mouse = { x: -9999, y: -9999, active: false }
    const smooth = { x: -9999, y: -9999 }
    let visible = 1
    let frameId = 0

    const buildGrid = () => {
      const rect = hero.getBoundingClientRect()
      const width = rect.width
      const height = rect.height
      const dpr = Math.min(window.devicePixelRatio, 2)

      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      points = []
      const pad = SPACING / 2
      for (let x = pad; x < width; x += SPACING) {
        for (let y = pad; y < height; y += SPACING) {
          points.push({ x, y })
        }
      }
    }

    const updateVisibility = () => {
      const rect = hero.getBoundingClientRect()
      const progress = Math.min(Math.max(-rect.top / Math.max(rect.height, 1), 0), 1)
      visible = 1 - progress * 0.9
    }

    const draw = () => {
      const width = canvas.clientWidth
      const height = canvas.clientHeight
      ctx.clearRect(0, 0, width, height)

      smooth.x += (mouse.x - smooth.x) * 0.14
      smooth.y += (mouse.y - smooth.y) * 0.14

      if (mouse.active && visible > 0.05) {
        const glow = ctx.createRadialGradient(smooth.x, smooth.y, 0, smooth.x, smooth.y, CONNECT * 1.15)
        glow.addColorStop(0, `rgba(${ACCENT}, ${0.1 * visible})`)
        glow.addColorStop(1, `rgba(${ACCENT}, 0)`)
        ctx.fillStyle = glow
        ctx.fillRect(0, 0, width, height)
      }

      for (const point of points) {
        let alpha = 0.1 * visible
        let size = 2

        if (mouse.active && visible > 0.05) {
          const dist = Math.hypot(point.x - smooth.x, point.y - smooth.y)
          if (dist < CONNECT) {
            const strength = 1 - dist / CONNECT
            alpha = 0.1 + strength * 0.5
            size = 2 + strength * 2

            ctx.beginPath()
            ctx.moveTo(smooth.x, smooth.y)
            ctx.lineTo(point.x, point.y)
            ctx.strokeStyle = `rgba(${ACCENT}, ${strength * 0.38 * visible})`
            ctx.lineWidth = 1
            ctx.stroke()
          }
        }

        drawDiamond(ctx, point.x, point.y, size, alpha)
      }

      frameId = requestAnimationFrame(draw)
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

    const resizeObserver = new ResizeObserver(buildGrid)
    resizeObserver.observe(hero)

    buildGrid()
    updateVisibility()
    window.addEventListener('mousemove', onMove, { passive: true })
    window.addEventListener('scroll', updateVisibility, { passive: true })
    window.addEventListener('resize', buildGrid)
    hero.addEventListener('mouseleave', onLeave)
    frameId = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(frameId)
      resizeObserver.disconnect()
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('scroll', updateVisibility)
      window.removeEventListener('resize', buildGrid)
      hero.removeEventListener('mouseleave', onLeave)
    }
  }, [reduceMotion])

  if (reduceMotion) return null

  return <canvas ref={canvasRef} className="editorial-hero-mesh" aria-hidden />
}
