import { RiArrowLeftLine } from "@remixicon/react";
import { useNavigate, useParams } from "react-router-dom";
import { sampleChallenges } from "../../lib/db";
import Button from "../atoms/Button";
import SingleChallengeTemplate from "../templates/SingleChallengeTemplate";

export default function Challenge() {
  const navigate = useNavigate();
  const { id } = useParams();

  if (!id) {
    navigate("/challenges");
    return;
  }

  const challenge = sampleChallenges.find((c) => c.id === Number(id));

  if (!challenge) {
    navigate("/challenges");
    return;
  }

  return (
    <div className='h-full flex flex-col gap-4'>
      <div>
        <Button
          onClick={() => navigate("/challenges")}
          className='border font-medium w-fit px-6 py-4'>
          <RiArrowLeftLine />
          <span>Abandon</span>
        </Button>
      </div>

      <SingleChallengeTemplate challenge={challenge} />

      <Button
        className='mt-auto'
        variant="primary"
        onClick={() => navigate(`/challenge/${challenge.id}/verify`)}>
        I Think I'm There
      </Button>
    </div>
  );
}
