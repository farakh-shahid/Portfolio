export function Tag({ label }: { label: string }) {
  return (
    <span className="rounded-md border border-[var(--border)] bg-white/[0.02] px-2.5 py-1 font-mono text-[10px] text-[var(--text-muted)]">
      {label}
    </span>
  )
}
