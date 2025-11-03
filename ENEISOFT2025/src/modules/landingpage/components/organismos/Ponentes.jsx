import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Linkedin } from "lucide-react";
import { ponentesData } from "../../../../data/ponentes/ponentes";

export const Ponentes = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex flex-col items-center py-16 px-6"
    >
      <motion.h2
        className="text-4xl font-bold text-[#0a2138] mb-14 relative"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : -30 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        PONENTES PRINCIPALES
      </motion.h2>

      <motion.div
        className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 max-w-6xl"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {ponentesData.map((p, i) => (
          <motion.div
            key={i}
            className="bg-white rounded-3xl shadow-lg overflow-hidden flex flex-col items-center text-center transition-all duration-300"
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{
              opacity: isInView ? 1 : 0,
              y: isInView ? 0 : 50,
              scale: isInView ? 1 : 0.95,
            }}
            transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.2 }}
            whileHover={{
              y: -8,
              boxShadow: "0 10px 25px rgba(10, 33, 56, 0.2)",
              transition: { duration: 0.3 },
            }}
          >
            <div className="w-full h-60 overflow-hidden">
              <img src={p.imagen} alt={p.nombre} className="w-full h-full object-cover" />
            </div>

            <div className="p-6 flex flex-col items-center">
              <h3 className="text-lg font-bold text-gray-900">{p.nombre}</h3>
              <p className="text-blue-600 text-sm font-medium mt-1">{p.institucion}</p>
              <div className="flex justify-center items-center mt-3">
                <img src={p.logo} alt="logo" className="h-6" />
              </div>
              <p className="text-gray-600 text-sm mt-3">{p.descripcion}</p>

              <a
                href={p.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition"
              >
                <Linkedin size={20} />
                Link
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
