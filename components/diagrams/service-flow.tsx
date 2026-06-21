'use client'

import { motion } from 'framer-motion'

export function ServiceFlow() {
  return (
    <div className="rounded-xl border border-[var(--border)] p-4">
      <p className="mb-3 text-xs uppercase tracking-[0.2em] text-[var(--text-muted)]">Service flow</p>
      <div className="grid grid-cols-4 gap-2 text-center text-xs text-[var(--text)]">
        {['Client', 'API', 'Queue', 'Worker'].map((step, index) => (
          <motion.div
            key={step}
            className="rounded-lg border border-[var(--border)] bg-black/10 px-2 py-3"
            animate={{ y: [0, -2, 0] }}
            transition={{ repeat: Infinity, delay: index * 0.2, duration: 2 }}
          >
            {step}
          </motion.div>
        ))}
      </div>
    </div>
  )
}
