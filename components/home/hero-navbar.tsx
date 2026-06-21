'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { HiArrowUpRight, HiBars3, HiXMark } from 'react-icons/hi2'
import { ThemeToggle } from '@/components/navigation/theme-toggle'
import { siteConfig } from '@/data/site-config'
import { cn } from '@/lib/utils/classnames'

const navItems = [
  { href: '/projects', label: 'Work' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Writing' },
  { href: '/contact', label: 'Contact' },
]

export function HeroNavbar() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--border)] bg-[var(--bg-0)]/70 backdrop-blur-xl">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 md:h-16 md:px-8">
        <Link
          href="/"
          className="font-display text-lg font-medium tracking-tight text-[var(--text-strong)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
        >
          {siteConfig.name}
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {navItems.map((item) => {
            const isActive = pathname.startsWith(item.href)
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'text-sm text-[var(--text-muted)] transition hover:text-[var(--text-strong)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]',
                  isActive && 'text-[var(--text-strong)]',
                )}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <Link
            href="/contact"
            className="glass-card inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium text-[var(--text-strong)] transition hover:border-[var(--border-strong)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
          >
            Hire me
            <HiArrowUpRight className="text-sm" aria-hidden />
          </Link>
        </div>

        <button
          type="button"
          className="rounded-lg border border-[var(--border)] p-2 text-[var(--text-strong)] md:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((o) => !o)}
        >
          {menuOpen ? <HiXMark className="h-5 w-5" /> : <HiBars3 className="h-5 w-5" />}
        </button>
      </div>

      {menuOpen ? (
        <div id="mobile-nav" className="border-t border-[var(--border)] bg-[var(--bg-0)]/95 px-4 py-4 backdrop-blur-xl md:hidden">
          <nav aria-label="Mobile primary">
            {navItems.map((item) => (
              <Link
                key={`m-${item.href}`}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="block rounded-lg px-3 py-2.5 text-sm text-[var(--text-muted)] hover:bg-[var(--hover-surface)] hover:text-[var(--text-strong)]"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-4 flex items-center gap-3 border-t border-[var(--border)] pt-4">
            <ThemeToggle />
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="glass-card inline-flex flex-1 items-center justify-center gap-1.5 rounded-full px-4 py-2.5 text-sm font-medium text-[var(--text-strong)]"
            >
              Hire me
              <HiArrowUpRight className="text-sm" aria-hidden />
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  )
}
