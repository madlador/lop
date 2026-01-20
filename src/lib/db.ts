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

/**
 * Challenge: The Bishop's Garden
 *
 * Players search for Vergerijev trg, a quiet square with a small park
 * located behind the former Madonizza palace (now the municipal seat).
 *
 * The challenge requires users to locate the square and identify it by
 * the statue of Pier Paolo Vergerio, a 16th-century Protestant reformer
 * and bishop of Koper.
 *
 * Difficulty: Medium (4-5 minutes)
 * Mode: Hunt (proximity-based navigation)
 */
const a: Challenge = {
  id: 1,
  name: "The Bishop's Garden",
  teaser:
    "A reformer once walked these streets. Find the place where history sits quietly behind grand walls, marked by a figure who challenged the established order.",
  duration: "4-5 min",
  difficulty: "medium",
  mode: "hunt",
  landmark: {
    image: "/images/bishops-square.jpeg",
    location: { latitude: 45.54951811807389, longitude: 13.72996204208948 },
  },
  hints: [
    {
      id: 1,
      hint: "You are looking for a square with a small park, nestled behind what was once a grand palace.",
    },
    {
      id: 2,
      hint: "The space is a quiet refuge, set back from the busier streets of the old town.",
    },
    {
      id: 3,
      hint: "A statue stands here commemorating a religious figure who lived centuries ago. Look for the monument.",
    },
  ],
  options: [
    {
      id: 1,
      option: "A bustling marketplace with vendors",
    },
    {
      id: 2,
      option: "A quiet square with a small park and a statue",
    },
    {
      id: 3,
      option: "A large cathedral with multiple bell towers",
    },
    {
      id: 4,
      option: "A modern civic building with fountains",
    },
  ],
  correct: { id: 2, option: "A quiet square with a small park and a statue" },
  reflectionQuestion:
    "What do you think this hidden square reveals about how Koper has grown and changed over time?",
};

/**
 * Challenge: The Muda Gate
 *
 * Players search for the Muda Gate (Porta della Muda), the only surviving
 * 16th-century town gate of Koper. Built in 1516 by podesta Sebastiano Contarini,
 * the gate features Renaissance architecture with heraldic reliefs including
 * lion heads and a sun relief, symbolizing Venice's influence.
 *
 * The gate originally served as part of Koper's fortifications when the town
 * was an island, with a fortress (Castello Leone) and bridge guarding entry.
 * The name derives from "mitnina"—a tax levied on goods entering the town.
 *
 * Difficulty: Medium (5-6 minutes)
 * Mode: Hunt (proximity-based navigation)
 */
const b: Challenge = {
  id: 2,
  name: "The Ancient Crossing",
  teaser:
    "Where stone lions once guarded entry, a Renaissance arch still stands—a monument to the days when this town was an island and only one passage let merchants and travelers cross the threshold.",
  duration: "5-6 min",
  difficulty: "medium",
  mode: "classic",
  landmark: {
    image: "/images/muda-gate.jpg",
    location: { latitude: 45.54482938630046, longitude: 13.730109261762786 },
  },
  hints: [
    {
      id: 1,
      hint: "You are looking for a historic gate structure with Renaissance architectural features, featuring heraldic symbols.",
    },
    {
      id: 2,
      hint: "The gate is built in the style of a triumphal arch and displays stone reliefs, including animal heads and celestial symbols.",
    },
    {
      id: 3,
      hint: "This was once the only way in and out of the town when Koper was surrounded by water. Look for a structure with old fortification walls nearby.",
    },
  ],
  options: [
    {
      id: 1,
      option: "A baroque church with bell tower",
    },
    {
      id: 2,
      option: "A modern city gate with steel and glass",
    },
    {
      id: 3,
      option:
        "A Renaissance-style stone arch with heraldic reliefs and lion heads",
    },
    {
      id: 4,
      option: "A wooden drawbridge over water",
    },
  ],
  correct: {
    id: 3,
    option:
      "A Renaissance-style stone arch with heraldic reliefs and lion heads",
  },
  reflectionQuestion:
    "Knowing this gate once controlled who entered and left Koper, what do you think it meant to be a merchant crossing this threshold centuries ago?",
};

