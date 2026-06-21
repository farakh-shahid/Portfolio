'use client'

import { useEffect, useRef } from 'react'
import { useReducedMotion } from 'framer-motion'
import { gsap } from 'gsap'
import { premiumProfile } from '@/data/premium-portfolio'
import { MagneticButton } from '@/components/premium/magnetic-button'

export function PremiumHero() {
  const root = useRef<HTMLElement>(null)
  const nameRef = useRef<HTMLHeadingElement>(null)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (reduceMotion) {
        gsap.set('[data-hero-item]', { opacity: 1, y: 0, clipPath: 'inset(0 0 0 0)' })
        return
      }

      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      if (nameRef.current) {
        tl.fromTo(
          nameRef.current,
          { clipPath: 'inset(0 100% 0 0)' },
          { clipPath: 'inset(0 0% 0 0)', duration: 1.1 },
        )
      }

      tl.from(
        '[data-hero-item]',
        { opacity: 0, y: 28, duration: 0.75, stagger: 0.12 },
        nameRef.current ? '-=0.45' : 0,
      )
    }, root)

    return () => ctx.revert()
  }, [reduceMotion])

  return (
    <section ref={root} className="relative mx-auto flex min-h-[92svh] max-w-6xl flex-col justify-end px-5 pb-20 pt-28 md:px-8 md:pb-28">
      <p data-hero-item className="premium-label mb-6">
        {premiumProfile.yearsExperience} years · Full-stack · AWS
      </p>

      <h1
        ref={nameRef}
        className="premium-display max-w-4xl text-[clamp(2.25rem,6.5vw,4.5rem)] font-medium leading-[1.06] tracking-[-0.03em]"
      >
        {premiumProfile.headline}
      </h1>

      <p data-hero-item className="mt-6 max-w-2xl text-base leading-relaxed text-[var(--paper-muted)] md:text-lg">
        {premiumProfile.subline}
      </p>

      <div data-hero-item className="mt-10 flex flex-wrap gap-4">
        <MagneticButton href="#contact">Get in touch</MagneticButton>
        <MagneticButton href="#work" variant="ghost">
          View work
        </MagneticButton>
      </div>
    </section>
  )
}
