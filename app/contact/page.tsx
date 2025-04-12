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
                    <CardDescription className="mt-2 text-base">Anamnagar, Kathmandu, Nepal</CardDescription>
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
                      Monday - Friday: 9:00 AM - 5:00 PM
                      <br />
                      Saturday: 10:00 AM - 2:00 PM
                      <br />
                      Sunday: Closed
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
                <h3 className="mb-2 text-xl font-bold text-primary">Our Office Location</h3>
                <p className="mb-4 text-gray-600">
                  Visit our office in Anamnagar, one of the central business districts in Kathmandu, Nepal.
                </p>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.4587890323!2d85.32650931506156!3d27.70293798279492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb199a06c2eaf9%3A0xc5670a9173e161de!2sAnamnagar%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1616005811000!5m2!1sen!2snp"
                width="100%"
                height="500"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="LexGlobe Partners Office Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
