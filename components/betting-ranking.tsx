"use client"

import type React from "react"

import Image from "next/image"
import { Star, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { bettingSites } from "@/lib/betting-data"
import { useRouter } from "next/navigation"

export function BettingRanking() {
  const router = useRouter()

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-3 h-3 sm:w-4 sm:h-4 ${
          i < Math.floor(rating)
            ? "text-amber-500 fill-current"
            : i < rating
              ? "text-amber-500 fill-current opacity-50"
              : "text-gray-300"
        }`}
      />
    ))
  }

  const getRankingColors = (index: number) => {
    switch (index) {
      case 0:
        return {
          gradient: "bg-amber-700",
          glow: "shadow-amber-500/30",
          border: "border-amber-600/50",
          card: "bg-white border-2 border-amber-600",
        }
      case 1:
        return {
          gradient: "bg-gray-600",
          glow: "shadow-gray-500/30",
          border: "border-gray-400/50",
          card: "bg-white border-2 border-gray-400",
        }
      case 2:
        return {
          gradient: "bg-stone-600",
          glow: "shadow-stone-500/30",
          border: "border-stone-400/50",
          card: "bg-white border-2 border-stone-400",
        }
      default:
        return {
          gradient: "bg-gray-700",
          glow: "shadow-gray-500/30",
          border: "border-gray-400/50",
          card: "bg-white border-2 border-gray-300",
        }
    }
  }

  const handleCardClick = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer")
  }

  const handleLinkClick = (e: React.MouseEvent) => {
    e.stopPropagation()
  }

  return (
    <section id="betting-ranking" className="py-8 sm:py-12 pt-16 sm:pt-20 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/betting-background.png')",
          }}
        ></div>

        {/* Animated Background Overlay */}
        <div className="absolute inset-0 bg-white/80">
          {/* Animated waves */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-red-900/20 rounded-full animate-pulse"></div>
            <div className="absolute top-20 right-10 w-32 h-32 bg-red-800/15 rounded-full animate-bounce-slow"></div>
            <div className="absolute bottom-20 left-20 w-24 h-24 bg-red-700/25 rounded-full animate-float"></div>
            <div className="absolute top-1/2 right-1/4 w-28 h-28 bg-red-900/10 rounded-full animate-pulse-slow"></div>
            <div
              className="absolute bottom-10 right-20 w-36 h-36 bg-red-800/20 rounded-full animate-float"
              style={{ animationDelay: "2s" }}
            ></div>

            {/* Wave animations */}
            <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-red-900/10 to-transparent animate-pulse"></div>
            <div className="absolute top-0 right-0 w-full h-16 bg-gradient-to-b from-red-800/5 to-transparent animate-pulse-slow"></div>

            {/* Moving wave effect */}
            <div className="absolute inset-0">
              <div
                className="absolute w-full h-full bg-gradient-to-r from-transparent via-red-900/5 to-transparent transform -skew-y-12 animate-float"
                style={{ animationDelay: "1s" }}
              ></div>
              <div
                className="absolute w-full h-full bg-gradient-to-l from-transparent via-red-800/8 to-transparent transform skew-y-6 animate-float"
                style={{ animationDelay: "3s" }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-2 sm:px-4">
        <div className="space-y-4 sm:space-y-8 max-w-6xl mx-auto">
          {bettingSites.map((site, index) => {
            const colors = getRankingColors(index)
            return (
              <div
                key={site.id}
                onClick={() => handleCardClick(site.url)}
                className={`group relative overflow-hidden rounded-xl sm:rounded-2xl ${colors.card} shadow-xl ${colors.glow} hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.02] block cursor-pointer animate-fadeInUp animate-delay-${index * 100 + 100} opacity-0 hover-lift hover-glow`}
              >
                {/* Top stripe */}
                <div className={`absolute top-0 left-0 w-full h-1 ${colors.gradient}`}></div>

                {/* Top Badge for #1 */}
                {index === 0 && (
                  <div className="absolute top-2 sm:top-4 left-1/2 transform -translate-x-1/2 z-20">
                    <div className="bg-amber-700 text-white px-3 sm:px-6 py-1 sm:py-2 rounded-full font-bold text-xs sm:text-sm shadow-lg">
                      BEDSTE VALG
                    </div>
                  </div>
                )}

                <div className={`${index === 0 ? "p-3 sm:p-6 pt-8 sm:pt-12" : "p-3 sm:p-6"}`}>
                  {/* Mobile Layout */}
                  <div className="block sm:hidden">
                    <div className="flex items-center space-x-3">
                      {/* Ranking */}
                      <div className="flex-shrink-0">
                        <div
                          className={`${colors.gradient} p-2 rounded-full flex items-center justify-center animate-pulse-slow`}
                        >
                          <span className="text-white font-black text-sm">#{index + 1}</span>
                        </div>
                      </div>

                      {/* Logo */}
                      <div className="flex-shrink-0">
                        <div className="bg-white p-2 rounded-lg border border-gray-200 shadow-md">
                          <Image
                            src={site.logo || "/placeholder.svg"}
                            alt={`${site.name} logo`}
                            width={80}
                            height={40}
                            className="rounded-lg"
                          />
                        </div>
                      </div>

                      {/* Site Info */}
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-black text-gray-900 mb-1 truncate">{site.name}</h3>
                        <div className="flex items-center space-x-2 mb-1">
                          <div className="flex">{renderStars(site.rating)}</div>
                          <span className="text-sm font-bold text-gray-900">{site.rating}</span>
                        </div>
                        <p className="text-gray-600 text-xs truncate">{site.description}</p>
                      </div>
                    </div>

                    {/* Bonus & CTA - Mobile */}
                    <div className="mt-3 space-y-2">
                      <div className="bg-amber-50 border-2 border-amber-400 rounded-lg p-2 relative overflow-hidden hover-scale shadow-lg">
                        <div className="absolute -top-1 right-1 bg-amber-600 text-white text-xs font-bold px-2 py-1 rounded-full shadow-md">
                          BONUS
                        </div>
                        <div className="text-gray-800 font-black text-sm leading-tight pr-12">{site.bonus}</div>
                      </div>

                      <Button
                        size="sm"
                        className={`w-full ${colors.gradient} hover:opacity-90 text-white font-bold py-2 px-4 rounded-lg text-sm transition-all duration-300 transform hover:scale-105 group animate-glow`}
                      >
                        Få Bonus Nu
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </Button>
                    </div>
                  </div>

                  {/* Desktop Layout */}
                  <div className="hidden sm:block">
                    <div className="grid lg:grid-cols-12 gap-4 lg:gap-8 items-center">
                      {/* Ranking */}
                      <div className="lg:col-span-1 flex justify-center">
                        <div className="relative">
                          <div
                            className={`${colors.gradient} p-2 lg:p-3 rounded-full flex items-center justify-center animate-pulse-slow`}
                          >
                            <span className="text-white font-black text-lg lg:text-xl">#{index + 1}</span>
                          </div>
                        </div>
                      </div>

                      {/* Site Info */}
                      <div className="lg:col-span-7">
                        <div className="flex flex-col md:flex-row md:items-center gap-4 lg:gap-6">
                          {/* Logo */}
                          <div className="flex-shrink-0">
                            <div className="bg-white p-2 lg:p-3 rounded-xl border border-gray-200 shadow-md">
                              <Image
                                src={site.logo || "/placeholder.svg"}
                                alt={`${site.name} logo`}
                                width={140}
                                height={70}
                                className="rounded-lg"
                              />
                            </div>
                          </div>

                          {/* Details */}
                          <div className="flex-1 space-y-2">
                            <div>
                              <h3 className="text-xl lg:text-2xl font-black text-gray-900 mb-1">{site.name}</h3>
                              <p className="text-gray-600 text-sm">{site.description}</p>
                            </div>

                            {/* Rating */}
                            <div className="flex items-center space-x-4">
                              <div className="flex">{renderStars(site.rating)}</div>
                              <span className="text-lg font-bold text-gray-900">{site.rating}</span>
                            </div>
                            <div className="text-gray-500">
                              <span className="text-sm font-medium">{site.reviews} anmeldelser</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Bonus & CTA */}
                      <div className="lg:col-span-4 space-y-4">
                        {/* Bonus Card */}
                        <div className="bg-amber-50 border-2 border-amber-400 rounded-xl p-3 lg:p-4 pt-4 lg:pt-6 relative overflow-hidden hover-scale shadow-lg">
                          <div className="absolute -top-1 right-2 bg-amber-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                            BONUS
                          </div>
                          <div className="text-gray-800 font-black text-base lg:text-lg leading-tight">
                            {site.bonus}
                          </div>
                        </div>

                        {/* CTA Button */}
                        <Button
                          size="lg"
                          className={`w-full ${colors.gradient} hover:opacity-90 text-white font-bold py-3 px-6 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 group animate-glow`}
                        >
                          Få Bonus Nu
                          <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Disclaimer */}
                  <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-gray-100">
                    <p className="text-xs text-gray-500 text-center">
                      Spil ansvarligt. 18+. Besøg{" "}
                      <a
                        href="https://www.gambleaware.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-700 hover:underline font-medium"
                        onClick={handleLinkClick}
                      >
                        GambleAware.org
                      </a>{" "}
                      for hjælp og støtte. T&C gælder.
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
