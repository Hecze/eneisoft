import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Users, Code, Lightbulb, Rocket } from "lucide-react";

export function ObjetivosEneisoft() {
  const objetivos = [
    {
      icon: <Users className="h-10 w-10 text-white" />,
      title: "Integrar a estudiantes de Ingeniería de Software y carreras afines",
      description:
        "Con participación de universidades, institutos y bootcamps públicos y privados de todo el Perú.",
    },
    {
      icon: <Lightbulb className="h-10 w-10 text-white" />,
      title: "Promover la participación de más mujeres en tecnología",
      description:
        "Tanto como asistentes, speakers, mentoras y jurados, con el apoyo de comunidades e iniciativas que impulsen su inclusión.",
    },
    {
      icon: <Code className="h-10 w-10 text-white" />,
      title: "Impulsar el aprendizaje de tecnologías fundamentales y emergentes",
      description:
        "Fundamentales (Git/GitHub, Web, Data Science, Mobile, Cloud, Ciberseguridad) y emergentes (IA, NLP, Blockchain, IoT, AR/VR).",
    },
    {
      icon: <Rocket className="h-10 w-10 text-white" />,
      title: "Fomentar el trabajo en equipo, la innovación y la competencia",
      description:
        "Aplicando conocimientos para resolver desafíos reales a nivel nacional, regional y mundial.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.25,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 80, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const titleRef = useRef(null);
  const isInView = useInView(titleRef, { once: false, amount: 0.6 });

  return (
    <section className="py-20 text-center overflow-hidden">

      <motion.h2
        ref={titleRef}
        className="text-4xl md:text-5xl font-bold mb-16 text-[#0a2138] relative"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : -30 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        OBJETIVOS DEL{" "}
        <span className="bg-gradient-to-r from-[#0a2138] to-[#334a69] bg-clip-text text-transparent">
          ENEISOFT 2025
        </span>
      </motion.h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        className="max-w-7xl mx-auto grid gap-10 sm:grid-cols-2 lg:grid-cols-4 px-6"
      >
        {objetivos.map((obj, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{
              scale: 1.07,
              boxShadow: "0 10px 30px rgba(10, 33, 56, 0.25)",
            }}
            whileTap={{ scale: 0.97 }}
            className="bg-white rounded-2xl shadow-lg p-8 cursor-pointer flex flex-col items-center text-center transition-transform duration-300"
          >
            <motion.div
              className="bg-[#0a2138] p-4 rounded-full mb-5"
              whileHover={{ scale: 1.2, rotate: 8 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {obj.icon}
            </motion.div>

            <motion.h3
              className="text-lg font-semibold text-[#0a2138] mb-3"
              whileHover={{ color: "#1a3a5f" }}
            >
              {obj.title}
            </motion.h3>

            <motion.p
              className="text-gray-600 text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: false }}
            >
              {obj.description}
            </motion.p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}