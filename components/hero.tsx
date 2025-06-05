"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ResponsibleGamingModal } from "./responsible-gaming-modal"
import { TermsModal } from "./terms-modal"
import { TrendingUp, ArrowDown } from "lucide-react"

export function Hero() {
  const [showResponsibleModal, setShowResponsibleModal] = useState(false)
  const [showTermsModal, setShowTermsModal] = useState(false)

  const currentDate = new Date().toLocaleDateString("da-DK", {
    year: "numeric",
    month: "long",
  })

  const scrollToRanking = () => {
    const rankingSection = document.getElementById("betting-ranking")
    if (rankingSection) {
      rankingSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-[180px] sm:min-h-[250px] md:min-h-[300px] flex items-center overflow-hidden py-4 sm:py-6 md:py-8">
      {/* Enhanced Background with Animation */}
      <div className="absolute inset-0">
        {/* Base Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-gray-900 to-purple-900 animate-gradient"></div>

        {/* Animated Overlay Gradient */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-blue-800/30 via-transparent to-purple-800/30 animate-gradient"
          style={{ animationDelay: "2s" }}
        ></div>

        {/* Subtle Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.2) 1px, transparent 1px), radial-gradient(circle at 75% 75%, rgba(255, 255, 255, 0.2) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
              backgroundPosition: "0 0",
            }}
          ></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-10 left-1/4 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-10 right-1/4 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-3/4 w-24 h-24 bg-amber-500/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "3s" }}
        ></div>

        {/* Light Beam Effect */}
        <div className="absolute -top-20 left-1/3 w-40 h-[500px] bg-gradient-to-b from-blue-400/10 to-transparent transform rotate-45 animate-pulse-slow"></div>
        <div
          className="absolute -top-20 right-1/3 w-40 h-[500px] bg-gradient-to-b from-purple-400/10 to-transparent transform -rotate-45 animate-pulse-slow"
          style={{ animationDelay: "1.5s" }}
        ></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 items-center">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-7 space-y-2 sm:space-y-3 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center space-x-1 bg-amber-700/20 backdrop-blur-sm border border-amber-600/30 rounded-full px-3 py-1">
              <span className="text-amber-400 font-semibold text-sm">Ekspertudvalgt Ranking</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-1 sm:space-y-2">
              <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-tight animate-fadeInLeft">
                <span className="block text-white">TOP BETTING SITES</span>
                <span className="block text-amber-500">I DANMARK</span>
              </h1>

              <div className="flex items-center justify-center lg:justify-start space-x-2 text-gray-300">
                <TrendingUp className="w-4 h-4" />
                <span className="text-sm font-semibold">Opdateret: {currentDate}</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-xs sm:text-sm md:text-base text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0 animate-fadeInLeft animate-delay-200">
              Professionelle anmeldelser, verificerede bonusser.
              <span className="text-amber-400 font-bold"> 50+ sites testet</span> af eksperter.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 items-center justify-center lg:justify-start animate-fadeInLeft animate-delay-300">
              <Button
                onClick={scrollToRanking}
                size="default"
                className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-lg text-sm sm:text-base shadow-xl transition-all duration-300 w-full sm:w-auto"
              >
                Se Top Sites Nu
                <ArrowDown className="w-4 h-4 ml-2" />
              </Button>

              <div className="flex gap-3 w-full sm:w-auto">
                <Button
                  variant="outline"
                  size="default"
                  onClick={() => setShowResponsibleModal(true)}
                  className="border-red-600/50 bg-red-600/10 text-red-400 hover:bg-red-600 hover:text-white font-semibold rounded-lg text-xs sm:text-sm px-2 sm:px-4 py-1 sm:py-2 flex-1 sm:flex-none"
                >
                  18+
                </Button>

                <Button
                  variant="outline"
                  size="default"
                  onClick={() => setShowTermsModal(true)}
                  className="border-white/30 bg-white/10 text-white hover:bg-white hover:text-gray-900 font-semibold rounded-lg text-xs sm:text-sm px-2 sm:px-4 py-1 sm:py-2 flex-1 sm:flex-none"
                >
                  Vilkår
                </Button>
              </div>
            </div>
          </div>

          {/* Right Column - Quick Stats */}
          <div className="lg:col-span-5 hidden sm:block">
            <div className="grid grid-cols-2 gap-4 animate-fadeInRight animate-delay-400">
              <div className="bg-gray-800/40 backdrop-blur-sm p-4 rounded-2xl text-center transform hover:scale-105 transition-all duration-300 border border-gray-700/50 animate-scaleIn animate-delay-500 opacity-0 hover-glow">
                <div className="text-3xl font-black text-amber-400 mb-1">98%</div>
                <div className="text-sm text-gray-300 font-semibold">Sikkerhed</div>
              </div>
              <div className="bg-gray-800/40 backdrop-blur-sm p-4 rounded-2xl text-center transform hover:scale-105 transition-all duration-300 border border-gray-700/50 animate-scaleIn animate-delay-500 opacity-0 hover-glow">
                <div className="text-3xl font-black text-green-400 mb-1">24/7</div>
                <div className="text-sm text-gray-300 font-semibold">Support</div>
              </div>
              <div className="bg-gray-800/40 backdrop-blur-sm p-4 rounded-2xl text-center transform hover:scale-105 transition-all duration-300 border border-gray-700/50 animate-scaleIn animate-delay-500 opacity-0 hover-glow">
                <div className="text-3xl font-black text-blue-400 mb-1">50K+</div>
                <div className="text-sm text-gray-300 font-semibold">Brugere</div>
              </div>
              <div className="bg-gray-800/40 backdrop-blur-sm p-4 rounded-2xl text-center transform hover:scale-105 transition-all duration-300 border border-gray-700/50 animate-scaleIn animate-delay-500 opacity-0 hover-glow">
                <div className="text-3xl font-black text-amber-400 mb-1">5★</div>
                <div className="text-sm text-gray-300 font-semibold">Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block">
        <button onClick={scrollToRanking} className="text-white/60 hover:text-white transition-colors duration-300">
          <ArrowDown className="w-5 h-5" />
        </button>
      </div>

      <ResponsibleGamingModal isOpen={showResponsibleModal} onClose={() => setShowResponsibleModal(false)} />
      <TermsModal isOpen={showTermsModal} onClose={() => setShowTermsModal(false)} />
    </section>
  )
}
