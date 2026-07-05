'use client'

import { useReducedMotion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { editorialStack } from '@/data/editorial-portfolio'

gsap.registerPlugin(ScrollTrigger)

const STACK_WORDS = ['Stack', 'I', 'ship', 'with']
const SCROLL_VH = 220
const COLUMN_SEGMENT = 0.3

export function EditorialStack() {
  const sectionRef = useRef<HTMLElement>(null)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    const section = sectionRef.current
    if (!section || reduceMotion) return

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia()

      mm.add('(min-width: 1024px)', () => {
        const titleWords = gsap.utils.toArray<HTMLElement>('[data-stack-word]')
        const groups = gsap.utils.toArray<HTMLElement>('[data-stack-group]')
        const scanner = section.querySelector<HTMLElement>('[data-stack-scanner]')

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

        if (titleWords.length) {
          const mid = (titleWords.length - 1) / 2
          titleWords.forEach((word, i) => {
            tl.fromTo(
              word,
              { opacity: 0.35, y: 0 },
              { opacity: 1, y: (i - mid) * 28, ease: 'none', duration: 0.18 },
              0,
            )
          })
        }

        if (scanner) {
          tl.fromTo(scanner, { opacity: 0, scaleY: 0.2 }, { opacity: 1, scaleY: 1, duration: 0.12, ease: 'power2.out' }, 0)
        }

        tl.fromTo(
          '[data-stack-beam]',
          { scaleX: 0, opacity: 0 },
          { scaleX: 1, opacity: 1, duration: 0.14, ease: 'power3.inOut' },
          0,
        )

        groups.forEach((group, gi) => {
          const header = group.querySelector('h3')
          const chips = gsap.utils.toArray<HTMLElement>('[data-stack-chip]', group)
          const t = gi * COLUMN_SEGMENT

          if (gi > 0) {
            tl.to(
              groups[gi - 1],
              { opacity: 0.55, duration: 0.14, ease: 'power2.inOut' },
              t,
            )
            groups[gi - 1].classList.remove('is-active')
          }

          if (scanner) {
            tl.to(
              scanner,
              {
                left: `${(gi / Math.max(groups.length - 1, 1)) * 100}%`,
                duration: 0.22,
                ease: 'power2.inOut',
              },
              t,
            )
          }

          tl.to(group, { opacity: 1, duration: 0.16, ease: 'power2.out' }, t)
          tl.call(() => group.classList.add('is-active'), undefined, t)
          if (header) {
            tl.fromTo(header, { y: -12, opacity: 0.6 }, { y: 0, opacity: 1, duration: 0.14, ease: 'power3.out' }, t + 0.02)
          }
          if (chips.length) {
            tl.fromTo(
              chips,
              { scale: 0.96 },
              { scale: 1, duration: 0.16, stagger: 0.01, ease: 'back.out(1.5)' },
              t + 0.04,
            )
          }
        })

        const lastGroup = groups[groups.length - 1]
        if (lastGroup) {
          tl.to(lastGroup, { opacity: 1, duration: 0.1 }, groups.length * COLUMN_SEGMENT + 0.06)
        }
      })

      mm.add('(max-width: 1023px)', () => {
        const titleWords = gsap.utils.toArray<HTMLElement>('[data-stack-word]')

        gsap.from(titleWords, {
          y: 32,
          opacity: 0,
          duration: 0.85,
          stagger: 0.08,
          ease: 'power3.out',
          scrollTrigger: { trigger: section, start: 'top 85%' },
        })

        gsap.utils.toArray<HTMLElement>('[data-stack-group]').forEach((group, gi) => {
          gsap.from(group, {
            y: 48,
            opacity: 0,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: { trigger: group, start: 'top 90%' },
            delay: gi * 0.06,
          })

          gsap.utils.toArray<HTMLElement>('[data-stack-chip]', group).forEach((chip, i) => {
            gsap.from(chip, {
              y: 20,
              opacity: 0,
              scale: 0.9,
              duration: 0.55,
              ease: 'back.out(1.4)',
              scrollTrigger: { trigger: group, start: 'top 88%' },
              delay: i * 0.025,
            })
          })
        })
      })
    }, section)

    return () => ctx.revert()
  }, [reduceMotion])

  return (
    <section
      id="stack"
      ref={sectionRef}
      className={`editorial-section editorial-section--stack${reduceMotion ? ' editorial-stack--static' : ' editorial-stack--flow'}`}
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

        <div className="editorial-stack-viewport">
          <div className="editorial-stack-scanner" data-stack-scanner aria-hidden />
          <div className="editorial-stack-grid">
            {editorialStack.map((group, gi) => (
              <article
                key={group.title}
                className={`editorial-stack-group${gi === 0 && !reduceMotion ? ' is-active' : ''}`}
                data-stack-group
              >
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
      </div>
    </section>
  )
}
