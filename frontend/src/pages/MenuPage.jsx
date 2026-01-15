import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Menu, X, Globe, LogOut } from 'lucide-react';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';
import MenuHeader from '@/components/menu/MenuHeader';
import MenuCategory from '@/components/menu/MenuCategory';
import LanguageSelector from '@/components/menu/LanguageSelector';
import { menuData } from '@/data/menuData';
import { translations } from '@/data/translations';

export const MenuPage = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('antipasti-terra');
  const [language, setLanguage] = useState('it');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    setCurrentUser(user);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('userAuthenticated');
    localStorage.removeItem('currentUser');
    toast.success(translations[language].logoutSuccess || 'Arrivederci!');
    navigate('/');
  };

  const categories = [
    { id: 'antipasti-terra', label: 'antipastiTerra' },
    { id: 'antipasti-mare', label: 'antipastiMare' },
    { id: 'primi-terra', label: 'primiTerra' },
    { id: 'primi-mare', label: 'primiMare' },
    { id: 'pizze-classiche', label: 'pizzeClassiche' },
    { id: 'pizze-speciali', label: 'pizzeSpeciali' },
    { id: 'novita', label: 'novita' },
    { id: 'insalate', label: 'insalate' },
    { id: 'contorni', label: 'contorni' },
    { id: 'bevande', label: 'bevande' },
    { id: 'vini', label: 'vini' },
    { id: 'birre', label: 'birre' },
    { id: 'cocktails', label: 'cocktails' }
  ];

  const CategoryButton = ({ category }) => (
    <button
      onClick={() => {
        setSelectedCategory(category.id);
        setIsMobileMenuOpen(false);
      }}
      className={`w-full text-left px-4 py-3 rounded-lg font-body text-sm transition-all duration-300 ${
        selectedCategory === category.id
          ? 'bg-gradient-to-r from-[hsl(38_85%_45%)] to-[hsl(43_96%_56%)] text-primary font-semibold shadow-gold'
          : 'text-foreground hover:bg-muted hover:text-accent'
      }`}
    >
      {translations[language][category.label] || category.label}
    </button>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      {/* Header */}
      <MenuHeader 
        currentUser={currentUser} 
        language={language}
        onLogout={handleLogout}
      />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-6 max-w-7xl">
        <div className="flex gap-6">
          {/* Desktop Sidebar */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-24 space-y-3">
              <div className="card-elegant p-4 backdrop-blur-sm bg-card/80">
                <h3 className="font-display text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Menu className="w-5 h-5 text-accent" />
                  {translations[language].categories || 'Categorie'}
                </h3>
                <ScrollArea className="h-[calc(100vh-200px)] pr-4 scrollbar-elegant">
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <CategoryButton key={category.id} category={category} />
                    ))}
                  </div>
                </ScrollArea>
              </div>

              {/* Language Selector */}
              <LanguageSelector language={language} setLanguage={setLanguage} />
            </div>
          </aside>

          {/* Menu Content */}
          <main className="flex-1">
            <MenuCategory 
              categoryId={selectedCategory}
              language={language}
              menuData={menuData}
            />
          </main>
        </div>
      </div>

      {/* Mobile Bottom Navigation */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-card border-t border-border shadow-elegant z-50">
        <div className="flex items-center justify-around p-3">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm" className="flex flex-col items-center gap-1 h-auto py-2">
                <Menu className="w-5 h-5 text-accent" />
                <span className="text-xs font-body">{translations[language].menu || 'Menu'}</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-72 bg-card/95 backdrop-blur-md">
              <SheetHeader>
                <SheetTitle className="font-display text-xl text-foreground">
                  {translations[language].categories || 'Categorie'}
                </SheetTitle>
              </SheetHeader>
              <ScrollArea className="h-[calc(100vh-120px)] mt-6 pr-4 scrollbar-elegant">
                <div className="space-y-2">
                  {categories.map((category) => (
                    <CategoryButton key={category.id} category={category} />
                  ))}
                </div>
              </ScrollArea>
            </SheetContent>
          </Sheet>

          <LanguageSelector language={language} setLanguage={setLanguage} isMobile />

          <Button 
            variant="ghost" 
            size="sm" 
            onClick={handleLogout}
            className="flex flex-col items-center gap-1 h-auto py-2"
          >
            <LogOut className="w-5 h-5 text-destructive" />
            <span className="text-xs font-body">{translations[language].logout || 'Esci'}</span>
          </Button>
        </div>
      </div>

      {/* Mobile Spacer */}
      <div className="lg:hidden h-20"></div>
    </div>
  );
};

export default MenuPage;