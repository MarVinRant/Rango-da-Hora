import { ChefHat, CalendarCheck } from 'lucide-react';

export default function SelfService() {
  const handleReservation = () => {
    const text = "Olá, Churrascaria da Hora! Gostaria de saber mais sobre a reserva de mesas ou agendamento para um almoço em família.";
    window.open(`https://wa.me/5511934089228?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section className="max-w-4xl mx-auto px-4 mt-10">
      <div className="bg-brand-claro rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 shadow-sm border border-brand-brasa/30">
        <div className="bg-brand-fogo p-4 rounded-full text-white">
          <ChefHat size={40} />
        </div>
        <div className="text-center md:text-left flex-1">
          <span className="bg-brand-brasa text-white text-xs font-bold px-2 py-1 rounded-full uppercase tracking-wide">Novidade</span>
          <h3 className="text-2xl font-bold text-gray-900 mt-2">Conheça nosso Self-Service e Churrasco!</h3>
          <p className="text-gray-700 mt-1 mb-5">Agora você também pode montar seu prato do seu jeito aqui no nosso espaço. Venha almoçar com a família ou reserve para o seu evento.</p>
          
          <button 
            onClick={handleReservation}
            className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-md font-bold hover:bg-brand-fogo transition-colors w-full md:w-auto shadow-sm cursor-pointer"
          >
            <CalendarCheck size={20} />
            Agendar Mesa / Evento
          </button>
        </div>
      </div>
    </section>
  );
}