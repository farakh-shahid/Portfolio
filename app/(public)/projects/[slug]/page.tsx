import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { ArchitecturePreview } from '@/components/projects/architecture-preview'
import { ImpactMetrics } from '@/components/projects/impact-metrics'
import { TradeoffPanel } from '@/components/projects/tradeoff-panel'
import { SectionShell } from '@/components/layout/section-shell'
import { getAllProjects, getProjectBySlug } from '@/lib/content/loaders'

type ProjectDetailProps = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllProjects().map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({ params }: ProjectDetailProps): Promise<Metadata> {
  const { slug } = await params
  const project = getAllProjects().find((item) => item.slug === slug)
  if (!project) return {}
  return {
    title: project.title,
    description: project.summary,
  }
}

export default async function ProjectDetailPage({ params }: ProjectDetailProps) {
  const { slug } = await params
  const project = getAllProjects().find((item) => item.slug === slug)
  if (!project) notFound()
  const detail = getProjectBySlug(slug)

  return (
    <main>
      <SectionShell title={detail.title} description={detail.summary}>
        <p className="text-sm text-[var(--text-muted)]">
          {detail.role} · {detail.timeline}
        </p>
      </SectionShell>
      <SectionShell title="Impact">
        <ImpactMetrics metrics={detail.metrics} />
      </SectionShell>
      <SectionShell title="Architecture and tradeoffs">
        <div className="grid gap-6 md:grid-cols-2">
          <ArchitecturePreview />
          <TradeoffPanel tradeoffs={detail.tradeoffs} />
        </div>
      </SectionShell>
      <SectionShell title="Security considerations">
        <ul className="list-disc space-y-2 pl-5 text-[var(--text)]">
          {detail.security.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </SectionShell>
      <SectionShell title="Deep technical breakdown">
        <article className="prose-content max-w-3xl">
          <MDXRemote source={detail.content} />
        </article>
      </SectionShell>
    </main>
  )
}
