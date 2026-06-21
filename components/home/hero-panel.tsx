'use client'

import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import { HiArrowUpRight } from 'react-icons/hi2'
import { heroItem } from '@/components/home/use-hero-motion'
import { systemsStoryChapters } from '@/data/systems-story'

const featured = {
  slug: 'iot-event-pipeline',
  title: 'IoT Event Pipeline',
  metric: '10M+',
  metricLabel: 'events / day',
}

function PipelineViz({ nodes }: { nodes: string[] }) {
  const reduceMotion = useReducedMotion()
  const positions = nodes.map((_, i) => 40 + (240 / (nodes.length - 1)) * i)

  return (
    <div className="relative mt-6 rounded-xl border border-[var(--border)] bg-[var(--bg-0)]/60 p-4">
      <svg viewBox="0 0 320 48" className="h-auto w-full" aria-hidden>
        <defs>
          <linearGradient id="pipe-line" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.15" />
            <stop offset="50%" stopColor="var(--accent)" stopOpacity="0.7" />
            <stop offset="100%" stopColor="var(--accent)" stopOpacity="0.15" />
          </linearGradient>
        </defs>
        <line x1="40" y1="24" x2="280" y2="24" stroke="url(#pipe-line)" strokeWidth="1.5" />
        {positions.map((x, i) => (
          <g key={nodes[i]}>
            <circle cx={x} cy="24" r="4" fill="var(--bg-0)" stroke="var(--accent)" strokeWidth="1.5" />
            {!reduceMotion ? (
              <circle cx={x} cy="24" r="2" fill="var(--accent)" className="pipeline-dot" style={{ animationDelay: `${i * 0.5}s` }} />
            ) : null}
          </g>
        ))}
      </svg>
      <div className="mt-3 grid grid-cols-4 gap-1">
        {nodes.map((node) => (
          <div
            key={node}
            className="rounded-md border border-[var(--border)] bg-white/[0.03] px-1 py-2 text-center font-mono text-[9px] leading-tight text-[var(--text)] sm:text-[10px]"
          >
            {node}
          </div>
        ))}
      </div>
    </div>
  )
}

export function HeroPanel() {
  const reduceMotion = useReducedMotion()
  const pipeline = systemsStoryChapters[0].architecture

  return (
    <motion.aside variants={heroItem} className="lg:pt-4">
      <div className="glass-card glass-card-hover relative overflow-hidden rounded-2xl p-5 md:p-6">
        <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-[var(--accent-glow)] blur-2xl" />

        <div className="relative flex items-center justify-between gap-3">
          <p className="section-eyebrow !text-[10px]">System snapshot</p>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--border)] bg-white/[0.03] px-2.5 py-1 font-mono text-[10px] text-[var(--accent)]">
            <span className="relative flex h-1.5 w-1.5">
              {!reduceMotion ? (
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--accent)] opacity-40" />
              ) : null}
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
            </span>
            Live
          </span>
        </div>

        <p className="relative mt-4 text-sm leading-relaxed text-[var(--text-muted)]">
          Event-driven pipeline handling peak IoT telemetry with idempotent workers and zero data loss.
        </p>

        <PipelineViz nodes={pipeline} />

        <div className="relative mt-5 grid grid-cols-2 gap-3">
          <div className="rounded-xl border border-[var(--border)] bg-[var(--bg-0)]/50 px-4 py-3">
            <p className="font-mono text-[9px] uppercase tracking-wider text-[var(--text-muted)]">{featured.metricLabel}</p>
            <p className="mt-1 text-2xl font-semibold tabular-nums tracking-tight text-[var(--text-strong)]">{featured.metric}</p>
          </div>
          <div className="rounded-xl border border-[var(--border)] bg-[var(--bg-0)]/50 px-4 py-3">
            <p className="font-mono text-[9px] uppercase tracking-wider text-[var(--text-muted)]">Uptime</p>
            <p className="mt-1 text-2xl font-semibold tabular-nums tracking-tight text-[var(--text-strong)]">99.95%</p>
          </div>
        </div>

        <Link
          href="/#work"
          className="group relative mt-5 flex items-center justify-between gap-3 rounded-xl border border-[var(--border)] bg-white/[0.02] px-4 py-3.5 transition hover:border-[var(--border-strong)] hover:bg-white/[0.04] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
        >
          <div>
            <p className="font-mono text-[9px] uppercase tracking-wider text-[var(--text-muted)]">Featured build</p>
            <p className="mt-0.5 text-sm font-medium text-[var(--text-strong)]">{featured.title}</p>
          </div>
          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[var(--border)] bg-white/[0.03] transition group-hover:border-[var(--accent)] group-hover:text-[var(--accent)]">
            <HiArrowUpRight className="text-sm" aria-hidden />
          </span>
        </Link>
      </div>
    </motion.aside>
  )
}
