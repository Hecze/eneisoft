import Button from "@/components/button";
import { RiCalendarEventFill } from "react-icons/ri";
//crear estructura para los parametros: title, date, paragraph, buttonText, buttonLink, image
import { getFormattedDate } from "@/utils/DateUtils";
import { ItemSlideType } from "@/types";

type ItemSlideProps = ItemSlideType & { id: number };

const SlideComponent = ({ id, title, date, paragraph, buttonText = "Conoce más aqui", buttonLink, imgUrl, variant = "orange" }: ItemSlideProps) => {
  //separar el title por espacios
  //convertir el titulo a mayuscula
  title = title.toUpperCase();
  const formattedDate = getFormattedDate(date);

  //la segunda palabra cambia de color solo si la primera es mayor a 6 caracteres, ademas da un salto de linea

  return (
    <section className="translate-y-[-45px] scale-90  sm:scale-100 sm:translate-y-0  mb-4 flex flex-row flex-wrap-reverse justify-center w-full items-center 2xl:justify-between gap-4 sm:gap-16">
        <div className="flex flex-col items-center md:items-start gap-6 mb-12">
          <h1 className="text-center w-24 hidden md:block">
            0{id}
            <div className={`w-full h-[9px] bg-${variant} rounded-full`}></div>
          </h1>
          <h1 className="text-center max-w-96 md:text-left text-white w-full">
            {title}
            <div className={` md:hidden w-full h-[9px] bg-${variant} rounded-full`}></div>
          </h1>

          {paragraph &&
            <p className="text-md max-w-96 md:text-lg mx-auto md:mx-0">
              {paragraph}
            </p>
          }
          <div className="flex justify-center md:justify-between md:mt-8 w-full gap-12 flex-wrap-reverse max-w-[70vw]">
          <Button path={buttonLink} className={`mt-[-2rem] md:mt-4 py-8 w-full text-lg text-black bg-${variant}`}>{buttonText}</Button>
          <div className="flex gap-6">
            <RiCalendarEventFill color="white" size={96} />
            <h4 className="text-white mt-2 font-semibold text-wrap max-w-[130px] uppercase">
               {formattedDate.dayNumber} de {formattedDate.monthName}
            </h4>
          </div>
          </div>

        </div>
        <img src={imgUrl} alt="hero"  className="mt-[-2rem] size-52 md:size-full xl:max-w-[22vw]" />
    </section>
  );
};

export default SlideComponent;
