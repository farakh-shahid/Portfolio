import Link from 'next/link'
import type { ReactNode } from 'react'
import { cn } from '@/lib/utils/classnames'

type ButtonProps = {
  href: string
  children: ReactNode
  variant?: 'primary' | 'secondary'
  className?: string
}

export function Button({ href, children, variant = 'primary', className }: ButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        'inline-flex items-center rounded-full px-5 py-2.5 text-sm font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]',
        variant === 'primary'
          ? 'bg-[var(--text-strong)] text-[var(--bg-0)] hover:opacity-90'
          : 'border border-[var(--border)] text-[var(--text-strong)] hover:bg-white/[0.04]',
        className,
      )}
    >
      {children}
    </Link>
  )
}
