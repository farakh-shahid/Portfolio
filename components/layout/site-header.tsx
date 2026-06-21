import Link from 'next/link'
import { siteConfig } from '@/data/site-config'
import { MobileNavSheet } from '@/components/navigation/mobile-nav-sheet'
import { PrimaryNav } from '@/components/navigation/primary-nav'
import { ThemeToggle } from '@/components/navigation/theme-toggle'

export function SiteHeader() {
  return (
    <header className="z-40 px-3 pt-3 md:px-6">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-2 py-2 md:px-0">
        <Link href="/" className="text-sm font-semibold text-[var(--text-strong)]">
          {siteConfig.name}
          <span className="ml-2 text-[var(--text-muted)]">{siteConfig.role}</span>
        </Link>
        <div className="flex items-center gap-3">
          <PrimaryNav />
          <ThemeToggle />
          <MobileNavSheet />
        </div>
      </div>
    </header>
  )
}
