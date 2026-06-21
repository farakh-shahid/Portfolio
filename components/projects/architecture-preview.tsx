import { ServiceFlow } from '@/components/diagrams/service-flow'

export function ArchitecturePreview() {
  return (
    <div>
      <h3 className="text-lg font-semibold text-[var(--text-strong)]">Architecture overview</h3>
      <p className="mt-1 text-sm text-[var(--text-muted)]">Request flow and async processing boundaries.</p>
      <div className="mt-3">
        <ServiceFlow />
      </div>
    </div>
  )
}
