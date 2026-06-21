'use client'

import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

/**
 * Avoid `initial={{ opacity: 0 }}` here: after a hard refresh, Framer Motion can
 * leave the layout at opacity 0 if hydration/animation races (especially with
 * Next experimental `optimizePackageImports` for framer-motion). `initial={false}`
 * applies `animate` on first paint so content is always visible.
 */
export function PageTransition({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={false}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.24, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}
