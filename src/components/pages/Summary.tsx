import { useNavigate, useParams } from "react-router-dom";
import { sampleChallenges } from "../../lib/db";
import StatsItem from "../atoms/StatsItem";
import { RiLightbulbLine, RiMapPinLine, RiTimeLine } from "@remixicon/react";
import Button from "../atoms/Button";

export default function Summary() {
  const { id } = useParams();
  const navigate = useNavigate();

  if (!id || isNaN(Number(id))) {
    navigate("/challenges");
    return;
  }

  const challenge = sampleChallenges.find((c) => c.id === Number(id));

  if (!challenge) {
    navigate("/challenges");
    return;
  }

  return (
    <div className="flex flex-col h-full gap-8">
      <div className="flex flex-col items-center gap-4 mt-16">
        <img src="/logo.svg" alt="Reflection star" className="w-32 h-32" />
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-3xl font-medium">Challenge Completed</h1>
          <p>{challenge.name}</p>
        </div>
      </div>

      {/* todo: logic has to be figured out, from were do we get stats */}
      <div className="flex flex-col gap-4">
        <StatsItem icon={<RiTimeLine />} left="Time Spent" right="2:56" />
        <StatsItem
          icon={<RiLightbulbLine />}
          left="Time Spent"
          right="2 of 3"
        />
        <StatsItem
          icon={<RiMapPinLine />}
          left="Challenge Type"
          right="classic"
        />
      </div>

      <div className="mt-auto flex flex-col gap-4">
        <Button onClick={() => navigate("/challenges")} variant="primary">
          Try Another Challenge
        </Button>
        <Button onClick={() => navigate("/")} className="text-gray-700">
          Return Home
        </Button>
      </div>
    </div>
  );
}
