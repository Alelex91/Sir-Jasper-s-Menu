import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Customer } from '../types';
import { LogOut, Database, Users } from 'lucide-react';

export const AdminDashboard: React.FC = () => {
  const navigate = useNavigate();
  const [customers, setCustomers] = useState<Customer[]>([]);

  useEffect(() => {
    // Check auth
    const isAuth = sessionStorage.getItem('isAdminAuthenticated');
    if (!isAuth) {
      navigate('/admin');
      return;
    }

    // Load data
    const data = localStorage.getItem('sir_jaspers_customers');
    if (data) {
      setCustomers(JSON.parse(data).reverse()); // Most recent first
    }
  }, [navigate]);

  const handleLogout = () => {
    sessionStorage.removeItem('isAdminAuthenticated');
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <nav className="bg-brand-dark text-white shadow-md">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Database className="text-brand-gold" />
            <h1 className="text-xl font-bold font-serif">Sir Jasper's DB</h1>
          </div>
          <button 
            onClick={handleLogout}
            className="flex items-center gap-2 text-sm text-gray-300 hover:text-white hover:bg-white/10 px-3 py-2 rounded-md transition-colors"
          >
            <LogOut size={16} />
            Logout
          </button>
        </div>
      </nav>

      <main className="container mx-auto px-6 py-8">
        <div className="flex items-center gap-3 mb-6">
            <Users className="text-brand-dark w-8 h-8" />
            <h2 className="text-2xl font-bold text-gray-800">Lista Clienti</h2>
            <span className="bg-brand-gold/20 text-brand-dark text-xs font-bold px-2 py-1 rounded-full">
                {customers.length} Totali
            </span>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 text-gray-600 text-xs uppercase tracking-wider border-b border-gray-200">
                  <th className="p-4 font-semibold">Data Accesso</th>
                  <th className="p-4 font-semibold">Nome</th>
                  <th className="p-4 font-semibold">Cognome</th>
                  <th className="p-4 font-semibold">Telefono</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {customers.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="p-8 text-center text-gray-500">
                      Nessun cliente registrato al momento.
                    </td>
                  </tr>
                ) : (
                  customers.map((customer) => (
                    <tr key={customer.id} className="hover:bg-gray-50 transition-colors">
                      <td className="p-4 text-sm text-gray-500">
                        {new Date(customer.date).toLocaleString('it-IT')}
                      </td>
                      <td className="p-4 font-medium text-gray-800">{customer.firstName}</td>
                      <td className="p-4 font-medium text-gray-800">{customer.lastName}</td>
                      <td className="p-4 text-brand-gold font-bold font-mono">{customer.phone}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="mt-8 text-center text-xs text-gray-400">
            <p>Nota: Questo database risiede nella memoria locale del browser.</p>
        </div>
      </main>
    </div>
  );
};
