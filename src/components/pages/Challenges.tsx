import { sampleChallenges } from "../../lib/db";
import ChallengeCard from "../molecules/ChallengeCard";

export default function Challenges() {
  return (
    <div className="h-full flex flex-col gap-4">
      {sampleChallenges.map((c) => (
        <ChallengeCard
          name={c.name}
          teaser={c.teaser}
          image="/images/church.jpg"
          difficulty={c.difficulty}
          duration={c.duration}
          mode={c.mode}
        />
      ))}
    </div>
  );
}
