import { RiBrainLine, RiEyeLine, RiMapPinLine, RiTempHotLine } from "@remixicon/react";
import IconWrapper from "../atoms/IconWrapper";
import ItemAbout from "../molecules/ItemAbout";
import Button from "../atoms/Button";
import { useNavigate } from "react-router-dom";

export default function About() {
  const navigate = useNavigate();

  return (
    <div className="h-full flex flex-col min-h-full pb-8">
      <div>
        <h1 className="text-3xl font-medium">How It Works</h1>
        <p className="text-gray-700">
          EXplore cities the way locals do, by wandering.
        </p>
      </div>

      {/* Items explaining about app */}
      <div className="mt-16 flex flex-col gap-8">
        <ItemAbout
          icon={
            <IconWrapper>
              <RiMapPinLine />
            </IconWrapper>
          }
          heading="Follow the Clues"
          paragraph="Read descriptions and use your intuition to navigate. No maps, no
            GPS dots, just you and the city."
        />

        <ItemAbout
          icon={
            <IconWrapper>
              <RiTempHotLine />
            </IconWrapper>
          }
          heading="Hot & Cold Hunt"
          paragraph="Search for landmarks using proximity feedback. Warmer means you're getting closer."
        />

        <ItemAbout
          icon={
            <IconWrapper>
              <RiEyeLine />
            </IconWrapper>
          }
          heading="Look Around"
          paragraph="The goal is to look away from your screen. Notice the streets, sounds, and landmarks around you."
        />

        <ItemAbout
          icon={
            <IconWrapper>
              <RiBrainLine />
            </IconWrapper>
          }
          heading="Build a Mental Map"
          paragraph="Each challenge helps you understand how the city connects. You'll know your way without GPS."
        />
      </div>

      <Button onClick={() => navigate('/')} variant="primary" className="mt-auto">Got It</Button>
    </div>
  );
}
