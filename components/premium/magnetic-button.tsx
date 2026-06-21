'use client'

import { motion, useReducedMotion } from 'framer-motion'
import Link from 'next/link'
import type { ReactNode } from 'react'
import { useRef } from 'react'

type MagneticButtonProps = {
  href: string
  children: ReactNode
  variant?: 'primary' | 'ghost'
  external?: boolean
}

export function MagneticButton({ href, children, variant = 'primary', external }: MagneticButtonProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const reduceMotion = useReducedMotion()

  const onMove = (e: React.MouseEvent) => {
    if (reduceMotion || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    ref.current.style.transform = `translate(${x * 0.12}px, ${y * 0.18}px)`
  }

  const onLeave = () => {
    if (ref.current) ref.current.style.transform = ''
  }

  const className =
    variant === 'primary'
      ? 'premium-focus inline-flex items-center justify-center rounded-full border border-[var(--gold)] bg-[var(--gold)] px-7 py-3 text-sm font-medium text-[var(--ink)] transition-colors hover:bg-transparent hover:text-[var(--gold)]'
      : 'premium-focus inline-flex items-center justify-center rounded-full border border-[var(--border-strong)] px-7 py-3 text-sm font-medium text-[var(--paper)] transition hover:border-[var(--gold)] hover:text-[var(--gold)]'

  const inner = (
    <motion.span
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      whileTap={reduceMotion ? undefined : { scale: 0.97 }}
      className={className}
      style={{ willChange: 'transform' }}
    >
      {children}
    </motion.span>
  )

  const useNative =
    external || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('http')

  if (useNative) {
    return (
      <a href={href} target={external || href.startsWith('http') ? '_blank' : undefined} rel={external ? 'noreferrer' : undefined} className="inline-block">
        {inner}
      </a>
    )
  }

  return (
    <Link href={href} className="inline-block">
      {inner}
    </Link>
  )
}
