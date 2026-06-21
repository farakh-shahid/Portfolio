import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { PostContent } from '@/components/blog/post-content'
import { Toc } from '@/components/blog/toc'
import { SectionShell } from '@/components/layout/section-shell'
import { formatDate } from '@/lib/utils/dates'
import { getAllBlogPosts, getBlogPostBySlug } from '@/lib/content/loaders'

type BlogDetailProps = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllBlogPosts().map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: BlogDetailProps): Promise<Metadata> {
  const { slug } = await params
  const post = getAllBlogPosts().find((item) => item.slug === slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.excerpt,
  }
}

export default async function BlogDetailPage({ params }: BlogDetailProps) {
  const { slug } = await params
  const post = getAllBlogPosts().find((item) => item.slug === slug)
  if (!post) notFound()
  const detail = getBlogPostBySlug(slug)
  const headings = detail.content
    .split('\n')
    .filter((line) => line.startsWith('## '))
    .map((line) => line.replace('## ', ''))

  return (
    <main>
      <SectionShell title={detail.title} description={detail.excerpt}>
        <p className="text-sm text-[var(--text-muted)]">
          {formatDate(detail.publishedAt)} · {detail.readingTime}
        </p>
      </SectionShell>
      <SectionShell>
        <div className="grid gap-6 md:grid-cols-[1fr_280px]">
          <PostContent>
            <MDXRemote source={detail.content} />
          </PostContent>
          <Toc headings={headings} />
        </div>
      </SectionShell>
    </main>
  )
}
