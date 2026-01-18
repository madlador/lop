import { RiSignpostLine, RiTempHotLine } from "@remixicon/react";

interface Props {
  variant: "classic" | "hunt";
}

const variants = {
  classic: { 
    icon: RiSignpostLine, 
    label: "classic", 
    colors: "bg-green-400/90 text-green-900" 
  },
  hunt: { 
    icon: RiTempHotLine, 
    label: "hunt", 
    colors: "bg-red-400/90 text-red-900" 
  },
};

export default function ModeBadge({ variant }: Props) {
  const { icon: Icon, label, colors } = variants[variant];

  return (
    <div className={`flex gap-2 rounded-lg items-center px-2 py-1 ${colors}`}>
      {Icon && <Icon className="w-5 h-5" />}
      <span>{label}</span>
    </div>
  );
}