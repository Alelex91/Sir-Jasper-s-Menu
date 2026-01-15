import React from 'react';
import { X, Trash2, CheckCircle } from 'lucide-react';
import { CartItem } from '../types';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onRemove: (id: string) => void;
  onUpdateQuantity: (id: string, delta: number) => void;
}

export const Cart: React.FC<CartProps> = ({ isOpen, onClose, items, onRemove, onUpdateQuantity }) => {
  if (!isOpen) return null;

  const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="fixed inset-0 z-[60] flex justify-end bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
        
        <div className="p-5 border-b border-gray-100 flex justify-between items-center bg-brand-dark text-white">
          <h2 className="font-serif text-xl font-bold">Il tuo Ordine</h2>
          <button onClick={onClose} className="hover:text-brand-gold transition-colors">
            <X size={24} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-gray-400 gap-4">
              <ShoppingBagIcon />
              <p>Il carrello è vuoto</p>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.id} className="flex gap-4 border-b border-gray-100 pb-4 last:border-0">
                <div className="flex-1">
                  <h3 className="font-serif font-bold text-gray-800">{item.name}</h3>
                  <p className="text-brand-gold font-bold">€{item.price}</p>
                  
                  <div className="flex items-center gap-3 mt-2">
                    <div className="flex items-center border border-gray-200 rounded-lg">
                      <button 
                        onClick={() => onUpdateQuantity(item.id, -1)}
                        className="px-2 py-1 text-gray-500 hover:bg-gray-100"
                      >-</button>
                      <span className="px-2 text-sm font-bold text-gray-800">{item.quantity}</span>
                      <button 
                         onClick={() => onUpdateQuantity(item.id, 1)}
                         className="px-2 py-1 text-gray-500 hover:bg-gray-100"
                      >+</button>
                    </div>
                    <button 
                      onClick={() => onRemove(item.id)}
                      className="text-red-400 hover:text-red-600 ml-auto"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="p-6 bg-gray-50 border-t border-gray-200">
            <div className="flex justify-between items-center mb-4">
              <span className="text-gray-600">Totale</span>
              <span className="text-2xl font-bold font-serif text-brand-dark">€{total.toFixed(2)}</span>
            </div>
            <button 
              className="w-full bg-brand-gold text-brand-dark font-bold py-3 rounded-lg hover:bg-brand-dark hover:text-brand-gold transition-colors shadow-lg flex items-center justify-center gap-2"
              onClick={() => alert('Grazie! L\'ordine è stato inviato alla cucina.')}
            >
              <CheckCircle size={20} />
              Invia Ordine
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

const ShoppingBagIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
);