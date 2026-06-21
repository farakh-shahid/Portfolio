'use client'

import { motion, useMotionTemplate, useMotionValue, useReducedMotion } from 'framer-motion'
import { useEffect, useSyncExternalStore } from 'react'

function subscribeFinePointer(onStoreChange: () => void) {
  const mq = window.matchMedia('(hover: hover) and (pointer: fine)')
  mq.addEventListener('change', onStoreChange)
  return () => mq.removeEventListener('change', onStoreChange)
}

function getFinePointerSnapshot() {
  return window.matchMedia('(hover: hover) and (pointer: fine)').matches
}

function getFinePointerServerSnapshot() {
  return false
}

export function HeroSpotlight() {
  const reduceMotion = useReducedMotion()
  const finePointer = useSyncExternalStore(subscribeFinePointer, getFinePointerSnapshot, getFinePointerServerSnapshot)
  const enabled = finePointer && !reduceMotion
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  useEffect(() => {
    if (!enabled) return
    const onMove = (e: MouseEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
    }
    window.addEventListener('mousemove', onMove, { passive: true })
    return () => window.removeEventListener('mousemove', onMove)
  }, [enabled, x, y])

  const background = useMotionTemplate`radial-gradient(600px circle at ${x}px ${y}px, rgba(52,211,153,0.08), transparent 72%)`

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="hero-grid-bg absolute inset-0 opacity-80" />
      {enabled ? <motion.div className="absolute inset-0" style={{ background }} /> : null}
      <div className="absolute right-[8%] top-[18%] hidden h-[420px] w-[420px] rounded-full border border-[var(--border)] opacity-60 lg:block" />
      <div className="absolute right-[4%] top-[12%] hidden h-[560px] w-[560px] rounded-full border border-white/[0.03] lg:block" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_65%,var(--bg-0)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_75%_25%,var(--accent-glow),transparent_60%)]" />
    </div>
  )
}
