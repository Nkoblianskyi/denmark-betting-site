"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { BettingRanking } from "@/components/betting-ranking"
import { InfoSections } from "@/components/info-sections"
import { Footer } from "@/components/footer"
import { CookieConsent } from "@/components/cookie-consent"
import { RankingModal } from "@/components/ranking-modal"

export default function HomePage() {
  const [showRankingModal, setShowRankingModal] = useState(false)

  useEffect(() => {
    // Show ranking modal after 5 seconds (increased time)
    const timer = setTimeout(() => {
      const hasSeenModal = localStorage.getItem("ranking-modal-seen")
      if (!hasSeenModal) {
        setShowRankingModal(true)
        localStorage.setItem("ranking-modal-seen", "true")
      }
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200">
      <Header />
      <Hero />
      <BettingRanking />
      <InfoSections />
      <Footer />
      <CookieConsent />
      <RankingModal isOpen={showRankingModal} onClose={() => setShowRankingModal(false)} />
    </div>
  )
}
