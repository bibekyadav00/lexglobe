import Link from "next/link"
import { Mail, MapPin, Phone, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-primary to-indigo-600 text-white">
      <div className="container py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-6 flex items-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-xl font-bold text-primary">
                LG
              </div>
              <div className="ml-3">
                <h3 className="text-xl font-bold">LexGlobe Partners</h3>
                <p className="text-xs text-white/80">Corporate Law Firm in Nepal</p>
              </div>
            </div>
            <p className="mb-6">
              A leading legal firm in Nepal specializing in corporate law and business advisory services.
            </p>
            <div className="flex items-center space-x-4">
              <a href="#" className="rounded-full bg-white/10 p-2 transition-colors hover:bg-white/20">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="rounded-full bg-white/10 p-2 transition-colors hover:bg-white/20">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="rounded-full bg-white/10 p-2 transition-colors hover:bg-white/20">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="rounded-full bg-white/10 p-2 transition-colors hover:bg-white/20">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-6 text-xl font-bold">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="mr-3 h-5 w-5 text-white/80" />
                <span>Anamnagar, Kathmandu, Nepal</span>
              </div>
              <div className="flex items-start">
                <Phone className="mr-3 h-5 w-5 text-white/80" />
                <span>+977-9746478828</span>
              </div>
              <div className="flex items-start">
                <Mail className="mr-3 h-5 w-5 text-white/80" />
                <span>prabinyadav008@gmail.com</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="mb-6 text-xl font-bold">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="flex items-center transition-colors hover:text-white/80">
                  <span className="mr-2">›</span> Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="flex items-center transition-colors hover:text-white/80">
                  <span className="mr-2">›</span> About Us
                </Link>
              </li>
              <li>
                <Link href="/practice-areas" className="flex items-center transition-colors hover:text-white/80">
                  <span className="mr-2">›</span> Practice Areas
                </Link>
              </li>
              <li>
                <Link href="/blog" className="flex items-center transition-colors hover:text-white/80">
                  <span className="mr-2">›</span> Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="flex items-center transition-colors hover:text-white/80">
                  <span className="mr-2">›</span> Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-xl font-bold">Newsletter</h3>
            <p className="mb-4">Subscribe to our newsletter to receive the latest legal updates and insights.</p>
            <div className="space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full rounded-md border border-white/30 bg-white/10 px-4 py-2 text-white placeholder-white/70"
              />
              <Button className="w-full bg-white text-primary hover:bg-white/90">Subscribe</Button>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/20 pt-8 text-center">
          <p>© {new Date().getFullYear()} LexGlobe Partners. All rights reserved.</p>
          <div className="mt-4 flex justify-center space-x-6">
            <Link href="/privacy-policy" className="text-sm text-white/80 hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-sm text-white/80 hover:text-white">
              Terms of Service
            </Link>
            <Link href="/disclaimer" className="text-sm text-white/80 hover:text-white">
              Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

