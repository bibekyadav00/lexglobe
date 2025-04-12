"use client"
import Image from "next/image"
import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
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
        <Link href="/" className="flex items-center space-x-3">
          {/* square logo */}
          <Image
        src="/lexglobe-logo.png" // Logo should be placed in your /public folder
        alt="LexGlobe Partners Logo"
        width={48}
        height={48}
        className="object-contain" // Keep square shape and aspect ratio
      />
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
                <NavigationMenuTrigger>Practice Areas</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {practiceAreas.map((area) => (
                      <li key={area.href}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={area.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">{area.title}</div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/blog" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>Blog</NavigationMenuLink>
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
            <div className="flex flex-col space-y-2">
              <p className="text-lg font-medium">Practice Areas</p>
              <div className="ml-4 flex flex-col space-y-2">
                {practiceAreas.map((area) => (
                  <Link key={area.href} href={area.href} className="text-sm" onClick={() => setIsMenuOpen(false)}>
                    {area.title}
                  </Link>
                ))}
              </div>
            </div>
            <Link href="/blog" className="text-lg font-medium" onClick={() => setIsMenuOpen(false)}>
              Blog
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

