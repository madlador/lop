interface Props {
  difficulty: "easy" | "medium" | "hard";
}

const difficultyConfig = {
  easy: {
    label: "easy",
    bars: 1,
    colors: "bg-green-400/90 text-green-900",
    barColor: "bg-green-600",
  },
  medium: {
    label: "medium",
    bars: 2,
    colors: "bg-yellow-400/90 text-yellow-900",
    barColor: "bg-yellow-600",
  },
  hard: {
    label: "hard",
    bars: 3,
    colors: "bg-red-400/90 text-red-900",
    barColor: "bg-red-600",
  },
};

export default function DifficultyBadge({ difficulty }: Props) {
  const { label, bars, colors, barColor } = difficultyConfig[difficulty];

  return (
    <div className={`flex gap-2 rounded-lg items-center px-2 py-1 ${colors}`}>
      <span>{label}</span>
      <div className="flex gap-0.5">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className={`w-2 h-5 rounded ${i < bars ? barColor : "bg-white/30"}`}
          />
        ))}
      </div>
    </div>
  );
}
