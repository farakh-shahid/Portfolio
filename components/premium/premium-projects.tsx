'use client'

import { useEffect, useRef } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { HiArrowUpRight } from 'react-icons/hi2'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { premiumProjects } from '@/data/premium-portfolio'

gsap.registerPlugin(ScrollTrigger)

function ProjectCard({
  project,
  index,
}: {
  project: (typeof premiumProjects)[number]
  index: number
}) {
  const card = useRef<HTMLElement>(null)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    if (reduceMotion || !card.current) return

    gsap.from(card.current, {
      opacity: 0,
      y: 36,
      duration: 0.75,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: card.current,
        start: 'top 85%',
      },
    })
  }, [reduceMotion, project.name])

  const onMove = (e: React.MouseEvent) => {
    if (reduceMotion || !card.current) return
    const rect = card.current.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width - 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5
    card.current.style.transform = `perspective(900px) rotateX(${py * -4}deg) rotateY(${px * 4}deg)`
  }

  const onLeave = () => {
    if (card.current) card.current.style.transform = ''
  }

  return (
    <motion.article
      ref={card}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="premium-card group p-6 transition-transform duration-300 md:p-8"
      style={{ willChange: 'transform' }}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="premium-label">0{index + 1}</p>
          <h3 className="premium-display mt-2 text-xl font-medium md:text-2xl">{project.name}</h3>
        </div>
        <a
          href={project.url}
          target="_blank"
          rel="noreferrer"
          aria-label={`Open ${project.name}`}
          className="premium-focus flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--border)] text-[var(--paper-muted)] transition group-hover:border-[var(--gold)] group-hover:text-[var(--gold)]"
        >
          <HiArrowUpRight aria-hidden />
        </a>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-[var(--paper-muted)] md:text-base">{project.description}</p>

      <ul className="mt-5 flex flex-wrap gap-2">
        {project.stack.map((tag) => (
          <li key={tag} className="font-mono text-[10px] text-[var(--paper-muted)]">
            {tag}
          </li>
        ))}
      </ul>
    </motion.article>
  )
}

export function PremiumProjects() {
  return (
    <section id="work" className="mx-auto max-w-6xl border-t border-[var(--border)] px-5 py-[var(--section-y)] md:px-8">
      <p className="premium-label">Work</p>
      <h2 className="premium-display mt-4 text-2xl font-medium tracking-tight md:text-3xl">Featured projects.</h2>

      <div className="mt-10 grid gap-5 md:grid-cols-3 md:gap-6">
        {premiumProjects.map((project, i) => (
          <ProjectCard key={project.name} project={project} index={i} />
        ))}
      </div>
    </section>
  )
}
