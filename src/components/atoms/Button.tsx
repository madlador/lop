import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function Button({ children, className, onClick }: Props) {
  return (
    <button onClick={onClick} className={`${className} font-semibold p-4 rounded-xl flex justify-center gap-2`}>
      {children}
    </button>
  );
}
