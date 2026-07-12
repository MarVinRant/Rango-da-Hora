import { Star } from 'lucide-react';
import { REVIEWS } from '../data/mockData';

export default function Testimonials() {
  return (
    <section className="bg-brand-claro/30 py-12 mt-16">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8">O que dizem nossos clientes</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.map(review => (
            <div key={review.id} className="bg-white p-6 rounded-xl shadow-sm relative">
              <div className="flex text-brand-brasa mb-3">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <p className="text-gray-600 text-sm italic mb-4">"{review.text}"</p>
              <p className="font-bold text-gray-900 text-sm">- {review.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}