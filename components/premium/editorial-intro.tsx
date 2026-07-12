'use client'

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useLayoutEffect, useState } from 'react'

const EASE = [0.76, 0, 0.24, 1] as const
const INTRO_MS = 5800
const INTRO_MS_REDUCED = 900

const NAME = 'Muhammad Farrukh'
const ROLE = 'Senior Software Engineer'
const CHAR_STAGGER = 0.045
const NAME_START = 2.4
const FIELD_FADE = 3.9 // when the full-page construction lines fade away

type PathDef = {
  d: string
  delay?: number
  duration?: number
  opacity?: number
  strokeWidth?: number
}

function DrawPath({
  d,
  delay = 0,
  duration = 1.6,
  opacity = 0.5,
  strokeWidth = 0.9,
  reduced,
}: PathDef & { reduced: boolean }) {
  if (reduced) {
    return (
      <path
        d={d}
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        opacity={opacity}
        vectorEffect="non-scaling-stroke"
      />
    )
  }
  return (
    <motion.path
      d={d}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      vectorEffect="non-scaling-stroke"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity }}
      transition={{ duration, ease: EASE, delay }}
    />
  )
}

// Full-viewport technical construction lines (drawn slowly across the page)
const FIELD_LINES: PathDef[] = [
  { d: 'M -100 780 L 1540 120', delay: 0, duration: 2.2, opacity: 0.16 },
  { d: 'M -100 120 L 1540 780', delay: 0.1, duration: 2.2, opacity: 0.16 },
  { d: 'M 480 -80 L 720 980', delay: 0.25, duration: 2.0, opacity: 0.14 },
  { d: 'M 960 -80 L 720 980', delay: 0.35, duration: 2.0, opacity: 0.14 },
  { d: 'M -100 300 L 1540 300', delay: 0.5, duration: 1.9, opacity: 0.1 },
  { d: 'M -100 600 L 1540 600', delay: 0.6, duration: 1.9, opacity: 0.1 },
  { d: 'M 300 -80 L 300 980', delay: 0.7, duration: 1.8, opacity: 0.08 },
  { d: 'M 1140 -80 L 1140 980', delay: 0.8, duration: 1.8, opacity: 0.08 },
]

function ConstructionField({ reduced }: { reduced: boolean }) {
  return (
    <svg
      className="editorial-intro-field"
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
    >
      {/* large guide circle */}
      <DrawPath
        reduced={reduced}
        d="M 720 170 A 280 280 0 1 1 719 170"
        delay={0.15}
        duration={2.4}
        opacity={0.14}
        strokeWidth={0.8}
      />
      <DrawPath
        reduced={reduced}
        d="M 720 300 A 150 150 0 1 1 719 300"
        delay={0.3}
        duration={2.0}
        opacity={0.1}
        strokeWidth={0.8}
      />
      {FIELD_LINES.map((line, i) => (
        <DrawPath key={i} reduced={reduced} {...line} />
      ))}
    </svg>
  )
}

// The A construction emblem (bigger, slower)
function IntroEmblem({ reduced }: { reduced: boolean }) {
  return (
    <svg className="editorial-intro-emblem" viewBox="0 0 200 200" aria-hidden role="presentation">
      <g>
        <DrawPath
          reduced={reduced}
          d="M 100 24 A 76 76 0 1 1 99.5 24"
          delay={0.2}
          duration={2.1}
          opacity={0.4}
          strokeWidth={0.9}
        />
        <DrawPath
          reduced={reduced}
          d="M 100 52 A 48 48 0 1 1 99.6 52"
          delay={0.35}
          duration={1.8}
          opacity={0.32}
          strokeWidth={0.8}
        />
        <DrawPath
          reduced={reduced}
          d="M 36 36 L 164 164"
          delay={0.5}
          duration={1.8}
          opacity={0.34}
          strokeWidth={0.8}
        />
        <DrawPath
          reduced={reduced}
          d="M 164 36 L 36 164"
          delay={0.6}
          duration={1.8}
          opacity={0.34}
          strokeWidth={0.8}
        />
        <DrawPath
          reduced={reduced}
          d="M 62 172 L 100 60 L 138 172"
          delay={0.75}
          duration={1.9}
          opacity={0.92}
          strokeWidth={1.2}
        />
        <DrawPath
          reduced={reduced}
          d="M 80 128 L 120 128"
          delay={1.05}
          duration={1.2}
          opacity={0.85}
          strokeWidth={1.2}
        />
      </g>
      {!reduced ? (
        <motion.circle
          cx="100"
          cy="60"
          r="2.8"
          className="editorial-intro-emblem-node"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.9 }}
          transition={{ delay: 2.1, duration: 0.5, ease: 'easeOut' }}
        />
      ) : (
        <circle cx="100" cy="60" r="2.8" className="editorial-intro-emblem-node" opacity={0.9} />
      )}
    </svg>
  )
}

export function EditorialIntro() {
  const reduceMotion = useReducedMotion()
  const [show, setShow] = useState(true)
  const reduced = !!reduceMotion

  useLayoutEffect(() => {
    document.body.style.overflow = 'hidden'

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const total = reduced || prefersReduced ? INTRO_MS_REDUCED : INTRO_MS

    const timer = window.setTimeout(() => {
      setShow(false)
      document.body.style.overflow = ''
      window.dispatchEvent(new CustomEvent('editorial:intro-complete'))
    }, total)

    return () => {
      window.clearTimeout(timer)
      document.body.style.overflow = ''
    }
  }, [reduced])

  return (
    <AnimatePresence mode="wait">
      {show ? (
        <motion.div
          key="editorial-intro"
          className="editorial-intro"
          initial={{ y: '0%' }}
          exit={reduced ? { opacity: 0 } : { y: '-100%' }}
          transition={{ duration: 0.9, ease: EASE }}
          aria-hidden
        >
          {/* full-page construction lines — draw in, then fade away */}
          <motion.div
            className="editorial-intro-field-wrap"
            initial={reduced ? false : { opacity: 1 }}
            animate={reduced ? { opacity: 0.35 } : { opacity: [1, 1, 0.12] }}
            transition={
              reduced
                ? { duration: 0.2 }
                : { duration: FIELD_FADE + 0.8, times: [0, FIELD_FADE / (FIELD_FADE + 0.8), 1], ease: 'easeInOut' }
            }
            aria-hidden
          >
            <ConstructionField reduced={reduced} />
          </motion.div>

          <div className="editorial-intro-inner">
            <div className="editorial-intro-emblem-wrap">
              <IntroEmblem reduced={reduced} />
            </div>

            <div className="editorial-intro-nameblock">
              <div className="editorial-intro-name" aria-label={NAME}>
                {NAME.split('').map((char, i) => {
                  const base = NAME_START + i * CHAR_STAGGER
                  if (char === ' ') {
                    return (
                      <span key={`sp-${i}`} className="editorial-intro-name-space" aria-hidden />
                    )
                  }
                  return (
                    <motion.span
                      key={`${char}-${i}`}
                      className="editorial-intro-name-char"
                      initial={reduced ? false : { opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={
                        reduced ? { duration: 0.3 } : { delay: base, duration: 0.7, ease: EASE }
                      }
                    >
                      {char}
                    </motion.span>
                  )
                })}
              </div>

              <motion.span
                className="editorial-intro-role"
                initial={reduced ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: reduced ? 0.2 : 3.35 }}
              >
                {ROLE}
              </motion.span>

              <motion.span
                className="editorial-intro-bar"
                initial={reduced ? false : { scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ duration: 0.7, ease: EASE, delay: reduced ? 0.25 : 3.6 }}
                aria-hidden
              />
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
