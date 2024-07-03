"use client"
import React from 'react';
import { Button as NextUIButton } from '@nextui-org/button';
import Link from 'next/link';

interface ButtonProps {
  path?: string; // Prop opcional para el enlace
  children: React.ReactNode; // Contenido del botón
  color?: string; // Color personalizado del botón
  className?: string; // Clases personalizadas
  type?: 'button' | 'submit'; // Tipo de botón
  onClick?: () => void; // Acción de clic para botones sin path
  disabled?: boolean; // Propiedad para deshabilitar el botón
}

const Button: React.FC<ButtonProps> = ({ path, children, onClick, color, className, type = "button", disabled = false }) => {
  const baseColor = color ? color : 'bg-primary';
  const buttonStyles = `h-12 w-48 rounded-xl px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out ${baseColor} ${className}`;

  const handleClick = () => {
    if (path && path.startsWith('#')) {
      const targetId = path.substring(1); // Eliminar el símbolo "#" del inicio
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
    if (onClick) {
      onClick();
    }
  };

  if (path && !path.startsWith('#')) {
    return (
      <Link href={path}>
        <NextUIButton className={buttonStyles} disabled={disabled}>
          {children}
        </NextUIButton>
      </Link>
    );
  }

  return (
    <NextUIButton
      type={type} // Asegura que no es un botón de envío en formularios
      onClick={handleClick} // Maneja el evento de clic
      className={buttonStyles} // Aplica estilos personalizados
      disabled={disabled} // Habilita o deshabilita el botón según el valor de la prop 'disabled'
    >
      {children}
    </NextUIButton>
  );
};

export default Button;
