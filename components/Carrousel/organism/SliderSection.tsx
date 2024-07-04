"use client"
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { ItemSlideType } from '@/types';
import SlideComponent from "../molecules/SlideComponent";
import { useState, useEffect, useRef } from "react";

type SliderDataProps = {
  slides: ItemSlideType[];
};

const SliderSection: React.FC<SliderDataProps> = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
  const delay = 3000; // Velocidad del slider en milisegundos

  const nextSlide = () => {
    setCurrent(prev => (prev === length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent(prev => (prev === 0 ? length - 1 : prev - 1));
  };

  useEffect(() => {
    const startAutoPlay = () => {
      autoPlayRef.current = setInterval(nextSlide, delay);
    };

    startAutoPlay();

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [length]);

  const handleManualSlide = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
    setTimeout(() => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
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
      {slides.map((slide, index) => (
        <div
          className={index === current ? 'opacity-100 duration-1000 ease-in-out transform scale-100' : 'opacity-0 duration-1000 ease-in-out transform scale-95'}
          key={index}
        >
          {index === current && (
            <SlideComponent
              id={index + 1}
              variant={slide.variant}
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
        {slides.map((_, index) => (
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
