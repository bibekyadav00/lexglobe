"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, MessageCircle, Phone, Send, Clock } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would send this data to your backend
    console.log("Form submitted:", formData)
    alert("Thank you for your message. We will get back to you soon!")
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    })
  }

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

      {/* Contact Information and Form */}
      <section className="py-20">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-2">
            {/* Contact Information */}
            <div>
              <h2 className="mb-6 text-3xl font-bold text-gradient">Get In Touch</h2>
              <p className="mb-8 text-lg text-gray-600">
                Our team of experienced attorneys is ready to assist you with your legal needs. Contact us today to
                schedule a consultation.
              </p>

              <div className="space-y-6">
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
                      <CardDescription className="mt-2 text-base">+977-9746478828</CardDescription>
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
                      <CardDescription className="mt-2 text-base">prabinyadav008@gmail.com</CardDescription>
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
                      <CardDescription className="mt-2 text-base">+977-9746478828</CardDescription>
                    </div>
                  </div>
                </Card>

                <Card className="overflow-hidden border-0 shadow-lg transition-all hover:shadow-xl">
                  <div className="grid md:grid-cols-4">
                    <div className="bg-gradient-to-br from-blue-500 to-cyan-600 p-6 text-white">
                      <Clock className="h-8 w-8" />
                    </div>
                    <div className="col-span-3 p-6">
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

            {/* Contact Form */}
            <div>
              <Card className="overflow-hidden border-0 shadow-xl">
                <div className="bg-gradient-to-r from-primary to-indigo-600 p-6 text-white">
                  <h3 className="text-2xl font-bold">Send Us a Message</h3>
                  <p className="mt-2">Fill out the form below and we'll get back to you as soon as possible.</p>
                </div>
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="Your full name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="border-gray-300"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="Your email address"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="border-gray-300"
                        />
                      </div>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input
                          id="phone"
                          name="phone"
                          placeholder="Your phone number"
                          value={formData.phone}
                          onChange={handleChange}
                          className="border-gray-300"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject</Label>
                        <Input
                          id="subject"
                          name="subject"
                          placeholder="Subject of your message"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="border-gray-300"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Your message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="border-gray-300"
                      />
                    </div>

                    <Button type="submit" className="w-full bg-gradient-to-r from-primary to-indigo-600 text-white">
                      <Send className="mr-2 h-4 w-4" /> Send Message
                    </Button>
                  </form>
                </CardContent>
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
                <Button className="bg-gradient-to-r from-primary to-indigo-600 text-white">Get Directions</Button>
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

