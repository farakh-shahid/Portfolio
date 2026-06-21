'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { HiArrowTopRightOnSquare } from 'react-icons/hi2'
import { SiGithub } from 'react-icons/si'
import type { editorialProjects } from '@/data/editorial-portfolio'
import { siteConfig } from '@/data/site-config'

type EditorialProject = (typeof editorialProjects)[number]

const gradients = [
  'from-indigo-900/80 via-purple-900/60 to-violet-950/80',
  'from-slate-800/80 via-zinc-900/60 to-neutral-950/80',
  'from-emerald-900/60 via-teal-900/50 to-cyan-950/80',
]

function ProjectMock({ index }: { index: number }) {
  return (
    <div
      className={`relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-[var(--figma-border)] bg-gradient-to-br ${gradients[index % gradients.length]}`}
    >
      <div className="absolute inset-4 rounded-lg border border-white/10 bg-black/30 p-3">
        <div className="mb-3 flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
        </div>
        <div className="space-y-2">
          <div className="h-2 w-3/4 rounded bg-white/10" />
          <div className="h-2 w-1/2 rounded bg-white/10" />
          <div className="mt-4 grid grid-cols-3 gap-2">
            <div className="h-12 rounded bg-white/5" />
            <div className="h-12 rounded bg-white/5" />
            <div className="h-12 rounded bg-white/5" />
          </div>
        </div>
      </div>
    </div>
  )
}

export function FigmaProjectCard({ project, index }: { project: EditorialProject; index: number }) {
  const reduceMotion = useReducedMotion()
  const reversed = index % 2 === 1

  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6 }}
      className="relative"
    >
      <div className="figma-glow-orb -left-10 top-1/2 h-64 w-64 -translate-y-1/2 opacity-50" aria-hidden />

      <div className="grid items-center gap-6 md:grid-cols-12 md:gap-8">
        <div className={`md:col-span-7 ${reversed ? 'md:order-2' : 'md:order-1'}`}>
          <ProjectMock index={index} />
        </div>

        <div className={`md:col-span-5 ${reversed ? 'md:order-1 md:-mr-8' : 'md:order-2 md:-ml-8'}`}>
          <div className="figma-glass relative z-10 rounded-2xl p-6 md:p-7">
            <h3 className="text-xl font-semibold text-white">
              {project.title[0]}
              {project.title[1]}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-[var(--figma-muted)]">{project.description}</p>
            <div className="mt-5 flex items-center gap-4">
              <a
                href={siteConfig.links.github}
                target="_blank"
                rel="noreferrer"
                className="text-[var(--figma-muted)] transition hover:text-white"
                aria-label="GitHub"
              >
                <SiGithub className="h-5 w-5" />
              </a>
              <a
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="text-[var(--figma-muted)] transition hover:text-white"
                aria-label="View project"
              >
                <HiArrowTopRightOnSquare className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  )
}
