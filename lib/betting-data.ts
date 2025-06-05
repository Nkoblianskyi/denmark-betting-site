export interface BettingSite {
  id: number
  name: string
  logo: string
  url: string
  bonus: string
  rating: number
  reviews: number
  description: string
}

export const bettingSites: BettingSite[] = [
  {
    id: 1,
    name: "LeoVegas",
    logo: "/lasvegas.svg",
    url: "https://www.leovegas.dk/",
    bonus: "Få op til 1.000 kr. i kontanter",
    rating: 5,
    reviews: 25747,
    description: "Markedsledende casino og sportsbook med hurtige udbetalinger",
  },
  {
    id: 2,
    name: "Expekt",
    logo: "/expekt.svg",
    url: "https://www.expekt.dk/",
    bonus: "Få 500 kr. live FREE BET",
    rating: 5,
    reviews: 18283,
    description: "Specialiseret i live betting med konkurrencedygtige odds",
  },
  {
    id: 3,
    name: "Betsson",
    logo: "/betsson.png",
    url: "https://www.betsson.dk/",
    bonus: "Fodbold Kombi-boost op til 70%",
    rating: 4.9,
    reviews: 17856,
    description: "Nordisk bookmaker med stærk fokus på fodbold",
  },
  {
    id: 4,
    name: "GetLucky",
    logo: "/getlucky.png",
    url: "https://www.getlucky.com/da",
    bonus: "Få et 100 kr. FREE BET",
    rating: 4.9,
    reviews: 16987,
    description: "Nyt og innovativt betting site med gode bonusser",
  },
  {
    id: 5,
    name: "Betinia",
    logo: "/betinia.png",
    url: "https://betinia.dk/dk/sport",
    bonus: "Velkommen bonus op til 500 kr.",
    rating: 4.8,
    reviews: 14656,
    description: "Brugervenligt interface med omfattende sportsudvalg",
  },
]
