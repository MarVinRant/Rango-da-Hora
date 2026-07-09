import { useState } from 'react';
import { ShoppingCart, Phone } from 'lucide-react';

import Hero from './components/Hero';
import About from './components/About';
import SelfService from './components/SelfService';
import Menu from './components/Menu';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import CartModal from './components/CartModal';

export default function App() {
  const [cart, setCart] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [address, setAddress] = useState('');

  const addToCart = (item) => {
    const existing = cart.find(c => c.id === item.id);
    if (existing) {
      setCart(cart.map(c => c.id === item.id ? { ...c, qty: c.qty + 1 } : c));
    } else {
      setCart([...cart, { ...item, qty: 1 }]);
    }
  };

  const removeFromCart = (id) => setCart(cart.filter(c => c.id !== id));
  
  const totalCart = cart.reduce((acc, item) => acc + (item.price * item.qty), 0);
  const totalItems = cart.reduce((acc, item) => acc + item.qty, 0);

  const handleCheckout = () => {
    if (!address) {
      alert("Por favor, preencha o endereço de entrega.");
      return;
    }
    
    let text = `Olá, Rango da Hora! Quero fazer um pedido:\n\n`;
    cart.forEach(item => {
      text += `${item.qty}x ${item.name} - R$ ${(item.price * item.qty).toFixed(2)}\n`;
    });
    text += `\n*Total: R$ ${totalCart.toFixed(2)}*`;
    text += `\n*Endereço:* ${address}`;
    
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/5511934089228?text=${encodedText}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20 font-sans text-gray-800">
      <Hero />
      <About />
      <SelfService />
      <Menu addToCart={addToCart} />
      <Features />
      <Testimonials />
      <Footer />

      {totalItems > 0 && (
        <div 
          onClick={() => setIsModalOpen(true)}
          className="fixed bottom-0 left-0 w-full bg-brand-caramelo text-white p-4 cursor-pointer hover:bg-red-500 transition-colors z-40 flex justify-center items-center gap-2 font-bold shadow-[0_-4px_6px_rgba(0,0,0,0.1)]"
        >
          ( {totalItems} ) Veja seu carrinho <ShoppingCart size={20} />
        </div>
      )}

      {totalItems === 0 && (
        <a 
          href="https://wa.me/5511934089228?text=Olá! Gostaria de fazer um pedido." 
          target="_blank" 
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-105 transition-transform z-30"
        >
          <Phone size={28} />
        </a>
      )}

      <CartModal 
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        cart={cart}
        removeFromCart={removeFromCart}
        address={address}
        setAddress={setAddress}
        handleCheckout={handleCheckout}
      />
    </div>
  );
}