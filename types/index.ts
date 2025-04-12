// Blog post type definition
export interface BlogPost {
  id: string
  slug: string
  title: string
  date: string
  author: string
  image?: string
  excerpt: string
  content: string
  source?: string
}

// Legal image type definition
export interface LegalImage {
  id: string
  url: string
  alt: string
  width: number
  height: number
}

