import { LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const MenuHeader = ({ currentUser, language, onLogout }) => {
  return (
    <header className="bg-card border-b border-border sticky top-0 z-50 backdrop-blur-md bg-card/90 shadow-soft">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo & Title */}
          <div className="flex items-center gap-4">
            <img 
              src="https://customer-assets.emergentagent.com/job_ab238b6c-034b-4ee8-ac68-d0eb5bebfe31/artifacts/oij2k9vq_Immagine%20WhatsApp%202025-08-07%20ore%2022.18.14_2d73ac49.jpg" 
              alt="Sir Jasper's Logo" 
              className="h-14 w-auto drop-shadow-[0_0_15px_rgba(218,165,32,0.2)]" 
            />
            <div>
              <h1 className="font-display text-2xl font-bold text-foreground">Sir Jasper's</h1>
              <p className="text-xs text-muted-foreground font-elegant italic">Ristorante Pizzeria</p>
            </div>
          </div>

          {/* User Info & Logout */}
          <div className="hidden md:flex items-center gap-4">
            {currentUser && (
              <div className="text-right">
                <p className="font-body text-sm font-medium text-foreground">
                  {currentUser.firstName} {currentUser.lastName}
                </p>
                <p className="text-xs text-muted-foreground font-body">{currentUser.phone}</p>
              </div>
            )}
            <Button 
              onClick={onLogout}
              variant="outline"
              size="sm"
              className="border-border hover:bg-destructive hover:text-destructive-foreground hover:border-destructive font-body"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Esci
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MenuHeader;