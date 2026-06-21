'use client'

import { motion, useScroll, useSpring } from 'framer-motion'

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 })

  return (
    <motion.div
      className="fixed left-0 top-0 z-[100] h-px w-full origin-left bg-[var(--accent)]"
      style={{ scaleX }}
      aria-hidden
    />
  )
}
