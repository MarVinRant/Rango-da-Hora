import { ChefHat } from 'lucide-react';

export default function SelfService() {
  return (
    <section className="max-w-4xl mx-auto px-4 mt-10">
      <div className="bg-brand-claro rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 shadow-sm border border-brand-dourado/30">
        <div className="bg-brand-caramelo p-4 rounded-full text-white">
          <ChefHat size={40} />
        </div>
        <div className="text-center md:text-left">
          <span className="bg-brand-pastel text-white text-xs font-bold px-2 py-1 rounded-full uppercase tracking-wide">Novidade</span>
          <h3 className="text-2xl font-bold text-gray-900 mt-2">Conheça nosso Self-Service!</h3>
          <p className="text-gray-700 mt-1">Agora você também pode montar seu prato do seu jeito aqui no nosso espaço. Venha nos visitar e sinta-se em casa.</p>
        </div>
      </div>
    </section>
  );
}