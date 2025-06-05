"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface ResponsibleGamingModalProps {
  isOpen: boolean
  onClose: () => void
}

export function ResponsibleGamingModal({ isOpen, onClose }: ResponsibleGamingModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-red-800">18+ | Spil Ansvarligt!</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div className="bg-red-50 p-4 rounded-lg">
            <h3 className="font-semibold text-red-800 mb-2">Vigtigt at huske:</h3>
            <ul className="text-red-700 space-y-2">
              <li>• Du skal være mindst 18 år for at spille</li>
              <li>• Spil kun med penge du har råd til at miste</li>
              <li>• Sæt grænser for tid og penge</li>
              <li>• Spil aldrig når du er påvirket</li>
              <li>• Søg hjælp hvis spillet bliver et problem</li>
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold">Hjælp og støtte:</h3>
            <div className="flex flex-wrap gap-2">
              <Button variant="outline" asChild>
                <Link href="https://www.stopspillet.dk/" target="_blank">
                  StopSpillet.dk
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="https://ludomani.dk" target="_blank">
                  Ludomani.dk
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="https://www.gambleaware.org" target="_blank">
                  GambleAware.org
                </Link>
              </Button>
            </div>
          </div>

          <Button onClick={onClose} className="w-full">
            Forstået
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
