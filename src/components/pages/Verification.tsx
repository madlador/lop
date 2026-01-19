import { useNavigate, useParams } from "react-router-dom";
import Button from "../atoms/Button";
import VerificationOption from "../atoms/VerificationOption";
import { sampleChallenges } from "../../lib/db";
import { RiArrowLeftLine } from "@remixicon/react";

export default function Verification() {
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
          <p className="text-center">What detail best describes the place you reached?</p>
        </div>

        <div className="mt-8 flex flex-col gap-4">
          {challenge.options.map((option) => (
            <VerificationOption id={option.id} option={option.option} />
          ))}
        </div>
      </div>

      {/* todo: When pressed we check if it is correct option, YES -> go to next page which is reflection page, if NO -> go back to the challenge screen */}
      <Button
        onClick={() => navigate(`/challenge/${id}/reflect`)}
        variant="primary"
        className="mt-auto"
      >
        Confirm
      </Button>
    </div>
  );
}
