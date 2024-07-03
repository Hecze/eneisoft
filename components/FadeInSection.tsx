"use client"
import { useInView } from "react-intersection-observer";

const FadeInSection = ({ children,  animationClass,  threshold = 0.07 }) => {
  // Obtenemos la referencia y el estado de si está en el viewport
  const { ref, inView } = useInView({
    triggerOnce: true, // Solo ejecuta la animación una vez
    threshold: threshold, // Considera visible si el 10% está en el viewport
  });

  return (
    <section
      ref={ref}
      className={`${inView ? animationClass : 'opacity-0'}`}
    >
      {children}
    </section>
  );
};

export default FadeInSection;
