"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

interface TermsModalProps {
  isOpen: boolean
  onClose: () => void
}

export function TermsModal({ isOpen, onClose }: TermsModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Regler og Vilkår</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 text-sm">
          <section>
            <h3 className="font-semibold mb-2">Generelle Vilkår</h3>
            <p className="text-gray-600">
              Alle bonusser og tilbud er underlagt specifikke vilkår og betingelser fra den enkelte bookmaker. Det er
              spillerens ansvar at læse og forstå disse vilkår før deltagelse.
            </p>
          </section>

          <section>
            <h3 className="font-semibold mb-2">Alderskrav</h3>
            <p className="text-gray-600">
              Du skal være mindst 18 år for at deltage i gambling aktiviteter i Danmark. Bookmakere kan kræve
              aldersverifikation.
            </p>
          </section>

          <section>
            <h3 className="font-semibold mb-2">Geografiske Begrænsninger</h3>
            <p className="text-gray-600">
              Tjenester er kun tilgængelige for personer bosiddende i Danmark med gyldig dansk licens.
            </p>
          </section>

          <section>
            <h3 className="font-semibold mb-2">Ansvarligt Spil</h3>
            <p className="text-gray-600">
              Alle operatører skal tilbyde værktøjer til ansvarligt spil, herunder indskudsgrænser, tidsgrænser og
              selvudelukkelse.
            </p>
          </section>

          <section>
            <h3 className="font-semibold mb-2">Bonusvilkår</h3>
            <p className="text-gray-600">
              Bonusser har typisk omsætningskrav og tidsbegrænsninger. Læs altid de fulde vilkår på bookmakernes
              hjemmeside.
            </p>
          </section>

          <Button onClick={onClose} className="w-full mt-6">
            Forstået
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
