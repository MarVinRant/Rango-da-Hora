import { ShoppingCart } from 'lucide-react';
import { MENU_CATEGORIES } from '../data/mockData';

export default function Menu({ addToCart }) {
  return (
    <section id="cardapio" className="max-w-5xl mx-auto px-4 mt-16">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Conheça nosso menu</h2>
      
      {MENU_CATEGORIES.map((category, index) => (
        <div key={index} className="mb-12">
          <h3 className="text-xl font-bold text-gray-800 mb-6 border-b-2 border-brand-claro pb-2 inline-block">
            {category.title}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {category.items.map((item) => (
              <div key={item.id} className="flex bg-white rounded-lg p-3 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <img src={item.img} alt={item.name} className="w-28 h-28 md:w-32 md:h-32 rounded-md object-cover" />
                <div className="ml-4 flex flex-col justify-between w-full">
                  <div>
                    <h3 className="font-bold text-gray-900">{item.name}</h3>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-2">{item.desc}</p>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <span className="font-bold text-lg text-gray-900">R$ {item.price.toFixed(2)}</span>
                    <button 
                      onClick={() => addToCart(item)}
                      className="bg-gray-900 text-white p-2 rounded-md hover:bg-brand-fogo transition-colors cursor-pointer"
                    >
                      <ShoppingCart size={20} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}