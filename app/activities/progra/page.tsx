import { Metadata } from "next";
import HeroSection from "@/components/Activities/organisms/HeroSection";
import InfoSection from "@/components/Activities/organisms/InfoSection";
import RequirementsSection from "@/components/Activities/organisms/RequirementsSection";
import AwardsSection from "@/components/Activities/organisms/AwardsSection";
import QuoteSection from "@/components/Activities/organisms/QuoteSection";

import getData from "@/data/activities";

export const metadata: Metadata = {
    title: "Programacion Competitiva | ENEISOFT",
    description: "Programacion Competitiva | ENEISOFT",
};
const activityData = getData("progra");
const Page = () => (
    <>
        <HeroSection {...activityData.hero} />
        <InfoSection infoCards={activityData.infoCards} />
        <RequirementsSection requirements={activityData.requirements} />
        <AwardsSection awards={activityData.awards} />
        <QuoteSection {...activityData.quote} />
    </>
);

export default Page;
