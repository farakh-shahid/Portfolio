import Link from 'next/link'
import type { ProjectData } from '@/types/project'
import { Card } from '@/components/ui/card'
import { Tag } from '@/components/ui/tag'

export function ProjectCaseCard({ project }: { project: ProjectData }) {
  return (
    <Card className="flex h-full flex-col">
      <h3 className="text-xl font-semibold text-[var(--text-strong)]">{project.title}</h3>
      <p className="mt-2 text-sm text-[var(--text-muted)]">
        <strong>Problem:</strong> {project.problem}
      </p>
      <p className="mt-2 text-sm text-[var(--text-muted)]">
        <strong>Solution:</strong> {project.solution}
      </p>
      <p className="mt-2 text-sm text-[var(--text)]">
        <strong>Impact:</strong> {project.metrics[0]?.value} {project.metrics[0]?.label}
      </p>
      <div className="mt-3 flex flex-wrap gap-2">
        {project.stack.map((item) => (
          <Tag key={item} label={item} />
        ))}
      </div>
      <Link href={`/projects/${project.slug}`} className="mt-4 text-sm font-semibold text-[var(--accent)]">
        View technical breakdown
      </Link>
    </Card>
  )
}
