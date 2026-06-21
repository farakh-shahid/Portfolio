'use client'

import { useEffect, useState } from 'react'
import { useReducedMotion } from 'framer-motion'
import { heroBackendHighlights } from '@/data/hero-rotating'

export function HeroRotatingBody() {
  const reduceMotion = useReducedMotion()
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (reduceMotion) return
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % heroBackendHighlights.length)
    }, 3200)
    return () => window.clearInterval(id)
  }, [reduceMotion])

  const highlight = heroBackendHighlights[reduceMotion ? 0 : index]

  return (
    <p className="editorial-hero-body">
      I take products from discovery to production — <strong>event-driven AWS systems</strong> and{' '}
      <strong className="editorial-hero-rotate" aria-live="polite">
        <span key={highlight} className="editorial-hero-rotate-word">
          {highlight}
        </span>
      </strong>{' '}
      that hit tight deadlines without trading away security or performance.
    </p>
  )
}
