import React, { useState, useMemo } from 'react';
import { Header } from './Header';
import { DishCard } from './DishCard';
import { ChatAssistant } from './ChatAssistant';
import { MENU_ITEMS } from '../constants';
import { Category } from '../types';

export const MenuPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category | 'All'>('All');

  // Filter items based on category
  const filteredItems = useMemo(() => {
    if (activeCategory === 'All') return MENU_ITEMS;
    return MENU_ITEMS.filter(item => item.category === activeCategory);
  }, [activeCategory]);

  const getHeroImage = (category: Category | 'All') => {
    const base = "https://image.pollinations.ai/prompt/";
    const params = "?width=1200&height=400&nologo=true";
    
    if (category === Category.BIBITE || category === Category.VINI || category === Category.BIRRE || category === Category.COCKTAIL) {
        return `${base}elegant%20cocktail%20bar%20wine%20cellar%20atmosphere${params}`;
    }
    if (category === Category.PIZZE_CLASSICHE || category === Category.PIZZE_SPECIALI || category === Category.NOVITA) {
        return `${base}authentic%20italian%20pizza%20oven%20fire%20warm%20atmosphere${params}`;
    }
    
    return `${base}luxury%20italian%20restaurant%20interior%20dark%20gold%20elegant%20tables${params}`;
  };

  return (
    <div className="min-h-screen bg-brand-cream flex flex-col font-sans">
      <Header 
        activeCategory={activeCategory} 
        onCategorySelect={setActiveCategory}
      />

      {/* Dynamic Hero Section */}
      <div className="relative h-[180px] md:h-[300px] w-full bg-brand-dark overflow-hidden transition-all duration-500 shadow-inner">
        <img 
          key={activeCategory === 'All' ? 'home' : 'cat'} 
          src={getHeroImage(activeCategory)} 
          alt="Atmosphere" 
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 bg-black/30 backdrop-blur-[2px]">
          <h2 className="text-3xl md:text-5xl font-serif text-brand-gold mb-1 drop-shadow-xl tracking-tight">
            {activeCategory === 'All' ? "Sir Jasper's" : activeCategory}
          </h2>
          <p className="text-white text-xs md:text-lg font-light tracking-[0.2em] uppercase max-w-2xl border-b border-brand-gold/50 pb-2 mb-2">
            {activeCategory === 'All' ? "Ristorante Pizzeria" : "Menu alla Carta"}
          </p>
        </div>
      </div>

      {/* Menu Grid */}
      <main className="flex-grow container mx-auto px-4 py-8 md:py-12 max-w-5xl">
        {activeCategory !== 'All' && (
          <div className="flex justify-between items-end mb-6 border-b-2 border-brand-gold/10 pb-2">
            <h2 className="text-xl md:text-2xl font-serif font-bold text-brand-dark">
              La Nostra Selezione
            </h2>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-x-8 md:gap-y-6">
          {filteredItems.map(item => (
            <DishCard key={item.id} item={item} />
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg">Nessun piatto disponibile in questa categoria.</p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-brand-dark text-white py-8 mt-8 border-t-2 border-brand-gold">
        <div className="container mx-auto px-4 text-center">
           <h3 className="font-serif text-xl text-brand-gold mb-1">Sir Jasper's</h3>
           <p className="text-[10px] uppercase tracking-widest text-gray-500 mb-4">Ristorante Pizzeria</p>
           <p className="text-gray-400 text-xs mb-2">Via Roma 123, Roma (RM) - Tel: +39 06 12345678</p>
           <p className="text-gray-600 text-[10px] uppercase">&copy; 2024 Sir Jasper's. Tutti i diritti riservati.</p>
        </div>
      </footer>
      
      <ChatAssistant />
    </div>
  );
};
