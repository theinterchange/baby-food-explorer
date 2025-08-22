export interface Food {
  id: number;
  name: string;
  type: string;
  allergens: string[];
  chokingHazard: boolean;
  dogSafe: boolean;
  description: string;
  icon: string;
}

// Icon mapping for common foods
const getIconForFood = (name: string, type: string): string => {
  const foodName = name.toLowerCase();
  
  // Specific food icons
  if (foodName.includes('apple')) return '🍎';
  if (foodName.includes('banana')) return '🍌';
  if (foodName.includes('strawberry')) return '🍓';
  if (foodName.includes('orange')) return '🍊';
  if (foodName.includes('grape')) return '🍇';
  if (foodName.includes('avocado')) return '🥑';
  if (foodName.includes('tomato')) return '🍅';
  if (foodName.includes('carrot')) return '🥕';
  if (foodName.includes('broccoli')) return '🥦';
  if (foodName.includes('corn')) return '🌽';
  if (foodName.includes('egg')) return '🥚';
  if (foodName.includes('cheese')) return '🧀';
  if (foodName.includes('bread')) return '🍞';
  if (foodName.includes('rice')) return '🍚';
  if (foodName.includes('potato')) return '🥔';
  if (foodName.includes('chicken')) return '🍗';
  if (foodName.includes('beef') || foodName.includes('steak')) return '🥩';
  if (foodName.includes('fish') || foodName.includes('salmon') || foodName.includes('tuna')) return '🐟';
  if (foodName.includes('shrimp') || foodName.includes('crab') || foodName.includes('lobster')) return '🦐';
  if (foodName.includes('mushroom')) return '🍄';
  if (foodName.includes('pumpkin')) return '🎃';
  if (foodName.includes('lemon')) return '🍋';
  if (foodName.includes('lime')) return '🟢';
  if (foodName.includes('coconut')) return '🥥';
  if (foodName.includes('nut') && !foodName.includes('butter')) return '🥜';
  if (foodName.includes('pasta') || foodName.includes('noodle')) return '🍝';
  if (foodName.includes('pizza')) return '🍕';
  
  // Type-based icons as fallback
  switch (type.toLowerCase()) {
    case 'fruit': return '🍎';
    case 'vegetable': return '🥬';
    case 'meat': return '🥩';
    case 'fish': return '🐟';
    case 'shellfish': return '🦐';
    case 'dairy': return '🥛';
    case 'grain': return '🌾';
    case 'legume': return '🫘';
    case 'egg': return '🥚';
    case 'fungi': return '🍄';
    case 'herb/spice': return '🌿';
    case 'seed': return '🌰';
    case 'tree nut': return '🥜';
    case 'prepared': return '🍽️';
    case 'condiment': return '🧂';
    case 'sweetener': return '🍯';
    case 'oil': return '🫒';
    default: return '🥄';
  }
};

