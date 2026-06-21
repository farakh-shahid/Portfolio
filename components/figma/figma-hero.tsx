'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { HiArrowDown } from 'react-icons/hi2'
import { siteConfig } from '@/data/site-config'

export function FigmaHero() {
  const reduceMotion = useReducedMotion()

  return (
    <section id="about" className="relative mx-auto max-w-3xl px-6 pb-20 pt-4 text-center md:px-8 md:pb-28">
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto mb-10 flex h-44 w-44 items-center justify-center md:h-52 md:w-52"
      >
        <div className="figma-glow-orb absolute inset-0 h-full w-full opacity-100" />
        <div className="relative flex h-36 w-36 items-center justify-center rounded-full border border-white/10 bg-gradient-to-b from-[#2a1f3d] to-[#0f0f14] shadow-[0_0_60px_rgba(168,85,247,0.25)] md:h-44 md:w-44">
          <span className="text-5xl md:text-6xl" aria-hidden>
            👨‍💻
          </span>
        </div>
      </motion.div>

      <motion.p
        initial={reduceMotion ? false : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.5 }}
        className="text-sm text-[var(--figma-muted)] md:text-base"
      >
        Hello, I&apos;m {siteConfig.name}
      </motion.p>

      <motion.h1
        initial={reduceMotion ? false : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25, duration: 0.5 }}
        className="mt-4 text-2xl leading-snug text-white md:text-3xl"
      >
        Don&apos;t judge a system by its <span className="figma-script text-3xl md:text-4xl">cover</span>…
      </motion.h1>

      <motion.p
        initial={reduceMotion ? false : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35, duration: 0.5 }}
        className="mt-5 text-3xl font-semibold tracking-tight text-white md:text-4xl"
      >
        I&apos;m a {siteConfig.role}
        <span className="figma-cursor text-[var(--figma-purple)]">|</span>
      </motion.p>

      <motion.p
        initial={reduceMotion ? false : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45, duration: 0.5 }}
        className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-[var(--figma-muted)] md:text-base"
      >
        With 7+ years of experience, I architect high-throughput backends and polished frontends as a{' '}
        <span className="figma-highlight">Senior Full Stack Engineer</span>. From AWS IoT pipelines to PostgreSQL
        performance tuning, I turn complex requirements into reliable products.
      </motion.p>

      <a
        href="#experience"
        className="figma-scroll-hint mt-14 inline-flex flex-col items-center gap-2 text-xs text-[var(--figma-muted)] transition hover:text-white"
        aria-label="Scroll to experience"
      >
        <HiArrowDown className="text-lg" />
      </a>
    </section>
  )
}
