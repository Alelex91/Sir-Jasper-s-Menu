import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock } from 'lucide-react';

export const AdminLogin: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Credenziali Hardcoded come richiesto
    if (email === 'alelex91@gmail.com' && password === 'Delpiero10') {
      // Imposta un flag di sessione semplice
      sessionStorage.setItem('isAdminAuthenticated', 'true');
      navigate('/admin-dashboard');
    } else {
      setError('Credenziali non valide');
    }
  };

  return (
    <div className="min-h-screen bg-brand-dark flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="bg-brand-gold p-6 text-center">
          <Lock className="w-12 h-12 text-brand-dark mx-auto mb-2" />
          <h2 className="text-2xl font-serif font-bold text-brand-dark">Area Admin</h2>
        </div>
        
        <form onSubmit={handleLogin} className="p-8 space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-gold"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              type="password"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-gold"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {error && <p className="text-red-500 text-sm text-center">{error}</p>}

          <button
            type="submit"
            className="w-full bg-brand-dark text-brand-gold font-bold py-3 rounded-md hover:bg-black transition-colors"
          >
            Accedi
          </button>
        </form>
      </div>
      <button onClick={() => navigate('/')} className="mt-8 text-gray-500 text-sm hover:text-white">
        ← Torna alla Home
      </button>
    </div>
  );
};
