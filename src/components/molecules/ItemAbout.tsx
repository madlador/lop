import type { ReactNode } from "react";

interface Props {
  icon: ReactNode;
  heading: string;
  paragraph: string;
}

export default function ItemAbout({ icon, heading, paragraph }: Props) {
  return (
    <div className="flex gap-4">
      {icon}
      <div>
        <h3 className="text-2xl font-medium">{heading}</h3>
        <p className="text-gray-700">{paragraph}</p>
      </div>
    </div>
  );
}
