import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import Link from 'next/link';

type WhatsAppButtonProps = {
  phoneNumber: string;
  message: string;
};

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ phoneNumber, message }) => {
  const url = `https://api.whatsapp.com/send/?phone=${phoneNumber}&text=${encodeURIComponent(message)}&type=phone_number&app_absent=0`;

  return (
    <Link
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="opacity-90 hover:opacity-100 md:opacity-100 fixed bottom-4 right-4 inline-flex items-center justify-center w-14 h-14 m-4 bg-green-500 text-white rounded-full shadow-md transition-transform transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75 z-50"
    >
      <FaWhatsapp size={36} />
    </Link>
  );
};

export default WhatsAppButton;
