import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import mascota from "../../../../assets/pet.webp";

export function WhatIsEneisoft() {
  const contentRef = useRef(null);
  const isInView = useInView(contentRef, { once: false, amount: 0.6 });

  return (
    <section className="py-16 bg-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={contentRef}
          className="flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="max-w-[600px]">
            <motion.p
              className="font-comic -mb-2"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : -20 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <span className="secondary">[</span> Sobre el evento{" "}
              <span className="secondary">]</span>
            </motion.p>

            <motion.h3
              className="text-4xl md:text-5xl font-bold mb-4"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : -30 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            >
              Encuentro nacional de estudiantes de Ingeniería de Software
            </motion.h3>

            <motion.p
              className="text-gray-700 text-lg mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
              transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
            >
              Únete a ENEISOFT Perú 2025 para conectar con estudiantes,
              desarrolladores y profesionales del sector tecnológico. Talleres,
              charlas y hackathons para inspirarte y aprender nuevas tecnologías.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-6 mt-4"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 40 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            >
              {[
                { number: "+40", label: "Instituciones" },
                { number: "+15", label: "Speakers" },
                { number: "+20", label: "Actividades prácticas" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <p className="text-3xl font-bold text-primary">{item.number}</p>
                  <p className="text-gray-600">{item.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div
            className="flex justify-end"
            initial={{ opacity: 0, x: -200 }}
            animate={{
              opacity: isInView ? 1 : 0,
              x: isInView ? 0 : 200,
            }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          >
            <motion.img
              src={mascota}
              alt="Mascota ENEISOFT"
              className="w-full max-w-[400px]"
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}
