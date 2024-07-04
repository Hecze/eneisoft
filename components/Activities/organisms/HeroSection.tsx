import Image from "next/image";
import Button from "@/components/button";

//crear estructura para los parametros: title, date, paragraph, buttonText, buttonLink, image

type Props = {
  title: string;
  date: string;
  paragraph: string;
  buttonText: string;
  buttonLink: string;
  imgUrl: string;
};


const HeroSection = ({ title, date, paragraph, buttonText, buttonLink, imgUrl }: Props) => {
  //separar el title por espacios
  //convertir el titulo a mayuscula
  title = title.toUpperCase();
  const splitTitle = title.split(" ");

  return (
    <section>
      <div className="flex flex-row flex-wrap-reverse w-full items-center justify-center 2xl:justify-between gap-16 pt-16 ">
          <div className="flex flex-col fade-in-down-20 gap-2"> 
            <h1 className="text-white fade-in-right">
              {splitTitle[0]} <br /> <span className="text-sky">{splitTitle[1]}</span>
            </h1>
            <h6 className="text-orange fade-in-down-10">
              {date}
            </h6>
            <p className="max-w-[450px] xl:max-w-[550px] text-lg">
              {paragraph}
            </p>
            <Button path={buttonLink} className="mt-6 fade-in-left text-lg">{buttonText}</Button>
          </div>
          <Image src={imgUrl} alt="hero" width={450} height={450} className="fade-in-up-10 mt-[-2rem]"  />
      </div>
    </section>
  );
};

export default HeroSection;
