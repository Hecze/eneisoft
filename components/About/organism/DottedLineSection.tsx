
import InfoCircle from "../molecules/InfoCircle";

type DottedLineSectionType = {
  title?: string;
}
const DottedLineSection = ({ title = "Objetivos " }: DottedLineSectionType) => {
  return (

    <section>
      <h4 className=" mb-32 text-center">{title}</h4>
      <img src="/images/dottedLine.svg" className="hidden md:block relative mx-auto mb-[-6.5rem] z-0 w-[70%]" />
      <div className="flex justify-center flex-wrap gap-12 md:gap-[6vw]">
        <InfoCircle
          id={1}
          icon="/images/icons/megafono.webp"
          paragraph="Dar a conocer a las escuelas de ingeniería de Software y Sistemas de la Universidad Nacional Mayor de San Marcos."
          className="relative z-10"
          variant="orange"
        />
        <InfoCircle
          id={2}
          icon="/images/icons/conferencia.webp"
          paragraph="Generar un incremento en la cantidad de asistentes a través de la inclusión de los distintos niveles de conocimiento del público objetivo."
          className="relative z-10 md:translate-y-[10%]"
          variant="purple"
        />
        <InfoCircle
          id={3}
          icon="/images/icons/superar.webp"
          paragraph="Cubrir y superar las expectativas generadas del ENEISOFT XI."
          className="relative z-10"
          variant="lime"
        />
      </div>
    </section>

  );
};

export default DottedLineSection;
