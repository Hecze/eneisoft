import { Metadata } from "next";
import HeroSection from "./HeroSection";
import InfoSection from "./InfoSection";
import RequirementsSection from "./RequirementsSection";
import AwardsSection from "./AwardsSection";
import QuoteSection from "./QuoteSection";

export const metadata: Metadata = {
    title: "Hackathon | ENEISOFT",
    description: "Hackathon Competitions | ENEISOFT",
};

const Page = () => (
    <>
        <HeroSection />
        <InfoSection />
        <RequirementsSection />
        <AwardsSection />
        <QuoteSection />
    </>
);

export default Page;
