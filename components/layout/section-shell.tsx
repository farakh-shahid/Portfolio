import type { ReactNode } from 'react'
import { cn } from '@/lib/utils/classnames'

type SectionShellProps = {
  id?: string
  eyebrow?: string
  title?: string
  description?: string
  className?: string
  children: ReactNode
}

export function SectionShell({ id, eyebrow, title, description, className, children }: SectionShellProps) {
  return (
    <section
      id={id}
      className={cn(
        'mx-auto w-full max-w-6xl border-t border-[var(--border)] px-4 py-[var(--section-y)] md:px-8',
        className,
      )}
    >
      {eyebrow ? <p className="section-eyebrow">{eyebrow}</p> : null}
      {title ? (
        <h2 className="mt-5 font-display text-2xl font-medium tracking-[-0.02em] text-[var(--text-strong)] md:text-3xl">
          {title}
        </h2>
      ) : null}
      {description ? (
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[var(--text-muted)]">{description}</p>
      ) : null}
      <div className="mt-10">{children}</div>
    </section>
  )
}
