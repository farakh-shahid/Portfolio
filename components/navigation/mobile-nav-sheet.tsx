'use client'

import Link from 'next/link'
import { useState } from 'react'

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
  { href: '/classic', label: 'Classic' },
]

export function MobileNavSheet() {
  const [open, setOpen] = useState(false)

  return (
    <div className="md:hidden">
      <button
        type="button"
        className="rounded-md border border-[var(--border)] px-3 py-1.5 text-sm"
        onClick={() => setOpen((v) => !v)}
      >
        Menu
      </button>
      {open ? (
        <div className="absolute right-4 top-14 z-50 min-w-44 rounded-xl border border-[var(--border)] bg-[var(--bg-1)] p-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-3 py-2 text-sm text-[var(--text-muted)] hover:bg-black/10 hover:text-[var(--text-strong)]"
            >
              {item.label}
            </Link>
          ))}
        </div>
      ) : null}
    </div>
  )
}
