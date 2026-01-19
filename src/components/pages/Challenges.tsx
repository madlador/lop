import { RiArrowLeftLine } from "@remixicon/react";
import { sampleChallenges } from "../../lib/db";
import Button from "../atoms/Button";
import ChallengeCard from "../molecules/ChallengeCard";
import { useNavigate } from "react-router-dom";

export default function Challenges() {
  const navigate = useNavigate();

  return (
    <div className="h-full flex flex-col gap-4">
      <div className="flex flex-col gap-4 mb-4">
        <Button onClick={() => navigate("/")} className="border font-medium w-fit px-6 py-4">
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
          name={c.name}
          teaser={c.teaser}
          image={c.landmark.image}
          difficulty={c.difficulty}
          duration={c.duration}
          mode={c.mode}
          onClick={() => navigate(`/challenge/${c.id}`)}
        />
      ))}
    </div>
  );
}
