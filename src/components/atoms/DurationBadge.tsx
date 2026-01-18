import { RiTimeLine } from "@remixicon/react";

interface Props {
  duration: string;
}

export default function DurationBadge({ duration }: Props) {
  return (
    <div className="flex gap-2 bg-neutral-400/90 text-white rounded-lg items-center px-2 py-1">
      <RiTimeLine className="w-5 h-5" />
      <span>{duration}</span>
    </div>
  );
}
