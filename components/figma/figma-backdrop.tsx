export function FigmaBackdrop() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 overflow-hidden">
      <div className="figma-glow-orb -left-32 top-20 h-[420px] w-[420px] opacity-80" />
      <div className="figma-glow-orb right-0 top-[40%] h-[500px] w-[500px] opacity-60" />
      <div className="figma-glow-orb bottom-0 left-1/3 h-[400px] w-[400px] opacity-50" />
    </div>
  )
}
