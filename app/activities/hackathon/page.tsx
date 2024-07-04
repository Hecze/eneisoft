import { Metadata } from "next";
import HeroSection from "@/components/Activities/organisms/HeroSection";
import InfoSection from "@/components/Activities/organisms/InfoSection";
import RequirementsSection from "@/components/Activities/organisms/RequirementsSection";
import AwardsSection from "@/components/Activities/organisms/AwardsSection";
import QuoteSection from "@/components/Activities/organisms/QuoteSection";

import infoCardsData from "@/data/activities/hackathon/infoCardsData";
import requirementsData from "@/data/activities/hackathon/requirementsData";
import awardsData from "@/data/activities/hackathon/awardsData";
import quoteData from "@/data/activities/hackathon/quoteData";
import activityDates from "@/data/activities/activityDates";

export const metadata: Metadata = {
    title: "Hackathon | ENEISOFT",
    description: "Hackathon | ENEISOFT",
};

const Page = () => (
    <>
        <HeroSection
            title="Hackathon"
            date={activityDates.hackathon}
            paragraph="¿Eres un programador o alguien que tiene afición por ello? Ya sea en ambos casos, te invitamos a participar del Demo Day desarrollado por Eneisoft. Presenta tu mejor proyecto del ciclo y compite por grandes premios"
            buttonText="Inscribirme"
            buttonLink="/"
            imgUrl="/images/activities/progra.webp"
        />
        <InfoSection infoCards={infoCardsData} />
        <RequirementsSection requirements={requirementsData} />
        <AwardsSection awards={awardsData} />
        <QuoteSection {...quoteData} />
    </>
);

export default Page;
