import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'

const BLOG_DIR = path.join(process.cwd(), 'src/content/blog')

export interface PostMeta {
  slug: string
  title: string
  description: string
  date: string
  updated?: string
  author: string
  category: string
  tags: string[]
  image?: string
  imageAlt?: string
  readingTime: number
}

export async function getAllPosts(): Promise<PostMeta[]> {
  if (!fs.existsSync(BLOG_DIR)) return []
  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith('.mdx'))
  const posts = files.map((file) => {
    const slug = file.replace('.mdx', '')
    const raw = fs.readFileSync(path.join(BLOG_DIR, file), 'utf-8')
    const { data, content } = matter(raw)
    const stats = readingTime(content)
    return {
      slug,
      title: data.title || slug,
      description: data.description || '',
      date: data.date || new Date().toISOString(),
      updated: data.updated,
      author: data.author || 'CoRaise Team',
      category: data.category || 'general',
      tags: data.tags || [],
      image: data.image,
      imageAlt: data.imageAlt,
      readingTime: Math.ceil(stats.minutes),
    } satisfies PostMeta
  })

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export async function getPostBySlug(slug: string) {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`)
  if (!fs.existsSync(filePath)) return null
  const raw = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(raw)
  const stats = readingTime(content)
  return {
    meta: {
      slug,
      title: data.title || slug,
      description: data.description || '',
      date: data.date || new Date().toISOString(),
      updated: data.updated,
      author: data.author || 'CoRaise Team',
      category: data.category || 'general',
      tags: data.tags || [],
      image: data.image,
      imageAlt: data.imageAlt,
      readingTime: Math.ceil(stats.minutes),
    } satisfies PostMeta,
    content,
  }
}

export async function getPostsByCategory(category: string): Promise<PostMeta[]> {
  const posts = await getAllPosts()
  return posts.filter((p) => p.category === category)
}
