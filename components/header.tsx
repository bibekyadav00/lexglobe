"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Menu, X } from "lucide-react"

const practiceAreas = [
  { title: "Labor and Employment", href: "/practice-areas/labor-employment" },
  { title: "FDI", href: "/practice-areas/fdi" },
  { title: "Corporate Compliance", href: "/practice-areas/corporate-compliance" },
  { title: "E-Commerce", href: "/practice-areas/e-commerce" },
  { title: "Merger & Acquisition", href: "/practice-areas/merger-acquisition" },
  { title: "NGOs/INGOs & NPOs", href: "/practice-areas/ngos-ingos" },
  { title: "Dispute Resolution & Arbitration", href: "/practice-areas/dispute-resolution" },
  { title: "Bank & Finance", href: "/practice-areas/bank-finance" },
  { title: "Taxation", href: "/practice-areas/taxation" },
  { title: "Transfer Pricing Directives", href: "/practice-areas/transfer-pricing" },
  { title: "Hydropower", href: "/practice-areas/hydropower" },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/logo.png" alt="LexGlobe Partners Logo" width={50} height={50} className="h-12 w-auto" />
          <div className="hidden md:block">
            <h1 className="text-xl font-bold">LexGlobe Partners</h1>
            <p className="text-xs text-muted-foreground">Corporate Law Firm in Nepal</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>Home</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/practice-areas" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>Practice Areas</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/blog" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>Insights</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/about" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>About Us</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/contact" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>Contact</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Mobile Navigation Toggle */}
        <Button variant="ghost" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="container pb-4 md:hidden">
          <nav className="flex flex-col space-y-4">
            <Link href="/" className="text-lg font-medium" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <Link href="/practice-areas" className="text-lg font-medium" onClick={() => setIsMenuOpen(false)}>
              Practice Areas
            </Link>
            <Link href="/blog" className="text-lg font-medium" onClick={() => setIsMenuOpen(false)}>
              Insights
            </Link>
            <Link href="/about" className="text-lg font-medium" onClick={() => setIsMenuOpen(false)}>
              About Us
            </Link>
            <Link href="/contact" className="text-lg font-medium" onClick={() => setIsMenuOpen(false)}>
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
