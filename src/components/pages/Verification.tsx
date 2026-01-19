import { RiArrowLeftLine } from "@remixicon/react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { sampleChallenges } from "../../lib/db";
import { finishChallengeTimer } from "../../lib/utils/timing";
import Button from "../atoms/Button";
import VerificationOption from "../atoms/VerificationOption";

export default function Verification() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedOptionId, setSelectedOptionId] = useState<number>();

  if (!id || isNaN(Number(id))) {
    navigate("/challenges");
    return;
  }

  const challenge = sampleChallenges.find((c) => c.id === Number(id));

  if (!challenge) {
    navigate("/challenges");
    return;
  }

  const handleConfirm = () => {
    if (
      selectedOptionId !== undefined &&
      challenge.correct.id === selectedOptionId
    ) {
      finishChallengeTimer(challenge.id);
      navigate(`/challenge/${id}/reflect`);
    } else navigate(`/challenge/${id}`);
  };

  return (
    <div className="min-h-full h-full flex flex-col pb-8">
      <Button
        onClick={() => navigate(`/challenge/${id}`)}
        className="w-fit text-gray-700"
      >
        <RiArrowLeftLine />
        <span>Go Back</span>
      </Button>

      <div className="mt-8">
        <h1 className="text-3xl font-medium">Almost There</h1>
        <p className="text-gray-700">Let's verify you're in the right place.</p>
      </div>

      <div className="mt-8">
        <div className="bg-orange-950/10 px-4 py-8 rounded-xl flex justify-center">
          <p className="text-center">
            What detail best describes the place you reached?
          </p>
        </div>

        <div className="mt-8 mb-4 flex flex-col gap-4">
          {challenge.options.map((option) => (
            <VerificationOption
              key={option.id}
              id={option.id}
              option={option.option}
              name="verification"
              checked={selectedOptionId === option.id}
              onChange={() => setSelectedOptionId(option.id)}
            />
          ))}
        </div>
      </div>

      <Button
        onClick={handleConfirm}
        variant="primary"
        className="mt-auto"
        disabled={selectedOptionId === undefined}
      >
        Confirm
      </Button>
    </div>
  );
}