/**
 * Challenge: Taverna Koper
 *
 * Players search for Taverna Koper, a historic building constructed at the turn
 * of the 16th-17th century. Originally built as a vital salt storage facility
 * near the town walls and harbor, it served multiple functions over centuries:
 * salt warehouse, fishery, tavern, and now a cultural and events venue.
 *
 * The building features a distinctive Venetian lion relief (added in the 1930s)
 * and stands as a symbol of Koper's transformation from industrial to cultural
 * significance. Located strategically near the old fortifications.
 *
 * Difficulty: Medium (4-5 minutes)
 * Mode: Hunt (proximity-based navigation)
 */
const c: Challenge = {
  id: 3,
  name: "The Salt Keeper's House",
  teaser:
    "Once, this building guarded the white treasure that made merchants rich. Built where the walls met the harbor, it has watched the city transform from industry to celebration, yet still remembers the salt and the ships.",
  duration: "4-5 min",
  difficulty: "easy",
  mode: "classic",
  landmark: {
    image: "/images/taverna-koper.webp",
    location: { latitude: 45.54801099878612, longitude: 13.725654802445352 },
  },
  hints: [
    {
      id: 1,
      hint: "You are looking for a historic stone building positioned near the old town walls and the waterfront area.",
    },
    {
      id: 2,
      hint: "The building features a distinctive relief with a winged lion symbol, marking its Venetian heritage and importance.",
    },
    {
      id: 3,
      hint: "This place was once essential to the city's wealth, but today it buzzes with life—look for signs of cultural activity and gatherings.",
    },
  ],
  options: [
    {
      id: 1,
      option: "A modern glass and steel venue",
    },
    {
      id: 2,
      option: "A residential apartment building",
    },
    {
      id: 3,
      option:
        "A historic stone building with a Venetian lion relief near the harbor",
    },
    {
      id: 4,
      option: "A fishing boat repair workshop",
    },
  ],
  correct: {
    id: 3,
    option:
      "A historic stone building with a Venetian lion relief near the harbor",
  },
  reflectionQuestion:
    "How do you think a place transforms from storing salt to hosting celebrations? What does Taverna Koper tell us about how cities evolve?",
};

/**
 * Challenge: The Patrician's Legacy
 *
 * Players search for the Bello Palace, a historic structure connected to
 * the Romanesque Patriarch's Tower (13th century) and the Rotunda of John
 * the Baptist (now the Chapel of Our Lady of Carmel).
 *
 * The palace belonged to the Bello family, an old and prestigious Venetian
 * noble family that allegedly originated from Vicenza before settling in Koper.
 * Today the building serves as residential apartments, blending medieval heritage
 * with modern living.
 *
 * Difficulty: Hard (6-7 minutes)
 * Mode: Hunt (proximity-based navigation)
 */
const d: Challenge = {
  id: 4,
  name: "The Nobleman's Stone",
  teaser:
    "A family from distant lands built their legacy here, connecting to towers and chapels that watched over centuries. Find where stone speaks of Venetian nobility and faith intertwined.",
  duration: "6-7 min",
  difficulty: "hard",
  mode: "hunt",
  landmark: {
    image: "/images/bello-palace.png",
    location: { latitude: 45.54855693842198, longitude: 13.730148391419029 },
  },
  hints: [
    {
      id: 1,
      hint: "You are looking for a palace structure that is part of a larger complex of medieval buildings.",
    },
    {
      id: 2,
      hint: "The building connects to a Romanesque tower and a religious structure—look for these architectural elements nearby.",
    },
    {
      id: 3,
      hint: "This was the home of a noble Venetian family. The structure blends palace architecture with religious spaces, creating a unique medieval ensemble.",
    },
  ],
  options: [
    {
      id: 1,
      option: "A baroque church with ornate decorations",
    },
    {
      id: 2,
      option: "A fortress with watchtowers and battlements",
    },
    {
      id: 3,
      option: "A medieval palace connected to a romanesque tower and chapel",
    },
    {
      id: 4,
      option: "A merchant's warehouse near the harbor",
    },
  ],
  correct: {
    id: 3,
    option: "A medieval palace connected to a romanesque tower and chapel",
  },
  reflectionQuestion:
    "What does it tell us about medieval Koper that noble families chose to build their homes next to religious spaces? What were they protecting?",
};

