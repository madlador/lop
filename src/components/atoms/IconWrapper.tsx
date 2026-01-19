import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function IconWrapper({ children }: Props) {
  return (
    <div className="bg-orange-600/40 text-orange-700/70 w-fit h-fit p-2 rounded-2xl">
      {children}
    </div>
  );
}
