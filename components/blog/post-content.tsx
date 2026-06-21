import type { ReactNode } from 'react'

export function PostContent({ children }: { children: ReactNode }) {
  return <article className="prose-content max-w-3xl">{children}</article>
}
