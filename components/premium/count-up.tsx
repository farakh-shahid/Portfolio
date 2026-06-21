'use client'

import { useEffect, useRef } from 'react'
import { useReducedMotion } from 'framer-motion'

export function CountUp({
  value,
  className,
}: {
  value: string
  className?: string
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    const el = ref.current
    if (!el || started.current) return

    const match = value.match(/^([+-]?)(\d+(?:\.\d+)?)(.*)$/)
    if (!match) {
      el.textContent = value
      started.current = true
      return
    }

    const [, sign, numStr, suffix] = match
    const target = parseFloat(numStr)

    if (reduceMotion) {
      el.textContent = value
      started.current = true
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return
        started.current = true
        observer.disconnect()

        const start = performance.now()
        const duration = 1200

        const frame = (now: number) => {
          const t = Math.min(1, (now - start) / duration)
          const eased = 1 - (1 - t) ** 3
          const current = target * eased
          const display = Number.isInteger(target) ? Math.round(current) : current.toFixed(1)
          el.textContent = `${sign}${display}${suffix}`
          if (t < 1) requestAnimationFrame(frame)
        }
        requestAnimationFrame(frame)
      },
      { threshold: 0.4 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [value, reduceMotion])

  return (
    <span ref={ref} className={className} aria-label={value}>
      {reduceMotion ? value : '\u00A0'}
    </span>
  )
}
