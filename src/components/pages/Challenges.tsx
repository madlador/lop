import { RiArrowLeftLine } from "@remixicon/react";
import { useNavigate } from "react-router-dom";
import { sampleChallenges } from "../../lib/db";
import { startChallengeTimer } from "../../lib/utils/timing";
import Button from "../atoms/Button";
import ChallengeCard from "../molecules/ChallengeCard";

export default function Challenges() {
  const navigate = useNavigate();

  return (
    <div className="h-full flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <Button onClick={() => navigate("/")} className="w-fit text-gray-700">
          <RiArrowLeftLine />
          <span>Back</span>
        </Button>

        <div>
          <h1 className="text-3xl font-medium">Choose A Challenge</h1>
          <p className="text-gray-600 text-sm">
            Pick your adventure and start exploring.
          </p>
        </div>
      </div>

      {sampleChallenges.map((c) => (
        <ChallengeCard
          key={c.id}
          challengeId={c.id}
          name={c.name}
          teaser={c.teaser}
          image={c.landmark.image}
          difficulty={c.difficulty}
          duration={c.duration}
          mode={c.mode}
          onClick={() => {
            startChallengeTimer(c.id);
            navigate(`/challenge/${c.id}`);
          }}
        />
      ))}
    </div>
  );
}
