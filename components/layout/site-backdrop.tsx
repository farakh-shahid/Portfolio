/** Ambient canvas — soft glows + film grain across the site. */
export function SiteBackdrop() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 min-h-full overflow-hidden bg-[var(--bg-0)]">
      <div className="absolute -left-[15%] top-[5%] h-[min(560px,70vw)] w-[min(560px,70vw)] rounded-full bg-[var(--accent)] opacity-[0.07] blur-[120px] animate-hero-ambient" />
      <div
        className="absolute -right-[10%] top-[35%] h-[min(440px,55vw)] w-[min(440px,55vw)] rounded-full bg-teal-400 opacity-[0.05] blur-[100px] animate-hero-ambient"
        style={{ animationDelay: '-6s' }}
      />
      <div className="absolute bottom-[10%] left-[30%] h-[320px] w-[320px] rounded-full bg-emerald-300 opacity-[0.03] blur-[90px] animate-hero-ambient" style={{ animationDelay: '-12s' }} />
      <div className="absolute inset-0 bg-noise" />
    </div>
  )
}
