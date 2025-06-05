"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Cookie } from "lucide-react"

export function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) {
      setShowConsent(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted")
    setShowConsent(false)
  }

  const rejectCookies = () => {
    localStorage.setItem("cookie-consent", "rejected")
    setShowConsent(false)
  }

  if (!showConsent) return null

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 md:left-auto md:max-w-md">
      <Card className="shadow-lg">
        <CardContent className="p-4">
          <div className="flex items-start space-x-3">
            <Cookie className="w-6 h-6 text-orange-600 mt-1 flex-shrink-0" />
            <div className="space-y-3">
              <div>
                <h3 className="font-semibold text-sm">Vi bruger cookies</h3>
                <p className="text-xs text-gray-600">
                  Vi bruger cookies til at forbedre din oplevelse og analysere trafik. Ved at fortsætte accepterer du
                  vores brug af cookies.
                </p>
              </div>
              <div className="flex space-x-2">
                <Button size="sm" onClick={acceptCookies} className="text-xs">
                  Accepter Alle
                </Button>
                <Button size="sm" variant="outline" onClick={rejectCookies} className="text-xs">
                  Afvis Alle
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
