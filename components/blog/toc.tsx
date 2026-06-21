export function Toc({ headings }: { headings: string[] }) {
  return (
    <aside className="rounded-xl border border-[var(--border)] p-4">
      <p className="text-xs uppercase tracking-[0.18em] text-[var(--text-muted)]">Contents</p>
      <ul className="mt-3 space-y-2 text-sm text-[var(--text)]">
        {headings.map((heading) => (
          <li key={heading}>{heading}</li>
        ))}
      </ul>
    </aside>
  )
}
