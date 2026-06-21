export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--border)]">
      <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-10 text-xs text-[var(--text-muted)] md:px-8">
        <p>
          <span className="font-display text-sm text-[var(--text-strong)]">Muhammad Farrukh</span>
          <span className="mx-2 text-[var(--border-strong)]">·</span>
          Senior Full Stack Engineer
        </p>
        <p className="font-mono tracking-wide">Made-with: React</p>
      </div>
    </footer>
  )
}
