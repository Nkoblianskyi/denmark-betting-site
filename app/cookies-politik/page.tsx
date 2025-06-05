import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function CookiesPolitikPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="py-12 sm:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center">Cookies Politik</h1>

          <div className="prose prose-lg mx-auto">
            <div className="bg-gray-50 p-4 rounded-lg mb-8">
              <p className="text-sm text-gray-500">Sidst opdateret: 15. januar 2025</p>
            </div>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">1. Hvad er cookies?</h2>
            <p>
              Cookies er små tekstfiler, der gemmes på din computer, tablet eller mobiltelefon, når du besøger vores
              hjemmeside. Disse filer gør det muligt for os at genkende din enhed og huske information om dit besøg,
              såsom dine foretrukne indstillinger, login-information og hvordan du har brugt vores hjemmeside.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">2. Hvilke typer cookies bruger vi?</h2>
            <p>Vi bruger følgende typer cookies på vores hjemmeside:</p>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">2.1 Nødvendige cookies</h3>
            <p>
              Disse cookies er essentielle for, at du kan navigere på hjemmesiden og bruge dens funktioner. Uden disse
              cookies kan vi ikke levere de tjenester, du har anmodet om, såsom sikker login og hukommelse af dine
              præferencer.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">2.2 Præferencecookies</h3>
            <p>
              Disse cookies giver os mulighed for at huske dine præferencer og indstillinger, såsom dit foretrukne sprog
              eller region, og giver dig en mere personlig oplevelse.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">2.3 Statistik- og analysecookies</h3>
            <p>
              Disse cookies hjælper os med at forstå, hvordan besøgende interagerer med vores hjemmeside ved at indsamle
              og rapportere information anonymt. De hjælper os med at forbedre vores hjemmesides funktionalitet og
              brugeroplevelse.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">2.4 Marketingcookies</h3>
            <p>
              Disse cookies bruges til at spore besøgende på tværs af hjemmesider. Hensigten er at vise annoncer, der er
              relevante og engagerende for den enkelte bruger og dermed mere værdifulde for udgivere og tredjeparts
              annoncører.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">3. Hvordan administrerer du cookies?</h2>
            <p>
              Du kan kontrollere og/eller slette cookies efter eget ønske. Du kan slette alle cookies, der allerede er
              på din computer, og du kan indstille de fleste browsere til at forhindre dem i at blive placeret. Hvis du
              gør dette, skal du dog muligvis manuelt justere nogle præferencer, hver gang du besøger en hjemmeside, og
              nogle tjenester og funktioner fungerer muligvis ikke.
            </p>
            <p>De fleste moderne browsere giver dig mulighed for at:</p>
            <ul className="list-disc pl-6 mt-2 mb-4">
              <li>Se dine cookies og slette dem individuelt</li>
              <li>Blokere tredjepartscookies</li>
              <li>Blokere cookies fra bestemte hjemmesider</li>
              <li>Blokere alle cookies fra at blive indstillet</li>
              <li>Slette alle cookies, når du lukker din browser</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">4. Ændringer i vores cookiepolitik</h2>
            <p>
              Vi kan opdatere vores cookiepolitik fra tid til anden. Eventuelle ændringer vil blive offentliggjort på
              denne side, og hvis ændringerne er væsentlige, vil vi give en mere fremtrædende meddelelse.
            </p>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mt-8">
              <h3 className="text-lg font-semibold text-amber-800">Vigtigt om ansvarligt spil</h3>
              <p className="text-amber-700">
                DKBettingSite forpligter sig til at fremme ansvarligt spil. Vi bruger cookies til at hjælpe med at
                identificere problematiske spillemønstre og tilbyde værktøjer til selvudelukkelse og spilgrænser. Disse
                cookies er designet til at beskytte vores brugere og overholde danske spillelovgivning.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
