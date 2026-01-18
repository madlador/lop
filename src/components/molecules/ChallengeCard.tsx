import ModeBadge from "../atoms/ModeBadge";
import DurationBadge from "../atoms/DurationBadge";
import DifficultyBadge from "../atoms/DifficultyBadge";

interface Props {
  name: string;
  teaser: string;
  image: string;
  duration: string;
  mode: "classic" | "hunt";
  difficulty: "easy" | "medium" | "hard";
}

export default function ChallengeCard({
  name,
  teaser,
  image,
  duration,
  mode,
  difficulty,
}: Props) {
  return (
    <div className="flex flex-col rounded-xl overflow-hidden bg-orange-950/10 shrink-0">
      <div className="relative aspect-video rounded-xl overflow-hidden shadow">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
        />
        <div className="absolute inset-0 bg-radial from-transparent to-black/80" />
        <div className="relative z-10 h-full p-2 flex flex-col justify-between">
          <h2 className="text-3xl text-orange-50 font-bold mt-4 ml-4">
            {name}
          </h2>

          <div className="flex gap-2 justify-between">
            <ModeBadge variant={mode} />
            <div className="flex gap-2">
              <DurationBadge duration={duration} />
              <DifficultyBadge difficulty={difficulty} />
            </div>
          </div>
        </div>
      </div>

      <div className="p-4">
        <p className="line-clamp-2 text-sm text-gray-600 leading-relaxed">
          {teaser}
        </p>
      </div>
    </div>
  );
}
