'use client'

import { motion, useReducedMotion } from 'framer-motion'
import Link from 'next/link'
import { HiArrowDownTray, HiArrowUpRight } from 'react-icons/hi2'
import { heroItem } from '@/components/home/use-hero-motion'
import { heroTechLine } from '@/data/systems-story'
import { siteConfig } from '@/data/site-config'

export function HeroCopy() {
  const reduceMotion = useReducedMotion()
  const resumeHref = siteConfig.links.resume ?? '/contact'
  const resumeIsPdf = resumeHref.endsWith('.pdf')

  return (
    <>
      <motion.div variants={heroItem}>
        <span className="glass-card inline-flex items-center gap-2 rounded-full px-3.5 py-1.5">
          <span className="relative flex h-1.5 w-1.5">
            {!reduceMotion ? (
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--accent)] opacity-50" />
            ) : null}
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
          </span>
          <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--text-muted)]">
            {siteConfig.role}
          </span>
        </span>
      </motion.div>

      <motion.h1
        variants={heroItem}
        className="mt-7 font-display text-[clamp(2.75rem,7.5vw,4.25rem)] font-medium leading-[1.02] tracking-[-0.035em] text-[var(--text-strong)]"
      >
        {siteConfig.name} builds systems that{' '}
        <span className="text-gradient italic">scale.</span>
      </motion.h1>

      <motion.p
        variants={heroItem}
        className="mt-6 max-w-lg text-base leading-[1.7] text-[var(--text-muted)] md:text-[17px]"
      >
        Distributed systems, event-driven architecture, and cloud-native infrastructure — measured in latency removed
        and failures dropped.
      </motion.p>

      <motion.div variants={heroItem} className="mt-9 flex flex-wrap items-center gap-3">
        <Link
          href="/projects"
          className="btn-primary group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
        >
          View case studies
          <HiArrowUpRight className="text-base transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
        </Link>
        <Link
          href={resumeHref}
          className="glass-card inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-[var(--text-strong)] transition hover:border-[var(--border-strong)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
        >
          {resumeIsPdf ? (
            <>
              <HiArrowDownTray className="text-base" aria-hidden />
              Resume
            </>
          ) : (
            'Get in touch'
          )}
        </Link>
      </motion.div>

      <motion.div variants={heroItem} className="mt-9 flex flex-wrap gap-2">
        {heroTechLine.map((tech) => (
          <span
            key={tech}
            className="rounded-md border border-[var(--border)] bg-white/[0.02] px-2.5 py-1 font-mono text-[10px] text-[var(--text-muted)]"
          >
            {tech}
          </span>
        ))}
      </motion.div>
    </>
  )
}
