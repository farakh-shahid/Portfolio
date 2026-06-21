'use client'

import { useMemo } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

const filters = ['All', 'React', 'Next.js', 'NestJS', 'Prisma', 'PostgreSQL', 'AWS']

export function ProjectFilterBar() {
  const params = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()
  const active = useMemo(() => params.get('tech') ?? 'All', [params])

  return (
    <div className="flex flex-wrap gap-2">
      {filters.map((filter) => (
        <button
          key={filter}
          type="button"
          onClick={() => {
            const next = new URLSearchParams(params.toString())
            if (filter === 'All') next.delete('tech')
            else next.set('tech', filter)
            router.replace(`${pathname}?${next.toString()}`)
          }}
          className={`rounded-full border px-3 py-1 text-sm ${
            active === filter
              ? 'border-[var(--primary)] text-[var(--text-strong)]'
              : 'border-[var(--border)] text-[var(--text-muted)]'
          }`}
        >
          {filter}
        </button>
      ))}
    </div>
  )
}
