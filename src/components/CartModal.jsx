import { X, Trash2 } from 'lucide-react';

export default function CartModal({ 
  isModalOpen, 
  setIsModalOpen, 
  cart, 
  removeFromCart, 
  address, 
  setAddress, 
  handleCheckout 
}) {
  if (!isModalOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg w-full max-w-md max-h-[90vh] overflow-y-auto relative">
        <button 
          onClick={() => setIsModalOpen(false)}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
        >
          <X size={24} />
        </button>
        
        <div className="p-6">
          <h2 className="text-xl font-bold text-center mb-6">Seu carrinho</h2>
          
          {cart.length === 0 ? (
            <p className="text-center text-gray-500">Seu carrinho está vazio.</p>
          ) : (
            <div className="space-y-4">
              {cart.map(item => (
                <div key={item.id} className="flex justify-between items-start border-b border-gray-100 pb-4">
                  <div>
                    <h4 className="font-bold text-sm text-gray-900">{item.name}</h4>
                    <p className="text-xs text-gray-500">(Quantidade: {item.qty})</p>
                    <p className="text-sm font-semibold mt-1">R$ {(item.price * item.qty).toFixed(2)}</p>
                  </div>
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="text-xs text-gray-500 hover:text-red-500 flex items-center gap-1"
                  >
                    Remover <Trash2 size={14} />
                  </button>
                </div>
              ))}

              <div className="pt-2">
                <label className="block text-sm font-bold text-gray-900 mb-2">Endereço de entrega:</label>
                <input 
                  type="text" 
                  placeholder="Digite seu endereço completo..." 
                  className="w-full border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:border-brand-caramelo"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>

              <div className="flex justify-between items-center mt-6">
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="text-sm text-gray-500 font-semibold"
                >
                  Fechar
                </button>
                <button 
                  onClick={handleCheckout}
                  className="bg-[#32CD32] hover:bg-green-600 text-white font-bold py-2 px-6 rounded-md transition-colors"
                >
                  Finalizar pedido
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}