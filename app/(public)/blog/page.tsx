import { PostCard } from '@/components/blog/post-card'
import { SectionShell } from '@/components/layout/section-shell'
import { getAllBlogPosts } from '@/lib/content/loaders'

export default function BlogPage() {
  const posts = getAllBlogPosts()

  return (
    <main>
      <SectionShell title="Blog / Insights" description="Architecture thoughts, performance lessons, and practical engineering write-ups.">
        <div className="grid gap-4 md:grid-cols-2">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </SectionShell>
    </main>
  )
}
