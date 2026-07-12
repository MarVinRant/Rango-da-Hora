import { MapPin, Clock, ArrowDownCircle } from 'lucide-react';
import logoNovo from '../assets/logo-churrascaria.png'; 

export default function Hero() {
  return (
    <header className="relative w-full bg-gradient-to-b from-brand-carvao to-black pt-16 pb-20">
      <div className="flex flex-col items-center relative z-10 px-4 text-center max-w-4xl mx-auto">
        
        {/* Container do Logo com máscara de corte exata */}
        <div className="w-56 h-56 md:w-64 md:h-64 rounded-full shadow-[0_0_40px_rgba(217,35,35,0.15)] flex items-center justify-center overflow-hidden bg-brand-carvao">
          <img
            src={logoNovo}
            alt="Churrascaria da Hora"
            /* scale para esconder a borda e translate-y para descer a imagem levemente */
            className="w-full h-full object-cover scale-[1.01] translate-y-[0.8%]" 
          />
        </div>
        
        <h1 className="text-3xl md:text-5xl font-bold mt-8 text-brand-claro drop-shadow-md">
          O Verdadeiro Sabor na Brasa
        </h1>
        
        <p className="text-gray-300 mt-3 flex items-center justify-center gap-2 text-sm md:text-lg font-medium">
          <MapPin size={20} className="text-brand-fogo" />
          R. Goiaba Natal, 102 - Vila Natal
        </p>
        
        <div className="bg-brand-fogo/15 text-brand-claro border border-brand-fogo/30 px-6 py-3 rounded-md mt-6 font-bold text-sm md:text-lg flex items-center gap-2 shadow-lg backdrop-blur-sm">
          <Clock size={20} className="text-brand-brasa" /> 
          Presencial e Delivery: Seg a Sáb - 11:00 às 16:00
        </div>

        {/* Novo Botão de Ação (Scroll to Menu) */}
        <a 
          href="#cardapio"
          className="mt-8 bg-brand-fogo hover:bg-red-700 text-white px-8 py-3 rounded-full font-bold text-lg flex items-center gap-2 transition-all shadow-[0_4px_15px_rgba(217,35,35,0.4)] hover:scale-105"
        >
          Ver Cardápio <ArrowDownCircle size={22} />
        </a>
        
      </div>
    </header>
  );
}