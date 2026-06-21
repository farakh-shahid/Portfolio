import { FigmaBackdrop } from '@/components/figma/figma-backdrop'
import { FigmaContact } from '@/components/figma/figma-contact'
import { FigmaExperience } from '@/components/figma/figma-experience'
import { FigmaGlowDivider } from '@/components/figma/figma-glow-divider'
import { FigmaHero } from '@/components/figma/figma-hero'
import { FigmaNavbar } from '@/components/figma/figma-navbar'
import { FigmaProjects } from '@/components/figma/figma-projects'
import { FigmaTechSection } from '@/components/figma/figma-tech-section'

export function FigmaHome() {
  return (
    <main className="figma-portfolio relative min-h-screen">
      <FigmaBackdrop />
      <div className="relative z-10">
        <FigmaNavbar />
        <FigmaHero />
        <FigmaExperience />
        <FigmaTechSection />
        <FigmaGlowDivider />
        <FigmaProjects />
        <FigmaContact />
      </div>
    </main>
  )
}
