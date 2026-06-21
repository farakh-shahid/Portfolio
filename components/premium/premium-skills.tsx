'use client'

import { useEffect, useRef } from 'react'
import { useReducedMotion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { premiumSkills } from '@/data/premium-portfolio'

gsap.registerPlugin(ScrollTrigger)

export function PremiumSkills() {
  const section = useRef<HTMLElement>(null)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    if (reduceMotion || !section.current) return

    gsap.from(section.current.querySelectorAll('[data-skill-group]'), {
      opacity: 0,
      y: 24,
      duration: 0.65,
      stagger: 0.12,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: section.current,
        start: 'top 75%',
      },
    })
  }, [reduceMotion])

  return (
    <section id="skills" ref={section} className="mx-auto max-w-6xl border-t border-[var(--border)] px-5 py-[var(--section-y)] md:px-8">
      <p className="premium-label">Skills</p>
      <h2 className="premium-display mt-4 text-2xl font-medium tracking-tight md:text-3xl">Stack across the full cycle.</h2>

      <div className="mt-10 space-y-10">
        {premiumSkills.map((group) => (
          <div key={group.group} data-skill-group>
            <p className="premium-label mb-4 text-[var(--gold)]">{group.group}</p>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-[var(--border)] px-3 py-1.5 font-mono text-[11px] text-[var(--paper-muted)] transition hover:border-[var(--border-strong)] hover:text-[var(--paper)]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
