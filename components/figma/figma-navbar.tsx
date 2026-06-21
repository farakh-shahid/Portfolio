'use client'

import Link from 'next/link'
import { siteConfig } from '@/data/site-config'

const links = [
  { href: '#about', label: 'About' },
  { href: '#work', label: 'Work' },
]

export function FigmaNavbar() {
  return (
    <header className="relative z-50 mx-auto flex max-w-5xl items-center justify-between px-6 py-6 md:px-8">
      <Link href="/" className="flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--figma-border)] bg-white/[0.04] text-lg font-bold text-white">
        F
      </Link>

      <nav className="flex items-center gap-6 md:gap-8" aria-label="Primary">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-sm text-[var(--figma-muted)] transition hover:text-white"
          >
            {link.label}
          </a>
        ))}
        <Link
          href={siteConfig.links.resume ?? '/contact'}
          className="figma-glass rounded-full px-4 py-1.5 text-sm text-white transition hover:border-white/20"
        >
          CV
        </Link>
      </nav>
    </header>
  )
}
