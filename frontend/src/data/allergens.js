// Allergeni comuni
export const allergens = {
  gluten: { it: 'Glutine', en: 'Gluten', fr: 'Gluten', es: 'Gluten', de: 'Gluten', zh: '麸质', icon: '🌾' },
  dairy: { it: 'Latticini', en: 'Dairy', fr: 'Produits laitiers', es: 'Lácteos', de: 'Milchprodukte', zh: '乳制品', icon: '🥛' },
  eggs: { it: 'Uova', en: 'Eggs', fr: 'Œufs', es: 'Huevos', de: 'Eier', zh: '鸡蛋', icon: '🥚' },
  fish: { it: 'Pesce', en: 'Fish', fr: 'Poisson', es: 'Pescado', de: 'Fisch', zh: '鱼', icon: '🐟' },
  shellfish: { it: 'Crostacei', en: 'Shellfish', fr: 'Crustacés', es: 'Mariscos', de: 'Schalentiere', zh: '贝类', icon: '🦐' },
  nuts: { it: 'Frutta a guscio', en: 'Nuts', fr: 'Fruits à coque', es: 'Frutos secos', de: 'Nüsse', zh: '坚果', icon: '🥜' },
  pork: { it: 'Carne di maiale', en: 'Pork', fr: 'Porc', es: 'Cerdo', de: 'Schweinefleisch', zh: '猪肉', icon: '🐷' },
  celery: { it: 'Sedano', en: 'Celery', fr: 'Céleri', es: 'Apio', de: 'Sellerie', zh: '芹菜', icon: '🥬' },
  mustard: { it: 'Senape', en: 'Mustard', fr: 'Moutarde', es: 'Mostaza', de: 'Senf', zh: '芥末', icon: '🌭' },
  sulphites: { it: 'Solfiti', en: 'Sulphites', fr: 'Sulfites', es: 'Sulfitos', de: 'Sulfite', zh: '亚硫酸盐', icon: '🍷' }
};

// Mappa immagini per categoria
export const categoryImages = {
  // Antipasti
  'cheese-board': 'https://images.unsplash.com/photo-1558679582-4d81ce75993a',
  'prosciutto': 'https://images.unsplash.com/photo-1536739782508-c2388552aad3',
  'bruschetta': 'https://images.unsplash.com/photo-1598309141235-06d295271f81',
  'caprese': 'https://images.unsplash.com/photo-1608897013039-887f21d8c804',
  'seafood-appetizer': 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8',
  'octopus': 'https://images.unsplash.com/photo-1652480191212-13ecee3ec66b',
  
  // Primi
  'carbonara': 'https://images.unsplash.com/photo-1546549032-9571cd6b27df',
  'amatriciana': 'https://images.unsplash.com/photo-1516100882582-96c3a05fe590',
  'pasta': 'https://images.unsplash.com/photo-1662197480393-2a82030b7b83',
  'gnocchi': 'https://images.pexels.com/photos/4518844/pexels-photo-4518844.jpeg',
  'seafood-pasta': 'https://images.unsplash.com/photo-1619290462943-e21b611bb772',
  'risotto': 'https://images.unsplash.com/photo-1476124369491-e7addf5db371',
  
  // Pizza
  'margherita': 'https://images.unsplash.com/photo-1604068549290-dea0e4a305ca',
  'pizza-classic': 'https://images.unsplash.com/photo-1598023696416-0193a0bcd302',
  'pizza-special': 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002',
  'pizza-gourmet': 'https://images.unsplash.com/photo-1564936281291-294551497d81',
  
  // Salads
  'salad': 'https://images.unsplash.com/photo-1546793665-c74683f339c1',
  
  // Drinks
  'cocktail': 'https://images.unsplash.com/photo-1672837371444-c8e5bb2f881f',
  'spritz': 'https://images.unsplash.com/photo-1627558009791-2280bfc9fe14',
  'wine': 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3',
  'beer': 'https://images.unsplash.com/photo-1608270586620-248524c67de9'
};

// Helper function to get image for dish
export const getImageForDish = (dishName, category) => {
  const name = dishName.toLowerCase();
  
  // Antipasti
  if (name.includes('formag')) return categoryImages['cheese-board'];
  if (name.includes('prosciutto')) return categoryImages['prosciutto'];
  if (name.includes('bruschett')) return categoryImages['bruschetta'];
  if (name.includes('caprese')) return categoryImages['caprese'];
  if (name.includes('tonno') || name.includes('tuna')) return categoryImages['seafood-appetizer'];
  if (name.includes('polpo') || name.includes('octopus')) return categoryImages['octopus'];
  if (name.includes('seppia') || name.includes('salmone')) return categoryImages['seafood-appetizer'];
  
  // Primi
  if (name.includes('carbonara')) return categoryImages['carbonara'];
  if (name.includes('amatric')) return categoryImages['amatriciana'];
  if (name.includes('gnocchi')) return categoryImages['gnocchi'];
  if (name.includes('risotto')) return categoryImages['risotto'];
  if (name.includes('astice') || name.includes('gambero')) return categoryImages['seafood-pasta'];
  if (category.includes('mare')) return categoryImages['seafood-pasta'];
  if (category.includes('terra')) return categoryImages['pasta'];
  
  // Pizza
  if (name.includes('margherita')) return categoryImages['margherita'];
  if (category.includes('pizze-classiche')) return categoryImages['pizza-classic'];
  if (category.includes('pizze-speciali') || category.includes('novita')) return categoryImages['pizza-special'];
  
  // Insalate
  if (category.includes('insalate')) return categoryImages['salad'];
  
  // Drinks
  if (name.includes('spritz')) return categoryImages['spritz'];
  if (name.includes('cocktail') || category.includes('cocktails')) return categoryImages['cocktail'];
  if (category.includes('vini')) return categoryImages['wine'];
  if (category.includes('birre')) return categoryImages['beer'];
  
  // Default images by category
  if (category.includes('antipasti')) return categoryImages['bruschetta'];
  if (category.includes('primi')) return categoryImages['pasta'];
  if (category.includes('pizza')) return categoryImages['pizza-classic'];
  if (category.includes('contorni')) return categoryImages['salad'];
  if (category.includes('bevande')) return categoryImages['cocktail'];
  
  return categoryImages['pasta']; // Default fallback
};
