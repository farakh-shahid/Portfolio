export function DataModelDiagram() {
  return (
    <div className="rounded-xl border border-[var(--border)] p-4">
      <p className="mb-3 text-xs uppercase tracking-[0.2em] text-[var(--text-muted)]">Data model</p>
      <div className="grid gap-2 text-sm text-[var(--text)]">
        <div className="rounded-lg border border-[var(--border)] bg-black/10 p-3">User</div>
        <div className="rounded-lg border border-[var(--border)] bg-black/10 p-3">Project</div>
        <div className="rounded-lg border border-[var(--border)] bg-black/10 p-3">DeploymentEvent</div>
      </div>
    </div>
  )
}
