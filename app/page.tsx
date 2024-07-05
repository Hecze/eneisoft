import SliderSection from "@/components/Carrousel/organism/SliderSection";
import SliderData from "@/data/home/SliderData";
import AboutCardSection from "@/components/About/organism/AboutCardSection";

export default function Home() {
  return (
    <section className="">
      <SliderSection slides={SliderData} />
      <AboutCardSection />
    </section>
  );
}
