'use client'

import { useReducedMotion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { editorialStats } from '@/data/editorial-portfolio'

gsap.registerPlugin(ScrollTrigger)

export function EditorialNumbers() {
  const sectionRef = useRef<HTMLElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    const section = sectionRef.current
    const track = trackRef.current
    if (!section || !track || reduceMotion) return

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia()

      mm.add('(min-width: 1024px)', () => {
        const viewport = track.parentElement
        if (!viewport) return

        const getScroll = () => Math.max(track.scrollWidth - viewport.clientWidth, 0)

        gsap.to(track, {
          x: () => -getScroll(),
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            pin: true,
            scrub: 0.85,
            start: 'top top',
            end: () => `+=${getScroll() + window.innerHeight * 0.2}`,
            invalidateOnRefresh: true,
            anticipatePin: 1,
          },
        })

        gsap.from('[data-numbers-word]', {
          x: (i) => (i % 2 === 0 ? -100 : 100),
          opacity: 0,
          duration: 1.1,
          stagger: 0.13,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        })

        gsap.from('[data-numbers-side]', {
          x: -72,
          opacity: 0,
          duration: 0.95,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 72%',
          },
        })

        gsap.from('[data-numbers-card]', {
          x: 64,
          opacity: 0.35,
          rotate: 1.5,
          duration: 0.9,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 65%',
          },
        })
      })

      mm.add('(max-width: 1023px)', () => {
        gsap.utils.toArray<HTMLElement>('[data-numbers-card]').forEach((card, i) => {
          gsap.from(card, {
            x: i % 2 === 0 ? -56 : 56,
            opacity: 0,
            duration: 0.85,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 88%',
            },
          })
        })

        gsap.from('[data-numbers-word]', {
          x: (i) => (i % 2 === 0 ? -40 : 40),
          opacity: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 82%',
          },
        })
      })
    }, section)

    return () => ctx.revert()
  }, [reduceMotion])

  return (
    <section
      id="numbers"
      ref={sectionRef}
      className={`editorial-numbers${reduceMotion ? ' editorial-numbers--static' : ''}`}
      aria-label="By the numbers"
    >
      <div className="editorial-numbers-inner">
        <div className="editorial-numbers-head">
          <span className="editorial-eyebrow" data-numbers-side>
            Proof
          </span>
          <h2 className="editorial-numbers-title">
            <span data-numbers-word>By the</span>{' '}
            <em data-numbers-word>numbers</em>
          </h2>
          <p className="editorial-numbers-sub" data-numbers-side>
            Across four teams
          </p>
        </div>

        <div className="editorial-numbers-viewport">
          <div className="editorial-numbers-track" ref={trackRef}>
            {editorialStats.map((stat, index) => (
              <article
                key={stat.label}
                className={`editorial-numbers-card${index % 2 === 0 ? ' editorial-numbers-card--featured' : ''}`}
                data-numbers-card
              >
                <span className="editorial-numbers-index" aria-hidden>
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className="editorial-stat-n" data-stat-to={stat.value}>
                  <span data-stat-value>{reduceMotion ? stat.value : 0}</span>
                  {stat.suffix ? <span className="u">{stat.suffix}</span> : null}
                </div>
                <div className="l">{stat.label}</div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
