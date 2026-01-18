import { RiArrowLeftLine, RiLightbulbLine, RiWalkLine } from "@remixicon/react";
import Button from "../atoms/Button";
import { useNavigate } from "react-router-dom";
import Hint from "../atoms/Hint";

export default function Challenge() {
  const navigate = useNavigate();
  //const { id } = useParams();

  return (
    <div className="h-full flex flex-col gap-4">
      <div className="flex flex-col gap-4 mb-4">
        <Button
          onClick={() => navigate("/challenges")}
          className="border font-semibold w-fit px-6 py-4"
        >
          <RiArrowLeftLine />
          <span>Abandon</span>
        </Button>

        <div>
          <h1 className="text-3xl font-semibold">The Quiet Church</h1>
          <p className="text-gray-600 text-sm">
            Follow the clues to find your destination.
          </p>
        </div>
      </div>

      <div className="flex gap-1 bg-orange-950/10 rounded-xl p-2 text-lg">
        <RiWalkLine className="shrink-0"/>
        <p>
          “Leave the square through one of its narrow streets. Walk until the
          noise fades and the space feels calmer. Look for a modest stone
          building where people pass quietly.”
        </p>
      </div>

      <Hint />
      <Hint />
      <Hint />
      <Hint />

      <Button className="border border-dashed">
        <RiLightbulbLine />
        <span>Nees a Hint?</span>
      </Button>

      <Button className="bg-orange-600 text-orange-50 mt-auto">
        I Think I'm There
      </Button>
    </div>
  );
}
