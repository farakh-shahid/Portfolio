'use client'

import { useReducedMotion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { editorialProfile } from '@/data/editorial-portfolio'

gsap.registerPlugin(ScrollTrigger)

const HEADLINE_WORDS = ['Let\'s', 'build', 'something']
const SCROLL_VH = 160

export function EditorialContact() {
  const sectionRef = useRef<HTMLElement>(null)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    const section = sectionRef.current
    if (!section || reduceMotion) return

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia()

      mm.add('(min-width: 1024px)', () => {
        const words = gsap.utils.toArray<HTMLElement>('[data-contact-word]')
        const accent = section.querySelector<HTMLElement>('[data-contact-accent]')
        const sub = section.querySelector<HTMLElement>('[data-contact-sub]')
        const mail = section.querySelector<HTMLElement>('[data-contact-mail]')
        const line = section.querySelector<HTMLElement>('[data-contact-line]')
        const meta = gsap.utils.toArray<HTMLElement>('[data-contact-meta]')
        const glow = section.querySelector<HTMLElement>('[data-contact-glow]')

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            pin: true,
            scrub: 0.8,
            start: 'top top',
            end: `+=${SCROLL_VH}%`,
            invalidateOnRefresh: true,
            anticipatePin: 1,
          },
        })

        tl.from(
          '[data-contact-eyebrow]',
          { y: 20, opacity: 0, duration: 0.12, ease: 'power2.out' },
          0,
        )

        if (glow) {
          tl.fromTo(glow, { scale: 0.6, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.2, ease: 'power2.out' }, 0)
        }

        words.forEach((word, i) => {
          tl.fromTo(
            word,
            { y: 72, opacity: 0, rotateX: 28 },
            { y: 0, opacity: 1, rotateX: 0, duration: 0.14, ease: 'power3.out' },
            0.06 + i * 0.08,
          )
        })

        if (accent) {
          tl.fromTo(
            accent,
            { y: 48, opacity: 0, scale: 0.92 },
            { y: 0, opacity: 1, scale: 1, duration: 0.16, ease: 'power3.out' },
            0.34,
          )
        }

        if (sub) {
          tl.fromTo(sub, { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.12, ease: 'power2.out' }, 0.44)
        }

        if (mail) {
          tl.fromTo(mail, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.12, ease: 'power2.out' }, 0.52)
        }

        if (line) {
          tl.fromTo(line, { scaleX: 0 }, { scaleX: 1, duration: 0.18, ease: 'power2.inOut' }, 0.54)
        }

        if (meta.length) {
          tl.from(
            meta,
            { y: 28, opacity: 0, duration: 0.1, stagger: 0.04, ease: 'power2.out' },
            0.62,
          )
        }
      })

      mm.add('(max-width: 1023px)', () => {
        gsap.from('[data-contact-eyebrow]', {
          y: 20,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: { trigger: section, start: 'top 88%' },
        })

        gsap.from('[data-contact-word], [data-contact-accent]', {
          y: 40,
          opacity: 0,
          duration: 0.85,
          stagger: 0.07,
          ease: 'power3.out',
          scrollTrigger: { trigger: section, start: 'top 86%' },
        })

        gsap.from('[data-contact-sub], [data-contact-mail]', {
          y: 24,
          opacity: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: { trigger: section, start: 'top 82%' },
        })

        gsap.from('[data-contact-meta]', {
          y: 20,
          opacity: 0,
          duration: 0.7,
          stagger: 0.06,
          ease: 'power2.out',
          scrollTrigger: { trigger: section, start: 'top 78%' },
        })
      })
    }, section)

    return () => ctx.revert()
  }, [reduceMotion])

  return (
    <section
      id="contact"
      ref={sectionRef}
      className={`editorial-section editorial-section--contact${reduceMotion ? ' editorial-contact--static' : ' editorial-contact--flow'}`}
    >
      <div className="editorial-contact-glow" data-contact-glow aria-hidden />
      <div className="editorial-wrap">
        <div className="editorial-cwrap">
          <span className="editorial-eyebrow editorial-eyebrow-center" data-contact-eyebrow>
            Let&apos;s talk
          </span>
          <div className="big editorial-contact-headline">
            {HEADLINE_WORDS.map((word) => (
              <span key={word} className="editorial-contact-word" data-contact-word>
                {word}
              </span>
            ))}
            <br />
            <em className="editorial-contact-accent" data-contact-accent>
              at scale.
            </em>
          </div>
          <p className="sub" data-contact-sub>
            {editorialProfile.contactSub}
          </p>
          <div className="editorial-contact-mail-wrap">
            <a href={`mailto:${editorialProfile.email}`} className="mail" data-contact-mail>
              {editorialProfile.email}
            </a>
            <span className="editorial-contact-line" data-contact-line aria-hidden />
          </div>
          <div className="editorial-cmeta">
            <a href={`tel:${editorialProfile.phone}`} data-contact-meta>
              {editorialProfile.phoneDisplay}
            </a>
            <a href={editorialProfile.github} target="_blank" rel="noopener noreferrer" data-contact-meta>
              GitHub ↗
            </a>
            <a href={editorialProfile.linkedin} target="_blank" rel="noopener noreferrer" data-contact-meta>
              LinkedIn ↗
            </a>
            <span data-contact-meta>{editorialProfile.timezone}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
