import IconWrapper from "./IconWrapper";
import type { ReactNode } from "react";

interface Props {
    icon: ReactNode
    left: string;
    right: string;
}


export default function StatsItem({ icon, left, right}: Props) {
  return (
    <div className="bg-orange-950/10 p-4 rounded-xl flex items-center justify-between">
      <div className="flex items-center gap-2">
        <IconWrapper>
            {icon}
        </IconWrapper>
        <span className="text-gray-700">{left}</span>
      </div>
      <span>{right}</span>
    </div>
  );
}
