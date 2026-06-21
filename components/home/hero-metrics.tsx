'use client'

import { motion } from 'framer-motion'
import { heroItem } from '@/components/home/use-hero-motion'
import { siteConfig } from '@/data/site-config'
import { heroPanelMetrics } from '@/data/systems-story'

const metrics = [
  ...heroPanelMetrics,
  { label: 'Experience', value: `${siteConfig.yearsExperience}+ yrs` },
]

export function HeroMetrics() {
  return (
    <motion.div variants={heroItem} className="mt-12 md:mt-14">
      <ul className="glass-card grid grid-cols-2 gap-px overflow-hidden rounded-2xl sm:grid-cols-4">
        {metrics.map((m) => (
          <li key={m.label} className="bg-[var(--bg-0)]/80 px-4 py-5 backdrop-blur-sm md:px-6 md:py-6">
            <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-[var(--text-muted)]">{m.label}</p>
            <p className="mt-1.5 text-xl font-semibold tabular-nums tracking-tight text-[var(--text-strong)] md:text-2xl">
              {m.value}
            </p>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}
