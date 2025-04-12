import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Award, BookOpen, Clock, Users } from "lucide-react"
import { fetchLegalImages } from "@/lib/api"

async function getImages() {
  const images = await fetchLegalImages(2)
  return images
}

export default async function AboutPage() {
  const images = await getImages()

  return (
    <div className="bg-gradient-to-b from-background to-muted/30">
      {/* Hero Section */}
      <section className="bg-primary py-20 text-primary-foreground">
        <div className="container text-center">
          <h1 className="mb-6 text-4xl font-bold md:text-5xl">About LexGlobe Partners</h1>
          <p className="mx-auto max-w-2xl text-lg">
            A premier legal firm in Nepal specializing in corporate law and business advisory services.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-2">
            <div className="flex flex-col justify-center">
              <h2 className="mb-6 text-3xl font-bold text-primary">Our Story</h2>
              <p className="mb-4 text-lg">
                LexGlobe Partners was founded with a vision to provide exceptional legal services to businesses
                operating in Nepal. Our firm brings together experienced attorneys with deep expertise in various
                aspects of corporate and business law.
              </p>
              <p className="mb-4 text-lg">
                We understand the complex legal challenges that businesses face in today's rapidly evolving economic
                landscape. Our mission is to help our clients navigate these challenges with confidence, providing
                practical legal solutions that align with their business objectives.
              </p>
              <p className="mb-4 text-lg">
                With a client-centered approach and commitment to excellence, LexGlobe Partners has established itself
                as a trusted legal advisor to businesses of all sizes, from startups to multinational corporations.
              </p>
            </div>
            <div className="relative h-[400px] overflow-hidden rounded-lg shadow-xl">
              <Image
                src={images[0]?.url || "/placeholder.svg?height=400&width=600"}
                alt="LexGlobe Partners team"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-muted py-20">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-primary">Our Values</h2>
            <p className="mx-auto max-w-2xl text-lg">Our core values guide everything we do at LexGlobe Partners.</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Card className="border-0 bg-card/50 shadow-sm">
              <CardContent className="flex flex-col items-center p-6 text-center">
                <Award className="mb-4 h-12 w-12 text-primary" />
                <h3 className="mb-2 text-xl font-bold">Excellence</h3>
                <p>
                  We are committed to delivering the highest quality legal services and exceeding our clients'
                  expectations.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-card/50 shadow-sm">
              <CardContent className="flex flex-col items-center p-6 text-center">
                <Users className="mb-4 h-12 w-12 text-primary" />
                <h3 className="mb-2 text-xl font-bold">Integrity</h3>
                <p>
                  We uphold the highest ethical standards in all our dealings with clients, colleagues, and the legal
                  community.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-card/50 shadow-sm">
              <CardContent className="flex flex-col items-center p-6 text-center">
                <Clock className="mb-4 h-12 w-12 text-primary" />
                <h3 className="mb-2 text-xl font-bold">Responsiveness</h3>
                <p>
                  We understand the importance of timely advice and are committed to being responsive to our clients'
                  needs.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-card/50 shadow-sm">
              <CardContent className="flex flex-col items-center p-6 text-center">
                <BookOpen className="mb-4 h-12 w-12 text-primary" />
                <h3 className="mb-2 text-xl font-bold">Innovation</h3>
                <p>
                  We continuously seek innovative solutions to complex legal challenges in a rapidly evolving business
                  environment.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-primary">Our Team</h2>
            <p className="mx-auto max-w-2xl text-lg">
              Meet our team of experienced attorneys dedicated to providing exceptional legal services.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="group overflow-hidden rounded-lg bg-card shadow-sm transition-all hover:shadow-md">
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src="/placeholder.svg?height=300&width=300&text=Team+Member"
                  alt="Team Member"
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-1 text-xl font-bold">Prabin Yadav</h3>
                <p className="mb-4 text-sm text-muted-foreground">Managing Partner</p>
                <p className="mb-4">
                  With over 15 years of experience in corporate law, Prabin leads our team with expertise in foreign
                  investment, mergers & acquisitions, and corporate governance.
                </p>
                <div className="flex space-x-3">
                  <Button variant="outline" size="sm">
                    LinkedIn
                  </Button>
                  <Button variant="outline" size="sm">
                    Email
                  </Button>
                </div>
              </div>
            </div>

            <div className="group overflow-hidden rounded-lg bg-card shadow-sm transition-all hover:shadow-md">
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src="/placeholder.svg?height=300&width=300&text=Team+Member"
                  alt="Team Member"
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-1 text-xl font-bold">Anjali Sharma</h3>
                <p className="mb-4 text-sm text-muted-foreground">Senior Associate</p>
                <p className="mb-4">
                  Anjali specializes in taxation and corporate compliance, helping businesses navigate the complex
                  regulatory landscape in Nepal.
                </p>
                <div className="flex space-x-3">
                  <Button variant="outline" size="sm">
                    LinkedIn
                  </Button>
                  <Button variant="outline" size="sm">
                    Email
                  </Button>
                </div>
              </div>
            </div>

            <div className="group overflow-hidden rounded-lg bg-card shadow-sm transition-all hover:shadow-md">
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src="/placeholder.svg?height=300&width=300&text=Team+Member"
                  alt="Team Member"
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-1 text-xl font-bold">Rajesh Thapa</h3>
                <p className="mb-4 text-sm text-muted-foreground">Associate</p>
                <p className="mb-4">
                  Rajesh focuses on dispute resolution and arbitration, representing clients in commercial disputes and
                  regulatory matters.
                </p>
                <div className="flex space-x-3">
                  <Button variant="outline" size="sm">
                    LinkedIn
                  </Button>
                  <Button variant="outline" size="sm">
                    Email
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-muted py-20">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-2">
            <div className="relative h-[400px] overflow-hidden rounded-lg shadow-xl">
              <Image
                src={images[1]?.url || "/placeholder.svg?height=400&width=600"}
                alt="Legal professionals in meeting"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="mb-6 text-3xl font-bold text-primary">Why Choose Us</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="mr-4 rounded-full bg-primary/10 p-2">
                    <Award className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-medium">Expertise</h3>
                    <p>Our team brings deep expertise in various aspects of corporate and business law in Nepal.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-4 rounded-full bg-primary/10 p-2">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-medium">Client-Centered Approach</h3>
                    <p>
                      We prioritize understanding our clients' business objectives to provide tailored legal solutions.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-4 rounded-full bg-primary/10 p-2">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-medium">Responsiveness</h3>
                    <p>
                      We understand the importance of timely advice and are committed to being responsive to our
                      clients' needs.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-4 rounded-full bg-primary/10 p-2">
                    <BookOpen className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-medium">Practical Solutions</h3>
                    <p>We provide practical legal solutions that align with our clients' business objectives.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="container text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">Ready to Work With Us?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg">
            Contact us today to schedule a consultation with one of our experienced attorneys.
          </p>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white bg-transparent text-white hover:bg-white hover:text-primary"
          >
            <Link href="/contact">
              Contact Us <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

