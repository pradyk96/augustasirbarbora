export interface MenuItem {
  id: string;
  name: string;
  description?: string;
  price: string;
  priceOptions?: { label: string; price: string }[];
  image?: string;
  tags?: string[];
  category: string;
  subcategory?: string;
  availability?: {
    days: string[];
    startTime: string;
    endTime: string;
    is24h?: boolean;
  };
}

export interface MenuCategory {
  id: string;
  name: string;
  description?: string;
  image: string;
  subcategories?: string[];
  availability?: {
    days: string[];
    startTime: string;
    endTime: string;
    is24h?: boolean;
  };
}

export const menuCategories: MenuCategory[] = [
  {
    id: "brunch",
    name: "Brunch",
    description: "Start your day with our delicious brunch offerings",
    image: "/images/menu/royal-breakfast.jpg",
    availability: { days: ["Wednesday"], startTime: "10:00", endTime: "14:00" },
  },
  {
    id: "bagels",
    name: "Bagels",
    description: "Fresh artisan bagels with premium toppings",
    image: "/images/menu/salmon-bagel.jpg",
    availability: { days: ["Wednesday"], startTime: "10:00", endTime: "22:00" },
  },
  {
    id: "desserts",
    name: "Desserts",
    description: "Handcrafted sweets and pastries",
    image: "/images/menu/cheesecake.jpg",
    availability: { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], startTime: "10:00", endTime: "22:00" },
  },
  {
    id: "drinks",
    name: "Drinks",
    description: "Coffee, tea, and refreshments",
    image: "/images/menu/pink-latte.jpg",
    subcategories: ["Coffee", "Tea Pots", "Puree Tea", "Soft Drinks", "Juice"],
    availability: { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], startTime: "10:00", endTime: "22:00", is24h: false },
  },
  {
    id: "wine",
    name: "Wine",
    description: "Fine wines and champagne",
    image: "/images/menu/champagne.jpg",
    subcategories: ["Champagne", "Sparkling Wine", "White Wine", "Rosé Wine", "Red Wine", "Non-Alcoholic"],
    availability: { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], startTime: "10:00", endTime: "22:00" },
  },
  {
    id: "beer",
    name: "Beer",
    description: "Selection of premium beers",
    image: "/images/menu/beer.jpg",
    availability: { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], startTime: "10:00", endTime: "22:00", is24h: true },
  },
  {
    id: "cider",
    name: "Cider",
    description: "Refreshing ciders",
    image: "/images/menu/cider.jpg",
    availability: { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], startTime: "00:00", endTime: "23:59", is24h: true },
  },
  {
    id: "alcoholic-drinks",
    name: "Alcoholic Drinks",
    description: "Premium spirits and liqueurs",
    image: "/images/menu/whiskey.jpg",
    subcategories: ["Whiskey", "Brandy", "Cognac", "Rum", "Tequila", "Gin", "Vodka", "Lithuanian Strongmen", "Liqueur", "Vermouth"],
    availability: { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], startTime: "10:00", endTime: "22:00" },
  },
];

