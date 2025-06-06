import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Search, Filter } from "lucide-react"
import { fetchBlogPosts } from "@/lib/blog"

export default async function BlogPage() {
  const posts = await fetchBlogPosts()

  // Fallback images if post.image is missing
  const fallbackImages = [
    "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1505664194779-8beaceb93744?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1589578527966-fdac0f44566c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1521791055366-0d553872125f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1479142506502-19b3a3b7ff33?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  ]

  const postsWithImages = posts.map((post, index) => ({
    ...post,
    image: post.image || fallbackImages[index % fallbackImages.length],
  }))

  return (
    <div className="bg-gradient-to-b from-background via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-indigo-600 opacity-90" />
        <div className="container relative z-10 text-center text-white">
          <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">Legal Insights</h1>
          <p className="mx-auto max-w-3xl text-lg md:text-xl">
            Stay updated with the latest legal developments and insights on corporate law in Nepal.
          </p>
          {/* Search Bar */}
          <div className="mx-auto mt-8 max-w-2xl">
            <div className="flex rounded-full bg-white/10 p-1 backdrop-blur-sm">
              <input
                type="text"
                placeholder="Search articles..."
                className="flex-1 rounded-full bg-transparent px-6 py-3 text-white placeholder-white/70 outline-none"
              />
              <button className="rounded-full bg-white p-3 text-primary">
                <Search className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Legal background"
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* Featured Article (optional: make dynamic if you want) */}
      <section className="py-16">
        <div className="container">
          <div className="overflow-hidden rounded-2xl bg-white shadow-xl">
            <div className="grid md:grid-cols-2">
              <div className="relative h-64 md:h-auto">
                <Image
                  src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Featured article"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 md:p-12">
                <div className="mb-4 inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-primary">
                  Featured Article
                </div>
                <h2 className="mb-4 text-3xl font-bold">An Overview of Corporate Law in Nepal</h2>
                <p className="mb-6 text-gray-600">
                  This article provides a comprehensive overview of corporate law in Nepal, including recent
                  developments and key regulations that businesses should be aware of.
                </p>
                <Button
                  asChild
                  className="bg-gradient-to-r from-primary to-indigo-600 text-white hover:from-primary/90 hover:to-indigo-600/90"
                >
                  <Link href="/blog/corporate-law-nepal-overview">
                    Read Full Article <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container">
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
            <h2 className="text-3xl font-bold text-primary">Latest Articles</h2>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm" className="flex items-center gap-2">
                <Filter className="h-4 w-4" /> Filter
              </Button>
              <select className="rounded-md border border-input bg-background px-3 py-1 text-sm">
                <option>Most Recent</option>
                <option>Most Popular</option>
                <option>Corporate Law</option>
                <option>Taxation</option>
              </select>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {postsWithImages.length === 0 ? (
              <div className="col-span-full text-center text-gray-500">No articles found.</div>
            ) : (
              postsWithImages.map((post, index) => (
                <Card
                  key={index}
                  className="group overflow-hidden border-0 bg-white shadow-lg transition-all hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <p className="rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-primary">{post.date}</p>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="line-clamp-2 text-xl">{post.title}</CardTitle>
                    <CardDescription>By {post.author}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="line-clamp-3 text-gray-600">{post.excerpt}</p>
                  </CardContent>
                  <CardFooter className="border-t bg-gray-50 p-4">
                    <Button
                      asChild
                      variant="ghost"
                      className="w-full justify-center text-primary hover:bg-primary/10 hover:text-primary"
                    >
                      <Link href={`/blog/${post.slug}`}>
                        Read More <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))
            )}
          </div>
        </div>
      </section>
    </div>
  )
}

