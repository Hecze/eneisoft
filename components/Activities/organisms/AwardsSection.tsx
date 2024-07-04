import AwardCard from "@/components/Activities/molecules/AwardCard";
import FadeInSection from "@/components/FadeInSection";
import React from "react";
import { AwardType } from "@/types";

type AwardsSectionProps = {
  awards: AwardType[];
  title?: string;
};

const AwardsSection: React.FC<AwardsSectionProps> = ({ awards, title = "Premios" }) => (
  <section className="mt-36">
    <div className="absolute w-screen bg-primary h-64 right-0 mt-[-2rem]" />
    <h4 className="mb-12 text-center z-10 text-white relative">{title}</h4>
    <FadeInSection>
      <div className="flex items-center justify-center 2xl:justify-between flex-wrap w-full gap-16 z-10">
        {awards.map((award, index) => (
          <AwardCard key={index} id={index + 1} {...award} />
        ))}
      </div>
    </FadeInSection>
  </section>
);

export default AwardsSection;
