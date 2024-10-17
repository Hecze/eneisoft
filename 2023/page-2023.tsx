import SliderSection from "@/components/Carrousel/organism/SliderSection";
import getData from "@/data/home/carrousel";
import AboutCardSection from "@/components/About/organism/AboutCardSection";
import DottedLineSection from "@/components/About/organism/DottedLineSection";

export default function Home() {
  const SliderData = getData();
  return (
    <section className="">
      <SliderSection slides={SliderData} />
      <AboutCardSection />
      <DottedLineSection />
    </section>
  );
}
