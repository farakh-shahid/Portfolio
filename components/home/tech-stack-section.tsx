import { fullTechStack } from '@/data/systems-story'

export function TechStackSection() {
  return (
    <div className="flex flex-wrap gap-2.5">
      {fullTechStack.map((tech) => (
        <span
          key={tech}
          className="rounded-full border border-[var(--border)] bg-white/[0.02] px-3.5 py-1.5 font-mono text-xs text-[var(--text-muted)] transition hover:border-[var(--accent)]/40 hover:bg-[var(--accent-glow)] hover:text-[var(--text-strong)]"
        >
          {tech}
        </span>
      ))}
    </div>
  )
}