export const menuItems: MenuItem[] = [
  // Brunch Items
  {
    id: "royal-breakfast",
    name: "Royal Breakfast",
    description: "A lavish selection of eggs, bacon, sausages, toast, and seasonal accompaniments",
    price: "20€",
    image: "/images/menu/royal-breakfast.jpg",
    category: "brunch",
    availability: { days: ["Wednesday"], startTime: "10:00", endTime: "14:00" },
  },
  {
    id: "avocado-toast",
    name: "Avocado Toast",
    description: "Smashed avocado on sourdough with poached egg and microgreens",
    price: "14€",
    image: "/images/menu/avocado-toast.jpg",
    category: "brunch",
    availability: { days: ["Wednesday"], startTime: "10:00", endTime: "14:00" },
  },
  {
    id: "eggs-benedict",
    name: "Eggs Benedict",
    description: "Poached eggs with hollandaise sauce on English muffin",
    price: "12€",
    image: "/images/menu/eggs-benedict.jpg",
    category: "brunch",
    availability: { days: ["Wednesday"], startTime: "10:00", endTime: "14:00" },
  },
  {
    id: "cottage-cheese-pancakes",
    name: "Cottage Cheese Pancakes",
    description: "Fluffy pancakes with fresh berries and maple syrup",
    price: "14€",
    image: "/images/menu/cottage-cheese-pancakes.jpg",
    category: "brunch",
    availability: { days: ["Wednesday"], startTime: "10:00", endTime: "14:00" },
  },
  {
    id: "oyster-gillardeau",
    name: "Oyster Gillardeau #2",
    description: "Premium French oysters served on ice",
    price: "6€",
    image: "/images/menu/oyster.jpg",
    category: "brunch",
    availability: { days: ["Wednesday"], startTime: "10:00", endTime: "14:00" },
  },
  {
    id: "potato-triangles",
    name: "Potato Triangles",
    description: "Crispy potato wedges with house sauce",
    price: "14€",
    image: "/images/menu/potato-triangles.jpg",
    category: "brunch",
    availability: { days: ["Wednesday"], startTime: "10:00", endTime: "14:00" },
  },
  {
    id: "day-soup",
    name: "Day Soup",
    description: "Seasonal soup of the day. Ask the waiter.",
    price: "6€",
    image: "/images/menu/day-soup.jpg",
    category: "brunch",
    availability: { days: ["Wednesday"], startTime: "10:00", endTime: "14:00" },
  },

  // Bagels
  {
    id: "spicy-tuna",
    name: "Spicy Tuna",
    description: "Tuna, kimchi mayonnaise, avocado salsa, cucumber, kimchi sesame",
    price: "14€",
    image: "/images/menu/spicy-tuna-bagel.jpg",
    category: "bagels",
    availability: { days: ["Wednesday"], startTime: "10:00", endTime: "22:00" },
  },
  {
    id: "with-mortadella",
    name: "With Mortadella",
    description: "Gochujang hummus, arugula, stracchiatella",
    price: "14€",
    image: "/images/menu/mortadella-bagel.jpg",
    category: "bagels",
    availability: { days: ["Wednesday"], startTime: "10:00", endTime: "22:00" },
  },
  {
    id: "with-salmon",
    name: "With Salmon",
    description: "Smoked salmon, labneh, pickled wasabi, pickled red onions, cucumber + yuzu",
    price: "12€",
    image: "/images/menu/salmon-bagel.jpg",
    category: "bagels",
    availability: { days: ["Wednesday"], startTime: "10:00", endTime: "22:00" },
  },
  {
    id: "with-shitake",
    name: "With Shitake",
    description: "Shitake mushroom pate, labneh, pickled onions",
    price: "10€",
    image: "/images/menu/shitake-bagel.jpg",
    category: "bagels",
    availability: { days: ["Wednesday"], startTime: "10:00", endTime: "22:00" },
  },

  // Desserts
  {
    id: "cheesecake",
    name: "Cheesecake",
    description: "Homemade cheesecake",
    price: "7€",
    image: "/images/menu/cheesecake.jpg",
    category: "desserts",
  },
  {
    id: "ice-cream",
    name: "Ice Cream",
    description: "Artisan ice cream selection",
    price: "7€",
    image: "/images/menu/ice-cream.jpg",
    category: "desserts",
  },
  {
    id: "forest-berries",
    name: "Forest Berries",
    description: "Fresh forest berries with cream",
    price: "7€",
    image: "/images/menu/forest-berries.jpg",
    category: "desserts",
  },
  {
    id: "chocolate-mousse",
    name: "Chocolate Mousse with Raspberries",
    description: "Rich chocolate mousse topped with fresh raspberries",
    price: "8€",
    image: "/images/menu/chocolate-mousse.jpg",
    category: "desserts",
  },
  {
    id: "macaron-maxi",
    name: "Macaron French Maxi",
    description: "Handmade",
    price: "4,90€",
    image: "/images/menu/macaron.jpg",
    category: "desserts",
  },
  {
    id: "passion-fruit-tartlet",
    name: "Passion Fruit Tartlet",
    description: "Tangy passion fruit curd in buttery pastry",
    price: "8,50€",
    image: "/images/menu/passion-fruit-tartlet.jpg",
    category: "desserts",
  },
  {
    id: "triple-chocolate",
    name: "Triple Chocolate",
    description: "Dark, milk, and white chocolate layers",
    price: "7€",
    image: "/images/menu/triple-chocolate.jpg",
    category: "desserts",
  },
  {
    id: "red-velvet",
    name: "Red Velvet",
    description: "Classic red velvet cake with cream cheese frosting",
    price: "7€",
    image: "/images/menu/red-velvet.jpg",
    category: "desserts",
  },
  {
    id: "limoncello-truffle",
    name: "Limocello with Lace Truffle",
    description: "Lemon cream Italian ice cream",
    price: "6€",
    image: "/images/menu/limoncello.jpg",
    category: "desserts",
  },

  // Coffee
  {
    id: "americano",
    name: "Americano",
    description: "Espresso with hot water",
    price: "4,50€",
    image: "/images/menu/cappuccino.jpg",
    category: "drinks",
    subcategory: "Coffee",
  },
  {
    id: "black-coffee",
    name: "Black Coffee",
    description: "Classic black coffee",
    price: "4€",
    category: "drinks",
    subcategory: "Coffee",
  },
  {
    id: "black-coffee-milk",
    name: "Black Coffee with Milk",
    description: "Black coffee with a splash of milk",
    price: "4,50€",
    category: "drinks",
    subcategory: "Coffee",
  },
  {
    id: "espresso",
    name: "Espresso",
    description: "Single shot of espresso",
    price: "3,50€",
    category: "drinks",
    subcategory: "Coffee",
  },
  {
    id: "espresso-doppio",
    name: "Espresso Doppio",
    description: "Double shot of espresso",
    price: "4,50€",
    category: "drinks",
    subcategory: "Coffee",
  },
  {
    id: "espresso-macchiato",
    name: "Espresso Macchiato",
    description: "Espresso with a dash of steamed milk",
    price: "4€",
    category: "drinks",
    subcategory: "Coffee",
  },
  {
    id: "latte",
    name: "Latte",
    description: "Espresso with steamed milk",
    price: "5€",
    category: "drinks",
    subcategory: "Coffee",
  },
  {
    id: "pink-latte",
    name: "Pink Latte",
    description: "Our signature pink beetroot latte",
    price: "6,50€",
    image: "/images/menu/pink-latte.jpg",
    category: "drinks",
    subcategory: "Coffee",
  },
  {
    id: "cappuccino",
    name: "Cappuccino",
    description: "Espresso with steamed milk foam",
    price: "5€",
    image: "/images/menu/cappuccino.jpg",
    category: "drinks",
    subcategory: "Coffee",
  },
  {
    id: "flat-white",
    name: "Flat White",
    description: "Double shot with velvety microfoam",
    price: "5€",
    category: "drinks",
    subcategory: "Coffee",
  },
  {
    id: "hot-chocolate",
    name: "Hot Chocolate",
    description: "Rich and creamy hot chocolate",
    price: "7€",
    category: "drinks",
    subcategory: "Coffee",
  },
  {
    id: "cocoa",
    name: "Cocoa",
    description: "Classic cocoa",
    price: "7€",
    category: "drinks",
    subcategory: "Coffee",
  },
  {
    id: "irish-coffee",
    name: "Irish Coffee",
    description: "Coffee with Irish whiskey and cream",
    price: "9€",
    image: "/images/menu/irish-coffee.jpg",
    category: "drinks",
    subcategory: "Coffee",
  },
  {
    id: "baileys-cold-coffee",
    name: "Baileys Cold Coffee",
    description: "Iced coffee with Baileys",
    price: "10€",
    category: "drinks",
    subcategory: "Coffee",
  },
  {
    id: "pistachio-affogato",
    name: "Pistachio Affogato",
    description: "Pistachio ice cream drowned in espresso",
    price: "6€",
    image: "/images/menu/affogato.jpg",
    category: "drinks",
    subcategory: "Coffee",
  },
  {
    id: "matcha",
    name: "Matcha",
    description: "Japanese green tea latte",
    price: "6€",
    image: "/images/menu/matcha.jpg",
    category: "drinks",
    subcategory: "Coffee",
  },

  // Tea Pots
  {
    id: "english-breakfast",
    name: "English Breakfast",
    description: "Classic English breakfast tea",
    price: "5€",
    image: "/images/menu/tea-pot.jpg",
    category: "drinks",
    subcategory: "Tea Pots",
  },
  {
    id: "earl-grey",
    name: "Earl Grey",
    description: "Black tea with bergamot",
    price: "5€",
    category: "drinks",
    subcategory: "Tea Pots",
  },
  {
    id: "green-tea",
    name: "Green",
    description: "Classic green tea",
    price: "5€",
    category: "drinks",
    subcategory: "Tea Pots",
  },
  {
    id: "fruit-tea",
    name: "Fruit",
    description: "Fruity herbal blend",
    price: "5€",
    category: "drinks",
    subcategory: "Tea Pots",
  },
  {
    id: "chamomile",
    name: "Chamomile",
    description: "Calming chamomile tea",
    price: "5€",
    category: "drinks",
    subcategory: "Tea Pots",
  },
  {
    id: "fresh-thyme",
    name: "Fresh Thyme",
    description: "Aromatic fresh thyme infusion",
    price: "5€",
    category: "drinks",
    subcategory: "Tea Pots",
  },
  {
    id: "fresh-mint",
    name: "Fresh Mint",
    description: "Refreshing fresh mint tea",
    price: "5€",
    category: "drinks",
    subcategory: "Tea Pots",
  },

  // Puree Tea
  {
    id: "blueberry-cranberry",
    name: "Blueberries and Cranberries",
    description: "Sweet and tart berry puree tea",
    price: "5,50€",
    image: "/images/menu/puree-tea.jpg",
    category: "drinks",
    subcategory: "Puree Tea",
  },
  {
    id: "sea-buckthorn-quince",
    name: "Sea Buckthorn with Quince",
    description: "Exotic sea buckthorn and quince blend",
    price: "5,50€",
    category: "drinks",
    subcategory: "Puree Tea",
  },
  {
    id: "raspberry-ginger",
    name: "Raspberry with Ginger",
    description: "Warming raspberry and ginger puree",
    price: "5,50€",
    category: "drinks",
    subcategory: "Puree Tea",
  },

  // Juice
  {
    id: "orange-juice",
    name: "Freshly Squeezed Orange Juice",
    description: "Fresh oranges pressed to order",
    price: "6€",
    image: "/images/menu/fresh-juice.jpg",
    category: "drinks",
    subcategory: "Juice",
  },
  {
    id: "grapefruit-juice",
    name: "Freshly Squeezed Grapefruit Juice",
    description: "Fresh grapefruit pressed to order",
    price: "6€",
    category: "drinks",
    subcategory: "Juice",
  },
  {
    id: "juice-pack",
    name: "Juice from Pack",
    description: "Selection of packaged juices",
    price: "4€",
    category: "drinks",
    subcategory: "Juice",
  },

  // Soft Drinks
  {
    id: "grapefruit-soda",
    name: "Grapefruit Soda",
    description: "Refreshing grapefruit soda",
    price: "5€",
    category: "drinks",
    subcategory: "Soft Drinks",
  },
  {
    id: "ginger-beer",
    name: "Ginger Beer",
    description: "Spicy ginger beer",
    price: "5€",
    category: "drinks",
    subcategory: "Soft Drinks",
  },
  {
    id: "ginger-ale",
    name: "Ginger Ale",
    description: "Classic ginger ale",
    price: "5€",
    category: "drinks",
    subcategory: "Soft Drinks",
  },
  {
    id: "fever-tree-tonic",
    name: "Fever Tree Indian Tonic",
    description: "Premium Indian tonic water",
    price: "5€",
    category: "drinks",
    subcategory: "Soft Drinks",
  },
  {
    id: "kombucha",
    name: "Kombucha Drink",
    description: "Fermented tea beverage",
    price: "6€",
    category: "drinks",
    subcategory: "Soft Drinks",
  },
  {
    id: "mineral-water",
    name: "Mineral Water",
    description: "Still or sparkling",
    price: "4€",
    category: "drinks",
    subcategory: "Soft Drinks",
  },
  {
    id: "coca-cola",
    name: "Coca-Cola",
    description: "Classic Coca-Cola",
    price: "4,50€",
    category: "drinks",
    subcategory: "Soft Drinks",
  },
  {
    id: "coca-cola-zero",
    name: "Coca-Cola Zero",
    description: "Zero sugar Coca-Cola",
    price: "4,50€",
    category: "drinks",
    subcategory: "Soft Drinks",
  },

  // Wine - Champagne
  {
    id: "veuve-clicquot-yellow",
    name: "Veuve Clicquot Brut Yellow Label",
    description: "100ml",
    price: "15€ / 110€",
    priceOptions: [
      { label: "100ml", price: "15€" },
      { label: "750ml", price: "110€" },
    ],
    image: "/images/menu/champagne.jpg",
    category: "wine",
    subcategory: "Champagne",
  },
  {
    id: "veuve-clicquot-rose",
    name: "Veuve Clicquot Brut Rose",
    description: "100ml / 750ml",
    price: "18€ / 130€",
    priceOptions: [
      { label: "100ml", price: "18€" },
      { label: "750ml", price: "130€" },
    ],
    category: "wine",
    subcategory: "Champagne",
  },
  {
    id: "veuve-clicquot-vintage",
    name: "Veuve Clicquot Rose Vintage 2015",
    description: "750ml",
    price: "220€",
    category: "wine",
    subcategory: "Champagne",
  },
  {
    id: "veuve-clicquot-extra-old",
    name: "Veuve Clicquot Extra Brut Extra Old",
    description: "750ml",
    price: "300€",
    category: "wine",
    subcategory: "Champagne",
  },
  {
    id: "cadel-bosco-franciacorta",
    name: "Ca'del Bosco Franciacorta Cuvée",
    description: "750ml",
    price: "70€",
    category: "wine",
    subcategory: "Champagne",
  },
  {
    id: "krone-borealis",
    name: "Krone Borealis Vintage Cuvée Brut",
    description: "750ml",
    price: "60€",
    category: "wine",
    subcategory: "Champagne",
  },
  {
    id: "moet-chandon",
    name: "Moët & Chandon Brut Imperial",
    description: "750ml",
    price: "100€",
    category: "wine",
    subcategory: "Champagne",
  },
  {
    id: "ruinart-brut",
    name: "Ruinart Brut",
    description: "750ml",
    price: "120€",
    category: "wine",
    subcategory: "Champagne",
  },
  {
    id: "dom-perignon",
    name: "Dom Perignon",
    description: "750ml",
    price: "650€",
    category: "wine",
    subcategory: "Champagne",
  },
  {
    id: "krug-grande-cuvee",
    name: "Krug Grande Cuvee",
    description: "750ml",
    price: "750€",
    category: "wine",
    subcategory: "Champagne",
  },

  // Wine - Sparkling Wine
  {
    id: "salazar-cremant-brut",
    name: "Salazar Cremant De Limoux Brut",
    description: "France, 100ml / 750ml",
    price: "8€ / 50€",
    priceOptions: [
      { label: "100ml", price: "8€" },
      { label: "750ml", price: "50€" },
    ],
    category: "wine",
    subcategory: "Sparkling Wine",
  },
  {
    id: "salazar-cremant-rose",
    name: "Salasar Cremant De Limoux AOP Rose Brut",
    description: "France, 100ml / 750ml",
    price: "9€ / 50€",
    priceOptions: [
      { label: "100ml", price: "9€" },
      { label: "750ml", price: "50€" },
    ],
    category: "wine",
    subcategory: "Sparkling Wine",
  },
  {
    id: "mucho-mas-cava",
    name: "Mucho Mas Cava",
    description: "Spain, 100ml / 750ml",
    price: "7€ / 35€",
    priceOptions: [
      { label: "100ml", price: "7€" },
      { label: "750ml", price: "35€" },
    ],
    category: "wine",
    subcategory: "Sparkling Wine",
  },
  {
    id: "lamberti-prosecco",
    name: "Lamberti Prosecco",
    description: "Italy, 100ml / 750ml",
    price: "7€ / 35€",
    priceOptions: [
      { label: "100ml", price: "7€" },
      { label: "750ml", price: "35€" },
    ],
    category: "wine",
    subcategory: "Sparkling Wine",
  },
  {
    id: "crown-sparkling",
    name: "Crown",
    description: "Sparkling wine",
    price: "12€",
    category: "wine",
    subcategory: "Sparkling Wine",
  },

  // Wine - White Wine
  {
    id: "vincent-mothe-chablis",
    name: "Vincent Mothe Chablis AOP",
    description: "France, 100ml / 750ml",
    price: "11€ / 60€",
    priceOptions: [
      { label: "100ml", price: "11€" },
      { label: "750ml", price: "60€" },
    ],
    category: "wine",
    subcategory: "White Wine",
  },
  {
    id: "pounamu-sauvignon",
    name: "Pounamu Sauvignon Blanc",
    description: "New Zealand, 100ml / 750ml",
    price: "8€ / 35€",
    priceOptions: [
      { label: "100ml", price: "8€" },
      { label: "750ml", price: "35€" },
    ],
    category: "wine",
    subcategory: "White Wine",
  },
  {
    id: "anselmann-riesling",
    name: "Anselmann Riesling Kabinett",
    description: "Germany, 100ml / 750ml",
    price: "7€ / 35€",
    priceOptions: [
      { label: "100ml", price: "7€" },
      { label: "750ml", price: "35€" },
    ],
    category: "wine",
    subcategory: "White Wine",
  },
  {
    id: "errazuriz-chardonnay",
    name: "Errazuriz Max Reserve Chardonnay",
    description: "Chile, 100ml / 750ml",
    price: "9€ / 50€",
    priceOptions: [
      { label: "100ml", price: "9€" },
      { label: "750ml", price: "50€" },
    ],
    category: "wine",
    subcategory: "White Wine",
  },
  {
    id: "homemade-white-wine",
    name: "Homemade wine",
    description: "House white wine",
    price: "7€",
    category: "wine",
    subcategory: "White Wine",
  },

  // Wine - Rosé Wine
  {
    id: "minutes-m",
    name: "Minutes M",
    description: "France, 100ml / 750ml",
    price: "10€ / 55€",
    priceOptions: [
      { label: "100ml", price: "10€" },
      { label: "750ml", price: "55€" },
    ],
    category: "wine",
    subcategory: "Rosé Wine",
  },
  {
    id: "whispering-angel-rose",
    name: "Whispering Angel Rose",
    description: "100ml / 750ml",
    price: "10€ / 55€",
    priceOptions: [
      { label: "100ml", price: "10€" },
      { label: "750ml", price: "55€" },
    ],
    category: "wine",
    subcategory: "Rosé Wine",
  },
  {
    id: "minuty-prestige",
    name: "Minuty Prestige Rose",
    description: "100ml / 750ml",
    price: "10€ / 56€",
    priceOptions: [
      { label: "100ml", price: "10€" },
      { label: "750ml", price: "56€" },
    ],
    category: "wine",
    subcategory: "Rosé Wine",
  },

  // Wine - Red Wine
  {
    id: "homemade-red-wine",
    name: "Homemade wine",
    description: "Dry house wine",
    price: "7€",
    category: "wine",
    subcategory: "Red Wine",
  },
  {
    id: "masseria-primitivo",
    name: "Masseria Altemura Sasseo Primitivo Salento IGT",
    description: "Italy, 100ml / 750ml",
    price: "8€ / 45€",
    priceOptions: [
      { label: "100ml", price: "8€" },
      { label: "750ml", price: "45€" },
    ],
    category: "wine",
    subcategory: "Red Wine",
  },
  {
    id: "castello-chianti",
    name: "Castello D'Albola Chianti Classico Riserva DOCG",
    description: "Italy, 100ml / 750ml",
    price: "8€ / 40€",
    priceOptions: [
      { label: "100ml", price: "8€" },
      { label: "750ml", price: "40€" },
    ],
    category: "wine",
    subcategory: "Red Wine",
  },
  {
    id: "ventisquero-pinot-noir",
    name: "Ventisquero Reserva Pinot Noir",
    description: "100ml / 750ml",
    price: "9€ / 45€",
    priceOptions: [
      { label: "100ml", price: "9€" },
      { label: "750ml", price: "45€" },
    ],
    category: "wine",
    subcategory: "Red Wine",
  },
  {
    id: "hot-wine",
    name: "Hot wine",
    description: "Warm mulled wine",
    price: "7€",
    category: "wine",
    subcategory: "Red Wine",
  },
  {
    id: "longview-fresco",
    name: "Longview Fresco, Adelaide Hills",
    description: "100ml / 750ml",
    price: "9€ / 50€",
    priceOptions: [
      { label: "100ml", price: "9€" },
      { label: "750ml", price: "50€" },
    ],
    category: "wine",
    subcategory: "Red Wine",
  },
  {
    id: "mascota-malbec",
    name: "MASCOTA Malbec 2023",
    description: "100ml / 750ml",
    price: "9€ / 50€",
    priceOptions: [
      { label: "100ml", price: "9€" },
      { label: "750ml", price: "50€" },
    ],
    category: "wine",
    subcategory: "Red Wine",
  },

  // Wine - Non-Alcoholic
  {
    id: "voyage-acala",
    name: "Voyage Acala",
    description: "Sparkling tea",
    price: "35€",
    category: "wine",
    subcategory: "Non-Alcoholic",
  },
  {
    id: "blanc-de-blancs-non-alc",
    name: "Blanc de Blancs",
    description: "Sparkling white wine (non-alcoholic)",
    price: "35€",
    category: "wine",
    subcategory: "Non-Alcoholic",
  },

  // Beer
  {
    id: "menabrea-lager",
    name: "Menabrea Lager",
    description: "Italian premium lager",
    price: "5€",
    image: "/images/menu/beer.jpg",
    category: "beer",
  },
  {
    id: "menabrea-0",
    name: "Menabrea 0.0%",
    description: "Non-alcoholic Italian lager",
    price: "4,50€",
    category: "beer",
  },

  // Cider
  {
    id: "house-cider",
    name: "House Cider",
    description: "Refreshing apple cider",
    price: "6€",
    category: "cider",
  },
  {
    id: "pear-cider",
    name: "Pear Cider",
    description: "Sweet pear cider",
    price: "6€",
    category: "cider",
  },

  // Alcoholic Drinks - Whiskey
  {
    id: "johnnie-walker-black",
    name: "Johnnie Walker Black Label 12 y.o.",
    description: "Scotch whisky, 40ml",
    price: "8€",
    image: "/images/menu/whiskey.jpg",
    category: "alcoholic-drinks",
    subcategory: "Whiskey",
  },
  {
    id: "johnnie-walker-gold",
    name: "Johnnie Walker Gold Reserve",
    description: "Scotch whisky, 40ml",
    price: "12€",
    category: "alcoholic-drinks",
    subcategory: "Whiskey",
  },
  {
    id: "haig-club-clubman",
    name: "Haig Club Clubman",
    description: "Scotch whisky, 40ml",
    price: "9€",
    category: "alcoholic-drinks",
    subcategory: "Whiskey",
  },
  {
    id: "glenmorangie-original",
    name: "Glenmorangie Original Single Malt 10 y.o.",
    description: "Scotch whisky, 40ml",
    price: "20€",
    category: "alcoholic-drinks",
    subcategory: "Whiskey",
  },
  {
    id: "glenmorangie-nectar",
    name: "Glenmorangie Nectar D'or Single Malt",
    description: "Scotch whisky, 40ml",
    price: "15€",
    category: "alcoholic-drinks",
    subcategory: "Whiskey",
  },
  {
    id: "lagavulin-16",
    name: "Lagavulin Islay Single Malt 16 y.o.",
    description: "Scotch whisky, 40ml",
    price: "16€",
    category: "alcoholic-drinks",
    subcategory: "Whiskey",
  },
  {
    id: "singleton-speyside",
    name: "Singleton Speyside Single Malt 12 y.o.",
    description: "Scotch whisky, 40ml",
    price: "12€",
    category: "alcoholic-drinks",
    subcategory: "Whiskey",
  },
  {
    id: "bushmills-original",
    name: "Bushmills Original",
    description: "Irish whiskey, 40ml",
    price: "9€",
    category: "alcoholic-drinks",
    subcategory: "Whiskey",
  },
  {
    id: "shankys-whip",
    name: "Shanky's Whip",
    description: "Irish whiskey, 40ml",
    price: "9€",
    category: "alcoholic-drinks",
    subcategory: "Whiskey",
  },
  {
    id: "bulleit-bourbon",
    name: "Bulleit Bourbon",
    description: "American whiskey, 40ml",
    price: "10€",
    category: "alcoholic-drinks",
    subcategory: "Whiskey",
  },
  {
    id: "kamiki",
    name: "Kamiki",
    description: "Japanese whiskey, 40ml",
    price: "15€",
    category: "alcoholic-drinks",
    subcategory: "Whiskey",
  },

  // Alcoholic Drinks - Brandy
  {
    id: "fernando-de-castilla",
    name: "Fernando de Castilla Solera Reserva De Jerez",
    description: "40ml",
    price: "9€",
    category: "alcoholic-drinks",
    subcategory: "Brandy",
  },

  // Alcoholic Drinks - Cognac
  {
    id: "hennessy-vsop",
    name: "Hennessy V.S.O.P.",
    description: "40ml",
    price: "13€",
    category: "alcoholic-drinks",
    subcategory: "Cognac",
  },
  {
    id: "hennessy-xo",
    name: "Hennessy XO",
    description: "40ml",
    price: "25€",
    category: "alcoholic-drinks",
    subcategory: "Cognac",
  },

  // Alcoholic Drinks - Rum
  {
    id: "pompero-aniversario",
    name: "Pompero Aniversario Reserva Exclusiva",
    description: "40ml",
    price: "10€",
    category: "alcoholic-drinks",
    subcategory: "Rum",
  },
  {
    id: "eminente-reserva",
    name: "Eminente Reserva 7 y.o.",
    description: "40ml",
    price: "10€",
    category: "alcoholic-drinks",
    subcategory: "Rum",
  },
  {
    id: "zacapa-centario",
    name: "Zacapa Centario Solera Gran Reserva 23 y.o.",
    description: "40ml",
    price: "14€",
    category: "alcoholic-drinks",
    subcategory: "Rum",
  },

  // Alcoholic Drinks - Tequila
  {
    id: "white-volcano",
    name: "White Volcano",
    description: "40ml",
    price: "10€",
    category: "alcoholic-drinks",
    subcategory: "Tequila",
  },
  {
    id: "volcan-reposado",
    name: "Volcan Reposado",
    description: "40ml",
    price: "10€",
    category: "alcoholic-drinks",
    subcategory: "Tequila",
  },
  {
    id: "crystal-volcano",
    name: "Crystal Volcano",
    description: "40ml",
    price: "10€",
    category: "alcoholic-drinks",
    subcategory: "Tequila",
  },
  {
    id: "don-julio-blanco",
    name: "Don Julio Blanco",
    description: "40ml",
    price: "10€",
    category: "alcoholic-drinks",
    subcategory: "Tequila",
  },
  {
    id: "don-julio-reposado",
    name: "Don Julio Reposado",
    description: "40ml",
    price: "10€",
    category: "alcoholic-drinks",
    subcategory: "Tequila",
  },
  {
    id: "don-julio-anejo",
    name: "Don Julio Anejo",
    description: "40ml",
    price: "10€",
    category: "alcoholic-drinks",
    subcategory: "Tequila",
  },
  {
    id: "volcan-mi-tierra",
    name: "Volcan de Mi Tierra X.A.",
    description: "40ml",
    price: "25€",
    category: "alcoholic-drinks",
    subcategory: "Tequila",
  },

  // Alcoholic Drinks - Gin
  {
    id: "tanqueray-london-dry",
    name: "Tanqueray London Dry",
    description: "40ml",
    price: "6€",
    category: "alcoholic-drinks",
    subcategory: "Gin",
  },
  {
    id: "tanqueray-blackcurrant",
    name: "Tanqueray Blackcurrant Royale",
    description: "40ml",
    price: "6,50€",
    category: "alcoholic-drinks",
    subcategory: "Gin",
  },
  {
    id: "tanqueray-0",
    name: "Tanqueray 0.0 %",
    description: "Alcohol Free, 40ml",
    price: "6€",
    category: "alcoholic-drinks",
    subcategory: "Gin",
  },

  // Alcoholic Drinks - Vodka
  {
    id: "belvedere",
    name: "Belvedere",
    description: "40ml",
    price: "10€",
    category: "alcoholic-drinks",
    subcategory: "Vodka",
  },
  {
    id: "crystal-vodka",
    name: "Crystal",
    description: "40ml",
    price: "7€",
    category: "alcoholic-drinks",
    subcategory: "Vodka",
  },

  // Alcoholic Drinks - Lithuanian Strongmen
  {
    id: "pakruojis-cherry",
    name: "Pakruojis Manor Cherry Brandy liqueur",
    description: "40ml",
    price: "8€",
    category: "alcoholic-drinks",
    subcategory: "Lithuanian Strongmen",
  },
  {
    id: "pakruojis-thyme-honey",
    name: "Pakruojis Manor Thyme with Honey and Saffron Liqueur",
    description: "40ml",
    price: "8€",
    category: "alcoholic-drinks",
    subcategory: "Lithuanian Strongmen",
  },
  {
    id: "pakruojis-kenyan",
    name: "Pakruojis Manor Kenyan bitters",
    description: "40ml",
    price: "8€",
    category: "alcoholic-drinks",
    subcategory: "Lithuanian Strongmen",
  },

  // Alcoholic Drinks - Liqueur
  {
    id: "baileys-original",
    name: "Baileys Original",
    description: "40ml",
    price: "8€",
    category: "alcoholic-drinks",
    subcategory: "Liqueur",
  },
  {
    id: "luxardo-limoncello",
    name: "Luxardo Limoncello",
    description: "40ml",
    price: "8€",
    category: "alcoholic-drinks",
    subcategory: "Liqueur",
  },
  {
    id: "disaronno-amaretto",
    name: "Disaronno Amaretto",
    description: "40ml",
    price: "8€",
    category: "alcoholic-drinks",
    subcategory: "Liqueur",
  },

  // Alcoholic Drinks - Vermouth
  {
    id: "belsazar-vermouth",
    name: "Belsazar Vermouth Red",
    description: "40ml",
    price: "8€",
    category: "alcoholic-drinks",
    subcategory: "Vermouth",
  },
];

export function isServingNow(availability?: { days: string[]; startTime: string; endTime: string; is24h?: boolean }): boolean {
  if (!availability) return true;
  if (availability.is24h) return true;

  const now = new Date();
  const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const currentDay = dayNames[now.getDay()];

  if (!availability.days.includes(currentDay)) return false;

  const [startHour, startMin] = availability.startTime.split(":").map(Number);
  const [endHour, endMin] = availability.endTime.split(":").map(Number);

  const currentMinutes = now.getHours() * 60 + now.getMinutes();
  const startMinutes = startHour * 60 + startMin;
  const endMinutes = endHour * 60 + endMin;

  return currentMinutes >= startMinutes && currentMinutes <= endMinutes;
}

export function getAvailabilityText(availability?: { days: string[]; startTime: string; endTime: string; is24h?: boolean }): string {
  if (!availability) return "Always Available";
  if (availability.is24h) return "24H";

  const days = availability.days.length === 7 ? "Daily" : availability.days.join(", ");
  return `${days} ${availability.startTime}–${availability.endTime}`;
}
