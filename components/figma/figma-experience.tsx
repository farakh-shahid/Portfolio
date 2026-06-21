'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { timeline } from '@/data/timeline'

const companyColors = ['#6366f1', '#f97316', '#22c55e', '#ec4899']

function CompanyIcon({ company, index }: { company: string; index: number }) {
  return (
    <div
      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-sm font-bold text-white"
      style={{ backgroundColor: companyColors[index % companyColors.length] }}
    >
      {company.charAt(0)}
    </div>
  )
}

export function FigmaExperience() {
  const reduceMotion = useReducedMotion()

  return (
    <section id="experience" className="relative mx-auto max-w-5xl px-6 py-16 md:px-8 md:py-24">
      <div className="figma-glow-orb -left-20 top-1/2 h-[360px] w-[360px] -translate-y-1/2 opacity-70" aria-hidden />

      <motion.h2
        initial={reduceMotion ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative mb-10 text-2xl font-semibold text-white md:text-3xl"
      >
        Work Experience
      </motion.h2>

      <div className="relative grid gap-4 sm:grid-cols-2">
        {timeline.map((item, i) => (
          <motion.article
            key={item.period}
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
            className="figma-glass rounded-2xl p-5 transition hover:border-white/15 md:p-6"
          >
            <div className="flex items-start gap-4">
              <CompanyIcon company={item.company} index={i} />
              <div className="min-w-0">
                <h3 className="font-semibold text-white">{item.company}</h3>
                <p className="mt-0.5 text-sm text-[var(--figma-muted)]">{item.role}</p>
                <p className="mt-3 text-xs text-[var(--figma-muted)]">{item.period}</p>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
