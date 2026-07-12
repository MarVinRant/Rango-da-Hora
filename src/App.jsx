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

import { generateWhatsAppLink } from './utils/whatsapp';

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
    
    const link = generateWhatsAppLink(cart, totalCart, address);
    window.open(link, '_blank');
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
          className="fixed bottom-0 left-0 w-full bg-brand-fogo text-white p-4 cursor-pointer hover:bg-red-700 transition-colors z-40 flex justify-center items-center gap-2 font-bold shadow-[0_-4px_6px_rgba(0,0,0,0.1)]"
        >
          ( {totalItems} ) Veja seu carrinho <ShoppingCart size={20} />
        </div>
      )}

      {totalItems === 0 && (
        <a 
          href="https://wa.me/5511934089228?text=Olá, Churrascaria da Hora! Gostaria de tirar uma dúvida." 
          target="_blank" 
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-105 transition-transform z-30 cursor-pointer"
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