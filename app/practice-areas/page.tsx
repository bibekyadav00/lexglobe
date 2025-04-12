import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  BookOpen,
  Building,
  Briefcase,
  FileText,
  Globe,
  HeartHandshake,
  Scale,
  Shield,
  Landmark,
  BarChart4,
  Droplet,
} from "lucide-react"

const practiceAreas = [
  {
    title: "Labor and Employment",
    description:
      "Expert legal advice on employment contracts, labor disputes, workplace policies, and compliance with Nepal's labor laws.",
    icon: <Briefcase className="h-10 w-10 text-primary" />,
    href: "/practice-areas/labor-employment",
    image:
      "https://images.unsplash.com/photo-1521791055366-0d553872125f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "FDI",
    description:
      "Comprehensive legal support for foreign investors looking to establish or expand their business presence in Nepal.",
    icon: <Globe className="h-10 w-10 text-primary" />,
    href: "/practice-areas/fdi",
    image:
      "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Corporate Compliance",
    description:
      "Ensuring your business adheres to all legal requirements and regulations in Nepal, from company formation to ongoing compliance.",
    icon: <FileText className="h-10 w-10 text-primary" />,
    href: "/practice-areas/corporate-compliance",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "E-Commerce",
    description:
      "Legal guidance for online businesses, including regulatory compliance, consumer protection, and digital contracts.",
    icon: <Building className="h-10 w-10 text-primary" />,
    href: "/practice-areas/e-commerce",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Merger & Acquisition",
    description:
      "Strategic legal advice for businesses undergoing mergers, acquisitions, and corporate restructuring in Nepal.",
    icon: <HeartHandshake className="h-10 w-10 text-primary" />,
    href: "/practice-areas/merger-acquisition",
    image:
      "https://images.unsplash.com/photo-1589578527966-fdac0f44566c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "NGOs/INGOs & NPOs",
    description:
      "Specialized legal services for non-profit organizations operating in Nepal, including registration, compliance, and governance.",
    icon: <Globe className="h-10 w-10 text-primary" />,
    href: "/practice-areas/ngos-ingos",
    image:
      "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Dispute Resolution & Arbitration",
    description: "Effective representation in commercial disputes, mediation, and arbitration proceedings in Nepal.",
    icon: <Scale className="h-10 w-10 text-primary" />,
    href: "/practice-areas/dispute-resolution",
    image:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Bank & Finance",
    description: "Legal expertise in banking regulations, financial transactions, and securities law in Nepal.",
    icon: <Landmark className="h-10 w-10 text-primary" />,
    href: "/practice-areas/bank-finance",
    image:
      "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Taxation",
    description:
      "Expert advice on tax planning, compliance, and dispute resolution to help businesses optimize their tax positions in Nepal.",
    icon: <BookOpen className="h-10 w-10 text-primary" />,
    href: "/practice-areas/taxation",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Transfer Pricing Directives",
    description:
      "Specialized guidance on transfer pricing regulations and compliance for multinational companies operating in Nepal.",
    icon: <BarChart4 className="h-10 w-10 text-primary" />,
    href: "/practice-areas/transfer-pricing",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Hydropower",
    description:
      "Legal support for hydropower projects in Nepal, including licensing, regulatory compliance, and project development.",
    icon: <Droplet className="h-10 w-10 text-primary" />,
    href: "/practice-areas/hydropower",
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  },
]

export default function PracticeAreasPage() {
  return (
    <div className="bg-gradient-to-b from-background via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-indigo-600 opacity-90" />
        <div className="container relative z-10 text-center text-white">
          <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">Our Practice Areas</h1>
          <p className="mx-auto max-w-3xl text-lg md:text-xl">
            LexGlobe Partners offers specialized legal services across a wide range of practice areas to meet the
            diverse needs of our clients in Nepal and internationally.
          </p>
        </div>
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
            alt="Legal background"
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* Practice Areas Grid */}
      <section className="py-20">
        <div className="container">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-primary md:text-4xl">Specialized Legal Services</h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-600">
              Our team of experienced attorneys provides comprehensive legal services across various practice areas to
              help businesses navigate the complex legal landscape in Nepal.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {practiceAreas.map((area, index) => (
              <Card
                key={index}
                className="group overflow-hidden border-0 bg-white shadow-lg transition-all hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={area.image || "/placeholder.svg"}
                    alt={area.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex items-center space-x-3">
                    <div className="rounded-full bg-white/90 p-2">{area.icon}</div>
                    <h3 className="text-xl font-bold text-white">{area.title}</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-gray-600">{area.description}</p>
                </CardContent>
                <CardFooter className="border-t bg-gray-50 p-4">
                  <Button
                    asChild
                    variant="ghost"
                    className="w-full justify-center text-primary hover:bg-primary/10 hover:text-primary"
                  >
                    <Link href={area.href}>
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Legal Services */}
      <section className="bg-gradient-to-r from-primary to-indigo-600 py-20 text-white">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-2">
            <div className="flex flex-col justify-center">
              <h2 className="mb-6 text-3xl font-bold md:text-4xl">Why Choose Our Legal Services?</h2>
              <p className="mb-8 text-lg">
                At LexGlobe Partners, we are committed to providing exceptional legal services tailored to the specific
                needs of our clients. Our team of experienced attorneys brings deep expertise in various aspects of
                corporate and business law in Nepal.
              </p>

              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="rounded-full bg-white/20 p-2">
                    <Shield className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Expert Legal Team</h3>
                    <p>
                      Our attorneys bring years of experience and specialized knowledge in their respective practice
                      areas.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="rounded-full bg-white/20 p-2">
                    <Globe className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Local & International Expertise</h3>
                    <p>We combine deep knowledge of Nepal's legal system with international best practices.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="rounded-full bg-white/20 p-2">
                    <HeartHandshake className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Client-Centered Approach</h3>
                    <p>
                      We prioritize understanding our clients' business objectives to provide tailored legal solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative rounded-lg shadow-2xl">
              <div className="absolute -left-4 -top-4 h-full w-full rounded-lg border-2 border-white/30" />
              <div className="relative h-full overflow-hidden rounded-lg">
                <Image
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Legal team meeting"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20">
        <div className="container">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-primary md:text-4xl">What Our Clients Say</h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              We take pride in our client relationships and the results we deliver. Here's what some of our clients have
              to say about our legal services.
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
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">Ready to Work With Us?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg">
            Contact us today to schedule a consultation with one of our experienced attorneys. We're here to help you
            navigate the complex legal landscape in Nepal.
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
              <Link href="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
