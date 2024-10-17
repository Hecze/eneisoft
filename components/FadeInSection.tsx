"use client"
import { useInView } from "react-intersection-observer";
import React, { ReactNode } from "react";

interface FadeInSectionProps {
  children: ReactNode;
  animationClass?: string;
  threshold?: number;
  className?: string;
}

const FadeInSection: React.FC<FadeInSectionProps> = ({ children, animationClass = "fade-in-down-10", threshold = 0.07, className }) => {
  // Obtenemos la referencia y el estado de si está en el viewport
  const { ref, inView } = useInView({
    triggerOnce: true, // Solo ejecuta la animación una vez
    threshold: threshold, // Considera visible si el 10% está en el viewport
  });

  return (
    <div ref={ref} className={`${inView ? animationClass : 'opacity-0'} ${className}`}>
      {children}
    </div>
  );
};

export default FadeInSection;
