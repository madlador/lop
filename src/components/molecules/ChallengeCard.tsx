import { useEffect, useState } from "react";
import {
  formatTimeSpent,
  getChallengeTimeSpent,
  isChallengeCompleted,
} from "../../lib/utils/timing";
import DifficultyBadge from "../atoms/DifficultyBadge";
import DurationBadge from "../atoms/DurationBadge";
import ModeBadge from "../atoms/ModeBadge";

interface Props {
  challengeId: number;
  name: string;
  teaser: string;
  image: string;
  duration: string;
  mode: "classic" | "hunt";
  difficulty: "easy" | "medium" | "hard";
  onClick?: () => void;
}

export default function ChallengeCard({
  challengeId,
  name,
  teaser,
  image,
  duration,
  mode,
  difficulty,
  onClick,
}: Props) {
  const [isCompleted, setIsCompleted] = useState(false);
  const [completionTime, setCompletionTime] = useState<string | null>(null);

  useEffect(() => {
    if (challengeId) {
      const completed = isChallengeCompleted(challengeId);
      setIsCompleted(completed);

      if (completed) {
        const timeSpent = getChallengeTimeSpent(challengeId);
        if (timeSpent) {
          setCompletionTime(formatTimeSpent(timeSpent));
        }
      }
    }
  }, [challengeId]);

  return (
    <button
      onClick={onClick}
      className="text-start flex cursor-pointer flex-col rounded-xl overflow-hidden bg-orange-950/10 shrink-0"
    >
      {isCompleted && (
        <div className="relative">
          <div className="absolute w-fit top-2 right-2 z-20 bg-green-600 text-white px-2 rounded-full text-sm font-semibold shadow-lg">
            <span className="text-2xl">✓</span>
          </div>
        </div>
      )}

      <div className="relative aspect-video rounded-xl overflow-hidden shadow-xl">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
        />
        <div className="absolute inset-0 bg-radial from-transparent to-black/80" />
        <div className="relative z-10 h-full p-2 flex flex-col justify-between">
          <div>
            <h2 className="text-3xl text-orange-50 font-bold mt-4 ml-4">
              {name}
            </h2>
            {isCompleted && (
              <div className="bg-green-600/90 mt-1 w-fit text-white px-2 py-0.5 rounded-full text-sm font-semibold self-start ml-4 shadow-lg">
                Completed in {completionTime}
              </div>
            )}
          </div>

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
    </button>
  );
}
