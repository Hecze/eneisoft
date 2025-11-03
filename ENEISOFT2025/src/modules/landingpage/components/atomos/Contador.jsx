import { useState, useEffect } from "react";
import { MapPin } from "lucide-react";

export function Contador({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
      } else {
        const hours = Math.floor(difference / (1000 * 60 * 60));
        const minutes = Math.floor((difference / (1000 * 60)) % 60);
        const seconds = Math.floor((difference / 1000) % 60);
        setTimeLeft({ hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="bg-gradient-to-r tertiaryBG text-white p-6 rounded-xl shadow-lg flex flex-col md:flex-row items-center justify-around gap-6 md:gap-20">
      <h2 className="text-2xl font-bold">¡Prepárate!</h2>
      <div className="flex gap-8 text-center">
        <div>
          <span className="block text-3xl font-bold">{timeLeft.hours}</span>
          <span className="text-sm">HOURS</span>
        </div>
        <div>
          <span className="block text-3xl font-bold">{timeLeft.minutes}</span>
          <span className="text-sm">MINUTES</span>
        </div>
        <div>
          <span className="block text-3xl font-bold">{timeLeft.seconds}</span>
          <span className="text-sm">SECONDS</span>
        </div>
      </div>
      <div className="flex items-center gap-4 text-sm md:text-base">
        <MapPin size={60} />
        <div className="text-left font-bold">
          FACTULDAD INGENIERÍA DE<br />
          SISTEMAS E INFORMÁTICA<br />
          UNMSM<br />
        </div>
      </div>
    </div>
  );
}
