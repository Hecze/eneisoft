"use client"
import Image from "next/image";
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import SlideComponent from "./SlideComponent";
import { useState, useEffect, useRef } from "react";

const SliderData = [
  {
    title: "conferencias",
    variant: "orange",
    date: "16 DE SEPTIEMBRE",
    paragraph: "Ponencias de entre 45 a 60 minutos cada una y que se darán a lo largo de los tres días que dure el XII ENEISOFT.",
    buttonLink: "/activities/conferences",
    imgUrl: "/images/carrousel/conferencias.webp",
  },
  {
    title: "programacion competitiva",
    variant: "yellow",
    date: "16 DE SEPTIEMBRE",
    buttonLink: "/activities/progra",
    imgUrl: "/images/carrousel/progra.webp",
  },
  {
    title: "hackathon",
    variant: "lime",
    date: "16 DE SEPTIEMBRE",
    paragraph: "Este evento tiene como objetivo desarrollar y demostrar las capacidades de programación y creatividad a través de proyectos realizados de forma grupal.",
    buttonLink: "/activities/hackathon",
    imgUrl: "/images/carrousel/hackathon.webp",
  },
  {
    title: "demo day",
    variant: "orange",
    date: "16 DE SEPTIEMBRE",
    paragraph: "Se desarrollarán temas de interés de diversas etapas de la carrera con el fin de lograr mayor público interesado en el evento.",
    buttonLink: "/activities/workshops",
    imgUrl: "/images/carrousel/progra.webp",
  },
  {
    title: "talleres",
    variant: "purple",
    date: "16 DE SEPTIEMBRE",
    paragraph: "Se desarrollarán temas de interés de diversas etapas de la carrera con el fin de lograr mayor público interesado en el evento.",
    buttonLink: "/activities/workshops",
    imgUrl: "/images/carrousel/taller.webp",
  },
];

const SliderSection: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const length = SliderData.length;
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
  const delay = 3000; // Velocidad del slider en milisegundos

  const nextSlide = () => {
    setCurrent(prev => (prev === length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent(prev => (prev === 0 ? length - 1 : prev - 1));
  };

  useEffect(() => {
    autoPlayRef.current = setInterval(nextSlide, delay);
    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, []);

  const handleManualSlide = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
    setTimeout(() => {
      autoPlayRef.current = setInterval(nextSlide, delay);
    }, 2000);
  };

  return (
    <section className="relative flex justify-center items-center min-h-[45rem] px-12">
      <IoIosArrowBack
        className="absolute top-1/4 xl:top-1/2 left-0 xl:left-[-8rem] transform -translate-y-1/2 text-3xl text-white cursor-pointer z-10 md:left-8 lg:left-16"
        onClick={() => { prevSlide(); handleManualSlide(); }}
        size={42}
        opacity={0.5}
      />
      <IoIosArrowForward
        className="absolute top-1/4 xl:top-1/2 right-0 xl:right-[-8rem] transform -translate-y-1/2 text-3xl text-white cursor-pointer z-10 md:right-8 lg:right-16"
        onClick={() => { nextSlide(); handleManualSlide(); }}
        size={42}
        opacity={0.5}
      />
      {SliderData.map((slide, index) => (
        <div
          className={index === current ? 'opacity-100 duration-1000 ease-in-out transform scale-100' : 'opacity-0 duration-1000 ease-in-out transform scale-95'}
          key={index}
        >
          {index === current && (
            <SlideComponent
              id={index + 1}
              title={slide.title}
              date={slide.date}
              paragraph={slide.paragraph}
              buttonLink={slide.buttonLink}
              imgUrl={slide.imgUrl}
            />
          )}
        </div>
      ))}
      <div className="absolute bottom-4 flex justify-center w-full">
        {SliderData.map((_, index) => (
          <div
            key={index}
            className={`w-4 h-4 mx-1 rounded-full ${index === current ? 'bg-white' : 'bg-gray-500'}`}
          />
        ))}
      </div>
    </section>
  );
};

export default SliderSection;
