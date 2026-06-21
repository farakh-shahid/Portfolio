export function FigmaGlowDivider() {
  return (
    <div className="relative flex h-48 items-center justify-center md:h-56" aria-hidden>
      <div className="figma-glow-orb h-56 w-56 opacity-90 md:h-72 md:w-72" />
      <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-xl font-bold text-white shadow-[0_0_40px_rgba(168,85,247,0.3)]">
        F
      </div>
    </div>
  )
}
