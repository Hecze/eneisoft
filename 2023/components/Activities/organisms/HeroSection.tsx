import Button from "@/components/button";
import { getFormattedDate } from "@/utils/DateUtils";

type Props = {
  title: string;
  date?: string;
  paragraph: string;
  buttonText?: string;
  buttonLink?: string;
  imgUrl: string;
};

const HeroSection = ({ title, date, paragraph, buttonText, buttonLink, imgUrl }: Props) => {
  // Convertir el título a mayúscula y separar por espacios
  title = title.toUpperCase();
  const splitTitle = title.split(" ");

  // Formatear la fecha solo si está definida
  const formattedDate = date && getFormattedDate(date);

  return (
    <section >
      <div className="flex flex-row flex-wrap-reverse w-full items-center justify-center 2xl:justify-between gap-16 pt-16">
        <div className="flex flex-col fade-in-down-20 gap-2">
          <h1 className="text-white fade-in-right">
            {splitTitle[0]} {splitTitle[1] && splitTitle[0].length + splitTitle[1].length > 11 ? <><br /><span className="text-sky">{splitTitle[1]}</span></> : splitTitle[1]} {splitTitle[2]}
          </h1>
          {/* Si la fecha no está definida, no mostrarla */}
          {date && formattedDate && (
            <h6 className="text-orange fade-in-down-10 capitalize">
              <span>{formattedDate.monthName}</span> - <span>{formattedDate.dayName}</span> <span>{formattedDate.dayNumber}</span>
            </h6>
          )}
          <p className="max-w-[450px] xl:max-w-[550px] text-lg">
            {paragraph}
          </p>
          {/* Si el botón no está definido, no mostrarlo */}
          {buttonText && buttonLink && <Button path={buttonLink} className="mt-6 fade-in-left text-lg">{buttonText}</Button>}
        </div>
        <img src={imgUrl} alt="hero" width={450} height={450} className="fade-in-up-10 mt-[-2rem]" />
      </div>
    </section>
  );
};

export default HeroSection;
