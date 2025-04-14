import Link from "next/link"
import Image from "next/image"
import { Mail, MapPin, Phone, Facebook } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-primary to-black text-white">
      <div className="container py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <div className="mb-6 flex items-center">
              <Image
                src="/logo.png"
                alt="LexGlobe Partners Logo"
                width={50}
                height={50}
                className="h-12 w-auto bg-white rounded-full p-1"
              />
              <div className="ml-3">
                <h3 className="text-xl font-bold">LexGlobe Partners</h3>
                <p className="text-xs text-white/80">Corporate Law Firm in Nepal</p>
              </div>
            </div>
            <p className="mb-6">
              A leading legal firm in Nepal specializing in corporate law and business advisory services.
            </p>
            <div className="flex items-center space-x-4">
              <a
                href="https://www.facebook.com/share/1QZkWEKUG8/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white/10 p-2 transition-colors hover:bg-white/20"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.youtube.com/@LexglobePartners"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white/10 p-2 transition-colors hover:bg-white/20"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                </svg>
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
                <span>+977-9700499414</span>
              </div>
              <div className="flex items-start">
                <Mail className="mr-3 h-5 w-5 text-white/80" />
                <span>infolexglobepartners@gmail.com</span>
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
                  <span className="mr-2">›</span> Insights
                </Link>
              </li>
              <li>
                <Link href="/contact" className="flex items-center transition-colors hover:text-white/80">
                  <span className="mr-2">›</span> Contact
                </Link>
              </li>
            </ul>
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
