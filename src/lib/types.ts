export interface Challenge {
  id: number;
  name: string;
  teaser: string;
  image: string;
  duration: string;
  mode: "classic" | "hunt";
  difficulty: "easy" | "medium" | "hard";
  latitude: number;
  longitude: number;
}

export interface Hint {
  id: number;
  challengeId: number;
  order: number;
  hint: string;
}

export interface Trivia {
  id: number;
  challengeId: number;
  question: string;
  answer: string;
  options: string[];
}

// todo: Define the actual functional requrements and make an ER that supports them
