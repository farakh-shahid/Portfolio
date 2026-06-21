import { BioStory } from '@/components/about/bio-story'
import { ExperienceTimeline } from '@/components/about/experience-timeline'
import { SkillsMap } from '@/components/about/skills-map'
import { ValuesPrinciples } from '@/components/about/values-principles'
import { SectionShell } from '@/components/layout/section-shell'

export default function AboutPage() {
  return (
    <main>
      <SectionShell title="About" description="Staff-level engineering focus across product, platform, and reliability.">
        <BioStory />
      </SectionShell>
      <SectionShell title="Experience timeline">
        <ExperienceTimeline />
      </SectionShell>
      <SectionShell title="Skills mapped to outcomes">
        <SkillsMap />
      </SectionShell>
      <SectionShell title="Engineering principles">
        <ValuesPrinciples />
      </SectionShell>
    </main>
  )
}