/**
 * Challenge: Church of St Jacob
 *
 * Players search for the Church of St Jacob, a single-nave aisleless Gothic
 * church built in the first half of the 16th century. Located on Martinčev trg
 * Square (east of Brolo trg), the church features Gothic exterior architecture
 * with a Baroque-decorated interior.
 *
 * Today the building serves as the "godbeni dom" (brass home) of the Koper
 * Brass Orchestra, representing the transformation from religious to cultural use
 * while preserving its architectural heritage.
 *
 * Difficulty: Medium (4-5 minutes)
 * Mode: Hunt (proximity-based navigation)
 */
const e: Challenge = {
  id: 5,
  name: "Where Music Echoes",
  teaser:
    "A Gothic prayer once rose from these walls, simple and pure in form. Now different melodies fill the space—brass instruments sing where hymns once resonated, yet the stone remembers both.",
  duration: "4-5 min",
  difficulty: "medium",
  mode: "hunt",
  landmark: {
    image: "/images/st-jacob-church.png",
    location: { latitude: 45.54779589907215, longitude: 13.731935323025237 },
  },
  hints: [
    {
      id: 1,
      hint: "You are looking for a church with a distinctive Gothic architectural style, simple and elegant in form.",
    },
    {
      id: 2,
      hint: "The building is located on a quieter square in the old town, away from the main thoroughfares.",
    },
    {
      id: 3,
      hint: "Listen carefully—this sacred space now hosts musical performances. Look for a building where art and history blend.",
    },
  ],
  options: [
    {
      id: 1,
      option: "A large cathedral with multiple spires",
    },
    {
      id: 2,
      option: "A Renaissance palace with ornate facade",
    },
    {
      id: 3,
      option: "A simple Gothic church with a single nave",
    },
    {
      id: 4,
      option: "A modern concert hall with glass walls",
    },
  ],
  correct: { id: 3, option: "A simple Gothic church with a single nave" },
  reflectionQuestion:
    "How does a building change when its purpose transforms? What do you think the walls remember—the prayers or the music—or both equally?",
};

/**
 * Challenge: Da Ponte Fountain
 *
 * Players search for the Da Ponte Fountain, located in a square that once served
 * as the main connection point between island-city Koper and the mainland.
 *
 * The fountain is the final station of the aqueduct that supplied fresh water
 * to the city. Its current Baroque appearance dates from 1666, when podestá
 * Lorenzo Da Ponte commissioned its reconstruction. The octagonal pool features
 * an arch symbolizing a bridge (referencing the podestá's name), decorated with
 * pyramids, coats-of-arms, stone faces, and ornamental details. The fountain
 * remained in use until 1898.
 *
 * Difficulty: Medium (5-6 minutes)
 * Mode: Hunt (proximity-based navigation)
 */
const f: Challenge = {
  id: 6,
  name: "The Bridge of Water",
  teaser:
    "Water traveled far to reach this place, arriving through stone arteries beneath the earth. Here, where island met mainland, a monument celebrates the flow—adorned with faces and symbols of those who commanded its passage.",
  duration: "5-6 min",
  difficulty: "medium",
  mode: "hunt",
  landmark: {
    image: "/images/da-ponte-fountain.png",
    location: { latitude: 45.54548600675526, longitude: 13.729796796238837 },
  },
  hints: [
    {
      id: 1,
      hint: "You are looking for a fountain with an octagonal pool and Baroque architectural details.",
    },
    {
      id: 2,
      hint: "The fountain features decorative elements including stone faces, pyramids, and heraldic coats-of-arms carved into its structure.",
    },
    {
      id: 3,
      hint: "This was once the vital endpoint where fresh water entered the city from far away. Look for an ornate monument in a significant square.",
    },
  ],
  options: [
    {
      id: 1,
      option: "A simple circular basin with no decoration",
    },
    {
      id: 2,
      option: "A modern water feature with steel sculptures",
    },
    {
      id: 3,
      option:
        "An ornate octagonal Baroque fountain with carved faces and heraldic symbols",
    },
    {
      id: 4,
      option: "A natural spring emerging from rocks",
    },
  ],
  correct: {
    id: 3,
    option:
      "An ornate octagonal Baroque fountain with carved faces and heraldic symbols",
  },
  reflectionQuestion:
    "Why do you think a podestá would commission such an elaborate monument to something as simple as water? What does this tell us about what water meant to Koper?",
};

export const sampleChallenges: Challenge[] = [a, b, c, d, e, f];
