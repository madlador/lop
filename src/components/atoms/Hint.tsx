import { RiLightbulbLine } from "@remixicon/react";

export default function Hint() {
  return (
    <div className="flex gap-2 px-4 py-2 rounded-xl shadow bg-yellow-600/30 text-yellow-900">
      <RiLightbulbLine className="shrink-0 mt-0.5" />
      <p>
        “You are looking for a religious building, but not a large or dominant
        one.”
      </p>
    </div>
  );
}
