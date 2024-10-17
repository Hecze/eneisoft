"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/dropdown";
import {
  Navbar as NextNavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { IoIosArrowDown } from "react-icons/io";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname(); // Obtener la ruta actual

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuItemClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <NextNavbar className="bg-blue text-white pt-4 px-[3vw]">
      <NavbarContent className="md:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          onClick={handleMenuToggle}
        />
      </NavbarContent>
      <NavbarContent>
        <NavbarBrand>
          <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse sm:hidden md:flex">
            <img
              src="/images/favicon.ico"
              className="h-8"
              alt="ENEISOFT Logo"
            />
            <span className="self-center text-[4.5vw] sm:text-2xl font-semibold whitespace-nowrap dark:text-white">
              ENEISOFT
            </span>
          </Link>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden md:flex gap-[2.8vw]" justify="center">
        <NavbarItem>
          <Link href="/" className={`min-w-28 text-center block py-2 px-3 rounded ${pathname === "/" && "border-2"}`}>
            Inicio
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/about" className={`min-w-28 text-center block py-2 px-3 rounded ${pathname === "/about" && "border-2"}`}>
            Historia
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/schedule" className={`min-w-28 text-center block py-2 px-3 rounded ${pathname === "/schedule" && "border-2"}`}>
            Cronograma
          </Link>
        </NavbarItem>
        <Dropdown>
          <DropdownTrigger>
            <Button
              disableRipple
              className={`p-0 bg-transparent data-[hover=true]:bg-transparent text-md py-2 px-3 rounded ${pathname === "/activities/progra" || pathname === "/activities/hackathon" || pathname === "/activities/demoDay" || pathname === "/activities/workshops" || pathname === "/activities/conferences" || pathname === "/activities" ? "border-2" : ""}`}
              endContent={<IoIosArrowDown />}
              radius="sm"
              variant="light"
            >
              Actividades
            </Button>
          </DropdownTrigger>
          <DropdownMenu aria-label="Actividades" className="w-[200px]" itemClasses={{ base: "gap-4" }}>
            <DropdownItem key="hackathon" onClick={handleMenuItemClick} href="/activities/hackathon">
              Hackathon
            </DropdownItem>
            <DropdownItem key="progra" onClick={handleMenuItemClick} href="/activities/progra">
              Progra Competi
            </DropdownItem>
            <DropdownItem key="demoDay" onClick={handleMenuItemClick} href="/activities/demoDay">
              Demo Day
            </DropdownItem>
            <DropdownItem key="workshops" onClick={handleMenuItemClick} href="/activities/workshops">
              Talleres
            </DropdownItem>
            <DropdownItem key="conferences" onClick={handleMenuItemClick} href="/activities/conferences">
              Conferencias
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
      <NavbarMenu className="bg-blue gap-4">
        <NavbarMenuItem className="mt-6">
          <Link href="/" className={`block py-2 px-3 rounded ${pathname === "/" ? "border-2" : ""}`} onClick={handleMenuItemClick}>Inicio</Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link href="/about" className={`block py-2 px-3 rounded ${pathname === "/about" ? "border-2" : ""}`} onClick={handleMenuItemClick}>Historia</Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link href="/schedule" className={`block py-2 px-3 rounded ${pathname === "/schedule" ? "border-2" : ""}`} onClick={handleMenuItemClick}>Cronograma</Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link href="/activities/hackathon" className={`block py-2 px-3 rounded ${pathname === "/activities/hackathon" ? "border-2" : ""}`} onClick={handleMenuItemClick}>Hackathon</Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link href="/activities/progra" className={`block py-2 px-3 rounded ${pathname === "/activities/progra" ? "border-2" : ""}`} onClick={handleMenuItemClick}>Programacion Competitiva</Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link href="/activities/demoDay" className={`block py-2 px-3 rounded ${pathname === "/activities/demoDay" ? "border-2" : ""}`} onClick={handleMenuItemClick}>Demo Day</Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link href="/activities/conferences" className={`block py-2 px-3 rounded ${pathname === "/activities/conferences" ? "border-2" : ""}`} onClick={handleMenuItemClick}>Conferencias</Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link href="/activities/workshops" className={`block py-2 px-3 rounded ${pathname === "/activities/workshops" ? "border-2" : ""}`} onClick={handleMenuItemClick}>Talleres</Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </NextNavbar>
  );
};
