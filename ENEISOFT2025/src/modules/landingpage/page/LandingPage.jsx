import { Actividades } from "../components/organismos/Actividades";
import {Header} from "../components/organismos/Header"
import { HeroSection } from "../components/organismos/HeroSection"
import { ObjetivosEneisoft } from "../components/organismos/ObjetivosEneisoft";
import { Ponentes } from "../components/organismos/Ponentes";
import { WhatIsEneisoft } from "../components/organismos/WhatIsEneisoft"
function LandingPage() {

  return (
    <div className=" bg-gray-100">
      <Header/>
      <HeroSection/>
      <WhatIsEneisoft/>
      <ObjetivosEneisoft/>
      <Actividades/>
      <Ponentes/>
    </div>
  )
}

export default LandingPage
