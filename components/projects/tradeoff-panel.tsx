export function TradeoffPanel({ tradeoffs }: { tradeoffs: string[] }) {
  return (
    <div>
      <h3 className="text-lg font-semibold text-[var(--text-strong)]">Tradeoffs and decisions</h3>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-[var(--text)]">
        {tradeoffs.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  )
}
