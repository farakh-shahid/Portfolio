'use client'

import { useReducedMotion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { EditorialContactGlobe } from '@/components/premium/editorial-contact-globe'

gsap.registerPlugin(ScrollTrigger)

const STORY_BODY =
  'into systems that stay quick under pressure — across IoT, fintech, travel and e-commerce.'
const STORY_MUTED =
  'From the React on the screen to the queues, caches and Lambdas underneath it.'

export function EditorialStory() {
  const sectionRef = useRef<HTMLElement>(null)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    const section = sectionRef.current
    if (!section || reduceMotion) return

    const ctx = gsap.context(() => {
      const heading = gsap.utils.toArray<HTMLElement>('[data-story-hword]')
      const bodies = gsap.utils.toArray<HTMLElement>('[data-story-body]')
      const globe = section.querySelector<HTMLElement>('[data-story-globe-inner]')

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top 68%',
          once: true,
        },
      })

      tl.from('[data-story-eyebrow]', {
        y: 18,
        opacity: 0,
        duration: 0.5,
        ease: 'power2.out',
      })
        .from(
          '[data-story-line]',
          { scaleX: 0, transformOrigin: 'left center', duration: 0.5, ease: 'power3.inOut' },
          '-=0.3',
        )
        // heading words: dim -> bright with a soft rise, word by word (same feel as Work experience)
        .fromTo(
          heading,
          { opacity: 0.32, y: 28, filter: 'blur(4px)' },
          {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            duration: 0.6,
            stagger: 0.12,
            ease: 'power3.out',
          },
          '-=0.2',
        )
        // border beam line below the heading (same as Work experience beam)
        .fromTo(
          '[data-story-beam]',
          { scaleX: 0, opacity: 0 },
          { scaleX: 1, opacity: 1, duration: 0.55, ease: 'power3.inOut' },
          '-=0.1',
        )
        .from(
          bodies,
          { y: 24, opacity: 0, duration: 0.6, stagger: 0.12, ease: 'power2.out' },
          '-=0.3',
        )

      if (globe) {
        tl.from(globe, { scale: 0.85, opacity: 0, duration: 0.9, ease: 'power2.out' }, 0)
      }
    }, section)

    return () => ctx.revert()
  }, [reduceMotion])

  return (
    <section
      id="story"
      ref={sectionRef}
      className={`editorial-section editorial-section--story${reduceMotion ? ' editorial-story--static' : ' editorial-story--flow'}`}
    >
      <div className="editorial-wrap editorial-story-inner">
        <header className="editorial-story-header">
          <span className="editorial-eyebrow" data-story-eyebrow>
            The work
          </span>
          <span className="editorial-story-line" data-story-line aria-hidden />

          <h2 className="editorial-story-heading">
            <span className="editorial-story-hline">
              <span className="editorial-story-hword" data-story-hword>
                Six
              </span>{' '}
              <span className="editorial-story-hword" data-story-hword>
                years
              </span>{' '}
              <span className="editorial-story-hword" data-story-hword>
                turning
              </span>
            </span>
            <span className="editorial-story-hline">
              <em className="editorial-story-hword editorial-story-em" data-story-hword>
                tangled
              </em>{' '}
              <em className="editorial-story-hword editorial-story-em" data-story-hword>
                requirements
              </em>
            </span>
          </h2>
          <div className="editorial-story-beam" data-story-beam aria-hidden />
        </header>

        <div className="editorial-story-grid">
          <div className="editorial-story-copy">
            <p className="editorial-story-body" data-story-body>
              {STORY_BODY}
            </p>
            <p className="editorial-story-body editorial-story-muted" data-story-body>
              {STORY_MUTED}
            </p>
          </div>

          <div className="editorial-story-visual" data-globe-zone aria-hidden>
            <div className="editorial-story-globe-inner" data-story-globe-inner>
              <EditorialContactGlobe />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
