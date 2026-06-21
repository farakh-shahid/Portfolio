'use client'

import { useEffect, useRef } from 'react'
import { useReducedMotion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { premiumProfile } from '@/data/premium-portfolio'
import { MagneticButton } from '@/components/premium/magnetic-button'

gsap.registerPlugin(ScrollTrigger)

export function PremiumContact() {
  const section = useRef<HTMLElement>(null)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    if (reduceMotion || !section.current) return

    gsap.from(section.current.querySelectorAll('[data-contact]'), {
      opacity: 0,
      y: 28,
      duration: 0.75,
      stagger: 0.1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: section.current,
        start: 'top 78%',
      },
    })
  }, [reduceMotion])

  return (
    <section id="contact" ref={section} className="mx-auto max-w-6xl border-t border-[var(--border)] px-5 py-[var(--section-y)] md:px-8">
      <p data-contact className="premium-label">
        Contact
      </p>
      <h2 data-contact className="premium-display mt-4 max-w-2xl text-3xl font-medium tracking-tight md:text-5xl">
        Let&apos;s work together.
      </h2>

      <div data-contact className="mt-8 flex flex-col gap-2 text-sm text-[var(--paper-muted)] md:text-base">
        <a href={`mailto:${premiumProfile.email}`} className="premium-focus premium-accent w-fit transition hover:opacity-80">
          {premiumProfile.email}
        </a>
        <a href={`tel:${premiumProfile.phone}`} className="premium-focus w-fit transition hover:text-[var(--paper)]">
          {premiumProfile.phone}
        </a>
        <a
          href={premiumProfile.linkedin}
          target="_blank"
          rel="noreferrer"
          className="premium-focus w-fit transition hover:text-[var(--paper)]"
        >
          LinkedIn
        </a>
      </div>

      <div data-contact className="mt-10">
        <MagneticButton href={`mailto:${premiumProfile.email}`}>Let&apos;s work together</MagneticButton>
      </div>
    </section>
  )
}

export function PremiumFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 border-t border-[var(--border)] px-5 py-8 text-xs text-[var(--paper-muted)] md:px-8">
      <p>© {year} {premiumProfile.name}</p>
      <p className="font-mono tracking-wide">Made-with: React</p>
    </footer>
  )
}
