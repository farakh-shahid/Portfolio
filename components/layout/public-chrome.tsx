'use client'

import { usePathname } from 'next/navigation'
import type { ReactNode } from 'react'
import { HeroNavbar } from '@/components/home/hero-navbar'

export function PublicChrome({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  if (pathname === '/') {
    return <>{children}</>
  }
  return (
    <>
      <HeroNavbar />
      {children}
    </>
  )
}
