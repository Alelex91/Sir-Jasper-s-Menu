import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Globe } from 'lucide-react';

const languages = [
  { code: 'it', name: 'Italiano', flag: '🇮🇹' },
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'zh', name: '中文', flag: '🇨🇳' }
];

export const LanguageSelector = ({ language, setLanguage, isMobile }) => {
  if (isMobile) {
    return (
      <Button 
        variant="ghost" 
        size="sm" 
        onClick={() => {
          const currentIndex = languages.findIndex(l => l.code === language);
          const nextIndex = (currentIndex + 1) % languages.length;
          setLanguage(languages[nextIndex].code);
        }}
        className="flex flex-col items-center gap-1 h-auto py-2"
      >
        <Globe className="w-5 h-5 text-accent" />
        <span className="text-xs font-body">
          {languages.find(l => l.code === language)?.flag}
        </span>
      </Button>
    );
  }

  return (
    <div className="card-elegant p-4 backdrop-blur-sm bg-card/80">
      <div className="flex items-center gap-2 mb-3">
        <Globe className="w-4 h-4 text-accent" />
        <h3 className="font-body text-sm font-semibold text-foreground">Lingua / Language</h3>
      </div>
      <Select value={language} onValueChange={setLanguage}>
        <SelectTrigger className="w-full font-body border-border focus:border-accent focus:ring-accent/20">
          <SelectValue />
        </SelectTrigger>
        <SelectContent className="bg-card/95 backdrop-blur-md border-border">
          {languages.map((lang) => (
            <SelectItem 
              key={lang.code} 
              value={lang.code}
              className="font-body cursor-pointer hover:bg-muted focus:bg-muted"
            >
              <span className="flex items-center gap-2">
                <span>{lang.flag}</span>
                <span>{lang.name}</span>
              </span>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default LanguageSelector;