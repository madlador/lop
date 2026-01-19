import { RiLightbulbLine, RiWalkLine } from "@remixicon/react";
import { useEffect, useState } from "react";
import type { Challenge } from "../../lib/db";
import {
  getVisibleHintsFromStorage,
  saveVisibleHintsToStorage,
} from "../../lib/utils/hints";
import Button from "../atoms/Button";
import Hint from "../atoms/Hint";
import Indicator from "../atoms/Indicator";
import {
  distance,
  distanceCurrentToDestination,
} from "../../lib/utils/location";

export default function SingleChallengeTemplate({
  challenge,
}: {
  challenge: Challenge;
}) {
  const [visibleHintsCount, setVisibleHintsCount] = useState(0);

  const [totalDistance, setTotalDistance] = useState<number | null>(null);
  const [currentDistance, setCurrentDistance] = useState<number | null>(null);
  const [percentage, setPercentage] = useState<number>(0);

  // Load visible hints count from localStorage on mount
  useEffect(() => {
    const stored = getVisibleHintsFromStorage(challenge.id);
    setVisibleHintsCount(stored);

    const getDistance = async () => {
      const tlat = challenge.landmark.location.latitude;
      const tlon = challenge.landmark.location.longitude;

      try {
        const d = await distanceCurrentToDestination(tlat, tlon);
        setTotalDistance(d);
      } catch (err) {
        console.log(err);
      }
    };
    getDistance();

    const id = setInterval(async () => {
      const tlat = challenge.landmark.location.latitude;
      const tlon = challenge.landmark.location.longitude;

      try {
        const d = await distanceCurrentToDestination(tlat, tlon);
        setCurrentDistance(d);
      } catch (err) {
        console.log(err);
      }
    }, 2000);

    const id2 = setInterval(() => {
      if (totalDistance !== null && currentDistance !== null) {
        setPercentage((1 - currentDistance / totalDistance) * 100);
        return;
      }
    }, 2000);

    return () => {
      clearInterval(id);
      clearInterval(id2);
    };
  }, [challenge.id]);

  // Show next hint and update localStorage
  const showNextHint = () => {
    if (visibleHintsCount < challenge.hints.length) {
      const newCount = visibleHintsCount + 1;
      setVisibleHintsCount(newCount);
      saveVisibleHintsToStorage(challenge.id, newCount);
    }
  };

  const remainingHints = challenge.hints.length - visibleHintsCount;
  const visibleHints = challenge.hints.slice(0, visibleHintsCount);

  return (
    <div className="flex flex-col gap-4">
      <div>
        <h1 className="capitalize text-3xl font-medium">{challenge.name}</h1>
        <p className="text-gray-600 text-md">
          {challenge.mode === "classic"
            ? "Follow the clues to find your destination."
            : "Use the temperature indicator to guide your search."}
        </p>
      </div>

      <div className="flex gap-1 bg-orange-950/10 rounded-xl p-2 text-lg">
        <RiWalkLine className="shrink-0" />
        <p>“{challenge.teaser}”</p>
      </div>

      <span>distance: {totalDistance} m</span>
      <span>current: {currentDistance}</span>

      {/* Render proximity indicator only if challenge.type is hunt */}
      {challenge.mode === "hunt" && (
        <div className="flex justify-center items-center">
          <Indicator percentage={percentage} />
        </div>
      )}

      <div className="flex flex-col gap-4">
        {visibleHints.map(({ id, hint }) => (
          <Hint key={id} hint={hint} />
        ))}

        {remainingHints > 0 && (
          <Button onClick={showNextHint} className="border border-dashed">
            <RiLightbulbLine />
            <span>Need a Hint? ({remainingHints} remaining)</span>
          </Button>
        )}

        {challenge.hints.length > 0 && remainingHints === 0 && (
          <div className="flex justify-center items-center">
            <p className="text-orange-950/50">No more hints available</p>
          </div>
        )}

        {challenge.hints.length === 0 && (
          <div className="flex justify-center items-center">
            <p className="text-orange-950/50">No hints available</p>
          </div>
        )}
      </div>
    </div>
  );
}
