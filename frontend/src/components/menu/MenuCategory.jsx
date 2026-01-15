import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { translations } from '@/data/translations';
import { dishImages, dishAllergens, allergenLabels } from '@/data/dishMapping';

export const MenuCategory = ({ categoryId, language, menuData }) => {
  const categoryData = menuData[categoryId];

  if (!categoryData) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground font-body">Categoria non trovata</p>
      </div>
    );
  }

  const getCategoryTitle = () => {
    const titleMap = {
      'antipasti-terra': 'antipastiTerra',
      'antipasti-mare': 'antipastiMare',
      'primi-terra': 'primiTerra',
      'primi-mare': 'primiMare',
      'pizze-classiche': 'pizzeClassiche',
      'pizze-speciali': 'pizzeSpeciali',
      'novita': 'novita',
      'insalate': 'insalate',
      'contorni': 'contorni',
      'bevande': 'bevande',
      'vini': 'vini',
      'birre': 'birre',
      'cocktails': 'cocktails'
    };
    return translations[language][titleMap[categoryId]] || categoryId;
  };

  const getImageForDish = (dishName) => {
    return dishImages[dishName] || dishImages['Margherita'];
  };

  const getAllergensForDish = (dishName) => {
    return dishAllergens[dishName] || [];
  };

  return (
    <div className="animate-fade-in">
      {/* Category Header */}
      <div className="mb-8">
        <h2 className="font-display text-4xl font-bold text-foreground mb-3">
          {getCategoryTitle()}
        </h2>
        <div className="divider-gold w-24"></div>
      </div>

      {/* Menu Items Grid */}
      <div className="grid grid-cols-1 gap-4">
        {categoryData.map((item, index) => {
          const dishName = item.name.it;
          const imageUrl = getImageForDish(dishName);
          const allergens = getAllergensForDish(dishName);
          
          return (
            <Card 
              key={index} 
              className="card-elegant backdrop-blur-sm bg-card/80 hover:scale-[1.01] transition-transform duration-300 overflow-hidden"
            >
              <div className="flex flex-col md:flex-row">
                {/* Dish Image */}
                <div className="md:w-48 md:h-48 h-40 flex-shrink-0 overflow-hidden">
                  <img 
                    src={imageUrl} 
                    alt={dishName}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <CardTitle className="font-display text-xl text-foreground mb-1">
                          {item.name[language] || item.name.it}
                        </CardTitle>
                        {item.description && (
                          <CardDescription className="font-body text-sm text-muted-foreground mt-2 leading-relaxed">
                            {item.description[language] || item.description.it}
                          </CardDescription>
                        )}
                        
                        {/* Allergens */}
                        {allergens.length > 0 && (
                          <div className="flex flex-wrap gap-1 mt-3">
                            {allergens.map((allergen, idx) => (
                              <span
                                key={idx}
                                className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-muted/50 text-muted-foreground border border-border/50"
                                title={allergenLabels[allergen][language]}
                              >
                                <span>{allergenLabels[allergen].icon}</span>
                                <span>{allergenLabels[allergen][language]}</span>
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <Badge className="bg-gradient-to-r from-[hsl(38_85%_45%)] to-[hsl(43_96%_56%)] text-primary font-body font-semibold text-base px-3 py-1 shadow-gold border-0 whitespace-nowrap">
                          €{item.price}
                        </Badge>
                        {item.size && (
                          <span className="text-xs text-muted-foreground font-body">{item.size}</span>
                        )}
                      </div>
                    </div>
                  </CardHeader>
                  {item.extras && item.extras.length > 0 && (
                    <CardContent className="pt-0">
                      <div className="border-t border-border/50 pt-3 space-y-1">
                        {item.extras.map((extra, idx) => (
                          <div key={idx} className="flex items-center justify-between text-sm">
                            <span className="text-muted-foreground font-body">
                              {extra.name[language] || extra.name.it}
                            </span>
                            <span className="text-accent font-body font-medium">+€{extra.price}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  )}
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default MenuCategory;