"use client"
import Image from "next/image"
import { Card, CardDescription, CardTitle } from "@/components/ui/card"
import { Mail, MapPin, Phone, MessageCircle, Clock } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="bg-gradient-to-b from-background via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-indigo-600 opacity-90" />
        <div className="container relative z-10 text-center text-white">
          <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">Contact Us</h1>
          <p className="mx-auto max-w-3xl text-lg md:text-xl">
            Get in touch with our team of experienced attorneys for legal assistance tailored to your specific needs.
          </p>
        </div>
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
            alt="Legal background"
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-3xl font-bold text-gradient text-center">Get In Touch</h2>
            <p className="mb-8 text-lg text-gray-600 text-center">
              Our team of experienced attorneys is ready to assist you with your legal needs. Contact us today to
              schedule a consultation.
            </p>

            <div className="grid gap-6 md:grid-cols-1">
              <Card className="overflow-hidden border-0 shadow-lg transition-all hover:shadow-xl">
                <div className="grid md:grid-cols-4">
                  <div className="bg-gradient-to-br from-primary to-indigo-600 p-6 text-white">
                    <MapPin className="h-8 w-8" />
                  </div>
                  <div className="col-span-3 p-6">
                    <CardTitle className="text-xl">Address</CardTitle>
                    <CardDescription className="mt-2 text-base">New Baneshwor, Kathmandu, Nepal</CardDescription>
                  </div>
                </div>
              </Card>

              <Card className="overflow-hidden border-0 shadow-lg transition-all hover:shadow-xl">
                <div className="grid md:grid-cols-4">
                  <div className="bg-gradient-to-br from-purple-600 to-pink-600 p-6 text-white">
                    <Phone className="h-8 w-8" />
                  </div>
                  <div className="col-span-3 p-6">
                    <CardTitle className="text-xl">Phone</CardTitle>
                    <CardDescription className="mt-2 text-base">+977-9700499414</CardDescription>
                  </div>
                </div>
              </Card>

              <Card className="overflow-hidden border-0 shadow-lg transition-all hover:shadow-xl">
                <div className="grid md:grid-cols-4">
                  <div className="bg-gradient-to-br from-amber-500 to-orange-600 p-6 text-white">
                    <Mail className="h-8 w-8" />
                  </div>
                  <div className="col-span-3 p-6">
                    <CardTitle className="text-xl">Email</CardTitle>
                    <CardDescription className="mt-2 text-base">infolexglobepartners@gmail.com</CardDescription>
                  </div>
                </div>
              </Card>

              <Card className="overflow-hidden border-0 shadow-lg transition-all hover:shadow-xl">
                <div className="grid md:grid-cols-4">
                  <div className="bg-gradient-to-br from-green-500 to-teal-600 p-6 text-white">
                    <MessageCircle className="h-8 w-8" />
                  </div>
                  <div className="col-span-3 p-6">
                    <CardTitle className="text-xl">WhatsApp & WeChat</CardTitle>
                    <CardDescription className="mt-2 text-base">+977-9700499414</CardDescription>
                  </div>
                </div>
              </Card>

              <Card className="overflow-hidden border-0 shadow-lg transition-all hover:shadow-xl md:col-span-2">
                <div className="grid md:grid-cols-8">
                  <div className="bg-gradient-to-br from-blue-500 to-cyan-600 p-6 text-white md:col-span-1">
                    <Clock className="h-8 w-8" />
                  </div>
                  <div className="col-span-7 p-6">
                    <CardTitle className="text-xl">Business Hours</CardTitle>
                    <CardDescription className="mt-2 text-base">
                      Monday - Friday: 9:00 AM - 6:00 PM
                      <br />
                      Saturday: Closed
                      <br />
                      Sunday: 9:00 AM  - 6:00 PM
                    </CardDescription>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12">
        <div className="container">
          <div className="overflow-hidden rounded-lg shadow-xl">
            <div className="relative">
              <div className="absolute left-8 top-8 z-10 max-w-md rounded-lg bg-white p-6 shadow-lg">
                <h3 className="mb-2 text-xl font-bold text-primary">Our Office Location
                <p className="mb-4 text-gray-600">
                  Visit our office in New Baneshwor, one of the central business districts in Kathmandu, Nepal.
                </p>
              </div>
              <iframe
                src= 
</a></h3>
                width="100%"
                height="500"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="LexGlobe Partners <a href="https://www.google.com/maps/place/Lexglobe+Partners:+Law+Firm+in+Nepal/@27.687469,85.3340235,17z/data=!4m20!1m13!4m12!1m4!2m2!1d85.3366246!2d27.6872888!4e1!1m6!1m2!1s0x8c31621e334f593b:0x44cf7b4d32e9bfca!2sKathmandu+44600!2m2!1d85.3367355!2d27.6876249!3m5!1s0x8c31621e334f593b:0x44cf7b4d32e9bfca!8m2!3d27.6876249!4d85.3367355!16s%2Fg%2F11x_7txqlz?entry=ttu&g_ep=EgoyMDI1MTAwOC4wIKXMDSoASAFQAw%3D%3D" 
   title="Find our office location on Google Maps" target="_blank" rel="noopener noreferrer"></a>"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
