'use client'

import { useEffect, useState } from 'react'
import { premiumNav, premiumProfile } from '@/data/premium-portfolio'

export function PremiumNav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background,border] duration-300 ${
        scrolled ? 'border-b border-[var(--border)] bg-[var(--ink)]/88 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-8">
        <a href="#" className="premium-focus premium-display text-sm font-medium tracking-tight md:text-base">
          {premiumProfile.name.split(' ')[0]}
        </a>
        <nav className="flex items-center gap-5 md:gap-8" aria-label="Primary">
          {premiumNav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="premium-focus text-xs text-[var(--paper-muted)] transition hover:text-[var(--paper)] md:text-sm"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
