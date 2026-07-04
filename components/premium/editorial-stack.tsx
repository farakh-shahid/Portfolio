'use client'

import { useReducedMotion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { editorialStack } from '@/data/editorial-portfolio'

gsap.registerPlugin(ScrollTrigger)

const STACK_WORDS = ['Stack', 'I', 'ship', 'with']

export function EditorialStack() {
  const sectionRef = useRef<HTMLElement>(null)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    const section = sectionRef.current
    if (!section || reduceMotion) return

    const ctx = gsap.context(() => {
      const titleWords = gsap.utils.toArray<HTMLElement>('[data-stack-word]')
      const groups = gsap.utils.toArray<HTMLElement>('[data-stack-group]')
      const chips = gsap.utils.toArray<HTMLElement>('[data-stack-chip]')
      const beam = section.querySelector<HTMLElement>('[data-stack-beam]')

      if (titleWords.length) {
        const spreadTl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: 'top 78%',
            end: 'top 35%',
            scrub: 0.6,
          },
        })

        const mid = (titleWords.length - 1) / 2
        titleWords.forEach((word, i) => {
          spreadTl.to(
            word,
            {
              x: (i - mid) * (i === 0 ? 48 : 36),
              opacity: 1,
              ease: 'none',
            },
            0,
          )
        })
      }

      if (beam) {
        gsap.fromTo(
          beam,
          { scaleX: 0, opacity: 0 },
          {
            scaleX: 1,
            opacity: 1,
            duration: 1.1,
            ease: 'power3.inOut',
            scrollTrigger: {
              trigger: section,
              start: 'top 72%',
            },
          },
        )
      }

      groups.forEach((group, gi) => {
        gsap.from(group, {
          y: 56,
          opacity: 0,
          duration: 0.95,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: group,
            start: 'top 88%',
          },
          delay: gi * 0.08,
        })
      })

      chips.forEach((chip, i) => {
        gsap.from(chip, {
          y: 28,
          opacity: 0,
          scale: 0.88,
          rotate: (i % 3) - 1,
          duration: 0.7,
          ease: 'back.out(1.4)',
          scrollTrigger: {
            trigger: chip.closest('[data-stack-group]') ?? chip,
            start: 'top 86%',
          },
          delay: (i % 6) * 0.04,
        })
      })
    }, section)

    return () => ctx.revert()
  }, [reduceMotion])

  return (
    <section
      id="stack"
      ref={sectionRef}
      className="editorial-section editorial-section--stack"
      data-section-entry
    >
      <div className="editorial-wrap">
        <div className="editorial-stack-head">
          <h2 className="editorial-stack-title" aria-label="Stack I ship with">
            {STACK_WORDS.map((word, i) => (
              <span key={word} className="editorial-stack-title-word" data-stack-word>
                {i === 0 ? <em>{word}</em> : word}
              </span>
            ))}
          </h2>
          <div className="editorial-stack-beam" data-stack-beam aria-hidden />
        </div>

        <div className="editorial-stack-grid">
          {editorialStack.map((group) => (
            <article key={group.title} className="editorial-stack-group" data-stack-group>
              <h3>{group.title}</h3>
              <ul className="editorial-stack-chips" aria-label={group.title}>
                {group.skills.map((skill) => (
                  <li key={skill.name}>
                    <span
                      className={'highlight' in skill && skill.highlight ? 'hl' : undefined}
                      data-stack-chip
                    >
                      {skill.name}
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
