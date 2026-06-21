import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { Tag } from '@/components/ui/tag'
import { getAllProjects } from '@/lib/content/loaders'
import { cn } from '@/lib/utils/classnames'

const accentWidths = ['w-2/3', 'w-1/2', 'w-3/5']

export function FeaturedCaseStudies() {
  const projects = getAllProjects().slice(0, 3)

  return (
    <div className="grid gap-5 md:grid-cols-3">
      {projects.map((project, i) => (
        <Card key={project.slug} className="group flex h-full flex-col overflow-hidden !p-0">
          <div className="px-5 pt-5 md:px-6 md:pt-6">
            <div className={cn('card-accent-bar', accentWidths[i % accentWidths.length])} />
            <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--text-muted)]">
              {project.role}
            </p>
            <h3 className="mt-2 text-lg font-semibold tracking-tight text-[var(--text-strong)] transition group-hover:text-[var(--accent-soft)]">
              {project.title}
            </h3>
          </div>
          <div className="flex flex-1 flex-col px-5 pb-5 md:px-6 md:pb-6">
            <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--text-muted)]">{project.summary}</p>
            <p className="mt-5 text-sm">
              <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--accent)]">Impact</span>
              <span className="mt-1 block text-lg font-semibold tabular-nums text-[var(--text-strong)]">
                {project.metrics[0]?.value}{' '}
                <span className="text-sm font-normal text-[var(--text-muted)]">{project.metrics[0]?.label}</span>
              </span>
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.stack.slice(0, 3).map((item) => (
                <Tag key={item} label={item} />
              ))}
            </div>
            <Link
              href={`/projects/${project.slug}`}
              className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-[var(--text-strong)] transition hover:text-[var(--accent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
            >
              Read case study
              <span aria-hidden className="transition group-hover:translate-x-0.5">
                →
              </span>
            </Link>
          </div>
        </Card>
      ))}
    </div>
  )
}
