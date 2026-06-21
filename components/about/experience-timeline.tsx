import { timeline } from '@/data/timeline'
import { Card } from '@/components/ui/card'

export function ExperienceTimeline() {
  return (
    <div className="grid gap-3">
      {timeline.map((item) => (
        <Card key={item.period}>
          <p className="text-xs uppercase tracking-[0.15em] text-[var(--text-muted)]">{item.period}</p>
          <h3 className="mt-1 text-lg font-semibold text-[var(--text-strong)]">
            {item.role} · {item.company}
          </h3>
          <p className="mt-2 text-sm text-[var(--text)]">{item.impact}</p>
        </Card>
      ))}
    </div>
  )
}
