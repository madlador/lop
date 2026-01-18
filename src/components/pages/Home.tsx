import { useNavigate } from "react-router-dom";
import Button from "../atoms/Button";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="flex h-full flex-col">
      <div className="flex flex-col items-center mt-24">
        <img src="/logo.svg" alt="Lost on Purpose logo" className="w-32 h-32" />
        <h1 className="text-3xl font-bold mt-8 text-gray-900">
          Lost on Purpose
        </h1>
        <p className="text-base text-gray-600 mt-2">
          Learn a city by getting lost on purpose.
        </p>
      </div>

      <div className="flex flex-col gap-4 mt-auto mb-4">
        <Button
          onClick={() => navigate("/challenges")}
          className="bg-orange-600 text-white"
        >
          Start a Challenge
        </Button>
        <Button onClick={() => navigate("/about")} className="border-2">
          How It Works
        </Button>
      </div>
    </div>
  );
}
