import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Category } from '../types';

interface HeaderProps {
  activeCategory: Category | 'All';
  onCategorySelect: (category: Category | 'All') => void;
}

export const Header: React.FC<HeaderProps> = ({ activeCategory, onCategorySelect }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);

  const categories = ['All', ...Object.values(Category)];

  // URL del logo generato dall'AI (Fallback - Stile Vettoriale Iconico)
  // Utilizziamo un prompt specifico per ottenere un'icona pulita su sfondo nero
  const aiLogoUrl = "https://image.pollinations.ai/prompt/luxury%20golden%20vector%20icon%20logo%20of%20a%20knight%20helmet%20and%20fork%20minimalist%20flat%20design%20solid%20black%20background%20high%20resolution?width=400&height=400&nologo=true";

  // Percorso del tuo file locale
  const customLogoPath = "/logo.png";

  return (
    <header className="sticky top-0 z-50 bg-brand-dark text-white shadow-lg h-[80px] md:h-[100px] flex flex-col justify-center transition-all duration-300">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center h-full">
        {/* Logo Section */}
        <div className="flex items-center cursor-pointer shrink-0 h-full group" onClick={() => onCategorySelect('All')}>
          {!logoError ? (
            // LOGO UTENTE (Locale): Proviamo a caricare il file PNG completo
            // Se fallisce, onError attiverà il fallback
            <img 
              src={customLogoPath} 
              alt="Sir Jasper's Logo" 
              className="h-full max-h-[60px] md:max-h-[85px] w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              onError={() => setLogoError(true)}
            />
          ) : (
            // FALLBACK: Si attiva se logo.png non esiste o è rotto
            <div className="flex items-center gap-3 md:gap-4 animate-in fade-in duration-500">
               <div className="relative overflow-hidden">
                 {/* L'immagine AI usa mix-blend-screen per rendere trasparente lo sfondo nero */}
                 <img 
                   src={aiLogoUrl} 
                   alt="irk Jasper's Icon" 
                   className="w-12 h-12 md:w-16 md:h-16 object-contain mix-blend-screen filter drop-shadow-[0_0_8px_rgba(212,175,55,0.3)]"
                 />
              </div>
              <div className="flex flex-col justify-center">
                <h1 className="font-serif text-2xl md:text-4xl font-bold leading-none tracking-wide text-brand-gold drop-shadow-md">
                  Sir Jasper's
                </h1>
                <p className="text-[9px] md:text-[11px] text-gray-300 tracking-[0.3em] uppercase mt-1 font-light border-t border-brand-gold/30 pt-1">
                  Ristorante Pizzeria
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Desktop Navigation - Scrollable */}
        <nav className="hidden md:flex gap-6 items-center overflow-x-auto no-scrollbar ml-8 mask-linear-fade flex-1 justify-end h-full">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => onCategorySelect(cat as Category | 'All')}
              className={`text-sm uppercase tracking-wider whitespace-nowrap transition-all duration-300 py-2 border-b-2 ${
                activeCategory === cat ? 'text-brand-gold font-bold border-brand-gold translate-y-[-2px]' : 'text-gray-300 border-transparent hover:text-white hover:border-gray-700'
              }`}
            >
              {cat === 'All' ? 'Tutto' : cat}
            </button>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-4 md:hidden ml-4">
          <button 
            className="p-2 hover:bg-white/10 rounded-full transition-colors active:scale-95"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-7 h-7 text-brand-gold" /> : <Menu className="w-7 h-7 text-brand-gold" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      <div className={`md:hidden bg-brand-dark/95 backdrop-blur-md border-t border-gray-800 transition-all duration-300 ease-in-out absolute top-full left-0 w-full shadow-2xl overflow-hidden ${isMenuOpen ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="flex flex-col p-4 gap-2 overflow-y-auto max-h-[70vh]">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                onCategorySelect(cat as Category | 'All');
                setIsMenuOpen(false);
              }}
              className={`text-left py-4 px-4 rounded-lg transition-all border-l-4 ${
                activeCategory === cat 
                  ? 'bg-gradient-to-r from-brand-gold/20 to-transparent text-brand-gold font-bold border-brand-gold' 
                  : 'border-transparent text-gray-300 hover:bg-white/5'
              }`}
            >
              {cat === 'All' ? 'Tutto Il Menu' : cat}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
};