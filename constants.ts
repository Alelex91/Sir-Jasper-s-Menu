import { Category, MenuItem } from './types';

export const MENU_ITEMS: MenuItem[] = [
  // --- ANTIPASTI TERRA ---
  {
    id: 'at1',
    name: 'Tagliere di Formaggi Selezionati e Confetture',
    price: 13,
    category: Category.ANTIPASTI_TERRA,
    isVegetarian: true,
    allergens: ['Latte']
  },
  {
    id: 'at2',
    name: 'Prosciutto di Parma e Melone',
    price: 10,
    category: Category.ANTIPASTI_TERRA,
    isGlutenFree: true,
    allergens: []
  },
  {
    id: 'at3',
    name: "Tagliere Sir Jasper's",
    price: 28,
    category: Category.ANTIPASTI_TERRA,
    allergens: ['Latte', 'Glutine', 'Solfiti']
  },
  {
    id: 'at4',
    name: 'Antipasto Casa',
    price: 14,
    category: Category.ANTIPASTI_TERRA,
    allergens: ['Latte', 'Glutine']
  },
  {
    id: 'at5',
    name: 'Bruschette al Pomodoro',
    price: 3,
    category: Category.ANTIPASTI_TERRA,
    isVegetarian: true,
    allergens: ['Glutine']
  },
  {
    id: 'at6',
    name: 'Bruschette Sfiziose dello Chef',
    price: 5,
    category: Category.ANTIPASTI_TERRA,
    allergens: ['Glutine', 'Latte']
  },
  {
    id: 'at7',
    name: 'Caprese di Bufala e Pomodoro',
    price: 10,
    category: Category.ANTIPASTI_TERRA,
    isVegetarian: true,
    isGlutenFree: true,
    allergens: ['Latte']
  },

  // --- ANTIPASTI MARE ---
  {
    id: 'am1',
    name: 'Tartare di Tonno Rosso Burrata e Pistacchio',
    price: 13,
    category: Category.ANTIPASTI_MARE,
    allergens: ['Pesce', 'Latte', 'Frutta a guscio']
  },
  {
    id: 'am2',
    name: 'Insalatina di Seppia con Noci e Agrumi',
    price: 12,
    category: Category.ANTIPASTI_MARE,
    allergens: ['Molluschi', 'Frutta a guscio']
  },
  {
    id: 'am3',
    name: 'Rosa di Salmone Marinato al Sale Bilanciato',
    price: 12,
    category: Category.ANTIPASTI_MARE,
    allergens: ['Pesce']
  },
  {
    id: 'am4',
    name: 'Soutè di Cozze con Crostini di Pane',
    price: 10,
    category: Category.ANTIPASTI_MARE,
    allergens: ['Molluschi', 'Glutine']
  },
  {
    id: 'am5',
    name: 'Tentacolo di Polpo Arrosticciato su Crema Zucca e Amaretti',
    price: 14,
    category: Category.ANTIPASTI_MARE,
    allergens: ['Molluschi', 'Uova', 'Frutta a guscio']
  },
  {
    id: 'am6',
    name: 'Percorso Mare (5 Portate)',
    price: 38,
    category: Category.ANTIPASTI_MARE,
    allergens: ['Pesce', 'Crostacei', 'Molluschi', 'Glutine', 'Latte']
  },

  // --- PRIMI TERRA ---
  {
    id: 'pt1',
    name: 'Tonnarello alla Carbonara',
    description: 'Con aggiunta di tartufo nero (+5€)',
    price: 10,
    category: Category.PRIMI_TERRA,
    allergens: ['Glutine', 'Uova', 'Latte']
  },
  {
    id: 'pt2',
    name: 'Maccheroni al Torchio Amatriciana CBT',
    description: 'Con salsa amatriciana cotta a bassa temperatura, burrata e cipolla croccante.',
    price: 12,
    category: Category.PRIMI_TERRA,
    allergens: ['Glutine', 'Latte']
  },
  {
    id: 'pt3',
    name: 'Paccheri 3 Cotture Ripieni di Genovese',
    description: 'Su vellutata di pecorino e pomodoro confit.',
    price: 14,
    category: Category.PRIMI_TERRA,
    allergens: ['Glutine', 'Latte', 'Sedano', 'Solfiti']
  },
  {
    id: 'pt4',
    name: 'Gnocchi Fatti in Casa Ripieni di Anatra',
    description: 'Con il suo fondo.',
    price: 12,
    category: Category.PRIMI_TERRA,
    allergens: ['Glutine', 'Uova', 'Sedano']
  },
  {
    id: 'pt5',
    name: 'Capellacci con Friarielli e Salsiccia',
    description: 'Su fonduta di Grana Padano e tarallo napoletano.',
    price: 12,
    category: Category.PRIMI_TERRA,
    allergens: ['Glutine', 'Latte']
  },

  // --- PRIMI MARE ---
  {
    id: 'pm1',
    name: 'Risotto alla Pescatora Secondo lo Chef',
    description: '30 minuti di cottura.',
    price: 22,
    category: Category.PRIMI_MARE,
    allergens: ['Crostacei', 'Molluschi', 'Pesce', 'Solfiti']
  },
  {
    id: 'pm2',
    name: 'Maccheroni con Crema di Zucca e Gambero Rosso',
    description: 'Con bisque di gambero rosso e tartare di gambero rosso.',
    price: 18,
    category: Category.PRIMI_MARE,
    allergens: ['Glutine', 'Crostacei']
  },
  {
    id: 'pm3',
    name: "Tonnarelli all'Astice",
    price: 19,
    category: Category.PRIMI_MARE,
    allergens: ['Glutine', 'Crostacei', 'Uova']
  },
  {
    id: 'pm4',
    name: 'Tonnarelli alla Carbonara di Tonno Rosso',
    price: 16,
    category: Category.PRIMI_MARE,
    allergens: ['Glutine', 'Uova', 'Pesce', 'Latte']
  },
  {
    id: 'pm5',
    name: 'Ravioloni con Baccalà e Olive Nere',
    description: 'Con pomodorino fresco semi dry.',
    price: 16,
    category: Category.PRIMI_MARE,
    allergens: ['Glutine', 'Uova', 'Pesce']
  },

  // --- SECONDI TERRA ---
  {
    id: 'st1',
    name: 'Tagliata di Black Angus (300gr)',
    description: 'Con rucola e pachino.',
    price: 20,
    category: Category.SECONDI_TERRA,
    allergens: []
  },
  {
    id: 'st2',
    name: 'Filetto di Agnello Affumicato in CBT',
    description: 'Su patate alla diavola.',
    price: 18,
    category: Category.SECONDI_TERRA,
    allergens: []
  },
  {
    id: 'st3',
    name: 'Hamburger di Manzo (300gr)',
    description: 'Con contorno di patate dippers.',
    price: 14,
    category: Category.SECONDI_TERRA,
    allergens: []
  },
  {
    id: 'st4',
    name: 'Filetto di Manzo (200gr) ai Porcini',
    description: 'Su crema di porcini in doppia consistenza.',
    price: 29,
    category: Category.SECONDI_TERRA,
    allergens: ['Latte']
  },
  {
    id: 'st5',
    name: "Petto d'Anatra Cotto in CBT",
    description: 'Su cipolle rosse di Tropea caramellate.',
    price: 18,
    category: Category.SECONDI_TERRA,
    allergens: []
  },

  // --- SECONDI MARE ---
  {
    id: 'sm1',
    name: "Filetto di Ombrina all'Acqua Pazza",
    description: 'In vasocottura.',
    price: 16,
    category: Category.SECONDI_MARE,
    allergens: ['Pesce']
  },
  {
    id: 'sm2',
    name: 'Tagliata di Tonno Rosso Panato al Sesamo',
    description: 'Con cipolla di Tropea caramellata.',
    price: 18,
    category: Category.SECONDI_MARE,
    allergens: ['Pesce', 'Semi di sesamo', 'Glutine']
  },
  {
    id: 'sm3',
    name: 'Pesce Spada alla Siciliana',
    price: 16,
    category: Category.SECONDI_MARE,
    allergens: ['Pesce']
  },
  {
    id: 'sm4',
    name: 'Frittura di Calamari e Gamberi',
    price: 16,
    category: Category.SECONDI_MARE,
    allergens: ['Molluschi', 'Crostacei', 'Glutine']
  },
  {
    id: 'sm5',
    name: 'Baccalà al Vapore',
    description: 'Su crema di cavolo romano e polvere di olive nere.',
    price: 13,
    category: Category.SECONDI_MARE,
    allergens: ['Pesce']
  },

  // --- INSALATONE ---
  {
    id: 'ins1',
    name: 'Tricolore',
    description: 'Iceberg, Rucola, Pomodoro, Mozzarella di Bufala.',
    price: 9,
    category: Category.INSALATONE,
    isVegetarian: true,
    allergens: ['Latte']
  },
  {
    id: 'ins2',
    name: 'Principessa',
    description: 'Iceberg, Rucola, Pomodoro, Petto di Pollo.',
    price: 10,
    category: Category.INSALATONE,
    allergens: []
  },

  // --- CONTORNI ---
  { id: 'c1', name: 'Patatine Dippers', price: 4, category: Category.CONTORNI, allergens: [] },
  { id: 'c2', name: 'Patate al Forno', price: 4, category: Category.CONTORNI, allergens: [] },
  { id: 'c3', name: 'Patatine Fritte', price: 4, category: Category.CONTORNI, allergens: [] },
  { id: 'c4', name: 'Insalata Mista', price: 4, category: Category.CONTORNI, isVegetarian: true, allergens: [] },
  { id: 'c5', name: 'Bieta Olive / Acciughe', price: 4, category: Category.CONTORNI, isVegetarian: true, allergens: ['Pesce'] },
  { id: 'c6', name: "Misto dell'Orto", price: 4, category: Category.CONTORNI, isVegetarian: true, allergens: [] },

  // --- PIZZE CLASSICHE ---
  // Base allergens for all pizzas: Glutine, Latte (mostly)
  {
    id: 'pc1', name: 'Margherita', description: 'Salsa di Pomodoro, Fior Di Latte, Basilico', price: 6, category: Category.PIZZE_CLASSICHE, isVegetarian: true, allergens: ['Glutine', 'Latte']
  },
  {
    id: 'pc2', name: 'Margherita D.O.C', description: 'Salsa Di Pomodoro, Mozzarella Di Bufala, Basilico', price: 8, category: Category.PIZZE_CLASSICHE, isVegetarian: true, allergens: ['Glutine', 'Latte']
  },
  {
    id: 'pc3', name: 'Marinara', description: 'Salsa Di Pomodoro, Aglio, Origano', price: 5, category: Category.PIZZE_CLASSICHE, isVegetarian: true, allergens: ['Glutine']
  },
  {
    id: 'pc4', name: 'Napoletana', description: 'Salsa Di Pomodoro, Fior DI Latte, Acciughe, Olive Nere, Origano', price: 9, category: Category.PIZZE_CLASSICHE, allergens: ['Glutine', 'Latte', 'Pesce']
  },
  {
    id: 'pc5', name: 'Calabrese', description: 'Salsa Di Pomodoro, Fior Di Latte, Salame Piccante', price: 9, category: Category.PIZZE_CLASSICHE, allergens: ['Glutine', 'Latte']
  },
  {
    id: 'pc6', name: 'Smile Stick', description: 'Base Fior Di Latte, Wurstel, patatine', price: 7, category: Category.PIZZE_CLASSICHE, allergens: ['Glutine', 'Latte']
  },
  {
    id: 'pc7', name: 'Capricciosa', description: 'Salsa Di Pomodoro, Fior Di Latte, Funghi, Prosciutto Cotto, Olive Nere, Carciofini', price: 10, category: Category.PIZZE_CLASSICHE, allergens: ['Glutine', 'Latte']
  },
  {
    id: 'pc8', name: 'Caprese', description: 'Focaccia, Mozzarella Di Bufala, Pomodorino, Basilico, Origano', price: 9, category: Category.PIZZE_CLASSICHE, isVegetarian: true, allergens: ['Glutine', 'Latte']
  },
  {
    id: 'pc9', name: 'Crocchè', description: 'Fior Di latte, Provola, Prosciutto Cotto, Crocchè Di Patate', price: 10, category: Category.PIZZE_CLASSICHE, allergens: ['Glutine', 'Latte']
  },
  {
    id: 'pc10', name: 'Ortolana', description: 'Fior Di Latte, Zucchine, Melanzane, Funghi, Peperoni', price: 10, category: Category.PIZZE_CLASSICHE, isVegetarian: true, allergens: ['Glutine', 'Latte']
  },
  {
    id: 'pc11', name: 'Boscaiola', description: 'Fior Di Latte, Salsiccia, Funghi', price: 9, category: Category.PIZZE_CLASSICHE, allergens: ['Glutine', 'Latte']
  },
  {
    id: 'pc12', name: 'Quattro Formaggi', description: 'Fior Di Latte, Provola, Gorgonzola, Grana, Pecorino', price: 12, category: Category.PIZZE_CLASSICHE, isVegetarian: true, allergens: ['Glutine', 'Latte']
  },
  {
    id: 'pc13', name: 'Sorrentina', description: 'Fior Di Latte, Rucola, Prosciutto Crudo, Scaglie di Grana', price: 12, category: Category.PIZZE_CLASSICHE, allergens: ['Glutine', 'Latte']
  },

  // --- PIZZE SPECIALI ---
  { id: 'ps1', name: 'Tartufata Plus', description: 'Fior Di Latte, Salsiccia, Porcini, Salsa Tartufata, Scaglie di Grana', price: 12, category: Category.PIZZE_SPECIALI, allergens: ['Glutine', 'Latte'] },
  { id: 'ps2', name: 'Calabrese Plus', description: 'Salsa Di Pomodoro, Mozzarella Di Bufala, Gorgonzola, Salame Piccante', price: 12, category: Category.PIZZE_SPECIALI, allergens: ['Glutine', 'Latte'] },
  { id: 'ps3', name: 'Sublime', description: 'Salsa Di Pomodoro, Salame Piccante, Burrata, Basilico', price: 10, category: Category.PIZZE_SPECIALI, allergens: ['Glutine', 'Latte'] },
  { id: 'ps4', name: 'Golia', description: 'Fior Di Latte, Guanciale, Porcini, Provola', price: 10, category: Category.PIZZE_SPECIALI, allergens: ['Glutine', 'Latte'] },
  { id: 'ps5', name: 'Valerio', description: 'Base Fior Di Latte, Salame Piccante, Gorgonzola, Funghi, Scaglie Di Grana', price: 11, category: Category.PIZZE_SPECIALI, allergens: ['Glutine', 'Latte'] },
  { id: 'ps6', name: 'Pugliese', description: 'Salsa Di Pomodoro, Fior Di Latte, Tonno, Cipolle', price: 9, category: Category.PIZZE_SPECIALI, allergens: ['Glutine', 'Latte', 'Pesce'] },
  { id: 'ps7', name: 'Mortadella', description: 'Fior Di Latte, Mortadella, Burrata, Granella Di Pistacchio', price: 11, category: Category.PIZZE_SPECIALI, allergens: ['Glutine', 'Latte', 'Frutta a guscio'] },
  { id: 'ps8', name: 'Pizza Leo', description: 'Fior Di Latte, Datterino Giallo, Guanciale, Tarallo Napoletano, Crema Di Pecorino', price: 11, category: Category.PIZZE_SPECIALI, allergens: ['Glutine', 'Latte'] },
  { id: 'ps9', name: 'Rossini Integrale 100%', description: 'Impasto Integrale, Fior Di Latte, Rucola; Pomodorini, Prosciutto Crudo, Scaglie Di Grana', price: 13, category: Category.PIZZE_SPECIALI, allergens: ['Glutine', 'Latte'] },
  { id: 'ps10', name: 'Quelli Che ! ! !', description: 'Salsa di Pomodoro, Mozzarella di Bufala, Pomodorini, Origano Basilico, Scaglie di Grana', price: 10, category: Category.PIZZE_SPECIALI, allergens: ['Glutine', 'Latte'] },

  // --- LE NOVITÀ ---
  { id: 'n1', name: 'Giuditta 2.0', description: 'Crema di carciofi, Fior di latte, Salame piccante, carciofini', price: 10, category: Category.NOVITA, allergens: ['Glutine', 'Latte'] },
  { id: 'n2', name: 'La Regina di Autunno', description: 'Base Crema di zucca cotta in cbt, salsiccia, porcini, provola e chips di zucca', price: 13, category: Category.NOVITA, allergens: ['Glutine', 'Latte'] },
  { id: 'n3', name: 'Saracena Integrale 100%', description: 'Rucola, Salmone al Sale Bilanciato, Pomodorini Gialli', price: 14, category: Category.NOVITA, allergens: ['Glutine', 'Pesce'] },
  { id: 'n4', name: 'Cantabrico', description: 'Crema di pomodorino giallo, stracciata di bufala, alici del cantabrico, polvere di olive nere', price: 15, category: Category.NOVITA, allergens: ['Glutine', 'Latte', 'Pesce'] },
  { id: 'n5', name: 'O Friariell Nammurat', description: 'Base Fior di latte, Provola, Friarielli e Porchetta Arrosto', price: 12, category: Category.NOVITA, allergens: ['Glutine', 'Latte'] },
  { id: 'n6', name: 'Amatricina 2.0', description: 'Salsa Amatriciana c.b.t, guanciale, cipolla croccante, pecorino e stracciata', price: 12, category: Category.NOVITA, allergens: ['Glutine', 'Latte'] },
  { id: 'n7', name: 'Che cavolooo !!', description: 'Crema di cavolo romano, Porchetta arrosto, patate al forno e provola', price: 12, category: Category.NOVITA, allergens: ['Glutine', 'Latte'] },
  { id: 'n8', name: 'La strappalacrime', description: 'Base fior di latte, Genovese e cipolla caramellata', price: 14, category: Category.NOVITA, allergens: ['Glutine', 'Latte', 'Sedano'] },

  // --- BIBITE ANALCOLICHE ---
  { id: 'b1', name: 'Coca Cola 0,33 cl', price: 2.5, category: Category.BIBITE, allergens: [] },
  { id: 'b2', name: 'Fanta 0,33 cl', price: 2.5, category: Category.BIBITE, allergens: [] },
  { id: 'b3', name: 'Sprite 0,33 cl', price: 2.5, category: Category.BIBITE, allergens: [] },
  { id: 'b4', name: 'The Pesca 0,33 cl', price: 2.5, category: Category.BIBITE, allergens: [] },
  { id: 'b5', name: 'The Limone 0,33 cl', price: 2.5, category: Category.BIBITE, allergens: [] },
  { id: 'b6', name: 'Coca Cola 1 LT', price: 4, category: Category.BIBITE, allergens: [] },
  { id: 'b7', name: 'Acqua Liscia', price: 2, category: Category.BIBITE, allergens: [] },
  { id: 'b8', name: 'Acqua Frizzante', price: 2, category: Category.BIBITE, allergens: [] },

  // --- VINI AL CALICE ---
  { id: 'v1', name: 'Calice Orvieto (Bianco)', price: 3, category: Category.VINI, allergens: ['Solfiti'] },
  { id: 'v2', name: 'Calice Pecorino (Bianco)', price: 3.5, category: Category.VINI, allergens: ['Solfiti'] },
  { id: 'v3', name: 'Calice Pinot Grigio (Bianco)', price: 3.5, category: Category.VINI, allergens: ['Solfiti'] },
  { id: 'v4', name: 'Calice Montepulciano (Rosso)', price: 3.5, category: Category.VINI, allergens: ['Solfiti'] },
  { id: 'v5', name: 'Calice Seiano (Rosso)', price: 3, category: Category.VINI, allergens: ['Solfiti'] },
  { id: 'v6', name: 'Calice Chianti (Rosso)', price: 4, category: Category.VINI, allergens: ['Solfiti'] },
  { id: 'v7', name: 'Calice Rosè', price: 3, category: Category.VINI, allergens: ['Solfiti'] },

  // --- BIRRE ---
  { id: 'br1', name: 'Usterbacher 0,25cc', price: 3.5, category: Category.BIRRE, allergens: ['Glutine'] },
  { id: 'br2', name: 'Usterbacher 0,50cc', price: 6, category: Category.BIRRE, allergens: ['Glutine'] },
  { id: 'br3', name: 'Augustijn Rossa 0,20cc', price: 4, category: Category.BIRRE, allergens: ['Glutine'] },
  { id: 'br4', name: 'Augustijn Rossa 0,40cc', price: 6, category: Category.BIRRE, allergens: ['Glutine'] },
  { id: 'br5', name: 'Weiss 0,20cc', price: 4, category: Category.BIRRE, allergens: ['Glutine'] },
  { id: 'br6', name: 'Weiss 0,40cc', price: 6, category: Category.BIRRE, allergens: ['Glutine'] },
  { id: 'br7', name: 'Heineken 0,66cc', price: 4, category: Category.BIRRE, allergens: ['Glutine'] },
  { id: 'br8', name: 'Moretti 0,66cc', price: 4, category: Category.BIRRE, allergens: ['Glutine'] },
  { id: 'br9', name: 'Peroni 0,66cc', price: 4, category: Category.BIRRE, allergens: ['Glutine'] },

  // --- COCKTAIL ---
  { id: 'ck1', name: 'Aperol Spritz', description: 'Prosecco, Aperol, Soda', price: 5, category: Category.COCKTAIL, allergens: ['Solfiti'] },
  { id: 'ck2', name: 'Blue Lagoon Spritz', description: 'Blue Curacao, Prosecco, Aperol', price: 5, category: Category.COCKTAIL, allergens: ['Solfiti'] },
  { id: 'ck3', name: 'Campari Spritz', description: 'Prosecco, Campari, Soda', price: 5, category: Category.COCKTAIL, allergens: ['Solfiti'] },
  { id: 'ck4', name: 'Midori Spritz', description: 'Prosecco, Midori, Soda', price: 5, category: Category.COCKTAIL, allergens: ['Solfiti'] },
  { id: 'ck5', name: 'Limoncello Spritz', description: 'Prosecco, Limoncello, Soda', price: 5, category: Category.COCKTAIL, allergens: ['Solfiti'] },
  { id: 'ck6', name: 'Violet Spritz', description: 'Prosecco, Sciroppo di Violetta, Soda', price: 5, category: Category.COCKTAIL, allergens: ['Solfiti'] },
  { id: 'ck7', name: 'Cosmopolitan', description: 'Vodka, Succo di Mirtillo Rosso, Cointreau, Succo di Lime', price: 5, category: Category.COCKTAIL, allergens: [] },
  { id: 'ck8', name: 'Long Island', description: 'Tequila, Gin, Triple Sec, Vodka, Rum Bianco, Coca Cola', price: 6, category: Category.COCKTAIL, allergens: [] },
  { id: 'ck9', name: 'Negroni', description: 'Campari, Vermouth, Gin, Arance', price: 5, category: Category.COCKTAIL, allergens: ['Solfiti'] },
  { id: 'ck10', name: 'Americano', description: 'Campari, Vermouth, Soda, Arance', price: 5, category: Category.COCKTAIL, allergens: ['Solfiti'] },
  { id: 'ck11', name: 'Gin Mare', price: 8, category: Category.COCKTAIL, allergens: [] },
];