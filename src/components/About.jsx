import { Heart } from 'lucide-react';

export default function About() {
  return (
    <section className="max-w-4xl mx-auto px-4 mt-12 text-center">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center justify-center gap-2">
        <Heart className="text-brand-caramelo" /> Tradição e Tempero de Mãe
      </h2>
      <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
        Há 8 anos servindo o Grajaú com comida de verdade. No **Rango da Hora**, acreditamos que uma boa refeição muda o seu dia. Nossas marmitas são preparadas diariamente com ingredientes frescos, muito carinho e aquele gostinho de comida feita em casa que abraça o estômago.
      </p>
    </section>
  );
}