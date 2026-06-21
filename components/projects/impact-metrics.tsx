import type { ProjectMetric } from '@/types/project'

export function ImpactMetrics({ metrics }: { metrics: ProjectMetric[] }) {
  return (
    <div className="grid gap-3 md:grid-cols-3">
      {metrics.map((metric) => (
        <div key={metric.label} className="rounded-xl border border-[var(--border)] p-4">
          <p className="text-2xl font-semibold text-[var(--text-strong)]">{metric.value}</p>
          <p className="text-sm text-[var(--text)]">{metric.label}</p>
          <p className="text-xs text-[var(--text-muted)]">{metric.context}</p>
        </div>
      ))}
    </div>
  )
}
