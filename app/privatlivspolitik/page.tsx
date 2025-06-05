import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function PrivatlivspolitikPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="py-12 sm:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center">Privatlivspolitik</h1>

          <div className="prose prose-lg mx-auto">
            <div className="bg-gray-50 p-4 rounded-lg mb-8">
              <p className="text-sm text-gray-500">Sidst opdateret: 15. januar 2025</p>
            </div>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">1. Introduktion</h2>
            <p>
              DKBettingSite respekterer dit privatliv og er forpligtet til at beskytte dine personlige oplysninger.
              Denne privatlivspolitik informerer dig om, hvordan vi behandler dine personlige data, når du besøger vores
              hjemmeside, og fortæller dig om dine privatlivsrettigheder og hvordan loven beskytter dig.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">2. De oplysninger vi indsamler</h2>
            <p>Vi kan indsamle, bruge, opbevare og overføre forskellige typer personlige data om dig, herunder:</p>

            <ul className="list-disc pl-6 mt-2 mb-4">
              <li>
                <strong>Identitetsdata:</strong> Fornavn, efternavn, brugernavn eller lignende identifikator.
              </li>
              <li>
                <strong>Kontaktdata:</strong> E-mailadresse og telefonnumre.
              </li>
              <li>
                <strong>Tekniske data:</strong> IP-adresse, login-data, browsertype og -version, tidszoneindstilling og
                placering, browser-plugin-typer og -versioner, operativsystem og platform.
              </li>
              <li>
                <strong>Profildata:</strong> Dit brugernavn og adgangskode, dine interesser, præferencer, feedback og
                svardata.
              </li>
              <li>
                <strong>Brugsdata:</strong> Information om, hvordan du bruger vores hjemmeside og tjenester.
              </li>
              <li>
                <strong>Marketings- og kommunikationsdata:</strong> Dine præferencer for at modtage marketing fra os og
                vores tredjeparter og dine kommunikationspræferencer.
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">3. Hvordan vi bruger dine personlige data</h2>
            <p>Vi bruger dine personlige data til følgende formål:</p>

            <ul className="list-disc pl-6 mt-2 mb-4">
              <li>For at registrere dig som en ny kunde</li>
              <li>For at behandle og levere dine ordrer</li>
              <li>For at administrere vores forhold til dig</li>
              <li>For at forbedre vores hjemmeside, produkter/tjenester, marketing og kundeoplevelser</li>
              <li>For at anbefale produkter eller tjenester, der kan interessere dig</li>
              <li>
                For at overholde juridiske forpligtelser, herunder forebyggelse af svindel og hvidvaskning af penge
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">4. Dataopbevaring</h2>
            <p>
              Vi opbevarer kun dine personlige data, så længe det er nødvendigt for at opfylde de formål, vi indsamlede
              dem til, herunder med henblik på at opfylde juridiske, regnskabsmæssige eller rapporteringskrav.
            </p>
            <p>
              For at bestemme den passende opbevaringsperiode for personlige data overvejer vi mængden, arten og
              følsomheden af de personlige data, den potentielle risiko for skade fra uautoriseret brug eller
              videregivelse af dine personlige data, de formål, som vi behandler dine personlige data til, og om vi kan
              opnå disse formål gennem andre midler, samt de gældende juridiske krav.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">5. Dine juridiske rettigheder</h2>
            <p>
              Under databeskyttelseslovgivningen har du rettigheder i forhold til dine personlige data, herunder retten
              til at:
            </p>

            <ul className="list-disc pl-6 mt-2 mb-4">
              <li>Anmode om adgang til dine personlige data</li>
              <li>Anmode om rettelse af dine personlige data</li>
              <li>Anmode om sletning af dine personlige data</li>
              <li>Gøre indsigelse mod behandling af dine personlige data</li>
              <li>Anmode om begrænsning af behandlingen af dine personlige data</li>
              <li>Anmode om overførsel af dine personlige data</li>
              <li>Trække dit samtykke tilbage</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">6. Sikkerhedsforanstaltninger</h2>
            <p>
              Vi har implementeret passende sikkerhedsforanstaltninger for at forhindre, at dine personlige data går
              tabt ved et uheld, bruges eller tilgås på en uautoriseret måde, ændres eller videregives. Derudover
              begrænser vi adgangen til dine personlige data til de medarbejdere, agenter, kontrahenter og andre
              tredjeparter, der har et forretningsmæssigt behov for at vide. De vil kun behandle dine personlige data på
              vores instruktioner, og de er underlagt en fortrolighedsforpligtelse.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">7. Ændringer i privatlivspolitikken</h2>
            <p>
              Vi kan opdatere vores privatlivspolitik fra tid til anden. Eventuelle ændringer vil blive offentliggjort
              på denne side, og hvis ændringerne er væsentlige, vil vi give en mere fremtrædende meddelelse eller
              direkte besked til dig.
            </p>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mt-8">
              <h3 className="text-lg font-semibold text-amber-800">Særligt om ansvarligt spil</h3>
              <p className="text-amber-700">
                Som en del af vores forpligtelse til ansvarligt spil, kan vi behandle visse personlige data for at
                identificere og forebygge problematisk spilleadfærd. Dette sker i overensstemmelse med dansk lovgivning
                om spil og databeskyttelse, og har til formål at beskytte vores brugere.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
