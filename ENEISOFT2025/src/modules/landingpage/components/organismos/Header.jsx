import { useState, useEffect } from "react";
import { useWindowWidth } from "../../../../hooks/useWindowWidth";
import logo from "../../../../assets/logo.jpg";
import { BotonHeader } from "../atomos/BotonHeader";
import { Boton } from "../atomos/Boton";
import { motion, AnimatePresence } from "framer-motion";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(false);
  const width = useWindowWidth();

  // Detectar scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) setShowHeader(true);
      else setShowHeader(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {showHeader && (
        <motion.header
          className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-sm"
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -80, opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="flex justify-between items-center max-w-[1200px] m-auto px-4 py-2">
            <div>
              <img src={logo} alt="eneisoft" className="max-h-16 object-contain" />
            </div>

            {width > 1000 ? (
              // Menú grande
              <div className="flex gap-4">
                <BotonHeader texto="INICIO" />
                <BotonHeader texto="¿QUÉ ES?" />
                <BotonHeader texto="OBJETIVOS" />
                <BotonHeader texto="ACTIVIDADES" />
                <BotonHeader texto="SPEAKERS" />
                <BotonHeader texto="ALIADOS Y SPONSORS" />
                <BotonHeader texto="AGENDA" />
              </div>
            ) : (
              // Menú pequeño
              <>
                <button
                  className="text-3xl"
                  onClick={() => setMenuOpen(!menuOpen)}
                >
                  ☰
                </button>

                {menuOpen && (
                  <div className="absolute top-20 left-0 w-full bg-white shadow-lg flex flex-col items-center gap-4 py-6 transition-all duration-300">
                    <BotonHeader texto="INICIO" />
                    <BotonHeader texto="¿QUÉ ES?" />
                    <BotonHeader texto="OBJETIVOS" />
                    <BotonHeader texto="ACTIVIDADES" />
                    <BotonHeader texto="SPEAKERS" />
                    <BotonHeader texto="ALIADOS Y SPONSORS" />
                    <BotonHeader texto="AGENDA" />
                  </div>
                )}
              </>
            )}

            <div className="flex items-center gap-4">
              <Boton texto="VIVO" />
            </div>
          </div>
        </motion.header>
      )}
    </AnimatePresence>
  );
};
