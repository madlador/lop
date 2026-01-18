import { RiArrowLeftLine, RiLightbulbLine } from "@remixicon/react";
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
          <h1 className="text-3xl font-semibold">todo</h1>
          <p className="text-gray-600 text-sm">
            Pick your adventure and start exploring.
          </p>
        </div>

        {/* todo: should continue here but state managemenat should be implemented prior */}

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
    </div>
  );
}
