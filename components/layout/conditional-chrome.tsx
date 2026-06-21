'use client'

import { usePathname } from 'next/navigation'
import { SiteBackdrop } from '@/components/layout/site-backdrop'
import { SiteFooter } from '@/components/layout/site-footer'

export function ConditionalChrome() {
  const pathname = usePathname()
  const isHome = pathname === '/'

  return (
    <>
      {!isHome ? <SiteBackdrop /> : null}
      {!isHome ? <SiteFooter /> : null}
    </>
  )
}
