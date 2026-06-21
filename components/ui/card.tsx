import type { ReactNode } from 'react'
import { cn } from '@/lib/utils/classnames'

export function Card({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn('glass-card glass-card-hover rounded-2xl p-5 md:p-6', className)}>
      {children}
    </div>
  )
}
