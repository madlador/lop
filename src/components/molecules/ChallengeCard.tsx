import { RiSignpostLine, RiTimeLine } from "@remixicon/react";

export default function ChallengeCard() {
  return (
    <div className="flex flex-col rounded-xl overflow-hidden bg-orange-950/10 shrink-0">
      <div className="relative aspect-video rounded-xl overflow-hidden shadow">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(/images/church.jpg)` }}
        />
        <div className="absolute inset-0 bg-radial from-transparent to-black/80" />
        <div className="relative z-10 h-full p-2 flex flex-col justify-between">
          <h2 className="text-3xl text-orange-50 font-bold mt-4 ml-4">The Quiet Church</h2>

          <div className="flex gap-2 justify-between">
            
            {/* Mode */}
            <div className="flex gap-2 bg-green-400/90 text-green-900 rounded-lg items-center px-2 py-1">
              <RiSignpostLine className="w-5 h-5"/>
              <span>classic</span>
            </div>
            
            <div className="flex gap-2">

            <div className="flex justify-center items-center gap-1 bg-neutral-400/90 px-2 py-1 rounded-lg text-white">
              <RiTimeLine className="w-5 h-5" />
              <span>2-3 min</span>
            </div>
            {/* Difficulty indicator */}
            <div className="flex gap-2 bg-neutral-400/90 rounded-lg items-center px-2 py-1 text-white">
              <span>easy</span>
              <div className="flex gap-0.5">
                <div className="w-1.5 h-5 bg-orange-600 rounded"></div>
                <div className="w-1.5 h-5 bg-orange-600 rounded"></div>
                <div className="w-1.5 h-5 bg-orange-600 rounded"></div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4">
        <p className="line-clamp-2 text-sm text-gray-600 leading-relaxed">
          Not all landmarks demand attention. Step away from the noise, follow
          your senses, and find a place where the city slows down.
        </p>
      </div>
    </div>
  );
}
