import { ProjectFilterBar } from '@/components/projects/project-filter-bar'
import { ProjectCaseCard } from '@/components/projects/project-case-card'
import { SectionShell } from '@/components/layout/section-shell'
import { getAllProjects } from '@/lib/content/loaders'

type ProjectsPageProps = {
  searchParams: Promise<{ tech?: string }>
}

export default async function ProjectsPage({ searchParams }: ProjectsPageProps) {
  const params = await searchParams
  const activeTech = params.tech
  const allProjects = getAllProjects()
  const projects = activeTech ? allProjects.filter((p) => p.stack.includes(activeTech)) : allProjects

  return (
    <main>
      <SectionShell title="Projects" description="Production case studies, not toy demos.">
        <ProjectFilterBar />
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCaseCard key={project.slug} project={project} />
          ))}
        </div>
      </SectionShell>
    </main>
  )
}
