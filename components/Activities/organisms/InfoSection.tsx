import Infocard from "@/components/Activities/molecules/Infocard";
import React from "react";
import { InfoCardType } from "@/types";
import FadeInSection from "@/components/FadeInSection";

type InfoSectionProps = {
  infoCards: InfoCardType[];
  title?: string;
};

const InfoSection: React.FC<InfoSectionProps> = ({ infoCards, title = "¿En qué Consiste?" }) => (
  <section>
    <h4 className="mb-24 text-center">{title}</h4>
    <FadeInSection >
    <div className="flex items-center justify-center 2xl:justify-between flex-wrap w-full gap-y-[6vw] gap-x-16">
      {infoCards.map((infocard, index) => (
        <Infocard
          key={index}
          icon={infocard.icon}
          paragraph={infocard.paragraph}
        />
      ))}
    </div>
    </FadeInSection>
  </section>

);

export default InfoSection;
 