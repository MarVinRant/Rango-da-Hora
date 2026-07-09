import { MapPin, Clock } from 'lucide-react';
import React from 'react';
// Adicione esta linha abaixo dos outros imports:
import logoRango from '../assets/Logo-Rango.png';

export default function Hero() {
  return (
    <header className="relative w-full">
      <div className="w-full h-56 md:h-72 bg-gray-900 relative">
        <img
          src="https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=80"
          alt="Marmitas e panelas"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
      </div>

      <div className="flex flex-col items-center -mt-20 relative z-10 px-4 text-center">
        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white shadow-xl bg-white flex items-center justify-center overflow-hidden">
          <img
            src={logoRango}
            alt="Logo Rango da Hora"
            className="w-full h-full object-cover scale-[1.4]"
          />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mt-3 text-gray-900">Rango da Hora</h1>
        <p className="text-gray-600 mt-1 flex items-center gap-1 text-sm md:text-base">
          <MapPin size={16} className="text-brand-caramelo" />
          Av. Carlos Alberto Bastos Machado, 1090 - Grajaú, SP
        </p>
        <div className="bg-brand-caramelo text-white px-5 py-1.5 rounded-md mt-3 font-semibold text-sm md:text-base flex items-center gap-2 shadow-sm">
          <Clock size={16} /> Seg a Sáb - 11:00 às 16:00
        </div>
      </div>
    </header>
  );
}