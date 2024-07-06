
import QuestionCard from "../molecules/Infocard";
import { FaQuestion } from "react-icons/fa6";
import { TbUserQuestion } from "react-icons/tb";
import FadeInSection from "@/components/FadeInSection";
import { FaPersonCircleQuestion } from "react-icons/fa6";
const AboutCardSection = () => {
  return (

    <section className="bg-white py-12  xl:pt-20 flex md:justify-center rounded-3xl xl:gap-36 overflow-hidden" >
      <div className="hidden md:grid w-1/3 xl:w-auto">
        <FadeInSection animationClass="fade-in-down-20" className="relative z-10" >
          <img src="/images/about/dude.webp" alt="dude"/>
        </FadeInSection>
        <FadeInSection animationClass="fade-in-up-20" className="absolute z-0 hidden xl:block" >
          <img src="/images/about/nube.webp" alt="nube" className="translate-y-[20.33rem]" />
        </FadeInSection>
      </div>
      <div className="grid relative z-10 gap-12 xl:gap-12">
        <QuestionCard
          icon={FaQuestion}
          question="¿Qué es el ENEISOFT?"
          paragraph="El evento tiene como finalidad ser una competencia de programación interbase, interfacultad e interuniversitaria en la UNMSM con participantes a nivel nacional."
          className=" xl:ml-[-10rem]"
        />
        <QuestionCard
          icon={TbUserQuestion}
          question="¿Cuál es el objetivo?"
          paragraph="El evento tiene como finalidad ser una competencia de programación interbase, interfacultad e interuniversitaria en la UNMSM con participantes a nivel nacional."
        />
      </div>
    </section>

  );
};

export default AboutCardSection;
