import { Metadata } from "next";
import HeroSection from "@/components/Activities/organisms/HeroSection";
import InfoSection from "@/components/Activities/organisms/InfoSection";
import RequirementsSection from "@/components/Activities/organisms/RequirementsSection";
import AwardsSection from "@/components/Activities/organisms/AwardsSection";
import QuoteSection from "@/components/Activities/organisms/QuoteSection";

import infoCardsData from "@/data/activities/workshops/infoCardsData";
import requirementsData from "@/data/activities/workshops/requirementsData";
import awardsData from "@/data/activities/workshops/awardsData";

export const metadata: Metadata = {
    title: "DemoDay | ENEISOFT",
    description: "Hackathon Competitions | ENEISOFT",
};

const Page = () => (
    <>
        <HeroSection
            title="Talleres"
            date="Septiembre - Viernes 16"
            paragraph="¿Eres un programador o alguien que tiene afición por ello? Ya sea en ambos casos, te invitamos a participar del Demo Day desarrollado por Eneisoft. Presenta tu mejor proyecto del ciclo y compite por grandes premios"
            buttonText="Inscribirme"
            buttonLink="/"
            imgUrl="/images/activities/progra.webp"
        />
        <InfoSection infoCards={infoCardsData} />
        <RequirementsSection requirements={requirementsData} />
        <AwardsSection awards={awardsData} />
        <QuoteSection quote="El talento gana partidos, pero el trabajo en equipo y la inteligencia ganan competiciones " author="Michael Jordan" />
    </>
);

export default Page;
