"use client"

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { Star, Crown, Medal, Award, X, Trophy } from "lucide-react"
import { bettingSites } from "@/lib/betting-data"
import { useEffect } from "react"

interface RankingModalProps {
  isOpen: boolean
  onClose: () => void
}

export function RankingModal({ isOpen, onClose }: RankingModalProps) {
  const topSites = bettingSites.slice(0, 3)

  // Simple scroll lock without layout shift
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("modal-open")
    } else {
      document.body.classList.remove("modal-open")
    }

    return () => {
      document.body.classList.remove("modal-open")
    }
  }, [isOpen])

  // Reorder for display: #2, #1, #3
  const reorderedSites = [
    { ...topSites[1], displayRank: 2, position: "left" },
    { ...topSites[0], displayRank: 1, position: "center" },
    { ...topSites[2], displayRank: 3, position: "right" },
  ]

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

  const getRankingStyles = (rank: number) => {
    switch (rank) {
      case 1:
        return {
          badgeClass: "bg-amber-700",
          icon: <Crown className="w-3 h-3 sm:w-4 sm:h-4 text-white" />,
          buttonClass: "bg-amber-700 hover:bg-amber-800",
          buttonText: "Få Bedste Bonus",
          cardBorder: "border-amber-600",
        }
      case 2:
        return {
          badgeClass: "bg-gray-600",
          icon: <Medal className="w-3 h-3 sm:w-4 sm:h-4 text-white" />,
          buttonClass: "bg-gray-600 hover:bg-gray-700",
          buttonText: "Få Bonus Nu",
          cardBorder: "border-gray-300",
        }
      case 3:
        return {
          badgeClass: "bg-stone-600",
          icon: <Award className="w-3 h-3 sm:w-4 sm:h-4 text-white" />,
          buttonClass: "bg-stone-600 hover:bg-gray-700",
          buttonText: "Få Bonus Nu",
          cardBorder: "border-gray-300",
        }
      default:
        return {
          badgeClass: "bg-gray-700",
          icon: <Star className="w-3 h-3 sm:w-4 sm:h-4 text-white" />,
          buttonClass: "bg-gray-700 hover:bg-gray-800",
          buttonText: "Få Bonus Nu",
          cardBorder: "border-gray-300",
        }
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-[calc(100vw-32px)] max-w-[1200px] min-w-[320px] p-0 mx-auto overflow-hidden">
        {/* Header */}
        <div className="bg-gray-900 text-white p-2 sm:p-4 relative flex-shrink-0">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-2 right-2 sm:top-3 sm:right-3 text-white/70 hover:text-white z-30"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          <div className="text-center pr-6 sm:pr-8">
            <DialogTitle className="text-lg sm:text-xl lg:text-2xl font-bold mb-0 sm:mb-1">
              TOP 3 BETTING SITES
            </DialogTitle>
            <p className="text-gray-300 text-xs sm:text-sm">Danmarks bedste betting platforme - ekspertudvalgt</p>
            <p className="text-xs text-gray-400 mt-0 sm:mt-2">Spil ansvarligt. 18+. T&C gælder.</p>
          </div>
        </div>

        {/* Cards Container */}
        <div className="bg-gray-100 p-2 sm:p-4 pt-4 sm:pt-12 pb-2 sm:pb-6 max-h-[calc(100vh-200px)] overflow-y-auto">
          {/* Desktop Layout */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-3 xl:gap-4">
            {reorderedSites.map((site) => {
              const styles = getRankingStyles(site.displayRank)

              return (
                <div key={site.id} className="relative">
                  {/* Rank Badge */}
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-30">
                    {site.displayRank === 1 ? (
                      <div className="flex flex-col items-center">
                        <div className="bg-amber-700 text-white px-3 py-1 rounded-full font-bold text-xs mb-1">
                          VINDER
                        </div>
                        <div className="bg-amber-700 text-white p-2 rounded-full flex items-center space-x-1">
                          <Crown className="w-4 h-4 text-white" />
                          <span className="font-bold">#{site.displayRank}</span>
                        </div>
                      </div>
                    ) : (
                      <div className={`${styles.badgeClass} text-white p-2 rounded-full flex items-center space-x-1`}>
                        {styles.icon}
                        <span className="font-bold">#{site.displayRank}</span>
                      </div>
                    )}
                  </div>

                  <Card className={`border ${styles.cardBorder} h-full flex flex-col`}>
                    <CardContent className="p-4 pt-6 flex-1 flex flex-col">
                      {/* Logo */}
                      <div className="text-center mb-3">
                        <div className="bg-white p-3 rounded-lg border border-gray-200 inline-block">
                          <Image
                            src={site.logo || "/placeholder.svg"}
                            alt={`${site.name} logo`}
                            width={100}
                            height={50}
                            className="rounded"
                          />
                        </div>
                      </div>

                      {/* Site Name */}
                      <h3 className="font-bold text-center text-gray-900 mb-2">{site.name}</h3>

                      {/* Rating */}
                      <div className="flex items-center justify-center mb-3">
                        <div className="flex">{renderStars(site.rating)}</div>
                        <span className="ml-1 font-bold text-gray-900">{site.rating}</span>
                      </div>

                      {/* Bonus - Fixed height */}
                      <div className="bg-amber-50 border-2 border-amber-300 rounded-lg p-3 mb-3 relative flex-1 flex flex-col justify-center min-h-[100px]">
                        <div className="absolute -top-3 right-2 bg-amber-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                          🎁 BONUS
                        </div>
                        <div className="text-center font-bold text-gray-900 pt-1 text-sm leading-tight">
                          {site.bonus}
                        </div>
                        <div className="mt-2 text-center">
                          <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">
                            EKSKLUSIV TILBUD
                          </span>
                        </div>
                      </div>

                      {/* CTA Button */}
                      <Button
                        asChild
                        className={`w-full ${styles.buttonClass} text-white font-bold py-3 rounded-lg mt-auto`}
                      >
                        <Link
                          href={site.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center"
                        >
                          {site.displayRank === 1 && <Trophy className="w-4 h-4 mr-1" />}
                          {styles.buttonText}
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              )
            })}
          </div>

          {/* Tablet Layout - Improved Responsive */}
          <div className="hidden sm:grid lg:hidden gap-2 sm:gap-3">
            {/* For tablets (sm to lg) - podium style layout */}
            <div className="grid gap-3 max-w-4xl mx-auto">
              {/* First row - centered #1 card (winner) */}
              <div className="flex justify-center mb-2">
                <div className="w-full max-w-xs relative">
                  {/* Winner Badge */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-30">
                    <div className="flex flex-col items-center">
                      <div className="bg-amber-700 text-white px-2 py-1 rounded-full font-bold text-xs mb-1">
                        VINDER
                      </div>
                      <div className="bg-amber-700 text-white p-1.5 rounded-full flex items-center space-x-1">
                        <Crown className="w-3 h-3 text-white" />
                        <span className="font-bold text-sm">#{1}</span>
                      </div>
                    </div>
                  </div>

                  <Card className="border border-amber-600 mt-6">
                    <CardContent className="p-3 pt-5 flex flex-col">
                      {/* Logo */}
                      <div className="text-center mb-2">
                        <div className="bg-white p-2 rounded-lg border border-gray-200 inline-block">
                          <Image
                            src={topSites[0].logo || "/placeholder.svg"}
                            alt={`${topSites[0].name} logo`}
                            width={80}
                            height={40}
                            className="rounded"
                          />
                        </div>
                      </div>

                      {/* Site Name */}
                      <h3 className="font-bold text-center text-gray-900 mb-2 text-sm">{topSites[0].name}</h3>

                      {/* Rating */}
                      <div className="flex items-center justify-center mb-2">
                        <div className="flex">{renderStars(topSites[0].rating)}</div>
                        <span className="ml-1 font-bold text-gray-900 text-sm">{topSites[0].rating}</span>
                      </div>

                      {/* Bonus - Fixed height */}
                      <div className="bg-amber-50 border-2 border-amber-300 rounded-lg p-2 mb-3 relative flex-1 flex flex-col justify-center min-h-[80px]">
                        <div className="absolute -top-2 right-1 bg-amber-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                          🎁 BONUS
                        </div>
                        <div className="text-center font-bold text-gray-900 pt-1 text-xs leading-tight">
                          {topSites[0].bonus}
                        </div>
                        <div className="mt-1 text-center">
                          <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">
                            EKSKLUSIV TILBUD
                          </span>
                        </div>
                      </div>

                      {/* CTA Button */}
                      <Button
                        asChild
                        className="w-full bg-amber-700 hover:bg-amber-800 text-white font-bold py-2 rounded-lg mt-auto text-sm"
                      >
                        <Link
                          href={topSites[0].url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center"
                        >
                          <Trophy className="w-3 h-3 mr-1" />
                          Få Bedste Bonus
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Second row - #2 and #3 side by side */}
              <div className="grid grid-cols-2 gap-2 max-w-lg mx-auto">
                {[topSites[1], topSites[2]].map((site, index) => {
                  const styles = getRankingStyles(index + 2)

                  return (
                    <div key={site.id} className="relative">
                      {/* Rank Badge */}
                      <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 z-30">
                        <div
                          className={`${styles.badgeClass} text-white p-1.5 rounded-full flex items-center space-x-1`}
                        >
                          {styles.icon}
                          <span className="font-bold text-xs">#{index + 2}</span>
                        </div>
                      </div>

                      <Card className={`border ${styles.cardBorder} h-full flex flex-col`}>
                        <CardContent className="p-2 pt-4 flex-1 flex flex-col">
                          {/* Logo */}
                          <div className="text-center mb-2">
                            <div className="bg-white p-1.5 rounded-lg border border-gray-200 inline-block">
                              <Image
                                src={site.logo || "/placeholder.svg"}
                                alt={`${site.name} logo`}
                                width={60}
                                height={30}
                                className="rounded"
                              />
                            </div>
                          </div>

                          {/* Site Name */}
                          <h3 className="font-bold text-center text-gray-900 mb-1 text-xs">{site.name}</h3>

                          {/* Rating */}
                          <div className="flex items-center justify-center mb-2">
                            <div className="flex">{renderStars(site.rating)}</div>
                            <span className="ml-1 font-bold text-gray-900 text-xs">{site.rating}</span>
                          </div>

                          {/* Bonus - Fixed height */}
                          <div className="bg-amber-50 border-2 border-amber-300 rounded-lg p-2 mb-2 relative flex-1 flex flex-col justify-center min-h-[70px]">
                            <div className="absolute -top-2 right-0 bg-amber-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                              🎁
                            </div>
                            <div className="text-center font-bold text-gray-900 pt-1 text-xs leading-tight">
                              {site.bonus}
                            </div>
                            <div className="mt-1 text-center">
                              <span className="bg-green-100 text-green-800 text-xs font-medium px-1 py-0.5 rounded-full">
                                EKSKLUSIV
                              </span>
                            </div>
                          </div>

                          {/* CTA Button */}
                          <Button
                            asChild
                            className={`w-full ${styles.buttonClass} text-white font-bold py-1.5 rounded-lg text-xs mt-auto`}
                          >
                            <Link href={site.url} target="_blank" rel="noopener noreferrer">
                              Få Bonus
                            </Link>
                          </Button>
                        </CardContent>
                      </Card>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Mobile Layout (320px+) - Ultra Compact */}
          <div className="sm:hidden grid grid-cols-1 gap-2">
            {[topSites[0], topSites[1], topSites[2]].map((site, index) => {
              const styles = getRankingStyles(index + 1)

              return (
                <div key={site.id} className="relative">
                  <Card className={`border ${styles.cardBorder}`}>
                    <CardContent className="p-2">
                      <div className="flex items-center space-x-2">
                        {/* Rank */}
                        <div className="flex-shrink-0">
                          <div
                            className={`${styles.badgeClass} text-white p-1 rounded-full flex items-center justify-center w-6 h-6`}
                          >
                            <span className="font-bold text-xs">#{index + 1}</span>
                          </div>
                        </div>

                        {/* Logo */}
                        <div className="flex-shrink-0">
                          <div className="bg-white p-1 rounded-lg border border-gray-200">
                            <Image
                              src={site.logo || "/placeholder.svg"}
                              alt={`${site.name} logo`}
                              width={40}
                              height={20}
                              className="rounded"
                            />
                          </div>
                        </div>

                        {/* Site Info */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <h3 className="font-bold text-gray-900 text-xs truncate">{site.name}</h3>
                            <div className="flex items-center">
                              <Star className="w-3 h-3 text-amber-500 fill-current" />
                              <span className="ml-0.5 font-bold text-gray-900 text-xs">{site.rating}</span>
                            </div>
                          </div>

                          {/* Bonus */}
                          <div className="bg-amber-100 border-2 border-amber-500 rounded-lg p-1 relative mt-1 flex items-center shadow-md">
                            <div className="absolute -top-1 -right-1 bg-amber-700 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm">
                              🎁
                            </div>
                            <div className="font-bold text-gray-900 text-xs leading-tight pr-4">{site.bonus}</div>
                          </div>
                        </div>

                        {/* CTA Button */}
                        <div className="flex-shrink-0">
                          <Button
                            asChild
                            size="sm"
                            className={`${styles.buttonClass} text-white font-bold text-xs px-2 py-1 h-auto rounded-lg`}
                          >
                            <Link href={site.url} target="_blank" rel="noopener noreferrer">
                              Få Bonus
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )
            })}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
