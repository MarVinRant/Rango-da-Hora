import { Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-16 pt-12 pb-24 md:pb-12">
      <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-bold text-brand-claro mb-4">Rango da Hora</h3>
          <p className="text-gray-400 mb-4">Levando o sabor e o aconchego de casa para a sua mesa, todos os dias.</p>
          <div className="flex items-center gap-2 text-gray-300 mb-2">
            <Phone size={18} /> (11) 93408-9228
          </div>
          <div className="flex items-center gap-2 text-gray-300">
            <MapPin size={18} /> Av. Carlos Alberto Bastos Machado, 1090
          </div>
        </div>
        <div className="h-48 w-full rounded-lg overflow-hidden">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3653.606233408669!2d-46.69653282368943!3d-23.77294927865518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce492077b0d607%3A0x292656038852de4f!2sMarmitex%20Rango%20da%20hora!5e0!3m2!1spt-BR!2sbr!4v1715000000000!5m2!1spt-BR!2sbr" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
      </div>
    </footer>
  );
}