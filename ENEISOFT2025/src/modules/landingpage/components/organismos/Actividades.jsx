import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import mascota from "../../../../assets/petchibi.png";
import { useWindowWidth } from "../../../../hooks/useWindowWidth";
import mascotaMobile from "../../../../assets/petmobile.png";
export function Actividades() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.4 });

  const width = useWindowWidth();

  const activities = [
    {
      title: "Workshops",
      desc: "Talleres prácticos sobre tecnologías básicas: Git/GitHub, Web, Data Science, Mobile, Cloud y Ciberseguridad.",
      icon: "🧠",
    },
    {
      title: "Keynotes",
      desc: "Conferencias sobre tecnologías emergentes: Inteligencia Artificial, NLP, Blockchain, IoT y AR/VR.",
      icon: "🎤",
    },
    {
      title: "Programación Competitiva",
      desc: "Torneo nacional de programación con 2 fases: eliminatoria virtual y final presencial.",
      icon: "💻",
    },
    {
      title: "Hackathon",
      desc: "Competencia nacional de creación tecnológica con 2 fases: eliminatoria virtual y final presencial.",
      icon: "🚀",
    },
  ];

  return (
    <section className="py-20 primaryBG overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div
          ref={ref}
          className="flex flex-col md:flex-row items-center justify-between gap-12"
        >
          <motion.div
            className="flex justify-center md:justify-start w-full md:w-1/2"
            initial={{ opacity: 0, x: -200 }}
            animate={{
              opacity: isInView ? 1 : 0,
              x: isInView ? 0 : -200,
            }}
            transition={{ duration: 1, ease: "easeOut" }}
          >

          {width < 768 ? (
            <motion.img
              src={mascotaMobile}
              alt="Actividades ENEISOFT"
              className="w-full max-w-[500px] drop-shadow-2xl rounded-2xl"
              animate={{
                y: isInView ? [0, -10, 0] : 0,
              }}
              transition={{
                repeat: Infinity,
                repeatType: "mirror",
                duration: 4,
                ease: "easeInOut",
              }}
            />
          ) : (
            <motion.img
              src={mascota}
              alt="Actividades ENEISOFT"
              className="w-full max-w-[500px] drop-shadow-2xl rounded-2xl"
              animate={{
                y: isInView ? [0, -10, 0] : 0,
              }}
              transition={{
                repeat: Infinity,
                repeatType: "mirror",
                duration: 4,
                ease: "easeInOut",
              }}
            />
          )}

          </motion.div>

          <div className="w-full md:w-1/2">
            <motion.p
              className="font-comic text-primary mb-2 text-gray-100"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : -20 }}
              transition={{ duration: 0.6 }}
            >
              <span className="secondary">[</span> Actividades{" "}
              <span className="secondary">]</span>
            </motion.p>

            <motion.h3
              className="text-4xl font-bold mb-8 text-gray-100"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : -30 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              Vive la experiencia ENEISOFT
            </motion.h3>

            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {activities.map((act, i) => (
                <motion.div
                  key={i}
                  className="bg-gray-100 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-transparent hover:border-primary/40 flex flex-col justify-between"
                  initial={{ opacity: 0, y: 60 }}
                  animate={{
                    opacity: isInView ? 1 : 0,
                    y: isInView ? 0 : 60,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: i * 0.15 + 0.3,
                    ease: "easeOut",
                  }}
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "#f9fafb",
                  }}
                >
                  <div>
                    <div className="text-4xl mb-3">{act.icon}</div>
                    <h4 className="text-xl font-semibold mb-2 text-gray-800">
                      {act.title}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {act.desc}
                    </p>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-auto inline-block text-sm font-semibold secondary bg-primary px-4 py-2 rounded-xl shadow-md hover:bg-primary/90 transition-colors duration-300"
                    onClick={() => alert(`Ver más sobre ${act.title}`)}
                  >
                    Ver más
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
