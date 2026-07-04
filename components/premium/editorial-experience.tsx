'use client'

import { useReducedMotion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { editorialExperience } from '@/data/editorial-portfolio'

gsap.registerPlugin(ScrollTrigger)

export function EditorialExperience() {
  const sectionRef = useRef<HTMLElement>(null)
  const fillRef = useRef<HTMLDivElement>(null)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    const section = sectionRef.current
    if (!section || reduceMotion) return

    const ctx = gsap.context(() => {
      if (fillRef.current) {
        ScrollTrigger.create({
          trigger: section,
          start: 'top 55%',
          end: 'bottom 45%',
          scrub: 0.8,
          onUpdate: (self) => {
            if (fillRef.current) {
              fillRef.current.style.transform = `scaleY(${self.progress})`
            }
          },
        })
      }

      gsap.from('[data-exp-word]', {
        x: (i) => (i % 2 === 0 ? -80 : 80),
        opacity: 0,
        duration: 1,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 78%',
        },
      })

      gsap.from('[data-exp-side]', {
        x: -56,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
        },
      })

      gsap.utils.toArray<HTMLElement>('[data-exp-row]').forEach((row) => {
        const company = row.querySelector('[data-exp-company]')
        const content = row.querySelector('[data-exp-content]')
        const tags = row.querySelectorAll('[data-exp-tag]')
        const bullets = row.querySelectorAll('[data-exp-bullet]')
        const projects = row.querySelector('[data-exp-projects]')

        if (company) {
          gsap.from(company, {
            x: -64,
            opacity: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: row,
              start: 'top 84%',
            },
          })
        }

        if (content) {
          gsap.from(content, {
            x: 64,
            opacity: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: row,
              start: 'top 84%',
            },
          })
        }

        const leadership = row.querySelector('[data-exp-leadership]')
        if (leadership) {
          gsap.from(leadership, {
            y: 16,
            opacity: 0,
            duration: 0.75,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: row,
              start: 'top 80%',
            },
          })
        }

        if (tags.length) {
          gsap.from(tags, {
            y: 12,
            opacity: 0,
            duration: 0.55,
            stagger: 0.05,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: row,
              start: 'top 78%',
            },
          })
        }

        if (bullets.length) {
          gsap.from(bullets, {
            x: 28,
            opacity: 0,
            duration: 0.65,
            stagger: 0.07,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: row,
              start: 'top 76%',
            },
          })
        }

        if (projects) {
          gsap.from(projects, {
            y: 18,
            opacity: 0,
            duration: 0.75,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: row,
              start: 'top 72%',
            },
          })
        }

        ScrollTrigger.create({
          trigger: row,
          start: 'top 58%',
          end: 'bottom 42%',
          onToggle: (self) => row.classList.toggle('is-active', self.isActive),
        })
      })
    }, section)

    return () => ctx.revert()
  }, [reduceMotion])

  return (
    <section id="exp" ref={sectionRef} className="editorial-section editorial-section--exp relative">
      <div className="editorial-exp-track" aria-hidden>
        <div ref={fillRef} className="editorial-exp-track-fill" />
      </div>
      <div className="editorial-wrap relative">
        <div className="editorial-xhead">
          <h2>
            <em data-exp-word>Experience</em>
          </h2>
          <span className="count" data-exp-side>
            Technical direction · ownership · team impact
          </span>
        </div>
        {editorialExperience.map((job) => (
          <div key={job.index} className="editorial-xrow" data-exp-row>
            <span className="editorial-xindex" aria-hidden>
              {job.index}
            </span>
            <aside className="editorial-xcompany" data-exp-company>
              <div className="editorial-xbrand">
                <span className="editorial-xlogo">{job.company.slice(0, 1)}</span>
                <div>
                  <a href={job.website} target="_blank" rel="noreferrer" className="company">
                    {job.company}
                  </a>
                  <span className="visit">Visit website ↗</span>
                </div>
              </div>
              <div className="role">{job.role}</div>
              <div className="editorial-xmeta-block">
                <span>{job.when}</span>
                <small>{job.isCurrent ? 'Current' : 'Past role'}</small>
              </div>
              {job.location ? <div className="editorial-xloc">◆ {job.location}</div> : null}
            </aside>

            <div className="editorial-xcontent" data-exp-content>
              <p className="desc">{job.desc}</p>
              {'leadership' in job && job.leadership ? (
                <p className="editorial-xleadership" data-exp-leadership>
                  {job.leadership}
                </p>
              ) : null}
              <div className="editorial-xtags">
                {job.tags.map((tag) => (
                  <span key={tag} data-exp-tag>
                    {tag}
                  </span>
                ))}
              </div>

              <ul className="editorial-xbullets">
                {job.bullets.map((item) => (
                  <li key={item} data-exp-bullet>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="editorial-xprojects" data-exp-projects>
                <span>Notable projects built here</span>
                <div>
                  {job.projects.map((project) => (
                    <b key={project}>{project}</b>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
