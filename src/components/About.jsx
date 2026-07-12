import { Flame } from 'lucide-react';

export default function About() {
  return (
    <section className="max-w-4xl mx-auto px-4 mt-16 text-center">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center justify-center gap-2">
        <Flame className="text-brand-fogo" /> Tradição, Fogo e Sabor
      </h2>
      <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
        Há 8 anos servindo o Grajaú com comida de qualidade. A <strong className="text-brand-fogo">Churrascaria da Hora</strong> evoluiu para trazer até você o autêntico sabor na brasa, com um novo espaço Self-Service perfeito para almoços em família ou eventos. E para quem já é de casa, continuamos preparando nossas famosas marmitas diariamente com o mesmo carinho e tempero de sempre.
      </p>
    </section>
  );
}