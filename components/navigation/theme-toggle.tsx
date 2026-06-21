'use client'

import { useTheme } from 'next-themes'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const isDark = theme !== 'light'

  return (
    <button
      type="button"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="rounded-full border border-[var(--border)] px-3 py-1.5 text-xs font-medium text-[var(--text-muted)] transition hover:bg-white/[0.04] hover:text-[var(--text-strong)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
    >
      {isDark ? 'Light' : 'Dark'}
    </button>
  )
}
