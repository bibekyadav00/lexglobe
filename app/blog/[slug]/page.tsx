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

  // Convert markdown content to HTML (enhanced version)
  const contentHtml = post.content
    .replace(/^# (.*$)/gm, '<h1 class="text-3xl font-bold mt-10 mb-6 text-primary">$1</h1>')
    .replace(/^## (.*$)/gm, '<h2 class="text-2xl font-bold mt-8 mb-4 text-primary/90">$1</h2>')
    .replace(/^### (.*$)/gm, '<h3 class="text-xl font-bold mt-6 mb-3 text-primary/80">$1</h3>')
    .replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold">$1</strong>')
    .replace(/\*(.*?)\*/g, '<em class="italic">$1</em>')
    .replace(/\n\n/g, '</p><p class="my-4 text-gray-700 leading-relaxed">')
    .replace(/^- (.*$)/gm, '<li class="ml-6 list-disc my-2 text-gray-700">$1</li>')
    .replace(/<\/li>\n<li/g, "</li><li")
    .replace(/^1\. (.*$)/gm, '<li class="ml-6 list-decimal my-2 text-gray-700">$1</li>')

  // Get image URL based on slug
  const getImageUrl = (slug: string) => {
    const imageMap: Record<string, string> = {
      "corporate-law-nepal-overview":
        "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "foreign-direct-investment-nepal":
        "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "taxation-system-nepal":
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "labor-laws-nepal":
        "https://images.unsplash.com/photo-1521791055366-0d553872125f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "corporate-governance-nepal":
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "company-registration-nepal":
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "intellectual-property-nepal":
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "contract-law-nepal":
        "https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    }
    return (
      imageMap[slug] ||
      "https://images.unsplash.com/photo-1505664194779-8beaceb93744?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    )
  }

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
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Insights
              </Link>
            </Button>
            <h1 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">{post.title}</h1>
            <div className="flex items-center space-x-4">
              <div className="text-sm">
                <span>By LexGlobe Partners</span>
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
                src={getImageUrl(params.slug) || "/placeholder.svg"}
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
              <p className="my-4 text-lg font-medium text-gray-800">{post.excerpt}</p>
              <div
                dangerouslySetInnerHTML={{ __html: contentHtml }}
                className="prose-headings:text-primary prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-blockquote:border-l-primary prose-blockquote:bg-gray-50 prose-blockquote:py-2 prose-blockquote:px-4 prose-blockquote:italic"
              />
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
                      src="https://images.unsplash.com/photo-1604328698692-f76ea9498e76?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
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
                      src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
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
