import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from 'sonner';
import { Lock, Mail } from 'lucide-react';

const ADMIN_CREDENTIALS = {
  email: 'alelex91@gmail.com',
  password: 'Delpiero10'
};

export const AdminLogin = ({ setIsAdminAuthenticated }) => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (credentials.email === ADMIN_CREDENTIALS.email && 
        credentials.password === ADMIN_CREDENTIALS.password) {
      localStorage.setItem('adminAuthenticated', 'true');
      setIsAdminAuthenticated(true);
      toast.success('Accesso effettuato con successo!');
      navigate('/admin/dashboard');
    } else {
      toast.error('Credenziali non valide');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden bg-gradient-to-br from-background via-background to-muted">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-72 h-72 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
      </div>

      <div className="w-full max-w-md relative z-10 animate-fade-in">
        <div className="text-center mb-8">
          <div className="inline-block mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-[hsl(38_85%_45%)] to-[hsl(43_96%_56%)] rounded-full flex items-center justify-center shadow-gold">
              <Lock className="w-8 h-8 text-primary" />
            </div>
          </div>
          <h1 className="font-display text-3xl font-bold text-foreground mb-2">
            Area Amministratore
          </h1>
          <div className="divider-gold w-24 mx-auto"></div>
        </div>

        <Card className="card-elegant backdrop-blur-sm bg-card/80">
          <CardHeader className="text-center">
            <CardTitle className="font-display text-2xl text-foreground">Accedi</CardTitle>
            <CardDescription className="font-body text-muted-foreground">
              Inserisci le credenziali per accedere al pannello amministratore
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="email" className="font-body text-sm font-medium text-foreground flex items-center gap-2">
                  <Mail className="w-4 h-4 text-accent" />
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="admin@sirjaspers.com"
                  value={credentials.email}
                  onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
                  required
                  className="font-body border-border focus:border-accent focus:ring-accent/20"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="font-body text-sm font-medium text-foreground flex items-center gap-2">
                  <Lock className="w-4 h-4 text-accent" />
                  Password
                </Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="••••••••••"
                  value={credentials.password}
                  onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                  required
                  className="font-body border-border focus:border-accent focus:ring-accent/20"
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-[hsl(38_85%_45%)] via-[hsl(43_96%_56%)] to-[hsl(45_90%_70%)] text-primary font-body font-semibold text-base py-6 shadow-gold hover:shadow-[0_12px_40px_-8px_rgba(218,165,32,0.5)] hover:scale-[1.02] transition-all duration-300"
              >
                Accedi al Pannello
              </Button>
            </form>
          </CardContent>
        </Card>

        <Button
          variant="ghost"
          onClick={() => navigate('/')}
          className="w-full mt-4 font-body text-muted-foreground hover:text-accent"
        >
          ← Torna al Menu
        </Button>
      </div>
    </div>
  );
};

export default AdminLogin;