import { Carrusel } from "../components/moleculas/Carrusel"
import {Header} from "../components/organismos/Header"
import { HeroSection } from "../components/organismos/HeroSection"
import { ObjetivosEneisoft } from "../components/organismos/ObjetivosEneisoft";
import { Ponentes } from "../components/organismos/Ponentes";
import { WhatIsEneisoft } from "../components/organismos/WhatIsEneisoft"
function LandingPage() {

    const eventos = [
    "NetWorking",
    "Workshops",
    "Keynotes",
    "Programación Competitiva",
    "Hackathon",
  ];

  return (
    <div className=" bg-gray-100">
      <Header/>
      <HeroSection/>
      <WhatIsEneisoft/>
      <ObjetivosEneisoft/>
      <Carrusel items={eventos} width="360px" height="200px" />
      <Ponentes/>
    </div>
  )
}

export default LandingPage
