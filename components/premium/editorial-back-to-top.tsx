'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { useEffect, useState } from 'react'

const SIZE = 54
const STROKE = 1.5
const RADIUS = (SIZE - STROKE * 2) / 2
const CENTER = SIZE / 2
const CIRC = 2 * Math.PI * RADIUS

export function EditorialBackToTop() {
  const reduceMotion = useReducedMotion()
  const [progress, setProgress] = useState(0)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      const nextProgress = max > 0 ? window.scrollY / max : 0
      setProgress(nextProgress)
      setVisible(window.scrollY > 320)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToTop = () => {
    if (reduceMotion) {
      window.scrollTo({ top: 0, behavior: 'auto' })
      return
    }
    window.dispatchEvent(new CustomEvent('editorial:scroll-top'))
  }

  const offset = CIRC * (1 - progress)

  return (
    <motion.button
      type="button"
      className="editorial-back-top"
      onClick={scrollToTop}
      initial={false}
      animate={{
        opacity: visible ? 1 : 0,
        y: visible ? 0 : 14,
        scale: visible ? 1 : 0.92,
      }}
      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
      style={{ pointerEvents: visible ? 'auto' : 'none' }}
      aria-label="Back to top"
    >
      <svg className="editorial-back-top-ring" width={SIZE} height={SIZE} viewBox={`0 0 ${SIZE} ${SIZE}`} aria-hidden>
        <circle
          className="editorial-back-top-track"
          cx={CENTER}
          cy={CENTER}
          r={RADIUS}
          fill="none"
          strokeWidth={STROKE}
        />
        <circle
          className="editorial-back-top-progress"
          cx={CENTER}
          cy={CENTER}
          r={RADIUS}
          fill="none"
          strokeWidth={STROKE}
          strokeLinecap="round"
          strokeDasharray={CIRC}
          strokeDashoffset={offset}
          transform={`rotate(-90 ${CENTER} ${CENTER})`}
        />
      </svg>
      <svg className="editorial-back-top-arrow" width={16} height={16} viewBox="0 0 16 16" aria-hidden>
        <path d="M8 12V4M8 4L4.5 7.5M8 4l3.5 3.5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </motion.button>
  )
}
