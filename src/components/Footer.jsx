import { Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-carvao text-white mt-16 pt-12 pb-24 md:pb-12">
      <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-bold text-brand-fogo mb-4">Churrascaria da Hora</h3>
          <p className="text-gray-400 mb-4">O verdadeiro sabor na brasa, levando tradição para a sua mesa todos os dias.</p>
          <div className="flex items-center gap-2 text-gray-300 mb-3">
            <Phone size={18} className="text-brand-brasa" /> (11) 93408-9228
          </div>
          <div className="flex items-start gap-2 text-gray-300">
            <MapPin size={22} className="text-brand-brasa shrink-0" /> 
            <span>R. Goiaba Natal, 102 - Vila Natal</span>
          </div>
        </div>
        <div className="h-48 w-full rounded-lg overflow-hidden border border-gray-800">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.5680307418315!2d-46.70969362488447!3d-23.762778778661925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce4f2ade400b57%3A0x71d6283cfe872427!2sR.%20Goiaba%20Natal%2C%20102%20-%20Vila%20Natal%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2004863-220!5e0!3m2!1spt-BR!2sbr!4v1783815656595!5m2!1spt-BR!2sbr" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="strict-origin-when-cross-origin"
          >
          </iframe>
        </div>
      </div>
    </footer>
  );
}