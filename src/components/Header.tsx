import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/ThemeToggle"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  const navItems = [
    { href: "#services", label: "Services" },
    { href: "#how-it-works", label: "Fonctionnement" },
    { href: "#testimonials", label: "Témoignages" },
    { href: "#contact", label: "Contact" }
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">N</span>
            </div>
            <span className="font-bold text-xl">NextHire</span>
          </div>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6" role="navigation" aria-label="Main navigation">
          {navItems.map((item) => (
            <a 
              key={item.href}
              href={item.href} 
              className="text-sm font-medium transition-colors hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md px-2 py-1"
              onClick={closeMobileMenu}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center space-x-2">
          <ThemeToggle />
          <Button 
            size="sm" 
            className="hidden sm:inline-flex"
            onClick={() => window.open('https://nexthire-omega.vercel.app/', '_blank')}
          >
            Commencer
          </Button>
          
          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t bg-background/95 backdrop-blur">
          <nav className="container py-4 space-y-2" role="navigation" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block px-4 py-2 text-sm font-medium transition-colors hover:text-primary hover:bg-accent rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                onClick={closeMobileMenu}
              >
                {item.label}
              </a>
            ))}
            <div className="px-4 pt-2">
              <Button 
                className="w-full" 
                onClick={() => {
                  closeMobileMenu()
                  window.open('https://nexthire-omega.vercel.app/', '_blank')
                }}
              >
                Commencer
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
} 