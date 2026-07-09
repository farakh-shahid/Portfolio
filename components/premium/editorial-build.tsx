'use client'

import { useReducedMotion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { editorialCapabilities } from '@/data/editorial-portfolio'

gsap.registerPlugin(ScrollTrigger)

const SCROLL_VH = 320
const CARD_SEGMENT = 0.3

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
        const cards = gsap.utils.toArray<HTMLElement>('[data-build-row]')

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            pin: true,
            scrub: 0.85,
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
              { opacity: 0.35, y: 0 },
              { opacity: 1, y: (i - mid) * 36, ease: 'none', duration: 0.16 },
              0,
            )
          })
        }

        tl.from(
          '[data-build-eyebrow]',
          { y: 14, opacity: 0, duration: 0.12, ease: 'power2.out' },
          0,
        )

        tl.from(
          '[data-build-side]',
          { y: 16, opacity: 0, duration: 0.12, ease: 'power2.out' },
          0.04,
        )

        // Deck preview: front card flat; rest fan out below (fill empty space) as tilted cards
        cards.forEach((card, i) => {
          const isFront = i === 0
          const depth = i
          gsap.set(card, {
            top: 0,
            left: 0,
            y: isFront ? 0 : () => Math.min(window.innerHeight * (0.14 + depth * 0.11), 110 + depth * 72),
            z: isFront ? 0 : -80 - depth * 55,
            rotateX: isFront ? 0 : 26 + depth * 5,
            scale: isFront ? 1 : 0.94 - depth * 0.02,
            autoAlpha: isFront ? 1 : Math.max(0.42, 0.78 - depth * 0.1),
            zIndex: isFront ? cards.length + 5 : cards.length - i,
            transformPerspective: 1600,
            transformOrigin: '50% 0%',
            force3D: true,
          })
          card.classList.toggle('is-active', isFront)
        })

        cards.forEach((card, i) => {
          if (i === 0) return

          const t = 0.18 + (i - 1) * CARD_SEGMENT
          const prev = cards[i - 1]

          // Previous front card settles under the incoming cover
          tl.to(
            prev,
            {
              y: -18,
              z: -100,
              rotateX: 8,
              scale: 0.94,
              opacity: 0.7,
              zIndex: i,
              duration: 0.3,
              ease: 'power2.inOut',
              onStart: () => prev.classList.remove('is-active'),
            },
            t,
          )

          // Peeking tilted card rises from below, straightens, and covers
          tl.to(
            card,
            {
              y: 0,
              z: 0,
              rotateX: 0,
              scale: 1,
              autoAlpha: 1,
              zIndex: cards.length + 5 + i,
              duration: 0.4,
              ease: 'power2.out',
              onStart: () => card.classList.add('is-active'),
            },
            t,
          )
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

        gsap.utils.toArray<HTMLElement>('[data-build-row]').forEach((row, i) => {
          gsap.from(row, {
            y: 48,
            opacity: 0,
            duration: 0.85,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: row,
              start: 'top 92%',
            },
            delay: i * 0.06,
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
      className={`editorial-section editorial-section--build${reduceMotion ? ' editorial-build--static' : ' editorial-build--flow'}`}
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

        <div className="editorial-build-viewport">
          <div className="editorial-build-stage" data-build-stack>
            {editorialCapabilities.map((cap, index) => (
              <article
                key={cap.id}
                className={`editorial-build-row${index === 0 && !reduceMotion ? ' is-active' : ''}`}
                data-build-row
              >
                <span className="editorial-build-glow" aria-hidden />
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
      </div>
    </section>
  )
}
