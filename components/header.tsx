"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X, Crown } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="relative overflow-hidden">
      {/* Professional Background */}
      <div className="absolute inset-0 bg-gray-900">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 opacity-90"></div>
      </div>

      <div className="relative z-10 container mx-auto px-2 sm:px-4">
        <div className="flex items-center justify-between h-14 sm:h-16">
          <div className="flex items-center space-x-2 sm:space-x-4">
            <Link href="/" className="flex items-center space-x-2 sm:space-x-3 group animate-fadeInLeft">
              <div className="relative">
                <div className="bg-amber-700 p-1.5 sm:p-2 rounded-full">
                  <Crown className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
              </div>
              <div>
                <div className="flex items-baseline">
                  <span className="text-lg sm:text-xl font-bold text-white tracking-tight">DK</span>
                  <span className="text-lg sm:text-xl font-bold text-amber-600">BETTING</span>
                </div>
                <div className="text-xs text-gray-300 font-medium tracking-wider uppercase hidden sm:block">
                  Premium Sites
                </div>
              </div>
            </Link>

            <div className="hidden sm:flex items-center space-x-2 sm:space-x-3">
              <div className="flex items-center space-x-1 sm:space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-2 sm:px-3 py-1">
                <Image
                  src="/flag.png"
                  alt="Danish Flag"
                  width={20}
                  height={14}
                  className="rounded-sm"
                />
                <span className="text-white text-xs sm:text-sm font-medium">Danmark</span>
              </div>
              <div className="bg-red-700 text-white px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full text-xs font-bold border-2 border-white/20">
                18+
              </div>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-4 lg:space-x-6 animate-fadeInRight animate-delay-200">
            <Link
              href="/"
              className="text-white hover:text-amber-300 font-semibold transition-colors duration-300 relative group text-sm hover-scale"
            >
              Hjem
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-300 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="/about"
              className="text-white hover:text-amber-300 font-semibold transition-colors duration-300 relative group text-sm hover-scale"
            >
              Om Os
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-300 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Button
              asChild
              variant="outline"
              size="sm"
              className="border-2 border-amber-600 bg-amber-600/20 text-white hover:bg-amber-600 hover:text-white transition-all duration-300 text-xs"
            >
              <Link href="https://ludomani.dk/" target="_blank">
                Ansvarligt Spil
              </Link>
            </Button>
          </nav>

          <Button
            variant="ghost"
            size="sm"
            className="md:hidden text-white p-1"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-3 border-t border-white/20 animate-fadeInUp">
            <nav className="flex flex-col space-y-3">
              <Link
                href="/"
                className="text-white hover:text-amber-300 font-semibold text-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                Hjem
              </Link>
              <Link
                href="/about"
                className="text-white hover:text-amber-300 font-semibold text-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                Om Os
              </Link>
              <Link
                href="https://ludomani.dk/"
                target="_blank"
                className="text-amber-300 hover:text-white font-semibold text-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                Ansvarligt Spil
              </Link>
              <div className="flex items-center space-x-3 pt-2">
                <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1">
                  <Image
                    src="/placeholder.svg?height=16&width=24&text=🇩🇰"
                    alt="Danish Flag"
                    width={20}
                    height={14}
                    className="rounded-sm"
                  />
                  <span className="text-white text-sm font-medium">Danmark</span>
                </div>
                <div className="bg-red-700 text-white px-2 py-1 rounded-full text-sm font-bold border-2 border-white/20">
                  18+
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
