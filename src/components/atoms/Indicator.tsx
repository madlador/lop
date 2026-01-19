export default function Indicator({ percentage }: { percentage: number }) {
  const clamped = Math.max(0, Math.min(100, percentage));
  const hue = 240 - (clamped / 100) * 240;
  const bg = `hsl(${hue}, 70%, 80%)`;
  const bg2 = `hsl(${hue}, 70%, 85%)`;
  const accent = `hsl(${hue}, 70%, 40%)`;

  const labelIndex = (p: number) => {
    if (p === 100) return 9;
    return Math.floor(p / 10)
  };

  console.log(labelIndex(clamped));
  const labels = [
    "Frozen 🧊",
    "Sub-zero ❄️",
    "Chilly 🥶",
    "Cool Vibes 😎",
    "Getting Warmer ☀️",
    "Heating Up 🔥",
    "Very Hot 🌡️",
    "Spicy 🌶️",
    "Nuclear 💥",
    "FOUND IT! 🎉",
  ];

  return (
    <div
      className="flex flex-col rounded-xl p-8 items-center gap-4 shadow"
      style={{ backgroundColor: bg }}
    >
      <span className="text-2xl font-medium" style={{ color: accent }}>
        {labels[labelIndex(clamped)]}
      </span>

      <div
        className="overflow-hidden h-4 rounded-md shrink-0 w-full shadow"
        style={{ backgroundColor: bg2 }}
      >
        <div
          className="h-full rounded-md"
          style={{ width: `${clamped}%`, backgroundColor: accent }}
        ></div>
      </div>
    </div>
  );
}
