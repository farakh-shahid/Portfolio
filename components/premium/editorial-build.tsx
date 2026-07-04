'use client'

import { useReducedMotion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { editorialCapabilities } from '@/data/editorial-portfolio'

gsap.registerPlugin(ScrollTrigger)

const SCATTER = [
  { x: -120, y: -40, r: -18 },
  { x: 110, y: -32, r: 14 },
  { x: -90, y: 36, r: -12 },
  { x: 100, y: 28, r: 16 },
  { x: -70, y: -50, r: 10 },
  { x: 85, y: 44, r: -14 },
] as const

function scatter(i: number) {
  return SCATTER[i % SCATTER.length]
}

export function EditorialBuild() {
  const sectionRef = useRef<HTMLElement>(null)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    const section = sectionRef.current
    if (!section || reduceMotion) return

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia()

      mm.add('(min-width: 768px)', () => {
        const words = gsap.utils.toArray<HTMLElement>('[data-build-word]')
        if (words.length) {
          const mid = (words.length - 1) / 2
          const spreadTl = gsap.timeline({
            scrollTrigger: {
              trigger: section,
              start: 'top 72%',
              end: 'top 38%',
              scrub: 0.65,
            },
          })
          words.forEach((word, i) => {
            spreadTl.to(word, { x: (i - mid) * 58, opacity: 1, ease: 'none' }, 0)
          })
        }

        gsap.from('[data-build-eyebrow]', {
          y: 22,
          opacity: 0,
          duration: 0.85,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 78%',
          },
        })

        gsap.from('[data-build-side]', {
          x: -48,
          opacity: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 76%',
          },
        })

        gsap.utils.toArray<HTMLElement>('[data-build-row]').forEach((row, rowIndex) => {
          const titleWords = row.querySelectorAll('[data-build-title-word]')
          const body = row.querySelector('[data-build-body]')
          const desc = row.querySelector('[data-build-desc]')
          const tags = row.querySelectorAll('[data-build-tag]')
          const ghost = row.querySelector('[data-build-ghost]')
          const fromLeft = rowIndex % 2 === 0

          if (titleWords.length) {
            gsap.from(titleWords, {
              x: (i) => scatter(i).x * 0.22,
              y: (i) => scatter(i).y * 0.18,
              rotate: (i) => scatter(i).r * 0.55,
              opacity: 0,
              duration: 0.95,
              stagger: 0.07,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: row,
                start: 'top 84%',
              },
            })
          }

          if (body) {
            gsap.from(body, {
              x: fromLeft ? 72 : -72,
              opacity: 0,
              duration: 1,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: row,
                start: 'top 82%',
              },
            })
          }

          if (desc) {
            gsap.from(desc, {
              y: 24,
              opacity: 0,
              duration: 0.85,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: row,
                start: 'top 80%',
              },
            })
          }

          if (tags.length) {
            gsap.from(tags, {
              y: 16,
              opacity: 0,
              scale: 0.92,
              rotate: (i) => (i % 2 === 0 ? -4 : 4),
              duration: 0.6,
              stagger: 0.05,
              ease: 'back.out(1.6)',
              scrollTrigger: {
                trigger: row,
                start: 'top 78%',
              },
            })
          }

          if (ghost) {
            gsap.fromTo(
              ghost,
              { scale: 0.92, opacity: 0 },
              {
                scale: 1,
                opacity: 1,
                duration: 1.1,
                ease: 'power2.out',
                scrollTrigger: {
                  trigger: row,
                  start: 'top 85%',
                },
              },
            )
          }

          ScrollTrigger.create({
            trigger: row,
            start: 'top 52%',
            end: 'bottom 48%',
            onToggle: (self) => row.classList.toggle('is-active', self.isActive),
          })
        })
      })

      mm.add('(max-width: 767px)', () => {
        gsap.from('[data-build-head]', {
          y: 32,
          opacity: 0,
          duration: 0.85,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 88%',
          },
        })

        gsap.utils.toArray<HTMLElement>('[data-build-row]').forEach((row) => {
          gsap.from(row, {
            y: 40,
            opacity: 0,
            duration: 0.85,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: row,
              start: 'top 92%',
            },
          })
        })
      })
    }, section)

    return () => ctx.revert()
  }, [reduceMotion])

  return (
    <section
      id="build"
      ref={sectionRef}
      className={`editorial-section editorial-section--build${reduceMotion ? ' editorial-build--static' : ''}`}
    >
      <div className="editorial-wrap editorial-build-wrap">
        <header className="editorial-build-head" data-build-head>
          <span className="editorial-eyebrow" data-build-eyebrow>
            Capabilities
          </span>
          <h2 className="editorial-build-title">
            <span className="editorial-build-title-word" data-build-word>
              What
            </span>
            <span className="editorial-build-title-word" data-build-word>
              I
            </span>
            <em className="editorial-build-title-word" data-build-word>
              build
            </em>
          </h2>
          <span className="editorial-build-sub count" data-build-side>
            End to end, or wherever you need depth
          </span>
        </header>

        <div className="editorial-build-list">
          {editorialCapabilities.map((cap) => (
            <article key={cap.id} className="editorial-build-row" data-build-row>
              <span className="editorial-build-ghost" data-build-ghost aria-hidden>
                {cap.id}
              </span>
              <div className="editorial-build-main">
                <h3 className="editorial-build-row-title">
                  {cap.title.split(' ').map((word) => (
                    <span key={word} className="editorial-build-row-title-word" data-build-title-word>
                      {word}
                    </span>
                  ))}
                </h3>
              </div>
              <div className="editorial-build-body" data-build-body>
                <p className="editorial-build-desc" data-build-desc>
                  {cap.description}
                </p>
                <div className="editorial-build-tags">
                  {cap.tags.split(' · ').map((tag) => (
                    <span key={tag} className="editorial-build-tag" data-build-tag>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
