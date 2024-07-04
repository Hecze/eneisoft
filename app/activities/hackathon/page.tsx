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
            paragraph="¿Tienes habilidades para la programación? ¿Te gusta trabajar en equipo? El evento más esperado de programación esta cada vez más cerca. Sé parte de esta competencia tecnológica , demuestra tu creatividad y participa de los grandes premios"
            buttonText="Inscribirme"
            buttonLink="/"
            imgUrl="/images/activities/hackathon.webp"
        />
        <InfoSection infoCards={infoCardsData} />
        <RequirementsSection requirements={requirementsData} />
        <AwardsSection awards={awardsData} />
        <QuoteSection {...quoteData} />
    </>
);

export default Page;
