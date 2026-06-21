'use client'

import { useEffect, useRef } from 'react'
import { useReducedMotion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { premiumAbout } from '@/data/premium-portfolio'

gsap.registerPlugin(ScrollTrigger)

export function PremiumAbout() {
  const section = useRef<HTMLElement>(null)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    if (reduceMotion || !section.current) return

    gsap.from(section.current.querySelectorAll('[data-reveal]'), {
      opacity: 0,
      y: 32,
      duration: 0.8,
      stagger: 0.1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: section.current,
        start: 'top 78%',
      },
    })
  }, [reduceMotion])

  return (
    <section ref={section} className="mx-auto max-w-6xl px-5 py-[var(--section-y)] md:px-8">
      <p data-reveal className="premium-label">
        About
      </p>
      <h2 data-reveal className="premium-display mt-4 max-w-3xl text-2xl font-medium leading-snug tracking-tight md:text-4xl">
        Performance, latency, and UX — engineered as one discipline.
      </h2>
      <p data-reveal className="mt-6 max-w-3xl text-base leading-[1.75] text-[var(--paper-muted)] md:text-lg">
        {premiumAbout}
      </p>
    </section>
  )
}
