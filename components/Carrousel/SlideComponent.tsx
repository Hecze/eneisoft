import Image from "next/image";
import Button from "@/components/button";
import { RiCalendarEventFill } from "react-icons/ri";
//crear estructura para los parametros: title, date, paragraph, buttonText, buttonLink, image
import { ItemSlideType } from "@/types";

type ItemSlideProps = ItemSlideType & { id: number };

const SlideComponent = ({ id, title, date, paragraph, buttonText = "Conoce más aqui", buttonLink, imgUrl, variant = "orange" }: ItemSlideProps) => {
  //separar el title por espacios
  //convertir el titulo a mayuscula
  title = title.toUpperCase();

  //la segunda palabra cambia de color solo si la primera es mayor a 6 caracteres, ademas da un salto de linea

  return (
    <section>
      <div className="flex flex-row flex-wrap-reverse w-full items-center justify-center 2xl:justify-between gap-16 pt-16 ">
        <div className="flex flex-col gap-2 mb-12">
          <h1>{id}
            <div className={`w-24 h-[10px] bg-${variant}`}></div>
          </h1>
          <h1 className="text-white ">
            {title}
          </h1>

          {paragraph &&
            <p className="max-w-[450px] xl:max-w-[550px] text-lg">
              {paragraph}
            </p>
          }
          <div className="flex justify-between">
          <Button path={buttonLink} className={`mt-6 text-lg text-black bg-${variant}`}>{buttonText}</Button>
          <div className="flex gap-12">
            <RiCalendarEventFill color="white" />
            <h4 className="text-white font-semibold">
              {date}
            </h4>
          </div>
          </div>

        </div>
        <Image src={imgUrl} alt="hero" width={450} height={450} className="mt-[-2rem]" />
      </div>
    </section>
  );
};

export default SlideComponent;
