'use client'

import { useEffect, useRef } from 'react'
import { useReducedMotion } from 'framer-motion'

export function EditorialCursor() {
  const ringRef = useRef<HTMLDivElement>(null)
  const dotRef = useRef<HTMLDivElement>(null)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    if (reduceMotion) return

    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    if (!finePointer) return

    const ring = ringRef.current
    const dot = dotRef.current
    const root = document.querySelector('.editorial')
    if (!ring || !dot || !root) return

    root.classList.add('editorial-has-cursor')

    let cursorX = window.innerWidth / 2
    let cursorY = window.innerHeight / 2
    let ringX = cursorX
    let ringY = cursorY
    let raf = 0

    const onMove = (e: MouseEvent) => {
      cursorX = e.clientX
      cursorY = e.clientY
      dot.style.transform = `translate(${cursorX}px, ${cursorY}px) translate(-50%, -50%)`
    }

    const onEnter = () => ring.classList.add('grow')
    const onLeave = () => ring.classList.remove('grow')

    const loop = () => {
      ringX += (cursorX - ringX) * 0.18
      ringY += (cursorY - ringY) * 0.18
      ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`
      raf = requestAnimationFrame(loop)
    }

    const targets = root.querySelectorAll('a, button, [data-cursor]')
    targets.forEach((el) => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })

    window.addEventListener('mousemove', onMove, { passive: true })
    raf = requestAnimationFrame(loop)

    return () => {
      root.classList.remove('editorial-has-cursor')
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
      targets.forEach((el) => {
        el.removeEventListener('mouseenter', onEnter)
        el.removeEventListener('mouseleave', onLeave)
      })
    }
  }, [reduceMotion])

  if (reduceMotion) return null

  return (
    <>
      <div ref={ringRef} className="editorial-cursor-ring hidden md:block" aria-hidden />
      <div ref={dotRef} className="editorial-cursor-dot hidden md:block" aria-hidden />
    </>
  )
}
