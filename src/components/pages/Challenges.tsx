import ChallengeCard from "../molecules/ChallengeCard";

export default function Challenges() {
  const name = "The Quiet Church";
  const teaser =
    "Not all landmarks demand attention. Step away from the noise, follow your senses, and find a place where the city slows down.";

  return (
    <div className="h-full flex flex-col gap-4">
      {/* Challenge Card */}

      <ChallengeCard />
      <ChallengeCard />
      <ChallengeCard />
      <ChallengeCard />
      <ChallengeCard />
      <ChallengeCard />


    </div>
  );
}
