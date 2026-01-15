
export enum Category {
  ANTIPASTI_TERRA = 'Antipasti Terra',
  ANTIPASTI_MARE = 'Antipasti Mare',
  PRIMI_TERRA = 'Primi Terra',
  PRIMI_MARE = 'Primi Mare',
  SECONDI_TERRA = 'Secondi Terra',
  SECONDI_MARE = 'Secondi Mare',
  INSALATONE = 'Insalatone',
  CONTORNI = 'Contorni',
  PIZZE_CLASSICHE = 'Pizze Classiche',
  PIZZE_SPECIALI = 'Pizze Speciali',
  NOVITA = 'Le Novità',
  BIBITE = 'Bibite',
  VINI = 'Vini al Calice',
  BIRRE = 'Birre',
  COCKTAIL = 'Cocktail',
}

export interface MenuItem {
  id: string;
  name: string;
  description?: string;
  price: number;
  category: Category;
  // image property removed
  isVegetarian?: boolean;
  isGlutenFree?: boolean;
  isSpicy?: boolean;
  allergens?: string[];
}

export interface CartItem extends MenuItem {
  quantity: number;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  isTyping?: boolean;
}

export interface Customer {
  id: string;
  firstName: string;
  lastName: string;
  phone: string;
  date: string; // ISO string date
}
