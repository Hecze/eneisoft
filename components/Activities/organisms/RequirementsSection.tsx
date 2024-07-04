import RequirementCard from "@/components/Activities/molecules/RequirementCard";
import React from "react";
import { RequirementType } from "@/types";
import FadeInSection from "@/components/FadeInSection";

type RequirementsSectionProps = {
  requirements: RequirementType[];
  title?: string;
};

const RequirementsSection: React.FC<RequirementsSectionProps> = ({ requirements, title = "Requisitos" }) => (
  <section>
    <h4 className="mb-24 text-center">{title}</h4>
    <FadeInSection className="flex items-center justify-center 2xl:justify-between flex-wrap w-full gap-16" animationClass="fade-in-right">
      {requirements.map((requirement, index) => (
        <RequirementCard
          key={index}
          id={index + 1}
          icon={requirement.icon}
          paragraph={requirement.paragraph}
        />
      ))}
    </FadeInSection>
  </section>
);

export default RequirementsSection;
