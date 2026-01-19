export interface Landmark {
  image: string;
  location: { latitude: number; longitude: number };
}

export interface Hint {
  id: number;
  hint: string;
}

export interface Challenge {
  id: number;
  name: string;
  teaser: string;
  duration: string; // not sure if we need this
  landmark: Landmark;
  difficulty: "easy" | "medium" | "hard";
  mode: "classic" | "hunt"; // classic only clue, hunt => hot/cold
  hints: Hint[];
}

export const sampleChallenges: Challenge[] = [
  {
    id: 1,
    name: "The Quiet Church",
    teaser:
      "Not all landmarks demand attention. Step away from the noise, follow your senses, and find a place where the city slows down.",
    duration: "2-3 min",
    difficulty: "easy",
    mode: "classic",
    landmark: {
      image: "",
      location: { latitude: 45.6452, longitude: 13.7768 },
    },
    hints: [
      {
        id: 1,
        hint: "You are looking for a religious building, but not a large or dominant one.",
      },
      {
        id: 2,
        hint: "The building you seek is surrounded by everyday city life, not a large open square.",
      },

      {
        id: 3,
        hint: "Look for a small church near a quieter crossing of streets, slightly away from Titov trg.",
      },
    ],
  },
  {
    id: 2,
    name: "The Quiet Church",
    teaser:
      "Not all landmarks demand attention. Step away from the noise, follow your senses, and find a place where the city slows down.",
    duration: "2-3 min",
    difficulty: "easy",
    mode: "classic",
    landmark: {
      image: "",
      location: { latitude: 45.6452, longitude: 13.7768 },
    },
    hints: [],
  },
];
