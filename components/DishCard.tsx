import React from 'react';
import { Leaf, WheatOff, Flame, AlertCircle } from 'lucide-react';
import { MenuItem } from '../types';

interface DishCardProps {
  item: MenuItem;
}

export const DishCard: React.FC<DishCardProps> = ({ item }) => {
  return (
    <div className="group bg-white rounded-lg p-5 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:border-brand-gold/30 flex flex-col h-full">
      <div className="flex justify-between items-baseline gap-4 mb-2">
        <h3 className="font-serif text-lg md:text-xl font-bold text-gray-800 leading-tight group-hover:text-brand-gold transition-colors flex-1">
          {item.name}
          <span className="inline-flex gap-1 ml-2 align-middle">
            {item.isVegetarian && (
              <span title="Vegetariano">
                 <Leaf size={14} className="text-green-500 fill-current opacity-70" />
              </span>
            )}
            {item.isGlutenFree && (
               <span title="Senza Glutine">
                 <WheatOff size={14} className="text-amber-500 fill-current opacity-70" />
               </span>
            )}
            {item.isSpicy && (
               <span title="Piccante">
                <Flame size={14} className="text-red-500 fill-current opacity-70" />
               </span>
            )}
          </span>
        </h3>
        <span className="font-serif text-lg font-bold text-brand-gold whitespace-nowrap">
          € {item.price.toFixed(2).replace('.', ',')}
        </span>
      </div>
      
      {item.description && (
        <p className="text-gray-500 text-sm md:text-base leading-relaxed font-light mb-2 flex-grow">
          {item.description}
        </p>
      )}

      {item.allergens && item.allergens.length > 0 && (
        <div className="mt-2 pt-2 border-t border-gray-50">
          <p className="text-[10px] text-gray-400 uppercase tracking-wider flex items-center gap-1">
             <AlertCircle size={10} className="inline" />
             <span className="font-bold">Allergeni:</span> {item.allergens.join(', ')}
          </p>
        </div>
      )}
    </div>
  );
};