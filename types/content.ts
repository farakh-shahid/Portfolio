import type { BlogPostData } from './blog'
import type { ProjectData } from './project'

export type ProjectWithBody = ProjectData & { content: string }
export type BlogPostWithBody = BlogPostData & { content: string }
