import AboutCardSection from "@/components/About/organism/AboutCardSection";
import DottedLineSection from "@/components/About/organism/DottedLineSection";
import HeroSection from "@/components/Activities/organisms/HeroSection";


export default function AboutPage() {
  return (
    <section>
      <HeroSection title={"ENEISOFT HISTORIA"}  paragraph={"El eneisoft nacio en el 2010 con la iniciativa de juntar al talento peruano escondido en las profundidades de lima y provincias y darles expocision en epicas competencias y conferencias"} imgUrl={"images/about/header.webp"}  />
      <AboutCardSection />
      <DottedLineSection />
    </section>
  );
}
