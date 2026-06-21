import { Button } from '@/components/ui/button'

export function CtaBand() {
  return (
    <div className="glass-card relative overflow-hidden rounded-2xl p-8 md:flex md:items-center md:justify-between md:p-10">
      <div className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full bg-[var(--accent-glow)] blur-3xl" />
      <div className="pointer-events-none absolute -bottom-8 left-1/4 h-32 w-32 rounded-full bg-teal-400/10 blur-2xl" />
      <div className="relative">
        <p className="section-eyebrow">Open to opportunities</p>
        <h3 className="mt-4 font-display text-2xl font-medium tracking-tight text-[var(--text-strong)] md:text-3xl">
          Let&apos;s talk about your scaling problem.
        </h3>
      </div>
      <div className="relative mt-8 md:mt-0">
        <Button href="/contact" className="btn-primary !rounded-full !px-6 !py-3">
          Start a conversation
        </Button>
      </div>
    </div>
  )
}
