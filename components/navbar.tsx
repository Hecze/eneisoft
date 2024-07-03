"use client"
import Link from "next/link"; import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem
} from "@nextui-org/dropdown";

import { Button } from "@nextui-org/button";


export const Navbar = () => {
  const iconClasses = "text-xl text-default-500 pointer-events-none flex-shrink-0";
  return (
    <nav className="bg-blue text-white">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="https://scontent.flim15-1.fna.fbcdn.net/v/t39.30808-1/363413231_1150809719203883_3289886993161493055_n.jpg?stp=dst-jpg_p200x200&_nc_cat=101&ccb=1-7&_nc_sid=f4b9fd&_nc_eui2=AeEFkQIep-u5IEIrP6aXv5y1t2GAWmuC3eG3YYBaa4Ld4XBoJmvvZBQn1dDo45PKI9EqQRxsd-EUong-eHI6w2bA&_nc_ohc=byv1bKluDkQQ7kNvgE6zAsU&_nc_ht=scontent.flim15-1.fna&gid=A_R93mTEpbi5oNOdMQATbEb&oh=00_AYCAk5peko4I-Q6Edq-nCUjDxOrjoLcrRNOWhTTLUj6rQw&oe=668BA3F7" className="h-8" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">ENEISOFT</span>
        </Link>
        <div className="hidden w-full md:block md:w-auto">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4  md:space-x-8 md:flex-row md:mt-0 md:border-0 ">
            <li>
              <Link href="/" className="block py-2 px-3 rounded" aria-current="page">Inicio</Link>
            </li>
            <li>
              <Link href="/about" className="block py-2 px-3 rounded">Sobre Nosotros</Link>
            </li>
            <li>
              <Link href="/schedule" className="block py-2 px-3 rounded">Cronograma</Link>
            </li>
            <Dropdown>
              <DropdownTrigger>
                <Button
                  variant="light"
                >
                  Actividades
                </Button>
              </DropdownTrigger>
              <DropdownMenu variant="faded" aria-label="Dropdown menu with icons">
                <DropdownItem
                  key="hackathon"
                  href="/activities/hackathon"
                >
                  Hackathon

                </DropdownItem>
                <DropdownItem
                  key="progra"
                  href="/activities/progra"
                >
                  Progra Competi
                </DropdownItem>
                <DropdownItem
                  key="demo"
                  href="/activities/demo"
                >
                  Demo Day
                </DropdownItem>
                <DropdownItem
                  key="workshops"
                  href="/activities/workshops"

                >
                  Talleres
                </DropdownItem>
                <DropdownItem
                  key="conferences"
                  href="/activities/conferences"

                >
                  Conferencias
                </DropdownItem>

              </DropdownMenu>
            </Dropdown>
          </ul>
        </div>
      </div>
    </nav>
  );
}
