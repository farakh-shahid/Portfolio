'use client'

import { useReducedMotion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const STORY_LINE_TWO =
  'into systems that stay quick under pressure — across IoT, fintech, travel and e-commerce.'
const STORY_MUTED =
  'From the React on the screen to the queues, caches and Lambdas underneath it.'

const SCROLL_VH = 90

export function EditorialStory() {
  const sectionRef = useRef<HTMLElement>(null)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    const section = sectionRef.current
    if (!section || reduceMotion) return

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia()

      mm.add('(min-width: 1024px)', () => {
        const reveals = gsap.utils.toArray<HTMLElement>('[data-story-reveal]')
        const accent = section.querySelector<HTMLElement>('[data-story-line]')

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            pin: true,
            scrub: 0.65,
            start: 'top top',
            end: `+=${SCROLL_VH}%`,
            invalidateOnRefresh: true,
            anticipatePin: 1,
          },
        })

        tl.from(
          '[data-story-eyebrow]',
          { x: -36, opacity: 0, duration: 0.08, ease: 'power2.out' },
          0,
        )

        if (accent) {
          tl.fromTo(
            accent,
            { scaleX: 0, opacity: 0 },
            { scaleX: 1, opacity: 1, duration: 0.1, ease: 'power3.inOut' },
            0.02,
          )
        }

        reveals.forEach((block, i) => {
          tl.fromTo(
            block,
            { clipPath: 'inset(0 100% 0 0)' },
            { clipPath: 'inset(0 0% 0 0)', duration: 0.22, ease: 'power2.inOut' },
            0.1 + i * 0.22,
          )
        })
      })

      mm.add('(max-width: 1023px)', () => {
        gsap.from('[data-story-eyebrow]', {
          x: -28,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: { trigger: section, start: 'top 88%' },
        })

        gsap.utils.toArray<HTMLElement>('[data-story-reveal]').forEach((block, i) => {
          gsap.fromTo(
            block,
            { clipPath: 'inset(0 100% 0 0)' },
            {
              clipPath: 'inset(0 0% 0 0)',
              duration: 1,
              ease: 'power2.inOut',
              delay: i * 0.05,
              scrollTrigger: { trigger: block, start: 'top 90%', end: 'top 55%', scrub: 0.6 },
            },
          )
        })
      })
    }, section)

    return () => ctx.revert()
  }, [reduceMotion])

  return (
    <section
      id="story"
      ref={sectionRef}
      className={`editorial-section editorial-section--story${reduceMotion ? ' editorial-story--static' : ' editorial-story--flow'}`}
    >
      <div className="editorial-wrap">
        <span className="editorial-eyebrow" data-story-eyebrow>
          The work
        </span>
        <div className="editorial-story-line" data-story-line aria-hidden />

        <div className="editorial-story-lead">
          <p className="editorial-story-reveal" data-story-reveal>
            Six years turning{' '}
            <em className="editorial-story-em" data-story-em>
              tangled requirements
            </em>
          </p>
          <p className="editorial-story-reveal" data-story-reveal>
            {STORY_LINE_TWO}
          </p>
          <p className="editorial-story-reveal editorial-story-muted muted" data-story-reveal>
            {STORY_MUTED}
          </p>
        </div>
      </div>
    </section>
  )
}
