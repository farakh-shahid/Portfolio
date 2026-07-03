'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useLayoutEffect, useState } from 'react'
import { editorialProfile } from '@/data/editorial-portfolio'

const EASE = [0.76, 0, 0.24, 1] as const
const INTRO_MS = 3200
const INTRO_MS_REDUCED = 1100

export function EditorialIntro() {
  const [show, setShow] = useState(true)

  useLayoutEffect(() => {
    document.body.style.overflow = 'hidden'

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const total = reduced ? INTRO_MS_REDUCED : INTRO_MS

    const timer = window.setTimeout(() => {
      setShow(false)
      document.body.style.overflow = ''
    }, total)

    return () => {
      window.clearTimeout(timer)
      document.body.style.overflow = ''
    }
  }, [])

  return (
    <AnimatePresence mode="wait">
      {show ? (
        <motion.div
          key="editorial-intro"
          className="editorial-intro"
          initial={{ opacity: 1 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.9, ease: EASE }}
          aria-hidden
        >
          <div className="editorial-intro-inner">
            <motion.span
              className="editorial-intro-kicker"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
            >
              Entering portfolio
            </motion.span>

            <h2 className="editorial-intro-name">
              <span className="editorial-intro-line">
                <motion.span
                  initial={{ y: '110%' }}
                  animate={{ y: '0%' }}
                  transition={{ duration: 0.85, ease: EASE, delay: 0.18 }}
                >
                  {editorialProfile.name}
                  <em>.</em>
                </motion.span>
              </span>
            </h2>

            <div className="editorial-intro-role">
              <motion.span
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: 'easeOut', delay: 0.55 }}
              >
                {editorialProfile.title}
              </motion.span>
            </div>

            <motion.div
              className="editorial-intro-bar"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.6, ease: 'easeInOut', delay: 0.3 }}
            />
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
