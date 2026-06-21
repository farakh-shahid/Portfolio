import type { MetadataRoute } from 'next'
import { getAllBlogPosts, getAllProjects } from '@/lib/content/loaders'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://example.com'
  const routes = ['', '/about', '/projects', '/blog', '/contact']

  const staticRoutes = routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
  }))

  const projectRoutes = getAllProjects().map((project) => ({
    url: `${base}/projects/${project.slug}`,
    lastModified: new Date(project.createdAt),
  }))

  const blogRoutes = getAllBlogPosts().map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
  }))

  return [...staticRoutes, ...projectRoutes, ...blogRoutes]
}
