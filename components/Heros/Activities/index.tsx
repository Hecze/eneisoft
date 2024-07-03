import Link from "next/link";
import Image from "next/image";
import Button from "@/components/button";
import FadeInSection from "@/components/FadeInSection";

//crear estructura para los parametros: title, subtitle, paragraph, buttonText, buttonLink, image

type Props = {
  title: string;
  subtitle: string;
  paragraph: string;
  buttonText: string;
  buttonLink: string;
  imgUrl: string;
};


const Hero = ({ title, subtitle, paragraph, buttonText, buttonLink, imgUrl }: Props) => {
  //separar el title por espacios
  //convertir el titulo a mayuscula
  title = title.toUpperCase();
  const splitTitle = title.split(" ");

  return (
    <section>
      <div className="flex flex-row flex-wrap-reverse w-full items-center justify-between gap-12 pt-16">
          <div className="flex-col"> 
            <h1 className="text-white">
              {splitTitle[0]} <br /> <span className="text-sky">{splitTitle[1]}</span>
            </h1>
            <h6 className="text-orange">
              {subtitle}
            </h6>
            <p className="max-w-[500px]">
              {paragraph}
            </p>
            <Button path={buttonLink} className="mt-6">{buttonText}</Button>
          </div>
          <Image src={imgUrl} alt="hero" width={400} height={400} />
      </div>
    </section>
  );
};

export default Hero;
