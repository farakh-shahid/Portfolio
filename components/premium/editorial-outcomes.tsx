'use client'

import { useReducedMotion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { editorialCaseStudies } from '@/data/editorial-portfolio'

gsap.registerPlugin(ScrollTrigger)

const SCROLL_VH = 300
const CARD_SEGMENT = 0.28

function CaseHtml({ html }: { html: string }) {
  return <span dangerouslySetInnerHTML={{ __html: html }} />
}

export function EditorialOutcomes() {
  const sectionRef = useRef<HTMLElement>(null)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    const section = sectionRef.current
    if (!section || reduceMotion) return

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia()

      mm.add('(min-width: 1024px)', () => {
        const words = gsap.utils.toArray<HTMLElement>('[data-outcome-word]')
        const cards = gsap.utils.toArray<HTMLElement>('[data-outcome-card]')
        const vw = () => window.innerWidth

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            pin: true,
            scrub: 0.75,
            start: 'top top',
            end: `+=${SCROLL_VH}%`,
            invalidateOnRefresh: true,
            anticipatePin: 1,
          },
        })

        if (words.length) {
          const mid = (words.length - 1) / 2
          words.forEach((word, i) => {
            tl.fromTo(
              word,
              { opacity: 0.35, x: 0 },
              { opacity: 1, x: (i - mid) * 52, ease: 'none', duration: 0.2 },
              0,
            )
          })
        }

        tl.from(
          '[data-outcome-eyebrow]',
          { y: 16, opacity: 0, duration: 0.15, ease: 'power2.out' },
          0,
        )

        tl.from(
          '[data-outcome-side]',
          { x: -36, opacity: 0, duration: 0.15, ease: 'power2.out' },
          0.04,
        )

        cards.forEach((card) => {
          gsap.set(card, {
            xPercent: -50,
            left: '50%',
            top: 0,
            x: vw() * 0.52,
            autoAlpha: 0,
          })
        })

        cards.forEach((card, i) => {
          const t = i * CARD_SEGMENT

          if (i > 0) {
            tl.to(
              cards[i - 1],
              {
                x: () => -vw() * 0.48,
                autoAlpha: 0,
                duration: 0.18,
                ease: 'power2.in',
              },
              t,
            )
          }

          tl.to(
            card,
            {
              x: 0,
              autoAlpha: 1,
              duration: 0.22,
              ease: 'power2.out',
            },
            t,
          )
        })

        const last = cards[cards.length - 1]
        if (last) {
          tl.to(
            last,
            {
              x: () => -vw() * 0.48,
              autoAlpha: 0,
              duration: 0.18,
              ease: 'power2.in',
            },
            cards.length * CARD_SEGMENT + 0.08,
          )
        }
      })

      mm.add('(max-width: 1023px)', () => {
        gsap.from('[data-outcome-head]', {
          y: 28,
          opacity: 0,
          duration: 0.85,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 88%',
          },
        })

        gsap.utils.toArray<HTMLElement>('[data-outcome-card]').forEach((card, i) => {
          gsap.from(card, {
            x: 40,
            opacity: 0,
            duration: 0.85,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 92%',
            },
            delay: i * 0.08,
          })
        })
      })
    }, section)

    return () => ctx.revert()
  }, [reduceMotion])

  return (
    <section
      id="work"
      ref={sectionRef}
      className={`editorial-section editorial-section--outcomes${reduceMotion ? ' editorial-outcomes--static' : ' editorial-outcomes--flow'}`}
    >
      <div className="editorial-outcomes-inner">
        <header className="editorial-outcomes-head" data-outcome-head>
          <span className="editorial-eyebrow" data-outcome-eyebrow>
            Proof of impact
          </span>
          <h2 className="editorial-outcomes-title">
            <span className="editorial-outcomes-title-word" data-outcome-word>
              Engineering
            </span>
            <em className="editorial-outcomes-title-word" data-outcome-word>
              outcomes
            </em>
          </h2>
          <span className="editorial-outcomes-sub count" data-outcome-side>
            Context · approach · how it&apos;s measured
          </span>
        </header>

        <div className="editorial-outcomes-viewport">
          <div className="editorial-outcomes-stage">
            {editorialCaseStudies.map((study) => (
              <article
                key={study.id}
                className="editorial-case editorial-case--bordered"
                data-outcome-card
              >
                <span className="editorial-outcomes-index" aria-hidden>
                  {study.id}
                </span>
                <div className="editorial-case-shell">
                  <div className="editorial-case-head">
                    <span className="cn">{study.id}</span>
                    <div className="editorial-case-title">
                      <h3>{study.title}</h3>
                      <span className="res">{study.result}</span>
                    </div>
                  </div>
                  <div className="editorial-case-body">
                    <div className="editorial-case-inner">
                      <p className="editorial-case-problem">{study.problem}</p>
                      <div className="editorial-cgrid">
                        <div className="editorial-cblock">
                          <h4>How I approach it</h4>
                          <ul>
                            {study.approach.map((item) => (
                              <li key={item}>{item}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="editorial-cblock editorial-cblock-res">
                          <h4>Outcomes</h4>
                          <ul>
                            {study.outcomes.map((item) => (
                              <li key={item}>
                                <CaseHtml html={item} />
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className="editorial-ctech">
                        {study.chips.map((chip) => (
                          <span key={chip} className="chip">
                            {chip}
                          </span>
                        ))}
                        <span className="proof">Proof details on request</span>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
