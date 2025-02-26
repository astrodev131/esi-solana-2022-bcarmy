"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { useState } from "react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black">
      <div className="max-w-[2000px] mx-auto">
        <div className="h-16 md:h-20 flex items-center justify-between px-4 sm:px-6 md:px-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-white text-xl font-bold transition-all duration-300 group-hover:text-[#00ff00] group-hover:scale-110">
              SRP
            </span>
          </Link>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            <Menu size={24} />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Button className="bg-transparent text-white hover:bg-white hover:text-black transition-colors rounded-none border border-white px-6 py-2 text-sm font-normal">
              CONTACT US
            </Button>
          </nav>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="absolute top-16 left-0 right-0 bg-black md:hidden">
              <nav className="flex flex-col items-center py-4 space-y-4">
                <Button className="bg-transparent text-white hover:bg-white hover:text-black transition-colors rounded-none border border-white px-6 py-2 text-sm font-normal">
                  CONTACT US
                </Button>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

