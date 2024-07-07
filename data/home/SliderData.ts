import { ItemSlideType } from "@/types";
import {getFormattedDate} from '@/utils/DateUtils';
import dates from '../dates.json';


interface ActivitiesDates {
  progra: string;
  hackathon: string;
  workshops: string;
  conferences: string;
  demoDay: string;
}

const getActivityDate = (activityName: keyof ActivitiesDates) => {
  const eventDate = dates[activityName];
  const formattedDate = getFormattedDate(eventDate);
  const dayNumber = formattedDate.dayNumber;
  const dayName = formattedDate.dayName;
  const monthNumber = formattedDate.monthNumber;
  const monthName = formattedDate.monthName;

  return `${dayNumber} de ${monthName}`;
  
};

const SliderData : ItemSlideType[] = [
    {
      title: "conferencias",
      variant: "orange",
      date: getActivityDate("conferences"),
      paragraph: "Ponencias de entre 45 a 60 minutos cada una y que se darán a lo largo de los tres días que dure el XII ENEISOFT.",
      buttonLink: "/activities/conferences",
      imgUrl: "/images/carrousel/conferencias.webp",
    },
    {
      title: "programacion competitiva",
      variant: "yellow",
      date:  getActivityDate("progra"),
      buttonLink: "/activities/progra",
      imgUrl: "/images/carrousel/progra.webp",
    },
    {
      title: "hackathon",
      variant: "lime",
      date: getActivityDate("hackathon"),
      paragraph: "Este evento tiene como objetivo desarrollar y demostrar las capacidades de programación y creatividad a través de proyectos realizados de forma grupal.",
      buttonLink: "/activities/hackathon",
      imgUrl: "/images/carrousel/hackathon.webp",
    },
    {
      title: "demo day",
      variant: "orange",
      date: getActivityDate("demoDay"),
      paragraph: "Se desarrollarán temas de interés de diversas etapas de la carrera con el fin de lograr mayor público interesado en el evento.",
      buttonLink: "/activities/demoDay",
      imgUrl: "/images/carrousel/progra.webp",
    },
    {
      title: "talleres",
      variant: "purple",
      date: getActivityDate("workshops"),
      paragraph: "Se desarrollarán temas de interés de diversas etapas de la carrera con el fin de lograr mayor público interesado en el evento.",
      buttonLink: "/activities/workshops",
      imgUrl: "/images/carrousel/taller.webp",
    },
  ];

  export default SliderData