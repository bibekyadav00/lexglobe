import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { fetchBlogPostBySlug } from "@/lib/blog"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await fetchBlogPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  // Convert markdown content to HTML (simple version)
  const contentHtml = post.content
    .replace(/^# (.*$)/gm, '<h1 class="text-3xl font-bold mt-8 mb-4">$1</h1>')
    .replace(/^## (.*$)/gm, '<h2 class="text-2xl font-bold mt-6 mb-3">$1</h2>')
    .replace(/^### (.*$)/gm, '<h3 class="text-xl font-bold mt-5 mb-2">$1</h3>')
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.*?)\*/g, "<em>$1</em>")
    .replace(/\n\n/g, '</p><p class="my-4">')
    .replace(/^- (.*$)/gm, '<li class="ml-6 list-disc">$1</li>')
    .replace(/<\/li>\n<li/g, "</li><li")

  return (
    <div className="bg-gradient-to-b from-background to-muted/30">
      {/* Hero Section */}
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <Button
              asChild
              variant="outline"
              className="mb-6 border-white text-white hover:bg-white hover:text-primary"
            >
              <Link href="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
              </Link>
            </Button>
            <h1 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">{post.title}</h1>
            <div className="flex items-center space-x-4">
              <div className="text-sm">
                <span>By {post.author}</span>
                <span className="mx-2">•</span>
                <span>{post.date}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-8">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <div className="relative h-[300px] w-full overflow-hidden rounded-lg md:h-[400px]">
              <Image
                src={post.image || "/placeholder.svg?height=400&width=800"}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-8">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <article className="prose prose-lg max-w-none">
              <p className="my-4 text-lg font-medium">{post.excerpt}</p>
              <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
            </article>

            {/* Share and Tags */}
            <div className="mt-12 border-t border-border pt-6">
              <div className="flex flex-wrap items-center justify-between">
                <div>
                  <h3 className="mb-2 text-lg font-medium">Share this article</h3>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      Facebook
                    </Button>
                    <Button variant="outline" size="sm">
                      Twitter
                    </Button>
                    <Button variant="outline" size="sm">
                      LinkedIn
                    </Button>
                  </div>
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-medium">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    <Button variant="secondary" size="sm">
                      Corporate Law
                    </Button>
                    <Button variant="secondary" size="sm">
                      Nepal
                    </Button>
                    <Button variant="secondary" size="sm">
                      Legal
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="bg-muted py-16">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-2xl font-bold">Related Articles</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <Link href="/blog/foreign-direct-investment-nepal" className="group">
                <div className="overflow-hidden rounded-lg bg-card transition-all hover:shadow-md">
                  <div className="relative h-48 w-full">
                    <Image
                      src="/placeholder.svg?height=200&width=400&text=FDI+Nepal"
                      alt="FDI in Nepal"
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="mb-2 text-lg font-medium">
                      Foreign Direct Investment in Nepal: Legal Framework and Opportunities
                    </h3>
                    <p className="text-sm text-muted-foreground">February 28, 2025</p>
                  </div>
                </div>
              </Link>
              <Link href="/blog/taxation-system-nepal" className="group">
                <div className="overflow-hidden rounded-lg bg-card transition-all hover:shadow-md">
                  <div className="relative h-48 w-full">
                    <Image
                      src="/placeholder.svg?height=200&width=400&text=Taxation+Nepal"
                      alt="Taxation in Nepal"
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="mb-2 text-lg font-medium">Understanding the Taxation System in Nepal</h3>
                    <p className="text-sm text-muted-foreground">January 20, 2025</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

