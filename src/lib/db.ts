export interface Landmark {
  image: string;
  location: { latitude: number; longitude: number };
}

export interface Hint {
  id: number;
  hint: string;
}

export interface Option {
  id: number;
  option: string;
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
  correct: Option;
  options: Option[];
  reflectionQuestion: string;
}

export const sampleChallenges: Challenge[] = [
  {
    id: 1,
    name: "The Quiet Church",
    teaser:
      "Not all landmarks demand attention. Step away from the noise, follow your senses, and find a place where the city slows down.",
    duration: "2-3 min",
    difficulty: "easy",
    mode: "hunt",
    landmark: {
      image: "/images/church.jpg",
      location: { latitude: 45.54777670203097, longitude: 13.731747892457468 },
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
    options: [
      {
        id: 1,
        option: "A tall bell tower",
      },
      {
        id: 2,
        option: "A richly decorated facade",
      },
      {
        id: 3,
        option: "A small, simple stone church",
      },
      {
        id: 4,
        option: "A modern glass building",
      },
    ],
    correct: { id: 3, option: "A small, simple stone church." },
    reflectionQuestion: "From here, which direction do you think Titov trg is?",
  },
  {
    id: 2,
    name: "Chasing Fresh Water",
    teaser:
      "Fresh water once entered the city through a single point. Find it by moving through the old town and listening to how the city changes around you.",
    duration: "6-8 min",
    difficulty: "medium",
    mode: "hunt",
    landmark: {
      image: "/images/fountain.webp",
      location: { latitude: 45.545470863803565, longitude: 13.729784281987486 },
    },
    hints: [
      {
        id: 1,
        hint: "Water was brought into the city through an aqueduct that ended at a fountain.",
      },
      {
        id: 2,
        hint: "The fountain is located near the intersection of several streets, not far from the main square.",
      },
      {
        id: 3,
        hint: "Look for a fountain that features sculptures and is situated in a lively part of the old town.",
      },
    ],
    options: [
      { id: 1, option: "A simple stone basin" },
      { id: 2, option: "A large fountain with sculptures" },
      { id: 3, option: "A modern water feature" },
      { id: 4, option: "A natural spring" },
    ],
    correct: { id: 2, option: "A large fountain with sculptures" },
    reflectionQuestion:
      "What do you think this fountain symbolizes for the city of Koper?",
  },
];
