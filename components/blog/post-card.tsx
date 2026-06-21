import Link from 'next/link'
import type { BlogPostData } from '@/types/blog'

export function PostCard({ post }: { post: BlogPostData }) {
  return (
    <article className="rounded-2xl border border-[var(--border)] p-5">
      <p className="text-xs uppercase tracking-[0.14em] text-[var(--text-muted)]">{post.publishedAt}</p>
      <h3 className="mt-2 text-xl font-semibold text-[var(--text-strong)]">{post.title}</h3>
      <p className="mt-2 text-sm text-[var(--text-muted)]">{post.excerpt}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <span key={tag} className="rounded-full border border-[var(--border)] px-2 py-0.5 text-xs text-[var(--text-muted)]">
            {tag}
          </span>
        ))}
      </div>
      <Link href={`/blog/${post.slug}`} className="mt-4 inline-block text-sm font-semibold text-[var(--accent)]">
        Read article
      </Link>
    </article>
  )
}
