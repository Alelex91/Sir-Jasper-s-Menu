import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import '@/App.css';
import { Toaster } from '@/components/ui/sonner';
import WelcomePage from '@/pages/WelcomePage';
import MenuPage from '@/pages/MenuPage';
import AdminLogin from '@/pages/AdminLogin';
import AdminDashboard from '@/pages/AdminDashboard';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);

  useEffect(() => {
    // Check if user is authenticated
    const userAuth = localStorage.getItem('userAuthenticated');
    const adminAuth = localStorage.getItem('adminAuthenticated');
    
    if (userAuth === 'true') {
      setIsAuthenticated(true);
    }
    
    if (adminAuth === 'true') {
      setIsAdminAuthenticated(true);
    }
  }, []);

  return (
    <div className="App min-h-screen bg-background">
      <BrowserRouter>
        <Routes>
          <Route 
            path="/" 
            element={
              isAuthenticated ? 
                <Navigate to="/menu" replace /> : 
                <WelcomePage setIsAuthenticated={setIsAuthenticated} />
            } 
          />
          <Route 
            path="/menu" 
            element={
              isAuthenticated ? 
                <MenuPage /> : 
                <Navigate to="/" replace />
            } 
          />
          <Route 
            path="/admin" 
            element={
              isAdminAuthenticated ? 
                <Navigate to="/admin/dashboard" replace /> : 
                <AdminLogin setIsAdminAuthenticated={setIsAdminAuthenticated} />
            } 
          />
          <Route 
            path="/admin/dashboard" 
            element={
              isAdminAuthenticated ? 
                <AdminDashboard setIsAdminAuthenticated={setIsAdminAuthenticated} /> : 
                <Navigate to="/admin" replace />
            } 
          />
        </Routes>
      </BrowserRouter>
      <Toaster position="top-center" />
    </div>
  );
}

export default App;