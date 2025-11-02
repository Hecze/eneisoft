import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";
import { Contador } from "../atomos/Contador";

export function HeroSection() {
  const targetDate = new Date("2025-11-10T16:00:00");

  return (
    <section className="relative flex flex-col h-screen overflow-x-hidden text-center px-4 primary bg-eneisoft">
      
      {/* Contenedor de contenido centrado */}
      <div className="relative flex flex-col flex-1 justify-center items-center">

        {/* Título */}
        <motion.h1
          className="font-impact text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-bold tracking-tight"
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          ENEISOFT <strong className="secondary">2025</strong>
        </motion.h1>

        {/* Subtítulo */}
        <motion.p
          className="mt-6 max-w-2xl text-lg md:text-2xl text-foreground/80 mx-auto"
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Si te apasiona la programación y la tecnología, este es tu lugar. Conecta, aprende y vive una experiencia que te inspirará a crear cosas increíbles.
        </motion.p>

        {/* Contador */}
        <motion.div
          className="mt-10"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Contador targetDate={targetDate} />
        </motion.div>
      </div>

      {/* Flecha animada hacia abajo */}
      <div className="absolute bottom-12 w-full flex justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <ArrowDown className="h-8 w-8 text-secondary animate-bounce" />
        </motion.div>
      </div>

    </section>
  );
}
