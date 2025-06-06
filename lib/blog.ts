import fs from "fs/promises"
import path from "path"
import matter from "gray-matter"
import type { BlogPost } from "@/types"

const contentDir = path.join(process.cwd(), "content")

export async function fetchBlogPosts(): Promise<BlogPost[]> {
  const files = await fs.readdir(contentDir)
  const posts = await Promise.all(
    files
      .filter((file) => file.endsWith(".md"))
      .map(async (file) => {
        const slug = file.replace(/\.md$/, "")
        const filePath = path.join(contentDir, file)
        const fileContent = await fs.readFile(filePath, "utf8")
        const { data, content } = matter(fileContent)
        return {
          id: slug,
          slug,
          title: data.title,
          date: data.date,
          author: data.author,
          image: data.image,
          excerpt: data.excerpt,
          content,
        } as BlogPost
      })
  )
  // Sort by date descending
  return posts.sort((a, b) => (a.date < b.date ? 1 : -1))
}

export async function fetchBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  const filePath = path.join(contentDir, `${slug}.md`)
  try {
    const fileContent = await fs.readFile(filePath, "utf8")
    const { data, content } = matter(fileContent)
    return {
      id: slug,
      slug,
      title: data.title,
      date: data.date,
      author: data.author,
      image: data.image,
      excerpt: data.excerpt,
      content,
    } as BlogPost
  } catch {
    return null
  }
}
