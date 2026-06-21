'use client'

import { motion, useReducedMotion } from 'framer-motion'
import {
  SiDocker,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiRedis,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si'
import { FaAws } from 'react-icons/fa'

const technologies = [
  { name: 'React', Icon: SiReact, color: '#61DAFB' },
  { name: 'Next.js', Icon: SiNextdotjs, color: '#ffffff' },
  { name: 'TypeScript', Icon: SiTypescript, color: '#3178C6' },
  { name: 'Node.js', Icon: SiNodedotjs, color: '#339933' },
  { name: 'NestJS', Icon: SiNestjs, color: '#E0234E' },
  { name: 'PostgreSQL', Icon: SiPostgresql, color: '#4169E1' },
  { name: 'Redis', Icon: SiRedis, color: '#DC382D' },
  { name: 'Prisma', Icon: SiPrisma, color: '#2D3748' },
  { name: 'AWS', Icon: FaAws, color: '#FF9900' },
  { name: 'Docker', Icon: SiDocker, color: '#2496ED' },
  { name: 'Tailwind', Icon: SiTailwindcss, color: '#06B6D4' },
]

export function FigmaTechSection() {
  const reduceMotion = useReducedMotion()

  return (
    <section className="relative mx-auto max-w-4xl px-6 py-16 text-center md:px-8 md:py-24">
      <motion.p
        initial={reduceMotion ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-sm leading-relaxed text-[var(--figma-muted)] md:text-base"
      >
        I&apos;m currently looking to join a cross-functional team that values improving people&apos;s lives
        through accessible design, or has a vision I can contribute to as a{' '}
        <span className="figma-highlight">Senior Full Stack Engineer</span>.
      </motion.p>

      <motion.p
        initial={reduceMotion ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="mt-8 text-sm text-[var(--figma-muted)]"
      >
        Here are some technologies I have been working with:
      </motion.p>

      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="mt-10 flex flex-wrap items-center justify-center gap-6 md:gap-8"
      >
        {technologies.map(({ name, Icon, color }) => (
          <div key={name} className="group flex flex-col items-center gap-2">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[var(--figma-border)] bg-white/[0.03] transition group-hover:border-white/20 group-hover:bg-white/[0.06]">
              <Icon className="h-6 w-6" style={{ color }} aria-hidden />
            </div>
            <span className="text-[10px] text-[var(--figma-muted)]">{name}</span>
          </div>
        ))}
      </motion.div>
    </section>
  )
}
