import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Shield, Award, TrendingUp, Target, Calculator } from "lucide-react"

export function InfoSections() {
  return (
    <div className="space-y-0">
      {/* Bonuses Section */}
      <section className="py-16 relative overflow-hidden">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 animate-gradient"></div>
        <div
          className="absolute inset-0 bg-gradient-to-r from-blue-100/30 via-transparent to-purple-100/30 animate-gradient"
          style={{ animationDelay: "2s" }}
        ></div>

        {/* Floating Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-200/20 rounded-full blur-xl animate-float"></div>
        <div
          className="absolute top-32 right-20 w-32 h-32 bg-purple-200/20 rounded-full blur-xl animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-20 left-1/4 w-24 h-24 bg-indigo-200/20 rounded-full blur-xl animate-float"
          style={{ animationDelay: "3s" }}
        ></div>

        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900 animate-slideInDown">
            Forstå Betting Bonusser
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Lær hvordan du maksimerer værdien af dine bonusser og undgår almindelige faldgruber
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white/80 backdrop-blur-sm border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fadeInUp animate-delay-100 opacity-0 hover-lift">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Award className="w-6 h-6 text-amber-600" />
                  <span>Velkomstbonus</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-3">
                  En bonus du får som ny kunde. Typisk matcher bookmaker dit første indskud op til et bestemt beløb.
                </p>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-sm text-gray-700 font-semibold">💡 Tip: Læs altid omsætningskravene først!</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fadeInUp animate-delay-200 opacity-0 hover-lift">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  <span>Free Bets</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-3">
                  Gratis spil hvor du kan placere et væddemål uden at risikere dine egne penge.
                </p>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-sm text-gray-700 font-semibold">💡 Tip: Brug på højere odds for bedre værdi!</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fadeInUp animate-delay-300 opacity-0 hover-lift">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Shield className="w-6 h-6 text-blue-600" />
                  <span>Cashback</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-3">Få en del af dine tab tilbage som kontanter eller bonus kredit.</p>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-sm text-gray-700 font-semibold">💡 Tip: Perfekt til risikofyldte væddemål!</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Betting Tips Section */}
      <section className="py-16 relative overflow-hidden">
        {/* Dark Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 animate-gradient"></div>
        <div
          className="absolute inset-0 bg-gradient-to-r from-blue-900/50 via-transparent to-purple-900/50 animate-gradient"
          style={{ animationDelay: "3s" }}
        ></div>

        {/* Moving Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent transform -skew-y-12 animate-pulse"></div>
        </div>

        {/* Floating Particles */}
        <div className="absolute top-20 left-20 w-16 h-16 bg-blue-400/20 rounded-full blur-lg animate-float"></div>
        <div
          className="absolute top-40 right-32 w-20 h-20 bg-purple-400/20 rounded-full blur-lg animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-32 left-1/3 w-18 h-18 bg-indigo-400/20 rounded-full blur-lg animate-float"
          style={{ animationDelay: "4s" }}
        ></div>
        <div
          className="absolute bottom-20 right-20 w-14 h-14 bg-cyan-400/20 rounded-full blur-lg animate-float"
          style={{ animationDelay: "1s" }}
        ></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-white">Ekspert Betting Tips & Strategier</h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">
              Lær fra professionelle bettere og øg dine chancer for succes med disse beviste strategier
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Left Column - Tips */}
            <div className="space-y-6">
              <Card className="bg-white/10 backdrop-blur-sm border-gray-600 text-white hover:bg-white/15 transition-all duration-300 animate-fadeInLeft animate-delay-200 opacity-0 hover-scale">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-gray-200">
                    <Target className="w-6 h-6" />
                    <span>Bankroll Management</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-gray-300">Aldrig bet mere end 1-5% af din totale bankroll på et enkelt spil.</p>
                  <div className="bg-gray-800/50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-200 mb-2">Eksempel:</h4>
                    <p className="text-sm text-gray-300">Bankroll: 10.000 kr → Max bet per spil: 100-500 kr</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-gray-600 text-white hover:bg-white/15 transition-all duration-300 animate-fadeInLeft animate-delay-300 opacity-0 hover-scale">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-gray-200">
                    <Calculator className="w-6 h-6" />
                    <span>Value Betting</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-gray-300">
                    Find væddemål hvor bookmakernes odds er højere end den reelle sandsynlighed.
                  </p>
                  <div className="bg-gray-800/50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-200 mb-2">Formel:</h4>
                    <p className="text-sm text-gray-300">Value = (Odds × Sandsynlighed) - 1</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Statistics */}
            <div className="space-y-6">
              <Card className="bg-white/10 backdrop-blur-sm border-gray-600 text-white hover:bg-white/15 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-gray-200">
                    <TrendingUp className="w-6 h-6" />
                    <span>Danske Betting Trends 2024</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-amber-400">73%</div>
                      <div className="text-sm text-gray-300">Fodbold betting</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-amber-400">18%</div>
                      <div className="text-sm text-gray-300">Tennis betting</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-amber-400">€127</div>
                      <div className="text-sm text-gray-300">Gennemsnit/måned</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-amber-400">2.1x</div>
                      <div className="text-sm text-gray-300">Populære odds</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-red-600 text-white hover:bg-white/15 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-red-400">⚠️ Undgå Disse Fejl</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Jage tab med større indsatser</li>
                    <li>• Bet på dit favorithold uden analyse</li>
                    <li>• Ignorere bonusvilkår</li>
                    <li>• Spille når du er følelsesmæssigt påvirket</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Quick Action Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm border border-gray-600 rounded-xl p-6 text-center text-white hover:scale-105 transition-transform duration-300">
              <div className="text-3xl mb-2">📊</div>
              <h3 className="font-bold mb-2 text-gray-200">Odds Sammenligning</h3>
              <p className="text-sm text-gray-300">Sammenlign altid odds på tværs af platforme</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-gray-600 rounded-xl p-6 text-center text-white hover:scale-105 transition-transform duration-300">
              <div className="text-3xl mb-2">📈</div>
              <h3 className="font-bold mb-2 text-gray-200">Live Betting</h3>
              <p className="text-sm text-gray-300">Bedre odds under kampen med rigtig timing</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-gray-600 rounded-xl p-6 text-center text-white hover:scale-105 transition-transform duration-300">
              <div className="text-3xl mb-2">🎯</div>
              <h3 className="font-bold mb-2 text-gray-200">Specialisering</h3>
              <p className="text-sm text-gray-300">Fokuser på 1-2 sportsgrene for bedre resultater</p>
            </div>
          </div>
        </div>
      </section>

      {/* Selection Criteria */}
      <section className="py-16 relative overflow-hidden">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 animate-gradient"></div>
        <div
          className="absolute inset-0 bg-gradient-to-r from-emerald-100/40 via-transparent to-cyan-100/40 animate-gradient"
          style={{ animationDelay: "1.5s" }}
        ></div>

        {/* Geometric Shapes */}
        <div className="absolute top-16 right-16 w-32 h-32 bg-emerald-200/20 rounded-full blur-2xl animate-pulse"></div>
        <div
          className="absolute bottom-24 left-24 w-40 h-40 bg-teal-200/20 rounded-full blur-2xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-200/10 rounded-full blur-3xl animate-spin-slow"></div>

        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900 animate-slideInDown">
            Sådan Vælger Vi De Bedste Betting Sites
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Vores omfattende evalueringsproces sikrer kun de mest pålidelige platforme
          </p>
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                {Array.from({ length: 3 }, (_, index) => (
                  <div
                    key={index}
                    className={`flex items-start space-x-4 bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 animate-fadeInUp animate-delay-${(index + 1) * 100} opacity-0 hover-lift`}
                  >
                    <div className="bg-gray-800 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-gray-900">
                        {["Licens og Sikkerhed", "Odds og Markeder", "Bonusser og Kampagner"][index]}
                      </h3>
                      <p className="text-gray-600">
                        {
                          [
                            "Vi kontrollerer at alle sites har gyldig dansk licens fra Spillemyndigheden og bruger SSL-kryptering.",
                            "Vi sammenligner odds på 50+ populære sportsgrene og vurderer udvalget af live betting markeder.",
                            "Vi analyserer bonusvilkår, omsætningskrav og vurderer den reelle værdi af tilbud for spillere.",
                          ][index]
                        }
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-6">
                {Array.from({ length: 3 }, (_, index) => (
                  <div
                    key={index}
                    className={`flex items-start space-x-4 bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 animate-fadeInUp animate-delay-${(index + 4) * 100} opacity-0 hover-lift`}
                  >
                    <div className="bg-gray-800 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                      {index + 4}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-gray-900">
                        {["Brugeroplevelse", "Kundeservice", "Betalingsmetoder"][index]}
                      </h3>
                      <p className="text-gray-600">
                        {
                          [
                            "Vi tester hjemmesider og mobile apps for hastighed, brugervenlighed og funktionalitet på danske enheder.",
                            "Vi vurderer tilgængelighed, responstid og kvalitet af kundesupport på dansk sprog døgnet rundt.",
                            "Vi kontrollerer udvalg af danske betalingsmetoder, udbetalingshastighed og eventuelle gebyrer.",
                          ][index]
                        }
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Responsible Gaming */}
      <section className="py-16 relative overflow-hidden">
        {/* Warning Background with Animation */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 animate-gradient"></div>
        <div
          className="absolute inset-0 bg-gradient-to-r from-red-100/30 via-transparent to-yellow-100/30 animate-gradient"
          style={{ animationDelay: "2.5s" }}
        ></div>

        {/* Pulsing Warning Elements */}
        <div className="absolute top-12 left-12 w-24 h-24 bg-red-200/30 rounded-full blur-xl animate-pulse"></div>
        <div
          className="absolute top-20 right-20 w-28 h-28 bg-orange-200/30 rounded-full blur-xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-16 left-1/4 w-20 h-20 bg-yellow-200/30 rounded-full blur-xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="bg-white/90 backdrop-blur-sm border-2 border-red-600 rounded-2xl p-8 shadow-2xl max-w-4xl mx-auto animate-scaleIn animate-delay-300 opacity-0">
            <h2 className="text-4xl font-bold text-center mb-8 text-red-700">Ansvarligt Spil</h2>
            <div className="text-center space-y-6">
              <p className="text-lg text-red-700 leading-relaxed">
                Gambling kan være vanedannende og føre til alvorlige økonomiske og personlige problemer. Det er
                afgørende at spille ansvarligt og kun med penge, du har råd til at miste.
              </p>
              <div className="grid md:grid-cols-2 gap-8 mt-8">
                <div className="text-left bg-red-50 p-6 rounded-xl border border-red-200">
                  <h3 className="font-bold text-red-800 mb-4 text-lg">⚠️ Advarselstegn på problemspil:</h3>
                  <ul className="text-red-700 space-y-2">
                    <li>• Spiller for mere end du har råd til</li>
                    <li>• Lyver om dit spil overfor familie/venner</li>
                    <li>• Forsømmer arbejde, skole eller familie</li>
                    <li>• Jagter tab med større og større indsatser</li>
                    <li>• Låner penge til gambling</li>
                    <li>• Føler dig deprimeret eller angst omkring spil</li>
                  </ul>
                </div>
                <div className="text-left bg-green-50 p-6 rounded-xl border border-green-200">
                  <h3 className="font-bold text-green-800 mb-4 text-lg">🆘 Få professionel hjælp:</h3>
                  <ul className="text-green-700 space-y-2">
                    <li>
                      •{" "}
                      <a href="https://www.stopspillet.dk/" className="underline font-semibold hover:text-green-900">
                        StopSpillet.dk
                      </a>{" "}
                      - Gratis rådgivning
                    </li>
                    <li>
                      •{" "}
                      <a href="https://ludomani.dk" className="underline font-semibold hover:text-green-900">
                        Ludomani.dk
                      </a>{" "}
                      - Behandling og støtte
                    </li>
                    <li>• Spillemyndighedens hjælpetelefon: 70 20 10 20</li>
                    <li>• Din læge eller kommunens rådgivning</li>
                    <li>• Anonyme Spillere: anonyme-spillere.dk</li>
                  </ul>
                </div>
              </div>
              <div className="bg-blue-50 p-6 rounded-xl mt-6 border border-blue-200">
                <h3 className="font-bold text-blue-800 mb-3">🛡️ Værktøjer til ansvarligt spil:</h3>
                <p className="text-blue-700">
                  Alle danske betting sites tilbyder værktøjer som indskudsgrænser, tidsgrænser, tab-grænser og
                  selvudelukkelse. Brug disse aktivt for at holde kontrollen over dit spil.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