export const FOODS: Food[] = [
  {
    id: 1,
    name: "Egg",
    type: "Egg",
    allergens: ["Egg"],
    chokingHazard: false,
    dogSafe: true,
    description: "Cooked eggs are safe; avoid raw whites.",
    icon: "🥚"
  },
  {
    id: 2,
    name: "Strawberry",
    type: "Fruit",
    allergens: [],
    chokingHazard: false,
    dogSafe: true,
    description: "",
    icon: "🍓"
  },
  {
    id: 3,
    name: "Avocado",
    type: "Fruit",
    allergens: [],
    chokingHazard: false,
    dogSafe: false,
    description: "AKC: avoid avocado due to persin and fat; pits/skins/leaves toxic.",
    icon: "🥑"
  },
  {
    id: 4,
    name: "Tomato",
    type: "Fruit",
    allergens: [],
    chokingHazard: false,
    dogSafe: false,
    description: "AKC advises avoiding tomatoes due to solanine in green parts; ripe flesh is generally safe.",
    icon: "🍅"
  },
  {
    id: 5,
    name: "Banana",
    type: "Fruit",
    allergens: [],
    chokingHazard: false,
    dogSafe: true,
    description: "",
    icon: "🍌"
  },
  {
    id: 6,
    name: "Bread",
    type: "Grain",
    allergens: ["Wheat"],
    chokingHazard: false,
    dogSafe: true,
    description: "Plain only; avoid xylitol, raisins, garlic/onion.",
    icon: "🍞"
  },
  {
    id: 7,
    name: "Apple",
    type: "Fruit",
    allergens: [],
    chokingHazard: false,
    dogSafe: true,
    description: "",
    icon: "🍎"
  },
  {
    id: 8,
    name: "Black Beans",
    type: "Legume",
    allergens: [],
    chokingHazard: true,
    dogSafe: false,
    description: "Choking hazard",
    icon: "🫘"
  },
  {
    id: 9,
    name: "Orange",
    type: "Fruit",
    allergens: [],
    chokingHazard: false,
    dogSafe: true,
    description: "Small amounts only; remove peel and seeds.",
    icon: "🍊"
  },
  {
    id: 10,
    name: "Cheese",
    type: "Dairy",
    allergens: ["Dairy"],
    chokingHazard: false,
    dogSafe: true,
    description: "Many dogs are lactose sensitive; small amounts only.",
    icon: "🧀"
  },
  {
    id: 11,
    name: "Peanut",
    type: "No",
    allergens: [],
    chokingHazard: true,
    dogSafe: true,
    description: "Monitor choking hazard",
    icon: "🥜"
  },
  {
    id: 12,
    name: "Peanut Butter",
    type: "No",
    allergens: [],
    chokingHazard: false,
    dogSafe: true,
    description: "Unsalted; ensure xylitol-free; moderation.",
    icon: "🥜"
  },
  {
    id: 13,
    name: "Cabbage",
    type: "Vegetable",
    allergens: [],
    chokingHazard: false,
    dogSafe: true,
    description: "",
    icon: "🥬"
  },
  {
    id: 14,
    name: "Mango",
    type: "Fruit",
    allergens: [],
    chokingHazard: false,
    dogSafe: true,
    description: "",
    icon: "🥭"
  },
  {
    id: 15,
    name: "Blueberries",
    type: "Fruit",
    allergens: [],
    chokingHazard: false,
    dogSafe: true,
    description: "",
    icon: "🫐"
  },
  {
    id: 16,
    name: "Sweet Potato",
    type: "Vegetable",
    allergens: [],
    chokingHazard: false,
    dogSafe: true,
    description: "",
    icon: "🍠"
  },
  {
    id: 17,
    name: "White Button Mushroom",
    type: "Fungi",
    allergens: [],
    chokingHazard: false,
    dogSafe: false,
    description: "Wild mushrooms are toxic; AKC advises avoiding mushrooms even though plain store-bought types are generally fine.",
    icon: "🍄"
  },
  {
    id: 18,
    name: "Rice",
    type: "Grain",
    allergens: [],
    chokingHazard: false,
    dogSafe: true,
    description: "Plain, cooked; part of many dog diets.",
    icon: "🍚"
  },
  {
    id: 19,
    name: "Kidney Beans",
    type: "Legume",
    allergens: [],
    chokingHazard: true,
    dogSafe: false,
    description: "Choking hazard",
    icon: "🫘"
  },
  {
    id: 20,
    name: "Asparagus",
    type: "Vegetable",
    allergens: [],
    chokingHazard: false,
    dogSafe: false,
    description: "No real benefit for dogs; tough raw and loses value cooked.",
    icon: "🥬"
  },
  {
    id: 21,
    name: "Pineapple",
    type: "Fruit",
    allergens: [],
    chokingHazard: false,
    dogSafe: true,
    description: "",
    icon: "🍍"
  },
  {
    id: 22,
    name: "Tortilla",
    type: "Grain",
    allergens: [],
    chokingHazard: false,
    dogSafe: false,
    description: "No AKC guidance",
    icon: "🌾"
  },
  {
    id: 23,
    name: "Radish",
    type: "Vegetable",
    allergens: [],
    chokingHazard: false,
    dogSafe: true,
    description: "",
    icon: "🥬"
  },
  {
    id: 24,
    name: "Mandarin Orange",
    type: "Fruit",
    allergens: [],
    chokingHazard: false,
    dogSafe: true,
    description: "Small amounts only; remove peel and seeds.",
    icon: "🍊"
  },
  {
    id: 25,
    name: "Steak",
    type: "Meat",
    allergens: [],
    chokingHazard: false,
    dogSafe: true,
    description: "Aim for unsalted",
    icon: "🥩"
  },
  {
    id: 26,
    name: "Salmon",
    type: "Fish",
    allergens: ["Fish"],
    chokingHazard: false,
    dogSafe: true,
    description: "Cooked plain; deboned; avoid high-mercury species.",
    icon: "🐟"
  },
  {
    id: 27,
    name: "Plantain",
    type: "Fruit",
    allergens: [],
    chokingHazard: false,
    dogSafe: false,
    description: "No AKC guidance",
    icon: "🍌"
  },
  {
    id: 28,
    name: "Pumpkin",
    type: "Vegetable",
    allergens: [],
    chokingHazard: false,
    dogSafe: true,
    description: "",
    icon: "🎃"
  },
  {
    id: 29,
    name: "Beet",
    type: "Vegetable",
    allergens: [],
    chokingHazard: false,
    dogSafe: false,
    description: "#N/A",
    icon: "🥬"
  },
  {
    id: 30,
    name: "Corn",
    type: "Vegetable",
    allergens: [],
    chokingHazard: false,
    dogSafe: true,
    description: "",
    icon: "🌽"
  },
  {
    id: 31,
    name: "Queso Fresco",
    type: "Dairy",
    allergens: [],
    chokingHazard: false,
    dogSafe: true,
    description: "",
    icon: "🧀"
  },
  {
    id: 32,
    name: "Cherimoya",
    type: "Fruit",
    allergens: [],
    chokingHazard: false,
    dogSafe: false,
    description: "No AKC guidance",
    icon: "🍎"
  },
  {
    id: 33,
    name: "Garlic",
    type: "Herb/Spice",
    allergens: [],
    chokingHazard: false,
    dogSafe: false,
    description: "Allium family is toxic to dogs.",
    icon: "🧄"
  },
  {
    id: 34,
    name: "Grape",
    type: "Fruit",
    allergens: [],
    chokingHazard: false,
    dogSafe: false,
    description: "Grapes/raisins are highly toxic to dogs.",
    icon: "🍇"
  },
  {
    id: 35,
    name: "Chicken",
    type: "Meat",
    allergens: [],
    chokingHazard: false,
    dogSafe: true,
    description: "",
    icon: "🍗"
  },
  {
    id: 36,
    name: "Cucumber",
    type: "Vegetable",
    allergens: [],
    chokingHazard: false,
    dogSafe: true,
    description: "",
    icon: "🥒"
  },
  {
    id: 37,
    name: "Pasta",
    type: "Grain",
    allergens: ["Wheat"],
    chokingHazard: false,
    dogSafe: false,
    description: "No AKC guidance",
    icon: "🍝"
  },
  {
    id: 38,
    name: "Bagel",
    type: "Grain",
    allergens: ["Wheat"],
    chokingHazard: false,
    dogSafe: false,
    description: "No AKC guidance",
    icon: "🥯"
  },
  {
    id: 39,
    name: "Tarragon",
    type: "Herb/Spice",
    allergens: [],
    chokingHazard: false,
    dogSafe: false,
    description: "No AKC guidance",
    icon: "🌿"
  },
  {
    id: 40,
    name: "Dill",
    type: "Herb/Spice",
    allergens: [],
    chokingHazard: false,
    dogSafe: false,
    description: "No AKC guidance",
    icon: "🌿"
  },
  {
    id: 41,
    name: "Chayote",
    type: "Vegetable",
    allergens: [],
    chokingHazard: false,
    dogSafe: false,
    description: "No AKC guidance",
    icon: "🥬"
  },
  {
    id: 42,
    name: "Lettuce",
    type: "Vegetable",
    allergens: [],
    chokingHazard: false,
    dogSafe: true,
    description: "",
    icon: "🥬"
  },
  {
    id: 43,
    name: "Lemon",
    type: "Fruit",
    allergens: [],
    chokingHazard: false,
    dogSafe: false,
    description: "Citrus is best avoided; oils/compounds can upset dogs.",
    icon: "🍋"
  },
  {
    id: 44,
    name: "Yogurt",
    type: "Dairy",
    allergens: ["Dairy"],
    chokingHazard: false,
    dogSafe: true,
    description: "Many dogs are lactose sensitive; small amounts only.",
    icon: "🥛"
  },
  {
    id: 45,
    name: "Oats",
    type: "Grain",
    allergens: [],
    chokingHazard: false,
    dogSafe: true,
    description: "Plain, cooked; part of many dog diets.",
    icon: "🌾"
  },
  {
    id: 46,
    name: "Paneer",
    type: "Dairy",
    allergens: ["Dairy"],
    chokingHazard: false,
    dogSafe: false,
    description: "No AKC guidance",
    icon: "🧀"
  },
  {
    id: 47,
    name: "Arctic Char",
    type: "Fish",
    allergens: ["Fish"],
    chokingHazard: false,
    dogSafe: false,
    description: "No AKC guidance",
    icon: "🐟"
  },
  {
    id: 48,
    name: "Tacos",
    type: "Prepared",
    allergens: [],
    chokingHazard: false,
    dogSafe: false,
    description: "No AKC guidance",
    icon: "🌮"
  },
  {
    id: 49,
    name: "Kiwi",
    type: "Fruit",
    allergens: [],
    chokingHazard: false,
    dogSafe: false,
    description: "No AKC guidance",
    icon: "🥝"
  },
  {
    id: 50,
    name: "Swiss Chard",
    type: "Vegetable",
    allergens: [],
    chokingHazard: false,
    dogSafe: false,
    description: "No AKC guidance",
    icon: "🥬"
  },
  {
    id: 51,
    name: "Lima Bean",
    type: "Legume",
    allergens: [],
    chokingHazard: true,
    dogSafe: false,
    description: "Choking hazard",
    icon: "🫘"
  },
  {
    id: 52,
    name: "Rhubarb",
    type: "Vegetable",
    allergens: [],
    chokingHazard: false,
    dogSafe: false,
    description: "Leaves are toxic; best to avoid.",
    icon: "🥬"
  },
  {
    id: 53,
    name: "Branzino",
    type: "Fish",
    allergens: ["Fish"],
    chokingHazard: false,
    dogSafe: true,
    description: "Cooked plain; deboned; avoid high-mercury species.",
    icon: "🐟"
  },
  {
    id: 54,
    name: "Sage",
    type: "Herb/Spice",
    allergens: [],
    chokingHazard: false,
    dogSafe: false,
    description: "No AKC guidance",
    icon: "🌿"
  },
  {
    id: 55,
    name: "Granadilla",
    type: "Fruit",
    allergens: [],
    chokingHazard: false,
    dogSafe: false,
    description: "No AKC guidance",
    icon: "🍎"
  },
  {
    id: 56,
    name: "Honeydew Melon",
    type: "Fruit",
    allergens: [],
    chokingHazard: false,
    dogSafe: true,
    description: "In moderation",
    icon: "🍈"
  },
  {
    id: 57,
    name: "Spaghetti Squash",
    type: "Vegetable",
    allergens: [],
    chokingHazard: false,
    dogSafe: true,
    description: "",
    icon: "🥬"
  },
  {
    id: 58,
    name: "Mangosteen",
    type: "Fruit",
    allergens: [],
    chokingHazard: true,
    dogSafe: false,
    description: "Large seed hazard",
    icon: "🍎"
  },
  {
    id: 59,
    name: "Raisins",
    type: "Fruit",
    allergens: [],
    chokingHazard: false,
    dogSafe: false,
    description: "",
    icon: "🍇"
  },
  {
    id: 60,
    name: "Ketchup",
    type: "Condiment",
    allergens: [],
    chokingHazard: false,
    dogSafe: false,
    description: "Avoid for sugars and corn syrup",
    icon: "🧂"
  },
  {
    id: 61,
    name: "Pancakes",
    type: "Prepared",
    allergens: ["Wheat"],
    chokingHazard: false,
    dogSafe: false,
    description: "No AKC guidance",
    icon: "🥞"
  },
  {
    id: 62,
    name: "Papaya",
    type: "Fruit",
    allergens: [],
    chokingHazard: false,
    dogSafe: false,
    description: "No AKC guidance",
    icon: "🍎"
  },
  {
    id: 63,
    name: "Rutabaga",
    type: "Vegetable",
    allergens: [],
    chokingHazard: false,
    dogSafe: false,
    description: "#N/A",
    icon: "🥬"
  },
  {
    id: 64,
    name: "Octopus",
    type: "Shellfish",
    allergens: ["Shellfish"],
    chokingHazard: false,
    dogSafe: false,
    description: "No AKC guidance",
    icon: "🐙"
  },
  {
    id: 65,
    name: "Colby Cheese",
    type: "Dairy",
    allergens: ["Dairy"],
    chokingHazard: false,
    dogSafe: true,
    description: "Many dogs are lactose sensitive; small amounts only.",
    icon: "🧀"
  },
  {
    id: 66,
    name: "Parsley",
    type: "Herb/Spice",
    allergens: [],
    chokingHazard: false,
    dogSafe: false,
    description: "No AKC guidance",
    icon: "🌿"
  },
  {
    id: 67,
    name: "English Muffin",
    type: "Grain",
    allergens: ["Wheat"],
    chokingHazard: false,
    dogSafe: true,
    description: "Plain only; avoid xylitol, raisins, garlic/onion.",
    icon: "🍞"
  },
  {
    id: 68,
    name: "Parsnip",
    type: "Vegetable",
    allergens: [],
    chokingHazard: false,
    dogSafe: true,
    description: "",
    icon: "🥬"
  },
  {
    id: 69,
    name: "Guava",
    type: "Fruit",
    allergens: [],
    chokingHazard: false,
    dogSafe: false,
    description: "#N/A",
    icon: "🍎"
  },
  {
    id: 70,
    name: "Emmentaler Cheese",
    type: "Dairy",
    allergens: ["Dairy"],
    chokingHazard: false,
    dogSafe: true,
    description: "Many dogs are lactose sensitive; small amounts only.",
    icon: "🧀"
  }
  // ... continuing with more foods from the CSV data
];

// Helper function to get all unique food types
export const getFoodTypes = (): string[] => {
  const types = new Set(FOODS.map(food => food.type));
  return Array.from(types).sort();
};

// Helper function to get all foods with allergens
export const getAllergenFoods = (): Food[] => {
  return FOODS.filter(food => food.allergens.length > 0);
};

// Helper function to search foods
export const searchFoods = (searchTerm: string): Food[] => {
  const term = searchTerm.toLowerCase();
  return FOODS.filter(food => 
    food.name.toLowerCase().includes(term) ||
    food.description.toLowerCase().includes(term) ||
    food.type.toLowerCase().includes(term)
  );
};