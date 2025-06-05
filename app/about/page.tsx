import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Shield, Award, Clock } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="py-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Om DKBettingSite</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Vi er Danmarks mest pålidelige kilde til information om betting sites. Vores mission er at hjælpe danske
              spillere med at finde de bedste og mest sikre betting platforme.
            </p>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">5+</div>
              <div className="text-gray-600">År i branchen</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600">Sites testet</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">100K+</div>
              <div className="text-gray-600">Månedlige besøgende</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-600">Opdateret indhold</div>
            </div>
          </div>

          {/* Our Values */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Vores Værdier</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Shield className="w-6 h-6 text-blue-600" />
                    <span>Sikkerhed</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Vi anbefaler kun licenserede og sikre betting sites, der overholder danske regler.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Users className="w-6 h-6 text-green-600" />
                    <span>Transparens</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Vi er åbne om vores partnerskaber og hvordan vi vurderer betting sites.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Award className="w-6 h-6 text-purple-600" />
                    <span>Kvalitet</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Vores anmeldelser er baseret på grundige tests og omfattende research.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Clock className="w-6 h-6 text-orange-600" />
                    <span>Aktualitet</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Vi opdaterer løbende vores anbefalinger og holder indholdet aktuelt.</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Our Story */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Vores Historie</h2>
            <div className="prose prose-lg mx-auto text-gray-600">
              <p>
                DKBettingSite blev grundlagt i 2019 af et team af erfarne gambling-eksperter og tech-entusiaster. Vi så
                et behov for pålidelig, upartisk information om betting sites i Danmark.
              </p>
              <p>
                Siden da er vi vokset til at blive en af Danmarks mest betroede kilder til betting-information. Vi har
                hjulpet tusindvis af spillere med at finde sikre og pålidelige betting platforme.
              </p>
              <p>
                Vores team består af erfarne spillere, data-analytikere og content-eksperter, der alle deler passionen
                for at levere den bedste information til danske betting-entusiaster.
              </p>
            </div>
          </div>

          {/* Responsible Gaming Commitment */}
          <div className="bg-red-50 border border-red-200 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-center mb-6 text-red-800">Vores Forpligtelse til Ansvarligt Spil</h2>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-red-700 mb-4">
                Vi tager ansvarligt spil meget seriøst. Alle vores anbefalede sites tilbyder værktøjer til ansvarligt
                spil, og vi opfordrer altid til forsigtig og ansvarlig gambling.
              </p>
              <p className="text-red-700">
                Hvis du eller nogen du kender har problemer med gambling, er der hjælp at få. Kontakt StopSpillet.dk
                eller Ludomani.dk for professionel støtte.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
