import SliderSection from "@/components/Carrousel/organism/SliderSection";
import SliderData from "@/data/home/SliderData";
import AboutCardSection from "@/components/About/organism/AboutCardSection";
import DottedLineSection from "@/components/About/organism/DottedLineSection";

export default function Home() {
  return (
    <section className="">
      <SliderSection slides={SliderData} />
      <AboutCardSection />
      <DottedLineSection />
    </section>
  );
}
