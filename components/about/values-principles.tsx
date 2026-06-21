const principles = [
  'Design for operability, not just correctness.',
  'Make tradeoffs explicit and documented.',
  'Prefer measurable improvements over assumptions.',
  'Ship systems that teams can own after handoff.',
]

export function ValuesPrinciples() {
  return (
    <ul className="grid gap-3">
      {principles.map((principle) => (
        <li key={principle} className="rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-[var(--text)]">
          {principle}
        </li>
      ))}
    </ul>
  )
}
