import React from 'react';
import { Leaf, WheatOff, Flame, AlertCircle } from 'lucide-react';
import { MenuItem } from '../types';

interface DishCardProps {
  item: MenuItem;
}

export const DishCard: React.FC<DishCardProps> = ({ item }) => {
  return (
    <div className="group bg-white rounded-lg p-5 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:border-brand-gold/30 flex flex-col h-full relative">
      <div className="flex justify-between items-baseline gap-4 mb-2">
        <h3 className="font-serif text-lg md:text-xl font-bold text-gray-800 leading-tight group-hover:text-brand-gold transition-colors flex-1">
          {item.name}
          <span className="inline-flex gap-1.5 ml-3 align-middle">
            {item.isVegetarian && (
              <span title="Vegetariano">
                 <Leaf size={14} className="text-green-500 fill-current opacity-80" />
              </span>
            )}
            {item.isGlutenFree && (
               <span title="Senza Glutine">
                 <WheatOff size={14} className="text-amber-500 fill-current opacity-80" />
               </span>
            )}
            {item.isSpicy && (
               <span title="Piccante">
                <Flame size={14} className="text-red-500 fill-current opacity-80" />
               </span>
            )}
          </span>
        </h3>
        <span className="font-serif text-lg font-bold text-brand-gold whitespace-nowrap">
          € {item.price.toFixed(2).replace('.', ',')}
        </span>
      </div>
      
      {item.description && (
        <p className="text-gray-500 text-sm md:text-base leading-relaxed font-light mb-4 flex-grow">
          {item.description}
        </p>
      )}

      {item.allergens && item.allergens.length > 0 && (
        <div className="mt-auto pt-2 flex justify-end">
          <div className="relative group/tooltip">
            <div className="cursor-help p-1 text-gray-400 hover:text-brand-gold transition-colors flex items-center gap-1">
               <AlertCircle size={14} />
               <span className="text-[10px] uppercase font-bold tracking-tighter">Info Allergeni</span>
            </div>
            
            {/* Tooltip */}
            <div className="absolute bottom-full right-0 mb-2 hidden group-hover/tooltip:block w-48 bg-brand-dark text-white p-3 rounded-lg shadow-2xl z-20 border border-brand-gold/30 animate-in fade-in slide-in-from-bottom-2 duration-200">
              <p className="text-[10px] uppercase tracking-widest text-brand-gold font-bold mb-1 border-b border-brand-gold/20 pb-1">
                Allergeni Presenti
              </p>
              <p className="text-xs font-light">
                {item.allergens.join(', ')}
              </p>
              {/* Arrow */}
              <div className="absolute top-full right-4 border-8 border-transparent border-t-brand-dark"></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};