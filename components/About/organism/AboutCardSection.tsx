
import QuestionCard from "../molecules/Infocard";
import { FaQuestion } from "react-icons/fa6";
import { TbUserQuestion } from "react-icons/tb";
import { FaPersonCircleQuestion } from "react-icons/fa6";
const AboutCardSection  = () => {
  return (

    <section className="bg-white pt-20 px-4 pr-24 flex flex-wrap rounded-3xl gap-24" >
      <div className="hidden xl:grid">
            <img src="/images/about/dude.webp" alt="dude" className="relative z-10" />
            <img src="/images/about/nube.webp" alt="nube" className="absolute mt-[-18rem] bottom-32 overflow-hidden z-0" />
      </div>
      <div className="grid relative z-10">
          <QuestionCard 
            icon={FaQuestion}
            question="¿Qué es el ENEISOFT?"
            paragraph="El evento tiene como finalidad ser una competencia de programación interbase, interfacultad e interuniversitaria en la UNMSM con participantes a nivel nacional."
            className=" xl:ml-[-10rem]"
          />
          <QuestionCard 
            icon={TbUserQuestion}
            question="¿Qué es el objetivo?"
            paragraph="El evento tiene como finalidad ser una competencia de programación interbase, interfacultad e interuniversitaria en la UNMSM con participantes a nivel nacional."
          />
      </div>
    </section>

  );
};

export default AboutCardSection ;
