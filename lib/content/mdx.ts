import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'

export function readMdxFile(filePath: string) {
  const source = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(source)
  return { data, content }
}

export function getContentFiles(directory: string) {
  const contentDir = path.join(process.cwd(), directory)
  return fs
    .readdirSync(contentDir)
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => path.join(contentDir, file))
}
