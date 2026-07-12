'use client'

import { useReducedMotion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { editorialProcess } from '@/data/editorial-portfolio'

gsap.registerPlugin(ScrollTrigger)

const LINE_ONE = ['Four', 'phases', 'today.']
const LINE_TWO = ['Clear', 'scope.']
const LINE_THREE = ['Every', 'project.']
const LEAD_WORDS = ['Four', 'steps', 'from', 'brief', 'to', 'ship.']

const CARD_THEMES = [
  { bg: '#7ee8b0', text: '#0a0a0a', panel: 'rgba(10, 10, 10, 0.08)' },
  { bg: '#d4f56a', text: '#0a0a0a', panel: 'rgba(10, 10, 10, 0.08)' },
  { bg: '#6c63ff', text: '#ffffff', panel: 'rgba(255, 255, 255, 0.14)' },
  { bg: '#ebe6df', text: '#0a0a0a', panel: 'rgba(10, 10, 10, 0.07)' },
] as const
const CARD_ROTATIONS = [-7, 6, -4, 5] as const
const CARD_X = [-28, 34, -18, 22] as const
const SCROLL_PER_CARD_VH = 112
const CARD_STEP = 0.21

const SCATTER_TARGETS = [
  { x: -290, y: -210, r: -34 },
  { x: 270, y: -190, r: 28 },
  { x: -250, y: 210, r: -22 },
  { x: 310, y: 150, r: 36 },
  { x: -170, y: -290, r: 14 },
  { x: 210, y: 270, r: -30 },
  { x: -330, y: 30, r: 24 },
  { x: 350, y: -50, r: -16 },
  { x: -110, y: 310, r: -18 },
  { x: 130, y: -310, r: 20 },
  { x: -360, y: -80, r: 32 },
  { x: 380, y: 90, r: -26 },
] as const

function scatterPos(index: number) {
  return SCATTER_TARGETS[index % SCATTER_TARGETS.length]
}

export function EditorialProcess() {
  const sectionRef = useRef<HTMLElement>(null)
  const heroPinRef = useRef<HTMLDivElement>(null)
  const cardsPinRef = useRef<HTMLDivElement>(null)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    const section = sectionRef.current
    const heroPin = heroPinRef.current
    const cardsPin = cardsPinRef.current
    if (!section || !heroPin || !cardsPin || reduceMotion) return

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia()

      mm.add('(min-width: 768px)', () => {
        const line1 = heroPin.querySelector<HTMLElement>('[data-process-line="1"]')
        const line2 = heroPin.querySelector<HTMLElement>('[data-process-line="2"]')
        const line3 = heroPin.querySelector<HTMLElement>('[data-process-line="3"]')
        const ghost = heroPin.querySelector<HTMLElement>('[data-process-ghost]')
        const eyebrow = heroPin.querySelector<HTMLElement>('[data-process-eyebrow]')
        const words1 = gsap.utils.toArray<HTMLElement>('[data-process-line="1"] [data-process-word]')
        const words2 = gsap.utils.toArray<HTMLElement>('[data-process-line="2"] [data-process-word]')
        const words3 = gsap.utils.toArray<HTMLElement>('[data-process-line="3"] [data-process-word]')
        const allWords = [...words1, ...words2, ...words3]
        const cards = gsap.utils.toArray<HTMLElement>('[data-process-step]')
        const scatterGroups = gsap.utils.toArray<HTMLElement>('[data-scatter-group]')
        const leadWords = gsap.utils.toArray<HTMLElement>('[data-process-lead-word]')

        gsap.set(leadWords, { y: 36, opacity: 0 })

        const heroTl = gsap.timeline({
          scrollTrigger: {
            trigger: heroPin,
            pin: true,
            start: 'top top',
            end: '+=110%',
            scrub: 0.65,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        })

        const spreadWords = (words: HTMLElement[], amount: number, direction: number) => {
          const mid = (words.length - 1) / 2
          words.forEach((word, i) => {
            heroTl.to(word, { x: (i - mid) * amount * direction, ease: 'none' }, 0)
          })
        }

        spreadWords(words1, 52, 1)
        spreadWords(words2, 60, -1)
        spreadWords(words3, 60, 1)

        if (allWords.length) {
          heroTl.to(allWords, { opacity: 1, ease: 'none', duration: 0.35 }, 0)
        }

        if (line1) heroTl.to(line1, { y: -70, ease: 'none' }, 0.32)
        if (line3) heroTl.to(line3, { y: 70, ease: 'none' }, 0.32)

        if (ghost) {
          heroTl.fromTo(ghost, { scale: 0.88, opacity: 0.04 }, { scale: 1.12, opacity: 0.09, ease: 'none' }, 0)
        }

        if (eyebrow) {
          gsap.from(eyebrow, {
            y: 24,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: heroPin,
              start: 'top 75%',
            },
          })
        }

        gsap.set(cards, {
          autoAlpha: 0,
          y: 160,
          scale: 0.9,
          rotate: (i) => CARD_ROTATIONS[i] * 2.2,
        })
        gsap.set(scatterGroups, { autoAlpha: 0 })

        const cardsTl = gsap.timeline({
          scrollTrigger: {
            trigger: cardsPin,
            pin: true,
            start: 'top top',
            end: () => `+=${cards.length * SCROLL_PER_CARD_VH}%`,
            scrub: 0.75,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        })

        const segment = CARD_STEP
        const scatterDur = segment * 0.16
        const enterDur = segment * 0.13

        cardsTl.to(
          leadWords,
          {
            y: 0,
            opacity: 1,
            duration: segment * 0.55,
            stagger: 0.045,
            ease: 'power3.out',
          },
          0,
        )

        cards.forEach((card, i) => {
          const t0 = i * segment
          const scatterEnd = t0 + scatterDur
          const group = cardsPin.querySelector<HTMLElement>(`[data-scatter-group="${i}"]`)
          const chars = group
            ? gsap.utils.toArray<HTMLElement>('[data-scatter-char]', group)
            : []

          cardsTl.set(scatterGroups, { autoAlpha: 0 }, t0)
          if (group) cardsTl.set(group, { autoAlpha: 1 }, t0)

          chars.forEach((char, ci) => {
            const pos = scatterPos(ci)
            gsap.set(char, { x: 0, y: 50, opacity: 0, rotate: 0, scale: 0.55 })
            cardsTl.fromTo(
              char,
              { x: 0, y: 50, opacity: 0, rotate: 0, scale: 0.55 },
              {
                x: pos.x,
                y: pos.y,
                opacity: 0.42,
                rotate: pos.r,
                scale: 1,
                ease: 'power2.out',
                duration: scatterDur,
              },
              t0,
            )
          })

          if (chars.length) {
            cardsTl.to(chars, { opacity: 0.1, ease: 'power1.out', duration: enterDur }, scatterEnd)
          }

          cardsTl.set(card, { autoAlpha: 1 }, scatterEnd)
          cardsTl.fromTo(
            card,
            { y: 160, x: 0, rotate: CARD_ROTATIONS[i] * 2.2, scale: 0.88 },
            {
              y: i * -16,
              x: CARD_X[i],
              rotate: CARD_ROTATIONS[i],
              scale: 1,
              ease: 'power2.out',
              duration: enterDur,
            },
            scatterEnd,
          )

          for (let j = 0; j < i; j++) {
            cardsTl.to(
              cards[j],
              {
                y: j * -22 - (i - j) * 12,
                scale: 1 - (i - j) * 0.03,
                ease: 'none',
                duration: enterDur,
              },
              scatterEnd,
            )
          }
        })

        return () => {
          heroTl.scrollTrigger?.kill()
          cardsTl.scrollTrigger?.kill()
        }
      })

      mm.add('(max-width: 767px)', () => {
        gsap.from('[data-process-line]', {
          y: 32,
          opacity: 0,
          duration: 0.85,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: heroPin,
            start: 'top 82%',
          },
        })

        gsap.from('[data-process-lead-word]', {
          y: 24,
          opacity: 0,
          duration: 0.75,
          stagger: 0.06,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cardsPin,
            start: 'top 85%',
          },
        })

        gsap.utils.toArray<HTMLElement>('[data-process-step]').forEach((step, i) => {
          gsap.from(step, {
            y: 48,
            opacity: 0,
            rotate: CARD_ROTATIONS[i] * 0.6,
            duration: 0.85,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: step,
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
      id="process"
      ref={sectionRef}
      className={`editorial-process${reduceMotion ? ' editorial-process--static' : ''}`}
      aria-label="How I work"
    >
      <div ref={heroPinRef} className="editorial-process-pin">
        <div className="editorial-process-hero">
          <span className="editorial-eyebrow editorial-process-eyebrow" data-process-eyebrow>
            How I work
          </span>
          <div className="editorial-process-ghost" data-process-ghost aria-hidden>
            04
          </div>
          <div className="editorial-process-lines">
            <p className="editorial-process-line" data-process-line="1">
              {LINE_ONE.map((word) => (
                <span key={word} className="editorial-process-word" data-process-word>
                  {word}
                </span>
              ))}
            </p>
            <p className="editorial-process-line editorial-process-line--accent" data-process-line="2">
              {LINE_TWO.map((word) => (
                <span key={word} className="editorial-process-word" data-process-word>
                  {word}
                </span>
              ))}
            </p>
            <p className="editorial-process-line editorial-process-line--accent" data-process-line="3">
              {LINE_THREE.map((word) => (
                <span key={word} className="editorial-process-word" data-process-word>
                  {word}
                </span>
              ))}
            </p>
          </div>
        </div>
      </div>

      <div ref={cardsPinRef} className="editorial-process-cards-pin">
        <p className="editorial-process-lead" aria-label="Four steps from brief to ship">
          {LEAD_WORDS.map((word, i) => (
            <span key={`${word}-${i}`} className="editorial-process-lead-word" data-process-lead-word>
              {word}
            </span>
          ))}
        </p>

        <div className="editorial-process-scatter" aria-hidden>
          {editorialProcess.map((step, index) => (
            <div
              key={step.step}
              className="editorial-process-scatter-group"
              data-scatter-group={index}
            >
              {step.title.split('').map((char, charIndex) => (
                <span
                  key={`${step.step}-${charIndex}`}
                  className="editorial-process-scatter-char"
                  data-scatter-char
                >
                  {char}
                </span>
              ))}
            </div>
          ))}
        </div>

        <div className="editorial-process-stack" data-process-steps>
          {editorialProcess.map((step, index) => {
            const theme = CARD_THEMES[index]
            return (
              <article
                key={step.step}
                className="editorial-process-card"
                data-process-step
                data-card-phase={index}
                style={{
                  zIndex: index + 1,
                  backgroundColor: theme.bg,
                  color: theme.text,
                  ['--card-panel' as string]: theme.panel,
                }}
              >
                <div className="editorial-process-card-top">
                  <h3 className="editorial-process-card-title">{step.title}</h3>
                  <span className="editorial-process-card-num" aria-hidden>
                    {index + 1}
                  </span>
                </div>
                <div className="editorial-process-card-body">
                  <p className="editorial-process-card-desc">{step.description}</p>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
