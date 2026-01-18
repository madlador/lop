import type { Challenge } from "./types";

export const sampleChallenges: Challenge[] = [
  {
    id: 1,
    name: "The Quiet Church",
    teaser: "Not all landmarks demand attention. Step away from the noise, follow your senses, and find a place where the city slows down.",
    image: "/images/church.jpg",
    duration: "2-3 min",
    mode: "classic",
    difficulty: "easy",
    latitude: 45.6452,
    longitude: 13.7768
  },
  {
    id: 2,
    name: "Hidden Market Gem",
    teaser: "Wander through the local market and discover the oldest shop in the square. Look for the red door.",
    image: "/images/market.jpg",
    duration: "5-7 min",
    mode: "hunt",
    difficulty: "medium",
    latitude: 45.6412,
    longitude: 13.7814
  },
  {
    id: 3,
    name: "Bridge of Echoes",
    teaser: "Cross the ancient bridge and listen carefully. Find the spot where your voice echoes the loudest.",
    image: "/images/bridge.jpg",
    duration: "3-4 min",
    mode: "classic",
    difficulty: "easy",
    latitude: 45.6489,
    longitude: 13.7645
  },
  {
    id: 4,
    name: "Lost In Translation",
    teaser: "Decipher the mysterious symbols carved into the old fountain. You'll need to look closely and think creatively.",
    image: "/images/fountain.jpg",
    duration: "10-15 min",
    mode: "hunt",
    difficulty: "hard",
    latitude: 45.6398,
    longitude: 13.7902
  },
  {
    id: 5,
    name: "Street Art Detective",
    teaser: "Find all three murals hidden in the old town. Photograph them and count the colors used in the largest one.",
    image: "/images/street-art.jpg",
    duration: "8-10 min",
    mode: "hunt",
    difficulty: "medium",
    latitude: 45.6445,
    longitude: 13.7723
  },
  {
    id: 6,
    name: "Tower Climb",
    teaser: "Reach the top of the historic tower and look for the names carved by visitors from centuries ago.",
    image: "/images/tower.jpg",
    duration: "4-5 min",
    mode: "classic",
    difficulty: "hard",
    latitude: 45.6502,
    longitude: 13.7756
  }
];