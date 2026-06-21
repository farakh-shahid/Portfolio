import { FigmaProjectCard } from '@/components/figma/figma-project-card'
import { getAllProjects } from '@/lib/content/loaders'

export function FigmaProjects() {
  const projects = getAllProjects().slice(0, 3)

  return (
    <section id="work" className="relative mx-auto max-w-5xl space-y-24 px-6 py-16 md:space-y-32 md:px-8 md:py-24">
      {projects.map((project, i) => (
        <FigmaProjectCard key={project.slug} project={project} index={i} />
      ))}
    </section>
  )
}
