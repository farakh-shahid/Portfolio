'use client'

import { useEffect, useRef } from 'react'
import { useReducedMotion } from 'framer-motion'

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    if (reduceMotion) return
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    if (!finePointer) return

    const dot = dotRef.current
    if (!dot) return

    let x = 0
    let y = 0
    let tx = 0
    let ty = 0
    let raf = 0

    const onMove = (e: MouseEvent) => {
      tx = e.clientX
      ty = e.clientY
    }

    const loop = () => {
      x += (tx - x) * 0.18
      y += (ty - y) * 0.18
      dot.style.left = `${x}px`
      dot.style.top = `${y}px`
      raf = requestAnimationFrame(loop)
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    raf = requestAnimationFrame(loop)

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [reduceMotion])

  if (reduceMotion) return null

  return <div ref={dotRef} className="premium-cursor-dot hidden md:block" aria-hidden />
}
