import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from 'sonner';

export const WelcomePage = ({ setIsAuthenticated }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validation
    if (!formData.firstName || !formData.lastName || !formData.phone) {
      toast.error('Per favore, compila tutti i campi');
      return;
    }

    // Save customer data to localStorage
    const customers = JSON.parse(localStorage.getItem('customers') || '[]');
    const newCustomer = {
      id: Date.now(),
      ...formData,
      timestamp: new Date().toISOString()
    };
    
    customers.push(newCustomer);
    localStorage.setItem('customers', JSON.stringify(customers));
    localStorage.setItem('userAuthenticated', 'true');
    localStorage.setItem('currentUser', JSON.stringify(newCustomer));
    
    setIsAuthenticated(true);
    toast.success(`Benvenuto/a ${formData.firstName}!`);
    navigate('/menu');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden bg-gradient-to-br from-background via-background to-muted">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-72 h-72 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
      </div>

      <div className="w-full max-w-md relative z-10 animate-fade-in">
        {/* Logo Section */}
        <div className="text-center mb-8">
          <div className="inline-block mb-6">
            <img 
              src="https://customer-assets.emergentagent.com/job_ab238b6c-034b-4ee8-ac68-d0eb5bebfe31/artifacts/oij2k9vq_Immagine%20WhatsApp%202025-08-07%20ore%2022.18.14_2d73ac49.jpg" 
              alt="Sir Jasper's Logo" 
              className="h-32 w-auto mx-auto drop-shadow-[0_0_25px_rgba(218,165,32,0.3)]"
            />
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-2">
            Sir Jasper's
          </h1>
          <div className="divider-gold w-32 mx-auto mb-3"></div>
          <p className="font-elegant text-lg text-muted-foreground italic">
            Ristorante Pizzeria
          </p>
        </div>

        {/* Welcome Card */}
        <Card className="card-elegant backdrop-blur-sm bg-card/80">
          <CardHeader className="text-center space-y-2">
            <CardTitle className="font-display text-2xl text-foreground">
              Benvenuto
            </CardTitle>
            <CardDescription className="font-body text-muted-foreground">
              Inserisci i tuoi dati per accedere al nostro menu digitale
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="firstName" className="font-body text-sm font-medium text-foreground">
                  Nome *
                </Label>
                <Input
                  id="firstName"
                  name="firstName"
                  type="text"
                  placeholder="Mario"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="font-body border-border focus:border-accent focus:ring-accent/20"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="lastName" className="font-body text-sm font-medium text-foreground">
                  Cognome *
                </Label>
                <Input
                  id="lastName"
                  name="lastName"
                  type="text"
                  placeholder="Rossi"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="font-body border-border focus:border-accent focus:ring-accent/20"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="font-body text-sm font-medium text-foreground">
                  Numero di Telefono *
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+39 123 456 7890"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="font-body border-border focus:border-accent focus:ring-accent/20"
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-[hsl(38_85%_45%)] via-[hsl(43_96%_56%)] to-[hsl(45_90%_70%)] text-primary font-body font-semibold text-base py-6 shadow-gold hover:shadow-[0_12px_40px_-8px_rgba(218,165,32,0.5)] hover:scale-[1.02] transition-all duration-300"
              >
                Accedi al Menu
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Footer Note */}
        <p className="text-center mt-6 text-xs text-muted-foreground font-body">
          I tuoi dati sono utilizzati solo per migliorare la tua esperienza
        </p>
        
        {/* Admin Access Link */}
        <div className="text-center mt-4">
          <button
            onClick={() => navigate('/admin')}
            className="text-xs text-muted-foreground hover:text-accent transition-colors font-body inline-flex items-center gap-2"
          >
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            Area Amministratore
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;