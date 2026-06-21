import path from 'node:path'
import readingTime from 'reading-time'
import type { BlogPostData } from '@/types/blog'
import type { BlogPostWithBody, ProjectWithBody } from '@/types/content'
import type { ProjectData } from '@/types/project'
import { getContentFiles, readMdxFile } from '@/lib/content/mdx'

function projectPath(slug: string) {
  return path.join(process.cwd(), 'content/projects', `${slug}.mdx`)
}

function blogPath(slug: string) {
  return path.join(process.cwd(), 'content/blog', `${slug}.mdx`)
}

export function getAllProjects(): ProjectData[] {
  const files = getContentFiles('content/projects')
  return files
    .map((filePath) => {
      const { data } = readMdxFile(filePath)
      return data as ProjectData
    })
    .sort((a, b) => (a.createdAt > b.createdAt ? -1 : 1))
}

export function getProjectBySlug(slug: string): ProjectWithBody {
  const { data, content } = readMdxFile(projectPath(slug))
  return { ...(data as ProjectData), content }
}

export function getAllBlogPosts(): BlogPostData[] {
  const files = getContentFiles('content/blog')
  return files
    .map((filePath) => {
      const { data, content } = readMdxFile(filePath)
      const minutes = readingTime(content).text
      return { ...(data as Omit<BlogPostData, 'readingTime'>), readingTime: minutes }
    })
    .sort((a, b) => (a.publishedAt > b.publishedAt ? -1 : 1))
}

export function getBlogPostBySlug(slug: string): BlogPostWithBody {
  const { data, content } = readMdxFile(blogPath(slug))
  const minutes = readingTime(content).text
  return { ...(data as Omit<BlogPostData, 'readingTime'>), readingTime: minutes, content }
}
