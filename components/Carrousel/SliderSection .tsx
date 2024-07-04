import Image from "next/image";
import Button from "@/components/button";
import { ItemSlideType } from "@/types";
import { RiCalendarEventFill } from "react-icons/ri";
//crear estructura para los parametros: title, date, paragraph, buttonText, buttonLink, image

type SliderSectionProps = {
  Slides: ItemSlideType[];
};

//datos para los slide

const SliderData = [
  {
    title: "conferencias",
    variant: "orange",
    date: "16 DE SEPTIEMBRE",
    paragraph: "Ponencias de entre 45 a 60 minutos cada una y que se darán a lo largo de los tres días que dure el XII ENEISOFT.",
    buttonLink: "/activities/conferences",
    imgUrl: "/images/activities/demoDay/hero.webp",
  },
  
  {
    title: "programacion competitiva",
    variant: "yellow",
    date: "16 DE SEPTIEMBRE",
    buttonLink: "/activities/progra",
    imgUrl: "/images/activities/demoDay/hero.webp",
  },
  
  {
    title: "hackathon",
    variant: "lime",
    date: "16 DE SEPTIEMBRE",
    paragraph: "Este evento tiene como objetivo desarrollar y demostrar las capacidades de programación y creatividad a través de proyectos realizados de forma grupal.",
    buttonLink: "/activities/hackathon",
    imgUrl: "/images/activities/demoDay/hero.webp",
  },
  
  {
    title: "demo day",
    variant: "orange",
    date: "16 DE SEPTIEMBRE",
    paragraph: "Se desarrollarán temas de interés de diversas etapas de la carrera con el fin de lograr mayor público interesado en el evento.",
    buttonLink: "/activities/workshops",
    imgUrl: "/images/activities/demoDay/hero.webp",
  },
  {
    title: "talleres",
    variant: "purple",
    date: "16 DE SEPTIEMBRE",
    paragraph: "Se desarrollarán temas de interés de diversas etapas de la carrera con el fin de lograr mayor público interesado en el evento.",
    buttonLink: "/activities/workshops",
    imgUrl: "/images/activities/demoDay/hero.webp",
  },
]


const SliderSection = () => {
  return (
    <section>
    </section>
  );
};

export default SliderSection;
