import { RiLightbulbLine } from "@remixicon/react";

type Props = {
  hint: string;
};

export default function Hint({ hint }: Props) {
  return (
    <div className='flex gap-2 px-4 py-2 rounded-xl shadow bg-yellow-600/30 text-yellow-900'>
      <RiLightbulbLine className='shrink-0 mt-0.5' />
      <p>{hint}</p>
    </div>
  );
}
