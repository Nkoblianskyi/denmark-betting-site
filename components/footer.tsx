import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 sm:py-12 relative overflow-hidden">
      <div className="container mx-auto px-2 sm:px-4 relative z-10">
        {/* Organization Logos */}
        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 mb-6 sm:mb-8 pb-6 sm:pb-8 border-b border-gray-700 animate-fadeInUp animate-delay-100 opacity-0">
          <Link
            href="https://spillemyndigheden.dk"
            target="_blank"
            className="hover:opacity-100 transition-all duration-300 transform hover:scale-110 bg-white rounded p-2"
          >
            <Image
              src="/spillemyn.svg"
              alt="Spillemyndigheden"
              width={90}
              height={30}
              className="sm:w-[120px] sm:h-[40px]"
            />
          </Link>
          <Link
            href="https://www.stopspillet.dk/"
            target="_blank"
            className="hover:opacity-100 transition-all duration-300 transform hover:scale-110 bg-white rounded p-2"
          >
            <Image
              src="/stopspillet.png"
              alt="StopSpillet"
              width={90}
              height={30}
              className=" sm:w-[120px] sm:h-[40px]"
            />
          </Link>
          <Link
            href="https://rofus.nu"
            target="_blank"
            className="hover:opacity-100 transition-all duration-300 transform hover:scale-110 bg-white rounded p-2"
          >
            <Image
              src="/rofus.png"
              alt="ROFUS"
              width={90}
              height={30}
              className="sm:w-[120px] sm:h-[40px]"
            />
          </Link>
          <Link
            href="https://www.gambleaware.org"
            target="_blank"
            className="hover:opacity-100 transition-all duration-300 transform hover:scale-110 bg-white rounded p-2"
          >
            <Image
              src="/gamble.webp"
              alt="GambleAware"
              width={90}
              height={30}
              className="sm:w-[120px] sm:h-[40px]"
            />
          </Link>
          <Link
            href="https://www.gamcare.org.uk/"
            target="_blank"
            className="hover:opacity-100 transition-all duration-300 transform hover:scale-110 bg-white rounded p-2"
          >
            <Image
              src="/gamecare.svg"
              alt="GameCare"
              width={90}
              height={30}
              className="sm:w-[120px] sm:h-[40px]"
            />
          </Link>
          <div className="bg-red-700 text-white px-2 sm:px-3 py-1 sm:py-2 rounded-full font-bold shadow-lg text-sm">
            18+
          </div>
        </div>

        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
          <div className="animate-fadeInLeft animate-delay-200 opacity-0 text-center md:text-left">
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-amber-500">DKBettingSite</h3>
            <p className="text-gray-400 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">
              Din ultimative guide til Danmarks bedste betting platforme. Vi leverer ekspertanmeldelser, verificerede
              bonusser og pålidelig information for at sikre din succes inden for ansvarligt spil.
            </p>
            <div className="flex items-center justify-center md:justify-start space-x-2">
              <Image
                src="/flag.png"
                alt="Danish Flag"
                width={30}
                height={20}
                className="rounded-sm"
              />
              <span className="text-sm font-medium text-amber-400">Certificeret dansk platform</span>
            </div>
          </div>

          <div className="animate-fadeInUp animate-delay-300 opacity-0 text-center md:text-left">
            <h4 className="font-semibold mb-3 sm:mb-4 text-gray-300">Navigation</h4>
            <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
              <li>
                <Link
                  href="/"
                  className="hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block"
                >
                  Forside
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block"
                >
                  Om DKBetting
                </Link>
              </li>
              <li>
                <Link
                  href="/cookies-politik"
                  className="hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block"
                >
                  Cookies Politik
                </Link>
              </li>
              <li>
                <Link
                  href="/privatlivspolitik"
                  className="hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block"
                >
                  Privatlivspolitik
                </Link>
              </li>
            </ul>
          </div>

          <div className="animate-fadeInRight animate-delay-400 opacity-0 text-center md:text-left">
            <h4 className="font-semibold mb-3 sm:mb-4 text-gray-300">Støtte & Sikkerhed</h4>
            <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
              <li>
                <Link
                  href="https://stopspillet.dk"
                  target="_blank"
                  className="hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block"
                >
                  StopSpillet Hjælp
                </Link>
              </li>
              <li>
                <Link
                  href="https://ludomani.dk"
                  target="_blank"
                  className="hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block"
                >
                  Ludomani Rådgivning
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.gambleaware.org"
                  target="_blank"
                  className="hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block"
                >
                  International Støtte
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.gamecare.org.uk"
                  target="_blank"
                  className="hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block"
                >
                  GameCare Assistance
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-gray-700 pt-6 sm:pt-8 text-xs sm:text-sm text-gray-400 space-y-3 sm:space-y-4 animate-fadeInUp animate-delay-500 opacity-0">
          <p className="leading-relaxed">
            <strong className="text-amber-400">Vigtigt at vide:</strong> DKBettingSite.com fungerer som en uafhængig
            informationsplatform, der modtager kommission fra vores samarbejdspartnere når du registrerer dig gennem
            vores links. Dette påvirker aldrig vores objektive vurderinger, som er baseret på omfattende research,
            grundige tests og års erfaring inden for betting-industrien.
          </p>
          <p className="leading-relaxed">
            <strong className="text-red-400">Ansvarligt spil advarsel:</strong> Betting og gambling kan udvikle sig til
            afhængighed og resultere i alvorlige økonomiske konsekvenser. Spil kun med penge du har råd til at miste, og
            søg professionel hjælp hvis dit spillemønster bliver problematisk. Kontakt{" "}
            <Link href="https://stopspillet.dk" target="_blank" className="text-amber-400 hover:underline font-medium">
              StopSpillet.dk
            </Link>{" "}
            for øjeblikkelig støtte og vejledning.
          </p>
          <div className="flex flex-col sm:flex-row justify-between items-center pt-3 sm:pt-4 border-t border-gray-800 space-y-2 sm:space-y-0">
            <p className="text-gray-500 text-center sm:text-left">
              &copy; 2025 DKBettingSite. Alle rettigheder forbeholdes. Udviklet i Danmark.
            </p>
            <p className="text-xs text-gray-600 text-center sm:text-right">
              Senest opdateret:{" "}
              {new Date().toLocaleDateString("da-DK", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
