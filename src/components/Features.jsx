import { Heart, Star, ChefHat } from 'lucide-react';

export default function Features() {
  return (
    <section className="max-w-4xl mx-auto px-4 mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <Heart className="mx-auto text-brand-fogo mb-3" size={32} />
        <h4 className="font-bold mb-2">Comida Caseira</h4>
        <p className="text-sm text-gray-600">Feita no dia, com temperos naturais e sem conservantes.</p>
      </div>
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <Star className="mx-auto text-brand-brasa mb-3" size={32} />
        <h4 className="font-bold mb-2">Alta Qualidade</h4>
        <p className="text-sm text-gray-600">Ingredientes selecionados para garantir o melhor sabor.</p>
      </div>
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <ChefHat className="mx-auto text-brand-fogo mb-3" size={32} />
        <h4 className="font-bold mb-2">Preço Justo</h4>
        <p className="text-sm text-gray-600">Marmitas bem servidas que cabem no seu bolso.</p>
      </div>
    </section>
  );
}