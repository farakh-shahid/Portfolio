'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { systemsStoryChapters } from '@/data/systems-story'

const ease = [0.22, 1, 0.36, 1] as const

function ChapterCard({ chapter, index }: { chapter: (typeof systemsStoryChapters)[number]; index: number }) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay: index * 0.06, ease }}
      className="glass-card glass-card-hover group relative overflow-hidden rounded-2xl p-6 md:p-8"
    >
      <div className="pointer-events-none absolute -left-4 top-8 font-display text-7xl font-medium leading-none text-white/[0.03] transition group-hover:text-[var(--accent-glow)] md:text-8xl">
        {chapter.phase}
      </div>
      <h3 className="relative mt-1 font-display text-xl font-medium tracking-tight text-[var(--text-strong)] md:text-2xl">
        {chapter.title}
      </h3>
      <p className="relative mt-3 max-w-xl text-sm leading-relaxed text-[var(--text-muted)]">{chapter.body}</p>

      <div className="relative mt-6 flex flex-wrap gap-1.5">
        {chapter.architecture.map((node, j) => (
          <span key={node} className="flex items-center gap-1.5">
            <span className="rounded-md border border-[var(--border)] bg-white/[0.03] px-2.5 py-1 font-mono text-[10px] text-[var(--text)]">
              {node}
            </span>
            {j < chapter.architecture.length - 1 ? (
              <span className="text-[10px] text-[var(--accent)]" aria-hidden>
                →
              </span>
            ) : null}
          </span>
        ))}
      </div>

      <div className="relative mt-8 flex flex-col gap-4 border-t border-[var(--border)] pt-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-3xl font-semibold tabular-nums tracking-tight text-[var(--text-strong)]">{chapter.metric}</p>
          <p className="mt-1 font-mono text-[11px] uppercase tracking-wider text-[var(--text-muted)]">{chapter.metricLabel}</p>
        </div>
        <p className="max-w-sm text-sm leading-relaxed text-[var(--text-muted)] sm:text-right">{chapter.impact}</p>
      </div>
    </motion.article>
  )
}

export function SystemsStory() {
  return (
    <section id="systems" className="mx-auto max-w-6xl border-t border-[var(--border)] px-4 py-[var(--section-y)] md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.55, ease }}
      >
        <p className="section-eyebrow">Architecture</p>
        <h2 className="mt-5 max-w-lg font-display text-3xl font-medium tracking-[-0.02em] text-[var(--text-strong)] md:text-4xl">
          Production systems, built to stay fast.
        </h2>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-[var(--text-muted)]">
          Three pillars of how I approach scale — from event pipelines to query tuning to reliability.
        </p>
      </motion.div>

      <div className="mt-12 grid gap-5">
        {systemsStoryChapters.map((chapter, i) => (
          <ChapterCard key={chapter.id} chapter={chapter} index={i} />
        ))}
      </div>
    </section>
  )
}
