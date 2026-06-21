'use client'

import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { HeroCopy } from '@/components/home/hero-copy'
import { HeroMetrics } from '@/components/home/hero-metrics'
import { HeroNavbar } from '@/components/home/hero-navbar'
import { HeroPanel } from '@/components/home/hero-panel'
import { HeroSpotlight } from '@/components/home/hero-spotlight'
import { ScrollProgress } from '@/components/home/scroll-progress'
import { heroContainer } from '@/components/home/use-hero-motion'

export function Hero() {
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, reduceMotion ? 1 : 0.25])
  const y = useTransform(scrollYProgress, [0, 0.2], [0, reduceMotion ? 0 : -32])

  return (
    <>
      <ScrollProgress />
      <section className="relative min-h-[88svh] overflow-hidden pb-10 md:pb-14">
        <HeroSpotlight />
        <HeroNavbar />

        <motion.div
          style={reduceMotion ? undefined : { opacity, y }}
          className="relative z-10 mx-auto flex max-w-6xl flex-col justify-center px-4 pt-12 md:px-8 md:pt-16 lg:min-h-[calc(88svh-4rem)]"
        >
          <motion.div variants={heroContainer} initial="hidden" animate="show">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-14 xl:gap-20">
              <div className="max-w-xl">
                <HeroCopy />
              </div>
              <HeroPanel />
            </div>
            <HeroMetrics />
          </motion.div>
        </motion.div>
      </section>
    </>
  )
}
