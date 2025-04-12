import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, BookOpen, Scale, Shield, Users, Award, Briefcase, Globe } from "lucide-react"
import { fetchLegalImages } from "@/lib/api"
import { fetchBlogPosts } from "@/lib/blog"

async function getImages() {
  const images = await fetchLegalImages(3)
  return images
}

async function getLatestPosts() {
  const posts = await fetchBlogPosts(3)
  return posts
}

export default async function Home() {
  const images = await getImages()
  const latestPosts = await getLatestPosts()

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-indigo-600/90" />
        <div className="container relative z-10 flex min-h-[700px] flex-col items-center justify-center py-20 text-center text-white">
          <div className="mb-8 inline-block rounded-full bg-white/20 p-3">
            <Scale className="h-12 w-12" />
          </div>
          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">LexGlobe Partners</h1>
          <p className="mb-8 max-w-2xl text-xl md:text-2xl">
            A premier legal firm in Nepal specializing in corporate law and business advisory services
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100">
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-black hover:bg-white/10">
              <Link href="/practice-areas">Our Services</Link>
            </Button>
          </div>
        </div>
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
            alt="Legal background"
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-12">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-4">
            <div className="rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 p-6 text-center shadow-md">
              <div className="mb-4 flex justify-center">
                <div className="rounded-full bg-primary/10 p-3">
                  <Users className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-4xl font-bold text-primary">500+</h3>
              <p className="text-gray-600">Satisfied Clients</p>
            </div>

            <div className="rounded-lg bg-gradient-to-br from-purple-50 to-pink-50 p-6 text-center shadow-md">
              <div className="mb-4 flex justify-center">
                <div className="rounded-full bg-purple-600/10 p-3">
                  <Briefcase className="h-8 w-8 text-purple-600" />
                </div>
              </div>
              <h3 className="text-4xl font-bold text-purple-600">200+</h3>
              <p className="text-gray-600">Cases Handled</p>
            </div>

            <div className="rounded-lg bg-gradient-to-br from-green-50 to-teal-50 p-6 text-center shadow-md">
              <div className="mb-4 flex justify-center">
                <div className="rounded-full bg-green-600/10 p-3">
                  <Award className="h-8 w-8 text-green-600" />
                </div>
              </div>
              <h3 className="text-4xl font-bold text-green-600">15+</h3>
              <p className="text-gray-600">Years of Experience</p>
            </div>

            <div className="rounded-lg bg-gradient-to-br from-amber-50 to-orange-50 p-6 text-center shadow-md">
              <div className="mb-4 flex justify-center">
                <div className="rounded-full bg-amber-600/10 p-3">
                  <Globe className="h-8 w-8 text-amber-600" />
                </div>
              </div>
              <h3 className="text-4xl font-bold text-amber-600">50+</h3>
              <p className="text-gray-600">International Clients</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-gradient-to-b from-white to-blue-50 py-20">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-2">
            <div className="flex flex-col justify-center">
              <h2 className="mb-6 text-3xl font-bold text-primary md:text-4xl">About LexGlobe Partners</h2>
              <p className="mb-6 text-lg">
                LexGlobe Partners is a leading legal firm based in Kathmandu, Nepal, specializing in corporate and
                business law. Our team of experienced attorneys provides comprehensive legal services to businesses,
                entrepreneurs, and organizations operating in Nepal.
              </p>
              <p className="mb-8 text-lg">
                With deep expertise in corporate compliance, foreign direct investment, taxation, and other
                business-related legal matters, we help our clients navigate the complex legal landscape of Nepal with
                confidence.
              </p>
              <Button
                asChild
                className="w-fit bg-gradient-to-r from-primary to-indigo-600 text-white hover:from-primary/90 hover:to-indigo-600/90"
              >
                <Link href="/about">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative h-[400px] overflow-hidden rounded-lg shadow-xl">
              <div className="absolute -left-4 -top-4 h-full w-full rounded-lg border-2 border-primary/30" />
              <Image src="/images/legal-2.jpg" alt="Legal professionals" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="bg-gradient-to-b from-blue-50 to-indigo-50 py-20">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-primary md:text-4xl">Our Practice Areas</h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              We offer specialized legal services across a wide range of practice areas to meet the diverse needs of our
              clients.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="group overflow-hidden border-0 bg-white shadow-lg transition-all hover:-translate-y-2 hover:shadow-xl">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src="/images/legal-3.jpg"
                  alt="Corporate Compliance"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              </div>
              <CardHeader className="pb-2">
                <Scale className="h-8 w-8 text-primary" />
                <CardTitle className="mt-2">Corporate Compliance</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Ensuring your business adheres to all legal requirements and regulations in Nepal, from company
                  formation to ongoing compliance.
                </p>
              </CardContent>
              <CardFooter className="border-t bg-gray-50 p-4">
                <Button
                  asChild
                  variant="ghost"
                  className="w-full justify-center text-primary hover:bg-primary/10 hover:text-primary"
                >
                  <Link href="/practice-areas/corporate-compliance">
                    Learn More <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="group overflow-hidden border-0 bg-white shadow-lg transition-all hover:-translate-y-2 hover:shadow-xl">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src="/images/legal-4.jpg"
                  alt="Foreign Direct Investment"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              </div>
              <CardHeader className="pb-2">
                <Shield className="h-8 w-8 text-primary" />
                <CardTitle className="mt-2">Foreign Direct Investment</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Comprehensive legal support for foreign investors looking to establish or expand their business
                  presence in Nepal.
                </p>
              </CardContent>
              <CardFooter className="border-t bg-gray-50 p-4">
                <Button
                  asChild
                  variant="ghost"
                  className="w-full justify-center text-primary hover:bg-primary/10 hover:text-primary"
                >
                  <Link href="/practice-areas/fdi">
                    Learn More <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="group overflow-hidden border-0 bg-white shadow-lg transition-all hover:-translate-y-2 hover:shadow-xl">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src="/images/legal-5.jpg"
                  alt="Taxation"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              </div>
              <CardHeader className="pb-2">
                <BookOpen className="h-8 w-8 text-primary" />
                <CardTitle className="mt-2">Taxation</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Expert advice on tax planning, compliance, and dispute resolution to help businesses optimize their
                  tax positions in Nepal.
                </p>
              </CardContent>
              <CardFooter className="border-t bg-gray-50 p-4">
                <Button
                  asChild
                  variant="ghost"
                  className="w-full justify-center text-primary hover:bg-primary/10 hover:text-primary"
                >
                  <Link href="/practice-areas/taxation">
                    Learn More <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-primary to-indigo-600 text-white hover:from-primary/90 hover:to-indigo-600/90"
            >
              <Link href="/practice-areas">
                View All Practice Areas <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="bg-gradient-to-b from-indigo-50 to-purple-50 py-20">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-primary md:text-4xl">Latest Insights</h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Stay updated with the latest legal developments and insights on corporate law in Nepal.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {latestPosts.map((post, index) => (
              <Card
                key={index}
                className="group overflow-hidden border-0 bg-white shadow-lg transition-all hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={post.image || "/images/legal-" + ((index % 5) + 6) + ".jpg"}
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
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-primary to-indigo-600 text-white hover:from-primary/90 hover:to-indigo-600/90"
            >
              <Link href="/blog">
                View All Articles <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gradient-to-b from-purple-50 to-white py-20">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-primary md:text-4xl">What Our Clients Say</h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              We take pride in our client relationships and the results we deliver.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <Card className="border-0 bg-gradient-to-br from-blue-50 to-indigo-50 shadow-md">
              <CardContent className="p-8">
                <div className="mb-6 flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-4xl text-white">
                    "
                  </div>
                </div>
                <p className="mb-6 text-center text-gray-700">
                  LexGlobe Partners provided exceptional legal support for our company's expansion into Nepal. Their
                  expertise in FDI and corporate compliance was invaluable in navigating the complex regulatory
                  landscape.
                </p>
                <div className="text-center">
                  <h4 className="font-bold text-primary">Rajiv Sharma</h4>
                  <p className="text-sm text-gray-600">CEO, Global Ventures Ltd.</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 bg-gradient-to-br from-purple-50 to-pink-50 shadow-md">
              <CardContent className="p-8">
                <div className="mb-6 flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-purple-600 text-4xl text-white">
                    "
                  </div>
                </div>
                <p className="mb-6 text-center text-gray-700">
                  The team at LexGlobe Partners demonstrated deep knowledge of Nepal's taxation system, helping us
                  optimize our tax position and avoid potential compliance issues. Highly recommended!
                </p>
                <div className="text-center">
                  <h4 className="font-bold text-purple-600">Sunita Thapa</h4>
                  <p className="text-sm text-gray-600">CFO, Himalayan Enterprises</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 bg-gradient-to-br from-green-50 to-teal-50 shadow-md">
              <CardContent className="p-8">
                <div className="mb-6 flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-600 text-4xl text-white">
                    "
                  </div>
                </div>
                <p className="mb-6 text-center text-gray-700">
                  When our company faced a complex commercial dispute, LexGlobe Partners provided strategic legal advice
                  and effective representation that led to a favorable resolution. Their expertise was instrumental.
                </p>
                <div className="text-center">
                  <h4 className="font-bold text-green-600">Anish Poudel</h4>
                  <p className="text-sm text-gray-600">Managing Director, Tech Solutions Nepal</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-primary to-indigo-600 py-16 text-white">
        <div className="container text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">Need Legal Assistance?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg">
            Our team of experienced attorneys is ready to help you navigate the complex legal landscape of Nepal.
            Contact us today for a consultation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100">
              <Link href="/contact">Contact Us Now</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white bg-transparent text-white hover:bg-white/10"
            >
              <Link href="/practice-areas">Explore Our Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

