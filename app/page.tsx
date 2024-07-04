import SliderSection from "@/components/Carrousel/organism/SliderSection";
import SliderData from "@/data/home/SliderData";

export default function Home() {
  return (
    <section className="">
      <SliderSection slides={SliderData} />
    </section>
  );
}
