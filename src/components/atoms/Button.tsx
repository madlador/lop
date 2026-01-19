import type { ReactNode } from "react";

const variantClasses = {
  primary: "bg-orange-700/80 text-white",
  secondary: "",
  nostyle: "",
};

interface Props {
  children: ReactNode;
  variant?: "primary" | "secondary" | "nostyle";
  className?: string;
  onClick?: () => void;
}

export default function Button({
  children,
  variant = "nostyle",
  className,
  onClick,
}: Props) {
  return (
    <button
      onClick={onClick}
      className={`${className} ${variantClasses[variant]} cursor-pointer font-semibold p-4 rounded-xl flex justify-center gap-2`}
    >
      {children}
    </button>
  );
}
