import { FigmaProjectCard } from '@/components/figma/figma-project-card'
import { editorialProjects } from '@/data/editorial-portfolio'

export function FigmaProjects() {
  return (
    <section id="work" className="relative mx-auto max-w-5xl space-y-24 px-6 py-16 md:space-y-32 md:px-8 md:py-24">
      {editorialProjects.slice(0, 3).map((project, i) => (
        <FigmaProjectCard key={project.num} project={project} index={i} />
      ))}
    </section>
  )
}
