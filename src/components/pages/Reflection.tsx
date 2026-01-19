import { RiMapPinLine } from "@remixicon/react";
import Button from "../atoms/Button";
import { useNavigate, useParams } from "react-router-dom";
import { sampleChallenges } from "../../lib/db";

export default function Reflection() {
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
    <div className="flex flex-col h-full">
      <div className="flex flex-col items-center gap-4 mt-32">
        <img src="/star.svg" alt="Reflection star" className="w-32 h-32" />
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-3xl font-medium">New Landmark Discovered</h1>
          <div className="flex gap-2">
            <RiMapPinLine />
            <p>{challenge.name}</p>
          </div>
        </div>
      </div>

      <div className="bg-orange-950/10 p-4 rounded-xl flex flex-col items-center mt-8 gap-4">
        <span className="text-gray-700">Take a moment to reflect:</span>
        <p className="italic">{challenge.reflectionQuestion}</p>
      </div>

      <Button onClick={() => navigate(`/challenge/${id}/summary`)} variant="primary" className="mt-auto">
        Finish Challenge
      </Button>
    </div>
  );
}
