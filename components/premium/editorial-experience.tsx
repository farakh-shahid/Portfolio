'use client'

import { useReducedMotion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { editorialExperience } from '@/data/editorial-portfolio'

gsap.registerPlugin(ScrollTrigger)

const EXP_WORDS = ['Work', 'experience']
const SCROLL_VH = 400
const CARD_SEGMENT = 0.28

function CompanyInfo({ job }: { job: (typeof editorialExperience)[number] }) {
  return (
    <div className="editorial-xbrand">
      <span className="editorial-xlogo">{job.company.slice(0, 1)}</span>
      <div>
        <a href={job.website} target="_blank" rel="noreferrer" className="company">
          {job.company}
        </a>
        <span className="visit">Visit website ↗</span>
      </div>
    </div>
  )
}

function RolePulse({ job }: { job: (typeof editorialExperience)[number] }) {
  return (
    <div className="editorial-exp-pulse" aria-hidden>
      <div className="editorial-exp-pulse-core">
        <span className="editorial-exp-pulse-ring" />
        <span className="editorial-exp-pulse-ring editorial-exp-pulse-ring--delay" />
        <span className="editorial-exp-pulse-dot" />
      </div>
      <span className="editorial-exp-pulse-line" />
      <span className="editorial-exp-pulse-label">Role {job.index}</span>
    </div>
  )
}

function RoleMeta({ job }: { job: (typeof editorialExperience)[number] }) {
  return (
    <>
      <div className="role">{job.role}</div>
      <div className="editorial-xmeta-block">
        <span>{job.when}</span>
        <small>{job.isCurrent ? 'Current' : 'Past role'}</small>
      </div>
      {job.location ? <div className="editorial-xloc">◆ {job.location}</div> : null}
    </>
  )
}

export function EditorialExperience() {
  const sectionRef = useRef<HTMLElement>(null)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    const section = sectionRef.current
    if (!section || reduceMotion) return

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia()

      mm.add('(min-width: 1024px)', () => {
        const words = gsap.utils.toArray<HTMLElement>('[data-exp-word]')
        const cards = gsap.utils.toArray<HTMLElement>('[data-exp-card]')
        const vh = () => window.innerHeight

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

        if (words.length) {
          const mid = (words.length - 1) / 2
          words.forEach((word, i) => {
            tl.fromTo(
              word,
              { opacity: 0.35, y: 0 },
              { opacity: 1, y: (i - mid) * 28, ease: 'none', duration: 0.18 },
              0,
            )
          })
        }

        tl.fromTo(
          '[data-exp-beam]',
          { scaleX: 0, opacity: 0 },
          { scaleX: 1, opacity: 1, duration: 0.14, ease: 'power3.inOut' },
          0,
        )

        tl.from(
          '[data-exp-eyebrow]',
          { y: 12, opacity: 0, duration: 0.1, ease: 'power2.out' },
          0,
        )

        tl.from(
          '[data-exp-side]',
          { y: 14, opacity: 0, duration: 0.12, ease: 'power2.out' },
          0.04,
        )

        cards.forEach((card) => {
          gsap.set(card, {
            top: 0,
            left: 0,
            y: vh() * 0.52,
            autoAlpha: 0,
          })
        })

        cards.forEach((card, i) => {
          const t = i * CARD_SEGMENT

          if (i > 0) {
            tl.to(
              cards[i - 1],
              {
                y: () => -vh() * 0.48,
                autoAlpha: 0,
                duration: 0.18,
                ease: 'power2.in',
              },
              t,
            )
          }

          tl.to(
            card,
            {
              y: 0,
              autoAlpha: 1,
              duration: 0.22,
              ease: 'power2.out',
            },
            t,
          )
        })

        const last = cards[cards.length - 1]
        if (last) {
          tl.to(
            last,
            {
              y: () => -vh() * 0.48,
              autoAlpha: 0,
              duration: 0.18,
              ease: 'power2.in',
            },
            cards.length * CARD_SEGMENT + 0.08,
          )
        }
      })

      mm.add('(max-width: 1023px)', () => {
        gsap.from('[data-exp-word]', {
          y: 32,
          opacity: 0,
          duration: 0.85,
          stagger: 0.08,
          ease: 'power3.out',
          scrollTrigger: { trigger: section, start: 'top 85%' },
        })

        gsap.from('[data-exp-eyebrow], [data-exp-side]', {
          y: 20,
          opacity: 0,
          duration: 0.8,
          stagger: 0.08,
          ease: 'power3.out',
          scrollTrigger: { trigger: section, start: 'top 84%' },
        })

        gsap.utils.toArray<HTMLElement>('[data-exp-card]').forEach((card, i) => {
          gsap.from(card, {
            y: 48,
            opacity: 0,
            duration: 0.85,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 92%',
            },
            delay: i * 0.08,
          })
        })
      })
    }, section)

    return () => ctx.revert()
  }, [reduceMotion])

  return (
    <section
      id="exp"
      ref={sectionRef}
      className={`editorial-section editorial-section--exp${reduceMotion ? ' editorial-exp--static' : ' editorial-exp--flow'}`}
    >
      <div className="editorial-exp-inner">
        <div className="editorial-exp-head" data-exp-head>
          <span className="editorial-eyebrow" data-exp-eyebrow>
            Career
          </span>
          <h2 className="editorial-exp-title" aria-label="Work experience">
            {EXP_WORDS.map((word, i) => (
              <span key={word} className="editorial-exp-title-word" data-exp-word>
                {i === 0 ? <em>{word}</em> : word}
              </span>
            ))}
          </h2>
          <div className="editorial-exp-beam" data-exp-beam aria-hidden />
          <span className="editorial-exp-sub count" data-exp-side>
            Technical direction · ownership · team impact
          </span>
        </div>

        <div className="editorial-exp-viewport">
          <div className="editorial-exp-stage">
            {editorialExperience.map((job) => (
              <article key={job.index} className="editorial-exp-card" data-exp-card>
                <div className="editorial-exp-card-shell">
                  <div className="editorial-exp-card-grid">
                    <aside className="editorial-xcompany">
                      <CompanyInfo job={job} />
                      <RoleMeta job={job} />
                      <RolePulse job={job} />
                    </aside>
                    <div className="editorial-xcontent">
                      <p className="desc">{job.desc}</p>
                      {'leadership' in job && job.leadership ? (
                        <p className="editorial-xleadership">{job.leadership}</p>
                      ) : null}
                      <div className="editorial-xtags">
                        {job.tags.map((tag) => (
                          <span key={tag}>{tag}</span>
                        ))}
                      </div>
                      <ul className="editorial-xbullets editorial-xbullets--numbered">
                        {job.bullets.map((item, bulletIndex) => (
                          <li key={item.lead}>
                            <span className="editorial-xbullet-num">
                              {String(bulletIndex + 1).padStart(2, '0')}
                            </span>
                            <p>
                              <strong className="editorial-xbullet-lead">{item.lead}</strong>{' '}
                              {item.body}
                            </p>
                          </li>
                        ))}
                      </ul>
                    </div>
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
