'use client'

import { useEffect, useRef } from 'react'
import { useReducedMotion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { CountUp } from '@/components/premium/count-up'
import { premiumExperience } from '@/data/premium-portfolio'

gsap.registerPlugin(ScrollTrigger)

export function PremiumExperience() {
  const section = useRef<HTMLElement>(null)
  const line = useRef<HTMLDivElement>(null)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    if (reduceMotion || !section.current || !line.current) return

    gsap.fromTo(
      line.current,
      { scaleY: 0 },
      {
        scaleY: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: section.current,
          start: 'top 60%',
          end: 'bottom 40%',
          scrub: 0.6,
        },
      },
    )

    gsap.utils.toArray<HTMLElement>('[data-exp-item]').forEach((el) => {
      gsap.from(el, {
        opacity: 0,
        x: -16,
        duration: 0.7,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 82%',
        },
      })
    })
  }, [reduceMotion])

  return (
    <section id="experience" ref={section} className="relative mx-auto max-w-6xl border-t border-[var(--border)] px-5 py-[var(--section-y)] md:px-8">
      <p className="premium-label">Experience</p>
      <h2 className="premium-display mt-4 text-2xl font-medium tracking-tight md:text-3xl">Outcomes first. Stack second.</h2>

      <div className="relative mt-12 md:mt-16">
        <div className="absolute bottom-0 left-[7px] top-0 w-px origin-top bg-[var(--border)] md:left-[9px]" aria-hidden>
          <div ref={line} className="h-full w-full origin-top bg-[var(--gold)]" />
        </div>

        <ol className="space-y-12 md:space-y-16">
          {premiumExperience.map((job) => (
            <li key={`${job.company}-${job.period}`} data-exp-item className="relative pl-8 md:pl-10">
              <span
                className="absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full border border-[var(--gold)] bg-[var(--ink)] md:h-4 md:w-4"
                aria-hidden
              />

              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h3 className="premium-display text-lg font-medium md:text-xl">
                  {job.role} · {job.company}
                </h3>
                <span className="font-mono text-[11px] text-[var(--paper-muted)]">
                  {job.location} · {job.period}
                </span>
              </div>

              {job.metrics.length > 0 ? (
                <div className="mt-4 flex flex-wrap gap-6">
                  {job.metrics.map((m) => (
                    <div key={m.label}>
                      <p className="premium-display text-2xl font-medium tabular-nums md:text-3xl">
                        <CountUp value={m.value} className="premium-accent" />
                      </p>
                      <p className="premium-label mt-1">{m.label}</p>
                    </div>
                  ))}
                </div>
              ) : null}

              <p className="mt-4 max-w-3xl text-sm leading-relaxed text-[var(--paper-muted)] md:text-base">{job.outcome}</p>

              <ul className="mt-4 flex flex-wrap gap-2">
                {job.stack.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-md border border-[var(--border)] px-2 py-1 font-mono text-[10px] text-[var(--paper-muted)]"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
