'use client'

import { useReducedMotion } from 'framer-motion'
import { PremiumAbout } from '@/components/premium/premium-about'
import { PremiumBackdrop } from '@/components/premium/premium-backdrop'
import { PremiumContact, PremiumFooter } from '@/components/premium/premium-contact'
import { CustomCursor } from '@/components/premium/custom-cursor'
import { PremiumExperience } from '@/components/premium/premium-experience'
import { PremiumHero } from '@/components/premium/premium-hero'
import { PremiumNav } from '@/components/premium/premium-nav'
import { PremiumProjects } from '@/components/premium/premium-projects'
import { PremiumSkills } from '@/components/premium/premium-skills'
import { usePremiumScroll } from '@/components/premium/use-premium-scroll'

export function PremiumPortfolio() {
  const reduceMotion = useReducedMotion()
  usePremiumScroll(!reduceMotion)

  return (
    <div className="premium relative min-h-screen">
      <PremiumBackdrop />
      <CustomCursor />
      <PremiumNav />
      <main>
        <PremiumHero />
        <PremiumAbout />
        <PremiumSkills />
        <PremiumExperience />
        <PremiumProjects />
        <PremiumContact />
      </main>
      <PremiumFooter />
    </div>
  )
}
