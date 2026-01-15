import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Customer } from '../types';
import { User, Phone, CheckCircle, Lock } from 'lucide-react';

export const LandingPage: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: ''
  });
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.firstName || !formData.lastName || !formData.phone) {
      setError('Per favore compila tutti i campi');
      return;
    }

    // Save to local storage (simulating database)
    const newCustomer: Customer = {
      id: Date.now().toString(),
      firstName: formData.firstName,
      lastName: formData.lastName,
      phone: formData.phone,
      date: new Date().toISOString()
    };

    const existingCustomers = JSON.parse(localStorage.getItem('sir_jaspers_customers') || '[]');
    localStorage.setItem('sir_jaspers_customers', JSON.stringify([...existingCustomers, newCustomer]));

    // Redirect to menu
    navigate('/menu');
  };

  return (
    <div className="min-h-screen bg-brand-dark flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://image.pollinations.ai/prompt/luxury%20dark%20italian%20restaurant%20entrance%20gold%20details%20cinematic%20lighting?width=1080&height=1920&nologo=true" 
          alt="Background" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/80 to-transparent"></div>
      </div>

      <div className="z-10 w-full max-w-md px-6 flex flex-col min-h-screen justify-center py-10">
        <div className="flex-1 flex flex-col justify-center">
            <div className="text-center mb-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="inline-block mb-4 p-4 rounded-full border-2 border-brand-gold/30 bg-black/40 backdrop-blur-sm">
                {/* Logo Fallback/Icon */}
                <span className="text-4xl">🏰</span>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl text-brand-gold font-bold mb-2">Sir Jasper's</h1>
            <p className="text-gray-400 uppercase tracking-[0.3em] text-xs">Ristorante Pizzeria</p>
            </div>

            <div className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 shadow-2xl animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
            <h2 className="text-white font-serif text-xl mb-6 text-center">Benvenuto</h2>
            <p className="text-gray-400 text-sm text-center mb-8">Inserisci i tuoi dati per accedere al menu digitale</p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                <User className="absolute left-3 top-3.5 text-brand-gold w-5 h-5" />
                <input
                    type="text"
                    placeholder="Nome"
                    className="w-full bg-black/40 border border-gray-700 rounded-lg py-3 pl-10 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all"
                    value={formData.firstName}
                    onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                />
                </div>
                
                <div className="relative">
                <User className="absolute left-3 top-3.5 text-brand-gold w-5 h-5" />
                <input
                    type="text"
                    placeholder="Cognome"
                    className="w-full bg-black/40 border border-gray-700 rounded-lg py-3 pl-10 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all"
                    value={formData.lastName}
                    onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                />
                </div>

                <div className="relative">
                <Phone className="absolute left-3 top-3.5 text-brand-gold w-5 h-5" />
                <input
                    type="tel"
                    placeholder="Numero di Telefono"
                    className="w-full bg-black/40 border border-gray-700 rounded-lg py-3 pl-10 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
                </div>

                {error && <p className="text-red-400 text-xs text-center">{error}</p>}

                <button 
                type="submit" 
                className="w-full bg-brand-gold text-brand-dark font-bold py-3.5 rounded-lg hover:bg-white hover:text-brand-dark transition-colors duration-300 mt-4 flex items-center justify-center gap-2 shadow-lg shadow-brand-gold/10"
                >
                <span>Accedi al Menu</span>
                <CheckCircle className="w-5 h-5" />
                </button>
            </form>
            </div>
        </div>
        
        <div className="mt-8 text-center pb-4 animate-in fade-in duration-1000 delay-500">
            <button 
                onClick={() => navigate('/admin')} 
                className="group flex items-center justify-center gap-2 mx-auto px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/5 hover:border-brand-gold/30 transition-all duration-300"
            >
                <Lock className="w-3 h-3 text-gray-500 group-hover:text-brand-gold transition-colors" />
                <span className="text-xs font-medium text-gray-500 group-hover:text-brand-gold tracking-wide uppercase">Area Riservata Staff</span>
            </button>
        </div>
      </div>
    </div>
  );
};