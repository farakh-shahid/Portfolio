'use client'

import { useReducedMotion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { editorialWorkGallery } from '@/data/editorial-portfolio'

gsap.registerPlugin(ScrollTrigger)

/** Gallery rest positions — offsets from stage center (px) */
const GALLERY_SLOTS = [
  { x: -220, y: 40, rotate: -5, z: 4, variant: 'wide' as const },
  { x: 200, y: -90, rotate: 7, z: 6, variant: 'tall' as const },
  { x: 30, y: 70, rotate: -2, z: 5, variant: 'sq' as const },
  { x: -70, y: 170, rotate: 4, z: 3, variant: 'wide' as const },
  { x: 280, y: 110, rotate: -6, z: 2, variant: 'tall' as const },
  { x: -300, y: -60, rotate: 5, z: 7, variant: 'tall' as const },
  { x: 160, y: 200, rotate: -3, z: 3, variant: 'sq' as const },
  { x: -140, y: -130, rotate: 8, z: 5, variant: 'wide' as const },
  { x: 320, y: -20, rotate: -7, z: 4, variant: 'wide' as const },
  { x: 0, y: -200, rotate: 2, z: 6, variant: 'tall' as const },
] as const

const HEADING_WORDS = ['Good', 'work', 'in', 'production.'] as const
const SCROLL_VH = 380

export function EditorialProjectsFlow() {
  const sectionRef = useRef<HTMLElement>(null)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    const section = sectionRef.current
    if (!section || reduceMotion) return

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia()

      mm.add('(min-width: 1024px)', () => {
        const cards = gsap.utils.toArray<HTMLElement>('[data-gallery-card]')
        const words = gsap.utils.toArray<HTMLElement>('[data-gallery-word]')
        const head = section.querySelector<HTMLElement>('[data-gallery-head]')
        const eyebrow = section.querySelector<HTMLElement>('[data-gallery-eyebrow]')
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

        if (eyebrow) {
          tl.from(eyebrow, { y: 18, opacity: 0, duration: 0.18, ease: 'power2.out' }, 0)
        }

        if (words.length) {
          const mid = (words.length - 1) / 2
          words.forEach((word, i) => {
            tl.fromTo(
              word,
              { opacity: 0, y: 20 },
              { opacity: 1, y: 0, duration: 0.16, ease: 'power2.out' },
              0.02 + i * 0.03,
            )
            tl.to(word, { x: (i - mid) * 52, ease: 'none', duration: 0.28 }, 0)
          })
        }

        if (head) {
          tl.to(head, { opacity: 0, y: -28, duration: 0.22, ease: 'power2.in' }, 0.4)
        }

        cards.forEach((card, i) => {
          const slot = GALLERY_SLOTS[i % GALLERY_SLOTS.length]
          const enterAt = i * 0.055
          const exitAt = 0.58 + i * 0.04
          const startX = () => vw() * 0.58 + i * 90
          const endX = () => -vw() * 0.58 - i * 70
          const startY = slot.y + (i % 2 === 0 ? -120 : 100)
          const startRot = slot.rotate + 14 - i * 2

          gsap.set(card, {
            xPercent: -50,
            yPercent: -50,
            left: '50%',
            top: '50%',
            x: startX(),
            y: startY,
            rotate: startRot,
            scale: 0.72,
            autoAlpha: 0,
            zIndex: slot.z,
          })

          tl.to(
            card,
            {
              x: slot.x,
              y: slot.y,
              rotate: slot.rotate,
              scale: 1,
              autoAlpha: 1,
              duration: 0.38,
              ease: 'power2.out',
            },
            enterAt,
          ).to(
            card,
            {
              x: endX(),
              y: slot.y - 50,
              rotate: slot.rotate - 10,
              scale: 0.86,
              autoAlpha: 0,
              duration: 0.32,
              ease: 'power2.in',
            },
            exitAt,
          )
        })
      })

      mm.add('(max-width: 1023px)', () => {
        gsap.from('[data-gallery-head]', {
          y: 28,
          opacity: 0,
          duration: 0.85,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 88%',
          },
        })

        gsap.utils.toArray<HTMLElement>('[data-gallery-card]').forEach((card, i) => {
          gsap.from(card, {
            x: 48,
            opacity: 0,
            duration: 0.85,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
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
      id="projects"
      ref={sectionRef}
      className={`editorial-gallery${reduceMotion ? ' editorial-gallery--static' : ''}`}
      aria-label="Projects"
    >
      <div className="editorial-gallery-inner">
        <header className="editorial-gallery-head" data-gallery-head>
          <span className="editorial-eyebrow" data-gallery-eyebrow>
            Shipped live
          </span>
          <h2 className="editorial-gallery-title">
            {HEADING_WORDS.map((word) => (
              <span key={word} className="editorial-gallery-title-word" data-gallery-word>
                {word === 'work' ? <em>{word}</em> : word}
              </span>
            ))}
          </h2>
        </header>

        <div className="editorial-gallery-stage">
          {editorialWorkGallery.map((project, index) => {
            const slot = GALLERY_SLOTS[index % GALLERY_SLOTS.length]
            const className = `editorial-gallery-card editorial-gallery-card--${slot.variant}${
              project.url ? '' : ' editorial-gallery-card--sample'
            }`
            const cardBody = (
              <>
                <div className="editorial-gallery-card-media">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={project.image} alt="" loading="lazy" decoding="async" />
                </div>
                <div className="editorial-gallery-card-cap">
                  <span>{project.category}</span>
                  <strong>{project.name}</strong>
                </div>
              </>
            )

            if (!project.url) {
              return (
                <div
                  key={project.num}
                  className={className}
                  data-gallery-card
                  style={{ zIndex: slot.z }}
                  aria-label={`${project.name} — ${project.category}`}
                >
                  {cardBody}
                </div>
              )
            }

            return (
              <a
                key={project.num}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className={className}
                data-gallery-card
                style={{ zIndex: slot.z }}
              >
                {cardBody}
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
