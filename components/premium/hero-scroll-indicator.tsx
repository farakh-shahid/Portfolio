export function HeroScrollIndicator() {
  return (
    <a href="#story" className="editorial-scroll-mouse" data-hero-fade aria-label="Scroll down to content">
      <svg className="editorial-scroll-arch" viewBox="0 0 140 48" aria-hidden>
        <defs>
          <path id="editorial-scroll-curve" d="M 18 42 Q 70 4 122 42" />
        </defs>
        <text className="editorial-scroll-arch-text">
          <textPath href="#editorial-scroll-curve" startOffset="50%" textAnchor="middle">
            Scroll Down
          </textPath>
        </text>
      </svg>
      <span className="editorial-scroll-mouse-body">
        <span className="editorial-scroll-mouse-wheel" />
      </span>
    </a>
  )
}
