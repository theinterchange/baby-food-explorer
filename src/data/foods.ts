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
  // FRUITS
  { id: 1, name: "Apple", type: "Fruit", allergens: [], chokingHazard: false, dogSafe: true, description: "Remove seeds and core", icon: getIconForFood("Apple", "Fruit") },
  { id: 2, name: "Avocado", type: "Fruit", allergens: [], chokingHazard: false, dogSafe: false, description: "AKC: avoid avocado due to persin and fat; pits/skins/leaves toxic.", icon: getIconForFood("Avocado", "Fruit") },
  { id: 3, name: "Banana", type: "Fruit", allergens: [], chokingHazard: false, dogSafe: true, description: "Excellent first food for babies", icon: getIconForFood("Banana", "Fruit") },
  { id: 4, name: "Blueberries", type: "Fruit", allergens: [], chokingHazard: true, dogSafe: true, description: "Cut in half for babies under 12 months", icon: getIconForFood("Blueberries", "Fruit") },
  { id: 5, name: "Strawberry", type: "Fruit", allergens: [], chokingHazard: false, dogSafe: true, description: "Cut into small pieces", icon: getIconForFood("Strawberry", "Fruit") },
  { id: 6, name: "Orange", type: "Fruit", allergens: [], chokingHazard: false, dogSafe: true, description: "Small amounts only; remove peel and seeds.", icon: getIconForFood("Orange", "Fruit") },
  { id: 7, name: "Grapes", type: "Fruit", allergens: [], chokingHazard: true, dogSafe: false, description: "Cut lengthwise into quarters. Grapes/raisins are highly toxic to dogs.", icon: getIconForFood("Grapes", "Fruit") },
  { id: 8, name: "Mango", type: "Fruit", allergens: [], chokingHazard: false, dogSafe: true, description: "Remove pit and skin", icon: getIconForFood("Mango", "Fruit") },
  { id: 9, name: "Pineapple", type: "Fruit", allergens: [], chokingHazard: false, dogSafe: true, description: "Remove core and skin", icon: getIconForFood("Pineapple", "Fruit") },
  { id: 10, name: "Peach", type: "Fruit", allergens: [], chokingHazard: false, dogSafe: true, description: "Remove pit and skin", icon: getIconForFood("Peach", "Fruit") },
  { id: 11, name: "Pear", type: "Fruit", allergens: [], chokingHazard: false, dogSafe: true, description: "Remove seeds and core", icon: getIconForFood("Pear", "Fruit") },
  { id: 12, name: "Kiwi", type: "Fruit", allergens: [], chokingHazard: false, dogSafe: true, description: "Remove skin", icon: getIconForFood("Kiwi", "Fruit") },
  { id: 13, name: "Watermelon", type: "Fruit", allergens: [], chokingHazard: false, dogSafe: true, description: "Remove seeds", icon: getIconForFood("Watermelon", "Fruit") },
  { id: 14, name: "Cantaloupe", type: "Fruit", allergens: [], chokingHazard: false, dogSafe: true, description: "Remove seeds and rind", icon: getIconForFood("Cantaloupe", "Fruit") },
  { id: 15, name: "Honeydew", type: "Fruit", allergens: [], chokingHazard: false, dogSafe: true, description: "Remove seeds and rind", icon: getIconForFood("Honeydew", "Fruit") },
  { id: 16, name: "Papaya", type: "Fruit", allergens: [], chokingHazard: false, dogSafe: true, description: "Remove seeds and skin", icon: getIconForFood("Papaya", "Fruit") },
  { id: 17, name: "Plum", type: "Fruit", allergens: [], chokingHazard: false, dogSafe: true, description: "Remove pit", icon: getIconForFood("Plum", "Fruit") },
  { id: 18, name: "Apricot", type: "Fruit", allergens: [], chokingHazard: false, dogSafe: true, description: "Remove pit", icon: getIconForFood("Apricot", "Fruit") },
  { id: 19, name: "Cherry", type: "Fruit", allergens: [], chokingHazard: true, dogSafe: false, description: "Remove pit. Choking hazard for babies.", icon: getIconForFood("Cherry", "Fruit") },
  { id: 20, name: "Blackberries", type: "Fruit", allergens: [], chokingHazard: true, dogSafe: true, description: "Cut in half for babies under 12 months", icon: getIconForFood("Blackberries", "Fruit") },
  { id: 21, name: "Raspberries", type: "Fruit", allergens: [], chokingHazard: true, dogSafe: true, description: "Mash or cut for babies", icon: getIconForFood("Raspberries", "Fruit") },
  { id: 22, name: "Cranberries", type: "Fruit", allergens: [], chokingHazard: true, dogSafe: true, description: "Cook and mash for babies", icon: getIconForFood("Cranberries", "Fruit") },
  { id: 23, name: "Pomegranate", type: "Fruit", allergens: [], chokingHazard: true, dogSafe: true, description: "Seeds are choking hazard", icon: getIconForFood("Pomegranate", "Fruit") },
  { id: 24, name: "Fig", type: "Fruit", allergens: [], chokingHazard: false, dogSafe: true, description: "Remove skin for babies", icon: getIconForFood("Fig", "Fruit") },
  { id: 25, name: "Date", type: "Fruit", allergens: [], chokingHazard: true, dogSafe: true, description: "Remove pit. Very sticky.", icon: getIconForFood("Date", "Fruit") },
  { id: 26, name: "Raisins", type: "Fruit", allergens: [], chokingHazard: true, dogSafe: false, description: "Choking hazard. Raisins are highly toxic to dogs.", icon: getIconForFood("Raisins", "Fruit") },
  { id: 27, name: "Coconut", type: "Fruit", allergens: [], chokingHazard: false, dogSafe: true, description: "Fresh coconut meat only", icon: getIconForFood("Coconut", "Fruit") },
  { id: 28, name: "Lemon", type: "Fruit", allergens: [], chokingHazard: false, dogSafe: false, description: "Citrus is best avoided; oils/compounds can upset dogs.", icon: getIconForFood("Lemon", "Fruit") },
  { id: 29, name: "Lime", type: "Fruit", allergens: [], chokingHazard: false, dogSafe: false, description: "Citrus is best avoided; oils/compounds can upset dogs.", icon: getIconForFood("Lime", "Fruit") },
  { id: 30, name: "Grapefruit", type: "Fruit", allergens: [], chokingHazard: false, dogSafe: false, description: "Citrus is best avoided; oils/compounds can upset dogs.", icon: getIconForFood("Grapefruit", "Fruit") },
  { id: 31, name: "Tangerine", type: "Fruit", allergens: [], chokingHazard: false, dogSafe: true, description: "Small amounts only; remove peel and seeds.", icon: getIconForFood("Tangerine", "Fruit") },
  { id: 32, name: "Mandarin Orange", type: "Fruit", allergens: [], chokingHazard: false, dogSafe: true, description: "Small amounts only; remove peel and seeds.", icon: getIconForFood("Mandarin Orange", "Fruit") },
  { id: 33, name: "Star Fruit", type: "Fruit", allergens: [], chokingHazard: false, dogSafe: false, description: "Remove seeds", icon: getIconForFood("Star Fruit", "Fruit") },
  { id: 34, name: "Dragon Fruit", type: "Fruit", allergens: [], chokingHazard: false, dogSafe: true, description: "Remove skin", icon: getIconForFood("Dragon Fruit", "Fruit") },
  { id: 35, name: "Passion Fruit", type: "Fruit", allergens: [], chokingHazard: true, dogSafe: true, description: "Seeds may be choking hazard", icon: getIconForFood("Passion Fruit", "Fruit") },
  { id: 36, name: "Guava", type: "Fruit", allergens: [], chokingHazard: false, dogSafe: true, description: "Remove seeds", icon: getIconForFood("Guava", "Fruit") },
  { id: 37, name: "Lychee", type: "Fruit", allergens: [], chokingHazard: true, dogSafe: true, description: "Remove pit and skin", icon: getIconForFood("Lychee", "Fruit") },
  { id: 38, name: "Plantain", type: "Fruit", allergens: [], chokingHazard: false, dogSafe: false, description: "Cook before serving", icon: getIconForFood("Plantain", "Fruit") },
  { id: 39, name: "Persimmon", type: "Fruit", allergens: [], chokingHazard: false, dogSafe: true, description: "Remove seeds", icon: getIconForFood("Persimmon", "Fruit") },
  { id: 40, name: "Jackfruit", type: "Fruit", allergens: [], chokingHazard: false, dogSafe: true, description: "Remove seeds and skin", icon: getIconForFood("Jackfruit", "Fruit") },

  // VEGETABLES
  { id: 41, name: "Carrot", type: "Vegetable", allergens: [], chokingHazard: false, dogSafe: true, description: "Cook until soft for babies", icon: getIconForFood("Carrot", "Vegetable") },
  { id: 42, name: "Sweet Potato", type: "Vegetable", allergens: [], chokingHazard: false, dogSafe: true, description: "Excellent first food", icon: getIconForFood("Sweet Potato", "Vegetable") },
  { id: 43, name: "Broccoli", type: "Vegetable", allergens: [], chokingHazard: false, dogSafe: true, description: "Steam until soft", icon: getIconForFood("Broccoli", "Vegetable") },
  { id: 44, name: "Cauliflower", type: "Vegetable", allergens: [], chokingHazard: false, dogSafe: true, description: "Steam until soft", icon: getIconForFood("Cauliflower", "Vegetable") },
  { id: 45, name: "Green Beans", type: "Vegetable", allergens: [], chokingHazard: false, dogSafe: true, description: "Cut into small pieces", icon: getIconForFood("Green Beans", "Vegetable") },
  { id: 46, name: "Peas", type: "Vegetable", allergens: [], chokingHazard: true, dogSafe: true, description: "Mash for babies under 12 months", icon: getIconForFood("Peas", "Vegetable") },
  { id: 47, name: "Corn", type: "Vegetable", allergens: [], chokingHazard: false, dogSafe: true, description: "Remove from cob", icon: getIconForFood("Corn", "Vegetable") },
  { id: 48, name: "Spinach", type: "Vegetable", allergens: [], chokingHazard: false, dogSafe: true, description: "Cook thoroughly", icon: getIconForFood("Spinach", "Vegetable") },
  { id: 49, name: "Kale", type: "Vegetable", allergens: [], chokingHazard: false, dogSafe: true, description: "Remove stems, cook thoroughly", icon: getIconForFood("Kale", "Vegetable") },
  { id: 50, name: "Lettuce", type: "Vegetable", allergens: [], chokingHazard: false, dogSafe: true, description: "Shred finely", icon: getIconForFood("Lettuce", "Vegetable") },
  { id: 51, name: "Cucumber", type: "Vegetable", allergens: [], chokingHazard: false, dogSafe: true, description: "Remove seeds and skin", icon: getIconForFood("Cucumber", "Vegetable") },
  { id: 52, name: "Zucchini", type: "Vegetable", allergens: [], chokingHazard: false, dogSafe: true, description: "Steam until soft", icon: getIconForFood("Zucchini", "Vegetable") },
  { id: 53, name: "Yellow Squash", type: "Vegetable", allergens: [], chokingHazard: false, dogSafe: true, description: "Steam until soft", icon: getIconForFood("Yellow Squash", "Vegetable") },
  { id: 54, name: "Pumpkin", type: "Vegetable", allergens: [], chokingHazard: false, dogSafe: true, description: "Cook thoroughly", icon: getIconForFood("Pumpkin", "Vegetable") },
  { id: 55, name: "Butternut Squash", type: "Vegetable", allergens: [], chokingHazard: false, dogSafe: true, description: "Cook thoroughly", icon: getIconForFood("Butternut Squash", "Vegetable") },
  { id: 56, name: "Acorn Squash", type: "Vegetable", allergens: [], chokingHazard: false, dogSafe: true, description: "Cook thoroughly", icon: getIconForFood("Acorn Squash", "Vegetable") },
  { id: 57, name: "Bell Pepper", type: "Vegetable", allergens: [], chokingHazard: false, dogSafe: true, description: "Remove seeds and stem", icon: getIconForFood("Bell Pepper", "Vegetable") },
  { id: 58, name: "Tomato", type: "Vegetable", allergens: [], chokingHazard: false, dogSafe: false, description: "AKC advises avoiding tomatoes due to solanine in green parts; ripe flesh is generally safe.", icon: getIconForFood("Tomato", "Vegetable") },
  { id: 59, name: "Onion", type: "Vegetable", allergens: [], chokingHazard: false, dogSafe: false, description: "Allium family is toxic to dogs.", icon: getIconForFood("Onion", "Vegetable") },
  { id: 60, name: "Garlic", type: "Herb/Spice", allergens: [], chokingHazard: false, dogSafe: false, description: "Allium family is toxic to dogs.", icon: getIconForFood("Garlic", "Herb/Spice") },
  { id: 61, name: "Potato", type: "Vegetable", allergens: [], chokingHazard: false, dogSafe: true, description: "Cook thoroughly, no green parts", icon: getIconForFood("Potato", "Vegetable") },
  { id: 62, name: "Beet", type: "Vegetable", allergens: [], chokingHazard: false, dogSafe: true, description: "Cook thoroughly", icon: getIconForFood("Beet", "Vegetable") },
  { id: 63, name: "Turnip", type: "Vegetable", allergens: [], chokingHazard: false, dogSafe: true, description: "Cook thoroughly", icon: getIconForFood("Turnip", "Vegetable") },
  { id: 64, name: "Radish", type: "Vegetable", allergens: [], chokingHazard: false, dogSafe: true, description: "Cut into small pieces", icon: getIconForFood("Radish", "Vegetable") },
  { id: 65, name: "Parsnip", type: "Vegetable", allergens: [], chokingHazard: false, dogSafe: true, description: "Cook thoroughly", icon: getIconForFood("Parsnip", "Vegetable") },
  { id: 66, name: "Celery", type: "Vegetable", allergens: [], chokingHazard: true, dogSafe: true, description: "Cut into small pieces, remove strings", icon: getIconForFood("Celery", "Vegetable") },
  { id: 67, name: "Asparagus", type: "Vegetable", allergens: [], chokingHazard: false, dogSafe: false, description: "No real benefit for dogs; tough raw and loses value cooked.", icon: getIconForFood("Asparagus", "Vegetable") },
  { id: 68, name: "Brussels Sprouts", type: "Vegetable", allergens: [], chokingHazard: false, dogSafe: true, description: "Cook thoroughly, cut in half", icon: getIconForFood("Brussels Sprouts", "Vegetable") },
  { id: 69, name: "Cabbage", type: "Vegetable", allergens: [], chokingHazard: false, dogSafe: true, description: "Shred finely", icon: getIconForFood("Cabbage", "Vegetable") },
  { id: 70, name: "Bok Choy", type: "Vegetable", allergens: [], chokingHazard: false, dogSafe: true, description: "Cook thoroughly", icon: getIconForFood("Bok Choy", "Vegetable") },
  { id: 71, name: "Swiss Chard", type: "Vegetable", allergens: [], chokingHazard: false, dogSafe: true, description: "Remove stems, cook thoroughly", icon: getIconForFood("Swiss Chard", "Vegetable") },
  { id: 72, name: "Collard Greens", type: "Vegetable", allergens: [], chokingHazard: false, dogSafe: true, description: "Remove stems, cook thoroughly", icon: getIconForFood("Collard Greens", "Vegetable") },
  { id: 73, name: "Arugula", type: "Vegetable", allergens: [], chokingHazard: false, dogSafe: true, description: "Chop finely", icon: getIconForFood("Arugula", "Vegetable") },
  { id: 74, name: "Watercress", type: "Vegetable", allergens: [], chokingHazard: false, dogSafe: true, description: "Chop finely", icon: getIconForFood("Watercress", "Vegetable") },
  { id: 75, name: "Eggplant", type: "Vegetable", allergens: [], chokingHazard: false, dogSafe: true, description: "Cook thoroughly", icon: getIconForFood("Eggplant", "Vegetable") },
  { id: 76, name: "Okra", type: "Vegetable", allergens: [], chokingHazard: false, dogSafe: true, description: "Cook thoroughly", icon: getIconForFood("Okra", "Vegetable") },
  { id: 77, name: "Artichoke", type: "Vegetable", allergens: [], chokingHazard: false, dogSafe: true, description: "Cook thoroughly, remove tough parts", icon: getIconForFood("Artichoke", "Vegetable") },
  { id: 78, name: "Leek", type: "Vegetable", allergens: [], chokingHazard: false, dogSafe: false, description: "Allium family is toxic to dogs.", icon: getIconForFood("Leek", "Vegetable") },
  { id: 79, name: "Fennel", type: "Vegetable", allergens: [], chokingHazard: false, dogSafe: true, description: "Cook thoroughly", icon: getIconForFood("Fennel", "Vegetable") },
  { id: 80, name: "Jicama", type: "Vegetable", allergens: [], chokingHazard: false, dogSafe: true, description: "Remove skin", icon: getIconForFood("Jicama", "Vegetable") },

  // PROTEINS - MEAT
  { id: 81, name: "Chicken", type: "Meat", allergens: [], chokingHazard: false, dogSafe: true, description: "Cook thoroughly, remove bones", icon: getIconForFood("Chicken", "Meat") },
  { id: 82, name: "Turkey", type: "Meat", allergens: [], chokingHazard: false, dogSafe: true, description: "Cook thoroughly, remove bones", icon: getIconForFood("Turkey", "Meat") },
  { id: 83, name: "Beef", type: "Meat", allergens: [], chokingHazard: false, dogSafe: true, description: "Cook thoroughly, trim fat", icon: getIconForFood("Beef", "Meat") },
  { id: 84, name: "Pork", type: "Meat", allergens: [], chokingHazard: false, dogSafe: true, description: "Cook thoroughly, avoid seasoning", icon: getIconForFood("Pork", "Meat") },
  { id: 85, name: "Lamb", type: "Meat", allergens: [], chokingHazard: false, dogSafe: true, description: "Cook thoroughly, trim fat", icon: getIconForFood("Lamb", "Meat") },
  { id: 86, name: "Duck", type: "Meat", allergens: [], chokingHazard: false, dogSafe: true, description: "Cook thoroughly, remove skin and bones", icon: getIconForFood("Duck", "Meat") },
  { id: 87, name: "Steak", type: "Meat", allergens: [], chokingHazard: false, dogSafe: true, description: "Aim for unsalted", icon: getIconForFood("Steak", "Meat") },
  { id: 88, name: "Ground Beef", type: "Meat", allergens: [], chokingHazard: false, dogSafe: true, description: "Cook thoroughly", icon: getIconForFood("Ground Beef", "Meat") },
  { id: 89, name: "Ground Turkey", type: "Meat", allergens: [], chokingHazard: false, dogSafe: true, description: "Cook thoroughly", icon: getIconForFood("Ground Turkey", "Meat") },
  { id: 90, name: "Chicken Breast", type: "Meat", allergens: [], chokingHazard: false, dogSafe: true, description: "Cook thoroughly, cut into small pieces", icon: getIconForFood("Chicken Breast", "Meat") },

  // PROTEINS - FISH & SEAFOOD
  { id: 91, name: "Salmon", type: "Fish", allergens: ["Fish"], chokingHazard: false, dogSafe: true, description: "Cooked plain; deboned; avoid high-mercury species.", icon: getIconForFood("Salmon", "Fish") },
  { id: 92, name: "Cod", type: "Fish", allergens: ["Fish"], chokingHazard: false, dogSafe: true, description: "Cook thoroughly, remove all bones", icon: getIconForFood("Cod", "Fish") },
  { id: 93, name: "Tuna", type: "Fish", allergens: ["Fish"], chokingHazard: false, dogSafe: false, description: "High mercury content", icon: getIconForFood("Tuna", "Fish") },
  { id: 94, name: "Mackerel", type: "Fish", allergens: ["Fish"], chokingHazard: false, dogSafe: true, description: "Cook thoroughly, remove all bones", icon: getIconForFood("Mackerel", "Fish") },
  { id: 95, name: "Sardines", type: "Fish", allergens: ["Fish"], chokingHazard: true, dogSafe: true, description: "Remove bones, small bones may be choking hazard", icon: getIconForFood("Sardines", "Fish") },
  { id: 96, name: "Tilapia", type: "Fish", allergens: ["Fish"], chokingHazard: false, dogSafe: true, description: "Cook thoroughly, remove all bones", icon: getIconForFood("Tilapia", "Fish") },
  { id: 97, name: "Shrimp", type: "Shellfish", allergens: ["Shellfish"], chokingHazard: true, dogSafe: true, description: "Cook thoroughly, remove shell and tail", icon: getIconForFood("Shrimp", "Shellfish") },
  { id: 98, name: "Crab", type: "Shellfish", allergens: ["Shellfish"], chokingHazard: true, dogSafe: true, description: "Cook thoroughly, remove shell", icon: getIconForFood("Crab", "Shellfish") },
  { id: 99, name: "Lobster", type: "Shellfish", allergens: ["Shellfish"], chokingHazard: true, dogSafe: true, description: "Cook thoroughly, remove shell", icon: getIconForFood("Lobster", "Shellfish") },
  { id: 100, name: "Scallops", type: "Shellfish", allergens: ["Shellfish"], chokingHazard: true, dogSafe: true, description: "Cook thoroughly, cut into small pieces", icon: getIconForFood("Scallops", "Shellfish") },

  // EGGS & DAIRY
  { id: 101, name: "Egg", type: "Egg", allergens: ["Egg"], chokingHazard: false, dogSafe: true, description: "Cooked eggs are safe; avoid raw whites.", icon: getIconForFood("Egg", "Egg") },
  { id: 102, name: "Egg Yolk", type: "Egg", allergens: ["Egg"], chokingHazard: false, dogSafe: true, description: "Rich in nutrients, introduce before whites", icon: getIconForFood("Egg Yolk", "Egg") },
  { id: 103, name: "Egg White", type: "Egg", allergens: ["Egg"], chokingHazard: false, dogSafe: true, description: "Cook thoroughly", icon: getIconForFood("Egg White", "Egg") },
  { id: 104, name: "Cheese", type: "Dairy", allergens: ["Dairy"], chokingHazard: false, dogSafe: true, description: "Many dogs are lactose sensitive; small amounts only.", icon: getIconForFood("Cheese", "Dairy") },
  { id: 105, name: "Yogurt", type: "Dairy", allergens: ["Dairy"], chokingHazard: false, dogSafe: true, description: "Plain, unsweetened only", icon: getIconForFood("Yogurt", "Dairy") },
  { id: 106, name: "Milk", type: "Dairy", allergens: ["Dairy"], chokingHazard: false, dogSafe: false, description: "Not recommended for babies under 12 months", icon: getIconForFood("Milk", "Dairy") },
  { id: 107, name: "Butter", type: "Dairy", allergens: ["Dairy"], chokingHazard: false, dogSafe: true, description: "Use sparingly", icon: getIconForFood("Butter", "Dairy") },
  { id: 108, name: "Cream Cheese", type: "Dairy", allergens: ["Dairy"], chokingHazard: false, dogSafe: true, description: "Use sparingly", icon: getIconForFood("Cream Cheese", "Dairy") },
  { id: 109, name: "Cottage Cheese", type: "Dairy", allergens: ["Dairy"], chokingHazard: false, dogSafe: true, description: "Low sodium variety", icon: getIconForFood("Cottage Cheese", "Dairy") },
  { id: 110, name: "Mozzarella", type: "Dairy", allergens: ["Dairy"], chokingHazard: false, dogSafe: true, description: "Shred or cut into small pieces", icon: getIconForFood("Mozzarella", "Dairy") },
  { id: 111, name: "Cheddar Cheese", type: "Dairy", allergens: ["Dairy"], chokingHazard: false, dogSafe: true, description: "Shred or cut into small pieces", icon: getIconForFood("Cheddar Cheese", "Dairy") },
  { id: 112, name: "Parmesan", type: "Dairy", allergens: ["Dairy"], chokingHazard: false, dogSafe: true, description: "Grate finely", icon: getIconForFood("Parmesan", "Dairy") },
  { id: 113, name: "Ricotta", type: "Dairy", allergens: ["Dairy"], chokingHazard: false, dogSafe: true, description: "Smooth texture, good for mixing", icon: getIconForFood("Ricotta", "Dairy") },

  // GRAINS & CEREALS
  { id: 114, name: "Rice", type: "Grain", allergens: [], chokingHazard: false, dogSafe: true, description: "Plain, cooked; part of many dog diets.", icon: getIconForFood("Rice", "Grain") },
  { id: 115, name: "Oats", type: "Grain", allergens: [], chokingHazard: false, dogSafe: true, description: "Cook thoroughly", icon: getIconForFood("Oats", "Grain") },
  { id: 116, name: "Quinoa", type: "Grain", allergens: [], chokingHazard: false, dogSafe: true, description: "Cook thoroughly, high in protein", icon: getIconForFood("Quinoa", "Grain") },
  { id: 117, name: "Barley", type: "Grain", allergens: [], chokingHazard: false, dogSafe: true, description: "Cook thoroughly", icon: getIconForFood("Barley", "Grain") },
  { id: 118, name: "Bread", type: "Grain", allergens: ["Wheat"], chokingHazard: false, dogSafe: true, description: "Plain only; avoid xylitol, raisins, garlic/onion.", icon: getIconForFood("Bread", "Grain") },
  { id: 119, name: "Pasta", type: "Grain", allergens: ["Wheat"], chokingHazard: false, dogSafe: true, description: "Cook until very soft", icon: getIconForFood("Pasta", "Grain") },
  { id: 120, name: "Cereal", type: "Grain", allergens: ["Wheat"], chokingHazard: false, dogSafe: false, description: "Choose low sugar, age-appropriate varieties", icon: getIconForFood("Cereal", "Grain") },
  { id: 121, name: "Toast", type: "Grain", allergens: ["Wheat"], chokingHazard: false, dogSafe: true, description: "Cut into strips for self-feeding", icon: getIconForFood("Toast", "Grain") },
  { id: 122, name: "Crackers", type: "Grain", allergens: ["Wheat"], chokingHazard: true, dogSafe: false, description: "Choose low sodium varieties", icon: getIconForFood("Crackers", "Grain") },
  { id: 123, name: "Bagel", type: "Grain", allergens: ["Wheat"], chokingHazard: false, dogSafe: false, description: "Cut into appropriate sized pieces", icon: getIconForFood("Bagel", "Grain") },
  { id: 124, name: "Millet", type: "Grain", allergens: [], chokingHazard: false, dogSafe: true, description: "Cook thoroughly", icon: getIconForFood("Millet", "Grain") },
  { id: 125, name: "Brown Rice", type: "Grain", allergens: [], chokingHazard: false, dogSafe: true, description: "Cook thoroughly", icon: getIconForFood("Brown Rice", "Grain") },
  { id: 126, name: "Wild Rice", type: "Grain", allergens: [], chokingHazard: false, dogSafe: true, description: "Cook thoroughly", icon: getIconForFood("Wild Rice", "Grain") },

  // LEGUMES & BEANS
  { id: 127, name: "Black Beans", type: "Legume", allergens: [], chokingHazard: true, dogSafe: true, description: "Mash for babies", icon: getIconForFood("Black Beans", "Legume") },
  { id: 128, name: "Kidney Beans", type: "Legume", allergens: [], chokingHazard: true, dogSafe: true, description: "Mash for babies", icon: getIconForFood("Kidney Beans", "Legume") },
  { id: 129, name: "Chickpeas", type: "Legume", allergens: [], chokingHazard: true, dogSafe: true, description: "Mash for babies", icon: getIconForFood("Chickpeas", "Legume") },
  { id: 130, name: "Lentils", type: "Legume", allergens: [], chokingHazard: false, dogSafe: true, description: "Cook until very soft", icon: getIconForFood("Lentils", "Legume") },
  { id: 131, name: "Navy Beans", type: "Legume", allergens: [], chokingHazard: true, dogSafe: true, description: "Mash for babies", icon: getIconForFood("Navy Beans", "Legume") },
  { id: 132, name: "Pinto Beans", type: "Legume", allergens: [], chokingHazard: true, dogSafe: true, description: "Mash for babies", icon: getIconForFood("Pinto Beans", "Legume") },
  { id: 133, name: "Lima Beans", type: "Legume", allergens: [], chokingHazard: true, dogSafe: true, description: "Mash for babies", icon: getIconForFood("Lima Beans", "Legume") },
  { id: 134, name: "Split Peas", type: "Legume", allergens: [], chokingHazard: false, dogSafe: true, description: "Cook until very soft", icon: getIconForFood("Split Peas", "Legume") },
  { id: 135, name: "Edamame", type: "Legume", allergens: ["Soy"], chokingHazard: true, dogSafe: true, description: "Remove pods, mash for babies", icon: getIconForFood("Edamame", "Legume") },
  { id: 136, name: "Soybeans", type: "Legume", allergens: ["Soy"], chokingHazard: true, dogSafe: true, description: "Cook thoroughly, mash for babies", icon: getIconForFood("Soybeans", "Legume") },

  // NUTS & SEEDS
  { id: 137, name: "Peanut", type: "Tree Nut", allergens: ["Peanut"], chokingHazard: true, dogSafe: true, description: "Choking hazard - introduce as peanut butter", icon: getIconForFood("Peanut", "Tree Nut") },
  { id: 138, name: "Peanut Butter", type: "Tree Nut", allergens: ["Peanut"], chokingHazard: false, dogSafe: true, description: "Unsalted; ensure xylitol-free; moderation.", icon: getIconForFood("Peanut Butter", "Tree Nut") },
  { id: 139, name: "Almond", type: "Tree Nut", allergens: ["Tree Nuts"], chokingHazard: true, dogSafe: true, description: "Choking hazard - introduce as almond butter", icon: getIconForFood("Almond", "Tree Nut") },
  { id: 140, name: "Almond Butter", type: "Tree Nut", allergens: ["Tree Nuts"], chokingHazard: false, dogSafe: true, description: "Spread thinly", icon: getIconForFood("Almond Butter", "Tree Nut") },
  { id: 141, name: "Cashew", type: "Tree Nut", allergens: ["Tree Nuts"], chokingHazard: true, dogSafe: true, description: "Choking hazard - introduce as cashew butter", icon: getIconForFood("Cashew", "Tree Nut") },
  { id: 142, name: "Walnut", type: "Tree Nut", allergens: ["Tree Nuts"], chokingHazard: true, dogSafe: false, description: "Choking hazard, can be toxic to dogs", icon: getIconForFood("Walnut", "Tree Nut") },
  { id: 143, name: "Pecan", type: "Tree Nut", allergens: ["Tree Nuts"], chokingHazard: true, dogSafe: false, description: "Choking hazard, can upset dog's digestive system", icon: getIconForFood("Pecan", "Tree Nut") },
  { id: 144, name: "Hazelnut", type: "Tree Nut", allergens: ["Tree Nuts"], chokingHazard: true, dogSafe: true, description: "Choking hazard", icon: getIconForFood("Hazelnut", "Tree Nut") },
  { id: 145, name: "Brazil Nut", type: "Tree Nut", allergens: ["Tree Nuts"], chokingHazard: true, dogSafe: true, description: "Choking hazard, very high in selenium", icon: getIconForFood("Brazil Nut", "Tree Nut") },
  { id: 146, name: "Pistachio", type: "Tree Nut", allergens: ["Tree Nuts"], chokingHazard: true, dogSafe: false, description: "Choking hazard, shells toxic to dogs", icon: getIconForFood("Pistachio", "Tree Nut") },
  { id: 147, name: "Macadamia Nut", type: "Tree Nut", allergens: ["Tree Nuts"], chokingHazard: true, dogSafe: false, description: "Highly toxic to dogs", icon: getIconForFood("Macadamia Nut", "Tree Nut") },
  { id: 148, name: "Pine Nuts", type: "Tree Nut", allergens: ["Tree Nuts"], chokingHazard: true, dogSafe: true, description: "Choking hazard", icon: getIconForFood("Pine Nuts", "Tree Nut") },
  { id: 149, name: "Sunflower Seeds", type: "Seed", allergens: [], chokingHazard: true, dogSafe: true, description: "Remove shells, choking hazard", icon: getIconForFood("Sunflower Seeds", "Seed") },
  { id: 150, name: "Pumpkin Seeds", type: "Seed", allergens: [], chokingHazard: true, dogSafe: true, description: "Remove shells, choking hazard", icon: getIconForFood("Pumpkin Seeds", "Seed") },
  { id: 151, name: "Sesame Seeds", type: "Seed", allergens: ["Sesame"], chokingHazard: true, dogSafe: true, description: "Choking hazard", icon: getIconForFood("Sesame Seeds", "Seed") },
  { id: 152, name: "Tahini", type: "Seed", allergens: ["Sesame"], chokingHazard: false, dogSafe: true, description: "Spread thinly", icon: getIconForFood("Tahini", "Seed") },
  { id: 153, name: "Chia Seeds", type: "Seed", allergens: [], chokingHazard: true, dogSafe: true, description: "Soak before serving", icon: getIconForFood("Chia Seeds", "Seed") },
  { id: 154, name: "Flax Seeds", type: "Seed", allergens: [], chokingHazard: true, dogSafe: true, description: "Grind before serving", icon: getIconForFood("Flax Seeds", "Seed") },

  // HERBS & SPICES
  { id: 155, name: "Basil", type: "Herb/Spice", allergens: [], chokingHazard: false, dogSafe: true, description: "Fresh or dried", icon: getIconForFood("Basil", "Herb/Spice") },
  { id: 156, name: "Parsley", type: "Herb/Spice", allergens: [], chokingHazard: false, dogSafe: true, description: "Chop finely", icon: getIconForFood("Parsley", "Herb/Spice") },
  { id: 157, name: "Cilantro", type: "Herb/Spice", allergens: [], chokingHazard: false, dogSafe: true, description: "Chop finely", icon: getIconForFood("Cilantro", "Herb/Spice") },
  { id: 158, name: "Dill", type: "Herb/Spice", allergens: [], chokingHazard: false, dogSafe: true, description: "Chop finely", icon: getIconForFood("Dill", "Herb/Spice") },
  { id: 159, name: "Oregano", type: "Herb/Spice", allergens: [], chokingHazard: false, dogSafe: true, description: "Use sparingly", icon: getIconForFood("Oregano", "Herb/Spice") },
  { id: 160, name: "Thyme", type: "Herb/Spice", allergens: [], chokingHazard: false, dogSafe: true, description: "Use sparingly", icon: getIconForFood("Thyme", "Herb/Spice") },
  { id: 161, name: "Rosemary", type: "Herb/Spice", allergens: [], chokingHazard: false, dogSafe: true, description: "Use sparingly", icon: getIconForFood("Rosemary", "Herb/Spice") },
  { id: 162, name: "Sage", type: "Herb/Spice", allergens: [], chokingHazard: false, dogSafe: true, description: "Use sparingly", icon: getIconForFood("Sage", "Herb/Spice") },
  { id: 163, name: "Mint", type: "Herb/Spice", allergens: [], chokingHazard: false, dogSafe: true, description: "Fresh leaves", icon: getIconForFood("Mint", "Herb/Spice") },
  { id: 164, name: "Cinnamon", type: "Herb/Spice", allergens: [], chokingHazard: false, dogSafe: true, description: "Use sparingly", icon: getIconForFood("Cinnamon", "Herb/Spice") },
  { id: 165, name: "Ginger", type: "Herb/Spice", allergens: [], chokingHazard: false, dogSafe: true, description: "Use sparingly", icon: getIconForFood("Ginger", "Herb/Spice") },
  { id: 166, name: "Turmeric", type: "Herb/Spice", allergens: [], chokingHazard: false, dogSafe: true, description: "Use sparingly", icon: getIconForFood("Turmeric", "Herb/Spice") },
  { id: 167, name: "Cumin", type: "Herb/Spice", allergens: [], chokingHazard: false, dogSafe: true, description: "Use sparingly", icon: getIconForFood("Cumin", "Herb/Spice") },
  { id: 168, name: "Paprika", type: "Herb/Spice", allergens: [], chokingHazard: false, dogSafe: true, description: "Use sparingly", icon: getIconForFood("Paprika", "Herb/Spice") },
  { id: 169, name: "Black Pepper", type: "Herb/Spice", allergens: [], chokingHazard: false, dogSafe: true, description: "Use very sparingly", icon: getIconForFood("Black Pepper", "Herb/Spice") },
  { id: 170, name: "Salt", type: "Condiment", allergens: [], chokingHazard: false, dogSafe: false, description: "Avoid for babies under 12 months", icon: getIconForFood("Salt", "Condiment") },

  // FUNGI
  { id: 171, name: "White Button Mushroom", type: "Fungi", allergens: [], chokingHazard: false, dogSafe: false, description: "Wild mushrooms are toxic; AKC advises avoiding mushrooms even though plain store-bought types are generally fine.", icon: getIconForFood("White Button Mushroom", "Fungi") },
  { id: 172, name: "Shiitake Mushroom", type: "Fungi", allergens: [], chokingHazard: false, dogSafe: false, description: "Cook thoroughly", icon: getIconForFood("Shiitake Mushroom", "Fungi") },
  { id: 173, name: "Portobello Mushroom", type: "Fungi", allergens: [], chokingHazard: false, dogSafe: false, description: "Cook thoroughly", icon: getIconForFood("Portobello Mushroom", "Fungi") },
  { id: 174, name: "Cremini Mushroom", type: "Fungi", allergens: [], chokingHazard: false, dogSafe: false, description: "Cook thoroughly", icon: getIconForFood("Cremini Mushroom", "Fungi") },

  // OILS & FATS
  { id: 175, name: "Olive Oil", type: "Oil", allergens: [], chokingHazard: false, dogSafe: true, description: "Use sparingly", icon: getIconForFood("Olive Oil", "Oil") },
  { id: 176, name: "Coconut Oil", type: "Oil", allergens: [], chokingHazard: false, dogSafe: true, description: "Use sparingly", icon: getIconForFood("Coconut Oil", "Oil") },
  { id: 177, name: "Avocado Oil", type: "Oil", allergens: [], chokingHazard: false, dogSafe: true, description: "Use sparingly", icon: getIconForFood("Avocado Oil", "Oil") },

  // SWEETENERS & CONDIMENTS
  { id: 178, name: "Honey", type: "Sweetener", allergens: [], chokingHazard: false, dogSafe: true, description: "Not for babies under 12 months", icon: getIconForFood("Honey", "Sweetener") },
  { id: 179, name: "Maple Syrup", type: "Sweetener", allergens: [], chokingHazard: false, dogSafe: true, description: "Use sparingly", icon: getIconForFood("Maple Syrup", "Sweetener") },
  { id: 180, name: "Vanilla Extract", type: "Condiment", allergens: [], chokingHazard: false, dogSafe: true, description: "Use sparingly", icon: getIconForFood("Vanilla Extract", "Condiment") },

  // PREPARED FOODS
  { id: 181, name: "Hummus", type: "Prepared", allergens: ["Sesame"], chokingHazard: false, dogSafe: true, description: "Check ingredients for garlic", icon: getIconForFood("Hummus", "Prepared") },
  { id: 182, name: "Guacamole", type: "Prepared", allergens: [], chokingHazard: false, dogSafe: false, description: "Check ingredients, avocado toxic to dogs", icon: getIconForFood("Guacamole", "Prepared") },
  { id: 183, name: "Applesauce", type: "Prepared", allergens: [], chokingHazard: false, dogSafe: true, description: "Unsweetened only", icon: getIconForFood("Applesauce", "Prepared") },
  { id: 184, name: "Baby Cereal", type: "Prepared", allergens: ["Wheat"], chokingHazard: false, dogSafe: false, description: "Iron-fortified varieties", icon: getIconForFood("Baby Cereal", "Prepared") },

  // ADDITIONAL FRUITS
  { id: 185, name: "Elderberry", type: "Fruit", allergens: [], chokingHazard: true, dogSafe: false, description: "Raw elderberries can be toxic", icon: getIconForFood("Elderberry", "Fruit") },
  { id: 186, name: "Gooseberry", type: "Fruit", allergens: [], chokingHazard: true, dogSafe: true, description: "Remove stems and tails", icon: getIconForFood("Gooseberry", "Fruit") },
  { id: 187, name: "Currant", type: "Fruit", allergens: [], chokingHazard: true, dogSafe: false, description: "Related to grapes, toxic to dogs", icon: getIconForFood("Currant", "Fruit") },
  { id: 188, name: "Rhubarb", type: "Vegetable", allergens: [], chokingHazard: false, dogSafe: false, description: "Leaves are toxic, stalks need cooking", icon: getIconForFood("Rhubarb", "Vegetable") },

  // ADDITIONAL VEGETABLES
  { id: 189, name: "Kohlrabi", type: "Vegetable", allergens: [], chokingHazard: false, dogSafe: true, description: "Peel and cook thoroughly", icon: getIconForFood("Kohlrabi", "Vegetable") },
  { id: 190, name: "Rutabaga", type: "Vegetable", allergens: [], chokingHazard: false, dogSafe: true, description: "Cook thoroughly", icon: getIconForFood("Rutabaga", "Vegetable") },
  { id: 191, name: "Jerusalem Artichoke", type: "Vegetable", allergens: [], chokingHazard: false, dogSafe: true, description: "Cook thoroughly", icon: getIconForFood("Jerusalem Artichoke", "Vegetable") },
  { id: 192, name: "Water Chestnut", type: "Vegetable", allergens: [], chokingHazard: true, dogSafe: true, description: "Choking hazard, cook thoroughly", icon: getIconForFood("Water Chestnut", "Vegetable") },
  { id: 193, name: "Bamboo Shoots", type: "Vegetable", allergens: [], chokingHazard: false, dogSafe: true, description: "Cook thoroughly", icon: getIconForFood("Bamboo Shoots", "Vegetable") },
  { id: 194, name: "Hearts of Palm", type: "Vegetable", allergens: [], chokingHazard: false, dogSafe: true, description: "Cut into small pieces", icon: getIconForFood("Hearts of Palm", "Vegetable") },

  // SEAWEED & SEA VEGETABLES
  { id: 195, name: "Nori", type: "Vegetable", allergens: [], chokingHazard: false, dogSafe: true, description: "Tear into small pieces", icon: getIconForFood("Nori", "Vegetable") },
  { id: 196, name: "Wakame", type: "Vegetable", allergens: [], chokingHazard: false, dogSafe: true, description: "Soak and chop finely", icon: getIconForFood("Wakame", "Vegetable") },
  { id: 197, name: "Kelp", type: "Vegetable", allergens: [], chokingHazard: false, dogSafe: true, description: "Use sparingly, high in iodine", icon: getIconForFood("Kelp", "Vegetable") },

  // EXOTIC FRUITS
  { id: 198, name: "Durian", type: "Fruit", allergens: [], chokingHazard: false, dogSafe: false, description: "Strong smell, remove seeds", icon: getIconForFood("Durian", "Fruit") },
  { id: 199, name: "Rambutan", type: "Fruit", allergens: [], chokingHazard: true, dogSafe: true, description: "Remove skin and seed", icon: getIconForFood("Rambutan", "Fruit") },
  { id: 200, name: "Longan", type: "Fruit", allergens: [], chokingHazard: true, dogSafe: true, description: "Remove skin and seed", icon: getIconForFood("Longan", "Fruit") },

  // ADDITIONAL PROTEINS
  { id: 201, name: "Tofu", type: "Prepared", allergens: ["Soy"], chokingHazard: false, dogSafe: true, description: "Soft texture, cut into small pieces", icon: getIconForFood("Tofu", "Prepared") },
  { id: 202, name: "Tempeh", type: "Prepared", allergens: ["Soy"], chokingHazard: false, dogSafe: true, description: "Cook thoroughly", icon: getIconForFood("Tempeh", "Prepared") },
  { id: 203, name: "Seitan", type: "Prepared", allergens: ["Wheat"], chokingHazard: false, dogSafe: false, description: "Made from wheat gluten", icon: getIconForFood("Seitan", "Prepared") },

  // GAME MEATS
  { id: 204, name: "Venison", type: "Meat", allergens: [], chokingHazard: false, dogSafe: true, description: "Cook thoroughly, lean meat", icon: getIconForFood("Venison", "Meat") },
  { id: 205, name: "Rabbit", type: "Meat", allergens: [], chokingHazard: false, dogSafe: true, description: "Cook thoroughly, remove all bones", icon: getIconForFood("Rabbit", "Meat") },
  { id: 206, name: "Bison", type: "Meat", allergens: [], chokingHazard: false, dogSafe: true, description: "Cook thoroughly, lean meat", icon: getIconForFood("Bison", "Meat") },

  // ORGAN MEATS
  { id: 207, name: "Chicken Liver", type: "Meat", allergens: [], chokingHazard: false, dogSafe: true, description: "Cook thoroughly, rich in nutrients", icon: getIconForFood("Chicken Liver", "Meat") },
  { id: 208, name: "Beef Liver", type: "Meat", allergens: [], chokingHazard: false, dogSafe: true, description: "Cook thoroughly, rich in iron", icon: getIconForFood("Beef Liver", "Meat") },

  // ADDITIONAL FISH
  { id: 209, name: "Anchovy", type: "Fish", allergens: ["Fish"], chokingHazard: true, dogSafe: true, description: "High in sodium, use sparingly", icon: getIconForFood("Anchovy", "Fish") },
  { id: 210, name: "Herring", type: "Fish", allergens: ["Fish"], chokingHazard: true, dogSafe: true, description: "Remove all bones", icon: getIconForFood("Herring", "Fish") },
  { id: 211, name: "Trout", type: "Fish", allergens: ["Fish"], chokingHazard: false, dogSafe: true, description: "Cook thoroughly, remove all bones", icon: getIconForFood("Trout", "Fish") },
  { id: 212, name: "Halibut", type: "Fish", allergens: ["Fish"], chokingHazard: false, dogSafe: true, description: "Cook thoroughly, remove all bones", icon: getIconForFood("Halibut", "Fish") },
  { id: 213, name: "Mahi Mahi", type: "Fish", allergens: ["Fish"], chokingHazard: false, dogSafe: true, description: "Cook thoroughly, remove all bones", icon: getIconForFood("Mahi Mahi", "Fish") },

  // ADDITIONAL SHELLFISH
  { id: 214, name: "Oyster", type: "Shellfish", allergens: ["Shellfish"], chokingHazard: true, dogSafe: false, description: "Cook thoroughly, choking hazard", icon: getIconForFood("Oyster", "Shellfish") },
  { id: 215, name: "Mussel", type: "Shellfish", allergens: ["Shellfish"], chokingHazard: true, dogSafe: false, description: "Cook thoroughly, remove shell", icon: getIconForFood("Mussel", "Shellfish") },
  { id: 216, name: "Clam", type: "Shellfish", allergens: ["Shellfish"], chokingHazard: true, dogSafe: false, description: "Cook thoroughly, remove shell", icon: getIconForFood("Clam", "Shellfish") },

  // FERMENTED FOODS
  { id: 217, name: "Sauerkraut", type: "Prepared", allergens: [], chokingHazard: false, dogSafe: true, description: "Rinse to reduce sodium", icon: getIconForFood("Sauerkraut", "Prepared") },
  { id: 218, name: "Kimchi", type: "Prepared", allergens: [], chokingHazard: false, dogSafe: false, description: "Often contains garlic and onions", icon: getIconForFood("Kimchi", "Prepared") },
  { id: 219, name: "Miso", type: "Prepared", allergens: ["Soy"], chokingHazard: false, dogSafe: false, description: "High in sodium", icon: getIconForFood("Miso", "Prepared") },
  { id: 220, name: "Kefir", type: "Dairy", allergens: ["Dairy"], chokingHazard: false, dogSafe: true, description: "Probiotic benefits", icon: getIconForFood("Kefir", "Dairy") },

  // ANCIENT GRAINS
  { id: 221, name: "Amaranth", type: "Grain", allergens: [], chokingHazard: false, dogSafe: true, description: "Cook thoroughly, high in protein", icon: getIconForFood("Amaranth", "Grain") },
  { id: 222, name: "Buckwheat", type: "Grain", allergens: [], chokingHazard: false, dogSafe: true, description: "Cook thoroughly, gluten-free", icon: getIconForFood("Buckwheat", "Grain") },
  { id: 223, name: "Farro", type: "Grain", allergens: ["Wheat"], chokingHazard: false, dogSafe: false, description: "Cook thoroughly, contains gluten", icon: getIconForFood("Farro", "Grain") },
  { id: 224, name: "Spelt", type: "Grain", allergens: ["Wheat"], chokingHazard: false, dogSafe: false, description: "Cook thoroughly, contains gluten", icon: getIconForFood("Spelt", "Grain") },
  { id: 225, name: "Teff", type: "Grain", allergens: [], chokingHazard: false, dogSafe: true, description: "Cook thoroughly, very small grain", icon: getIconForFood("Teff", "Grain") },

  // TROPICAL FRUITS
  { id: 226, name: "Acai", type: "Fruit", allergens: [], chokingHazard: false, dogSafe: true, description: "Usually served as pulp or powder", icon: getIconForFood("Acai", "Fruit") },
  { id: 227, name: "Goji Berry", type: "Fruit", allergens: [], chokingHazard: true, dogSafe: false, description: "Dried berries, may interact with medications", icon: getIconForFood("Goji Berry", "Fruit") },
  { id: 228, name: "Cacao", type: "Prepared", allergens: [], chokingHazard: false, dogSafe: false, description: "Contains theobromine, toxic to dogs", icon: getIconForFood("Cacao", "Prepared") },

  // ROOT VEGETABLES
  { id: 229, name: "Cassava", type: "Vegetable", allergens: [], chokingHazard: false, dogSafe: false, description: "Must be cooked thoroughly, contains cyanide when raw", icon: getIconForFood("Cassava", "Vegetable") },
  { id: 230, name: "Yam", type: "Vegetable", allergens: [], chokingHazard: false, dogSafe: true, description: "Cook thoroughly", icon: getIconForFood("Yam", "Vegetable") },
  { id: 231, name: "Taro", type: "Vegetable", allergens: [], chokingHazard: false, dogSafe: false, description: "Must be cooked thoroughly, toxic when raw", icon: getIconForFood("Taro", "Vegetable") },
  { id: 232, name: "Daikon", type: "Vegetable", allergens: [], chokingHazard: false, dogSafe: true, description: "Can be served raw or cooked", icon: getIconForFood("Daikon", "Vegetable") },

  // SQUASH VARIETIES
  { id: 233, name: "Delicata Squash", type: "Vegetable", allergens: [], chokingHazard: false, dogSafe: true, description: "Cook thoroughly, edible skin", icon: getIconForFood("Delicata Squash", "Vegetable") },
  { id: 234, name: "Kabocha Squash", type: "Vegetable", allergens: [], chokingHazard: false, dogSafe: true, description: "Cook thoroughly", icon: getIconForFood("Kabocha Squash", "Vegetable") },
  { id: 235, name: "Spaghetti Squash", type: "Vegetable", allergens: [], chokingHazard: false, dogSafe: true, description: "Cook thoroughly", icon: getIconForFood("Spaghetti Squash", "Vegetable") },

  // CITRUS VARIETIES
  { id: 236, name: "Blood Orange", type: "Fruit", allergens: [], chokingHazard: false, dogSafe: true, description: "Small amounts only, remove peel and seeds", icon: getIconForFood("Blood Orange", "Fruit") },
  { id: 237, name: "Meyer Lemon", type: "Fruit", allergens: [], chokingHazard: false, dogSafe: false, description: "Citrus oils can upset dogs", icon: getIconForFood("Meyer Lemon", "Fruit") },
  { id: 238, name: "Key Lime", type: "Fruit", allergens: [], chokingHazard: false, dogSafe: false, description: "Citrus oils can upset dogs", icon: getIconForFood("Key Lime", "Fruit") },

  // BERRIES
  { id: 239, name: "Mulberry", type: "Fruit", allergens: [], chokingHazard: true, dogSafe: true, description: "Mash for babies", icon: getIconForFood("Mulberry", "Fruit") },
  { id: 240, name: "Boysenberry", type: "Fruit", allergens: [], chokingHazard: true, dogSafe: true, description: "Mash for babies", icon: getIconForFood("Boysenberry", "Fruit") },
  { id: 241, name: "Lingonberry", type: "Fruit", allergens: [], chokingHazard: true, dogSafe: true, description: "Tart flavor, cook with food", icon: getIconForFood("Lingonberry", "Fruit") },

  // MELON VARIETIES
  { id: 242, name: "Casaba Melon", type: "Fruit", allergens: [], chokingHazard: false, dogSafe: true, description: "Remove seeds and rind", icon: getIconForFood("Casaba Melon", "Fruit") },
  { id: 243, name: "Crenshaw Melon", type: "Fruit", allergens: [], chokingHazard: false, dogSafe: true, description: "Remove seeds and rind", icon: getIconForFood("Crenshaw Melon", "Fruit") },
  { id: 244, name: "Persian Melon", type: "Fruit", allergens: [], chokingHazard: false, dogSafe: true, description: "Remove seeds and rind", icon: getIconForFood("Persian Melon", "Fruit") },

  // STONE FRUITS
  { id: 245, name: "Nectarine", type: "Fruit", allergens: [], chokingHazard: false, dogSafe: true, description: "Remove pit", icon: getIconForFood("Nectarine", "Fruit") },
  { id: 246, name: "Greengage", type: "Fruit", allergens: [], chokingHazard: false, dogSafe: true, description: "Remove pit", icon: getIconForFood("Greengage", "Fruit") },
  { id: 247, name: "Damson", type: "Fruit", allergens: [], chokingHazard: false, dogSafe: true, description: "Remove pit, tart flavor", icon: getIconForFood("Damson", "Fruit") },

  // LEAFY GREENS
  { id: 248, name: "Romaine Lettuce", type: "Vegetable", allergens: [], chokingHazard: false, dogSafe: true, description: "Shred finely", icon: getIconForFood("Romaine Lettuce", "Vegetable") },
  { id: 249, name: "Butter Lettuce", type: "Vegetable", allergens: [], chokingHazard: false, dogSafe: true, description: "Soft leaves, tear into pieces", icon: getIconForFood("Butter Lettuce", "Vegetable") },
  { id: 250, name: "Iceberg Lettuce", type: "Vegetable", allergens: [], chokingHazard: false, dogSafe: true, description: "Low nutritional value", icon: getIconForFood("Iceberg Lettuce", "Vegetable") },
  { id: 251, name: "Endive", type: "Vegetable", allergens: [], chokingHazard: false, dogSafe: true, description: "Bitter flavor, introduce gradually", icon: getIconForFood("Endive", "Vegetable") },
  { id: 252, name: "Radicchio", type: "Vegetable", allergens: [], chokingHazard: false, dogSafe: true, description: "Bitter flavor, use sparingly", icon: getIconForFood("Radicchio", "Vegetable") },
  { id: 253, name: "Frisee", type: "Vegetable", allergens: [], chokingHazard: false, dogSafe: true, description: "Bitter flavor, chop finely", icon: getIconForFood("Frisee", "Vegetable") },

  // BRASSICAS
  { id: 254, name: "Cabbage", type: "Vegetable", allergens: [], chokingHazard: false, dogSafe: true, description: "Steam until soft", icon: getIconForFood("Cabbage", "Vegetable") },
  { id: 255, name: "Red Cabbage", type: "Vegetable", allergens: [], chokingHazard: false, dogSafe: true, description: "Steam until soft", icon: getIconForFood("Red Cabbage", "Vegetable") },
  { id: 256, name: "Napa Cabbage", type: "Vegetable", allergens: [], chokingHazard: false, dogSafe: true, description: "Softer than regular cabbage", icon: getIconForFood("Napa Cabbage", "Vegetable") },
  { id: 257, name: "Savoy Cabbage", type: "Vegetable", allergens: [], chokingHazard: false, dogSafe: true, description: "Crinkled leaves, steam until soft", icon: getIconForFood("Savoy Cabbage", "Vegetable") },

  // ONION FAMILY
  { id: 258, name: "Scallion", type: "Vegetable", allergens: [], chokingHazard: false, dogSafe: false, description: "Allium family, toxic to dogs", icon: getIconForFood("Scallion", "Vegetable") },
  { id: 259, name: "Chive", type: "Herb/Spice", allergens: [], chokingHazard: false, dogSafe: false, description: "Allium family, toxic to dogs", icon: getIconForFood("Chive", "Herb/Spice") },
  { id: 260, name: "Shallot", type: "Vegetable", allergens: [], chokingHazard: false, dogSafe: false, description: "Allium family, toxic to dogs", icon: getIconForFood("Shallot", "Vegetable") },

  // PEPPERS
  { id: 261, name: "Jalapeño", type: "Vegetable", allergens: [], chokingHazard: false, dogSafe: false, description: "Too spicy for babies", icon: getIconForFood("Jalapeño", "Vegetable") },
  { id: 262, name: "Serrano Pepper", type: "Vegetable", allergens: [], chokingHazard: false, dogSafe: false, description: "Too spicy for babies", icon: getIconForFood("Serrano Pepper", "Vegetable") },
  { id: 263, name: "Poblano Pepper", type: "Vegetable", allergens: [], chokingHazard: false, dogSafe: true, description: "Mild pepper, remove seeds", icon: getIconForFood("Poblano Pepper", "Vegetable") },

  // SPECIALTY VEGETABLES
  { id: 264, name: "Chayote", type: "Vegetable", allergens: [], chokingHazard: false, dogSafe: true, description: "Cook thoroughly", icon: getIconForFood("Chayote", "Vegetable") },
  { id: 265, name: "Plantain", type: "Vegetable", allergens: [], chokingHazard: false, dogSafe: true, description: "Must be cooked, never raw", icon: getIconForFood("Plantain", "Vegetable") },
  { id: 266, name: "Malanga", type: "Vegetable", allergens: [], chokingHazard: false, dogSafe: false, description: "Must be cooked thoroughly", icon: getIconForFood("Malanga", "Vegetable") },

  // ADDITIONAL HERBS
  { id: 267, name: "Tarragon", type: "Herb/Spice", allergens: [], chokingHazard: false, dogSafe: true, description: "Use sparingly", icon: getIconForFood("Tarragon", "Herb/Spice") },
  { id: 268, name: "Chervil", type: "Herb/Spice", allergens: [], chokingHazard: false, dogSafe: true, description: "Delicate herb", icon: getIconForFood("Chervil", "Herb/Spice") },
  { id: 269, name: "Marjoram", type: "Herb/Spice", allergens: [], chokingHazard: false, dogSafe: true, description: "Similar to oregano", icon: getIconForFood("Marjoram", "Herb/Spice") },
  { id: 270, name: "Bay Leaf", type: "Herb/Spice", allergens: [], chokingHazard: true, dogSafe: false, description: "Remove before serving, choking hazard", icon: getIconForFood("Bay Leaf", "Herb/Spice") },

  // EXOTIC VEGETABLES
  { id: 271, name: "Bitter Melon", type: "Vegetable", allergens: [], chokingHazard: false, dogSafe: false, description: "Very bitter, not suitable for babies", icon: getIconForFood("Bitter Melon", "Vegetable") },
  { id: 272, name: "Chinese Broccoli", type: "Vegetable", allergens: [], chokingHazard: false, dogSafe: true, description: "Cook thoroughly", icon: getIconForFood("Chinese Broccoli", "Vegetable") },
  { id: 273, name: "Mustard Greens", type: "Vegetable", allergens: [], chokingHazard: false, dogSafe: true, description: "Strong flavor, cook thoroughly", icon: getIconForFood("Mustard Greens", "Vegetable") },

  // DRIED FRUITS
  { id: 274, name: "Apricot (Dried)", type: "Fruit", allergens: [], chokingHazard: true, dogSafe: true, description: "Choking hazard, soak to soften", icon: getIconForFood("Apricot (Dried)", "Fruit") },
  { id: 275, name: "Date (Dried)", type: "Fruit", allergens: [], chokingHazard: true, dogSafe: true, description: "Remove pit, very sticky", icon: getIconForFood("Date (Dried)", "Fruit") },
  { id: 276, name: "Fig (Dried)", type: "Fruit", allergens: [], chokingHazard: true, dogSafe: true, description: "Choking hazard, cut into small pieces", icon: getIconForFood("Fig (Dried)", "Fruit") },

  // ADDITIONAL GRAINS
  { id: 277, name: "Couscous", type: "Grain", allergens: ["Wheat"], chokingHazard: false, dogSafe: false, description: "Made from wheat", icon: getIconForFood("Couscous", "Grain") },
  { id: 278, name: "Bulgur", type: "Grain", allergens: ["Wheat"], chokingHazard: false, dogSafe: false, description: "Cracked wheat", icon: getIconForFood("Bulgur", "Grain") },
  { id: 279, name: "Freekeh", type: "Grain", allergens: ["Wheat"], chokingHazard: false, dogSafe: false, description: "Roasted green wheat", icon: getIconForFood("Freekeh", "Grain") },

  // PASTA VARIETIES
  { id: 280, name: "Spaghetti", type: "Grain", allergens: ["Wheat"], chokingHazard: false, dogSafe: true, description: "Cook until very soft", icon: getIconForFood("Spaghetti", "Grain") },
  { id: 281, name: "Penne", type: "Grain", allergens: ["Wheat"], chokingHazard: false, dogSafe: true, description: "Cook until very soft", icon: getIconForFood("Penne", "Grain") },
  { id: 282, name: "Macaroni", type: "Grain", allergens: ["Wheat"], chokingHazard: false, dogSafe: true, description: "Cook until very soft", icon: getIconForFood("Macaroni", "Grain") },

  // BREAKFAST ITEMS
  { id: 283, name: "Pancake", type: "Prepared", allergens: ["Wheat", "Egg", "Dairy"], chokingHazard: false, dogSafe: false, description: "Cut into strips for self-feeding", icon: getIconForFood("Pancake", "Prepared") },
  { id: 284, name: "Waffle", type: "Prepared", allergens: ["Wheat", "Egg", "Dairy"], chokingHazard: false, dogSafe: false, description: "Cut into strips for self-feeding", icon: getIconForFood("Waffle", "Prepared") },
  { id: 285, name: "French Toast", type: "Prepared", allergens: ["Wheat", "Egg", "Dairy"], chokingHazard: false, dogSafe: false, description: "Cut into strips for self-feeding", icon: getIconForFood("French Toast", "Prepared") },

  // SNACK FOODS
  { id: 286, name: "Rice Cake", type: "Prepared", allergens: [], chokingHazard: true, dogSafe: true, description: "Choking hazard, soften with liquid", icon: getIconForFood("Rice Cake", "Prepared") },
  { id: 287, name: "Puff Snacks", type: "Prepared", allergens: [], chokingHazard: true, dogSafe: false, description: "Dissolves in mouth, age-appropriate", icon: getIconForFood("Puff Snacks", "Prepared") },
  { id: 288, name: "Teething Biscuit", type: "Prepared", allergens: ["Wheat"], chokingHazard: false, dogSafe: false, description: "Designed to dissolve", icon: getIconForFood("Teething Biscuit", "Prepared") },

  // PICKLED/PRESERVED FOODS
  { id: 289, name: "Pickle", type: "Prepared", allergens: [], chokingHazard: false, dogSafe: false, description: "High in sodium", icon: getIconForFood("Pickle", "Prepared") },
  { id: 290, name: "Olive", type: "Fruit", allergens: [], chokingHazard: true, dogSafe: true, description: "Remove pit, choking hazard", icon: getIconForFood("Olive", "Fruit") },
  { id: 291, name: "Caper", type: "Condiment", allergens: [], chokingHazard: false, dogSafe: true, description: "Very salty, use sparingly", icon: getIconForFood("Caper", "Condiment") },

  // BROTHS & STOCKS
  { id: 292, name: "Chicken Broth", type: "Prepared", allergens: [], chokingHazard: false, dogSafe: true, description: "Low sodium variety", icon: getIconForFood("Chicken Broth", "Prepared") },
  { id: 293, name: "Vegetable Broth", type: "Prepared", allergens: [], chokingHazard: false, dogSafe: true, description: "Low sodium variety", icon: getIconForFood("Vegetable Broth", "Prepared") },
  { id: 294, name: "Bone Broth", type: "Prepared", allergens: [], chokingHazard: false, dogSafe: true, description: "Rich in minerals", icon: getIconForFood("Bone Broth", "Prepared") },

  // BABY-SPECIFIC FOODS
  { id: 295, name: "Baby Oatmeal", type: "Prepared", allergens: [], chokingHazard: false, dogSafe: true, description: "Iron-fortified", icon: getIconForFood("Baby Oatmeal", "Prepared") },
  { id: 296, name: "Baby Rice Cereal", type: "Prepared", allergens: [], chokingHazard: false, dogSafe: true, description: "Iron-fortified", icon: getIconForFood("Baby Rice Cereal", "Prepared") },
  { id: 297, name: "Baby Puffs", type: "Prepared", allergens: [], chokingHazard: false, dogSafe: false, description: "Dissolves in mouth", icon: getIconForFood("Baby Puffs", "Prepared") },

  // SOUPS
  { id: 298, name: "Tomato Soup", type: "Prepared", allergens: [], chokingHazard: false, dogSafe: false, description: "Check for added ingredients", icon: getIconForFood("Tomato Soup", "Prepared") },
  { id: 299, name: "Chicken Soup", type: "Prepared", allergens: [], chokingHazard: false, dogSafe: true, description: "Homemade preferred", icon: getIconForFood("Chicken Soup", "Prepared") },
  { id: 300, name: "Vegetable Soup", type: "Prepared", allergens: [], chokingHazard: false, dogSafe: true, description: "Check all ingredients", icon: getIconForFood("Vegetable Soup", "Prepared") },

  // INTERNATIONAL FOODS
  { id: 301, name: "Congee", type: "Prepared", allergens: [], chokingHazard: false, dogSafe: true, description: "Rice porridge, soft texture", icon: getIconForFood("Congee", "Prepared") },
  { id: 302, name: "Polenta", type: "Grain", allergens: [], chokingHazard: false, dogSafe: true, description: "Cornmeal porridge", icon: getIconForFood("Polenta", "Grain") },
  { id: 303, name: "Risotto", type: "Prepared", allergens: ["Dairy"], chokingHazard: false, dogSafe: true, description: "Creamy rice dish", icon: getIconForFood("Risotto", "Prepared") },

  // FRUIT PUREES
  { id: 304, name: "Apple Puree", type: "Prepared", allergens: [], chokingHazard: false, dogSafe: true, description: "Smooth texture for babies", icon: getIconForFood("Apple Puree", "Prepared") },
  { id: 305, name: "Pear Puree", type: "Prepared", allergens: [], chokingHazard: false, dogSafe: true, description: "Smooth texture for babies", icon: getIconForFood("Pear Puree", "Prepared") },
  { id: 306, name: "Banana Puree", type: "Prepared", allergens: [], chokingHazard: false, dogSafe: true, description: "Natural sweetness", icon: getIconForFood("Banana Puree", "Prepared") },

  // VEGETABLE PUREES
  { id: 307, name: "Sweet Potato Puree", type: "Prepared", allergens: [], chokingHazard: false, dogSafe: true, description: "Rich in beta-carotene", icon: getIconForFood("Sweet Potato Puree", "Prepared") },
  { id: 308, name: "Carrot Puree", type: "Prepared", allergens: [], chokingHazard: false, dogSafe: true, description: "Rich in vitamin A", icon: getIconForFood("Carrot Puree", "Prepared") },
  { id: 309, name: "Pea Puree", type: "Prepared", allergens: [], chokingHazard: false, dogSafe: true, description: "High in protein", icon: getIconForFood("Pea Puree", "Prepared") },

  // COMBINATION FOODS
  { id: 310, name: "Apple Cinnamon", type: "Prepared", allergens: [], chokingHazard: false, dogSafe: true, description: "Natural flavor combination", icon: getIconForFood("Apple Cinnamon", "Prepared") },
  { id: 311, name: "Sweet Potato & Apple", type: "Prepared", allergens: [], chokingHazard: false, dogSafe: true, description: "Nutritious combination", icon: getIconForFood("Sweet Potato & Apple", "Prepared") },
  { id: 312, name: "Chicken & Rice", type: "Prepared", allergens: [], chokingHazard: false, dogSafe: true, description: "Complete protein meal", icon: getIconForFood("Chicken & Rice", "Prepared") },

  // FINGER FOODS
  { id: 313, name: "Cheese Stick", type: "Dairy", allergens: ["Dairy"], chokingHazard: false, dogSafe: true, description: "Cut lengthwise for babies", icon: getIconForFood("Cheese Stick", "Dairy") },
  { id: 314, name: "Soft Pretzel", type: "Grain", allergens: ["Wheat"], chokingHazard: false, dogSafe: false, description: "Remove salt, tear into pieces", icon: getIconForFood("Soft Pretzel", "Grain") },
  { id: 315, name: "Graham Cracker", type: "Prepared", allergens: ["Wheat"], chokingHazard: false, dogSafe: false, description: "Break into appropriate sizes", icon: getIconForFood("Graham Cracker", "Prepared") },

  // BEVERAGES (appropriate for babies)
  { id: 316, name: "Water", type: "Beverage", allergens: [], chokingHazard: false, dogSafe: true, description: "Primary drink after 6 months", icon: "💧" },
  { id: 317, name: "Breast Milk", type: "Dairy", allergens: [], chokingHazard: false, dogSafe: false, description: "Primary nutrition for babies", icon: "🍼" },
  { id: 318, name: "Formula", type: "Prepared", allergens: ["Dairy"], chokingHazard: false, dogSafe: false, description: "Follow preparation instructions", icon: "🍼" },

  // SPECIALTY ITEMS
  { id: 319, name: "Nutritional Yeast", type: "Condiment", allergens: [], chokingHazard: false, dogSafe: true, description: "Rich in B vitamins", icon: getIconForFood("Nutritional Yeast", "Condiment") },
  { id: 320, name: "Spirulina", type: "Condiment", allergens: [], chokingHazard: false, dogSafe: true, description: "Superfood supplement", icon: getIconForFood("Spirulina", "Condiment") },

  // SEASONAL ITEMS
  { id: 321, name: "Cranberry Sauce", type: "Prepared", allergens: [], chokingHazard: false, dogSafe: true, description: "Check sugar content", icon: getIconForFood("Cranberry Sauce", "Prepared") },
  { id: 322, name: "Pumpkin Pie", type: "Prepared", allergens: ["Wheat", "Egg", "Dairy"], chokingHazard: false, dogSafe: false, description: "High in sugar", icon: getIconForFood("Pumpkin Pie", "Prepared") },

  // ALTERNATIVE PROTEINS
  { id: 323, name: "Hemp Seeds", type: "Seed", allergens: [], chokingHazard: true, dogSafe: true, description: "High in protein, choking hazard", icon: getIconForFood("Hemp Seeds", "Seed") },
  { id: 324, name: "Protein Powder", type: "Prepared", allergens: ["Dairy"], chokingHazard: false, dogSafe: false, description: "Not recommended for babies", icon: getIconForFood("Protein Powder", "Prepared") },

  // TROPICAL SPECIALTIES
  { id: 325, name: "Breadfruit", type: "Fruit", allergens: [], chokingHazard: false, dogSafe: true, description: "Must be cooked", icon: getIconForFood("Breadfruit", "Fruit") },
  { id: 326, name: "Jackfruit Seeds", type: "Seed", allergens: [], chokingHazard: true, dogSafe: true, description: "Must be cooked, choking hazard", icon: getIconForFood("Jackfruit Seeds", "Seed") },

  // GAME POULTRY
  { id: 327, name: "Quail", type: "Meat", allergens: [], chokingHazard: true, dogSafe: true, description: "Small bones, careful preparation", icon: getIconForFood("Quail", "Meat") },
  { id: 328, name: "Pheasant", type: "Meat", allergens: [], chokingHazard: false, dogSafe: true, description: "Remove all bones", icon: getIconForFood("Pheasant", "Meat") },

  // MICROGREENS
  { id: 329, name: "Pea Shoots", type: "Vegetable", allergens: [], chokingHazard: false, dogSafe: true, description: "Tender greens", icon: getIconForFood("Pea Shoots", "Vegetable") },
  { id: 330, name: "Sunflower Microgreens", type: "Vegetable", allergens: [], chokingHazard: false, dogSafe: true, description: "Nutty flavor", icon: getIconForFood("Sunflower Microgreens", "Vegetable") },

  // SPECIALTY MUSHROOMS
  { id: 331, name: "Oyster Mushroom", type: "Fungi", allergens: [], chokingHazard: false, dogSafe: false, description: "Cook thoroughly", icon: getIconForFood("Oyster Mushroom", "Fungi") },
  { id: 332, name: "King Oyster Mushroom", type: "Fungi", allergens: [], chokingHazard: false, dogSafe: false, description: "Meaty texture, cook thoroughly", icon: getIconForFood("King Oyster Mushroom", "Fungi") },

  // FERMENTED DAIRY
  { id: 333, name: "Greek Yogurt", type: "Dairy", allergens: ["Dairy"], chokingHazard: false, dogSafe: true, description: "Higher protein than regular yogurt", icon: getIconForFood("Greek Yogurt", "Dairy") },
  { id: 334, name: "Labneh", type: "Dairy", allergens: ["Dairy"], chokingHazard: false, dogSafe: true, description: "Strained yogurt cheese", icon: getIconForFood("Labneh", "Dairy") },

  // TRADITIONAL REMEDIES
  { id: 335, name: "Chamomile Tea", type: "Beverage", allergens: [], chokingHazard: false, dogSafe: true, description: "Weak tea only, consult pediatrician", icon: "🫖" },
  { id: 336, name: "Fennel Tea", type: "Beverage", allergens: [], chokingHazard: false, dogSafe: true, description: "May help with digestion", icon: "🫖" },

  // UNUSUAL FRUITS
  { id: 337, name: "Horned Melon", type: "Fruit", allergens: [], chokingHazard: true, dogSafe: true, description: "Seeds may be choking hazard", icon: getIconForFood("Horned Melon", "Fruit") },
  { id: 338, name: "Buddha's Hand", type: "Fruit", allergens: [], chokingHazard: false, dogSafe: false, description: "Citrus variety, zest only", icon: getIconForFood("Buddha's Hand", "Fruit") },

  // ANCIENT VEGETABLES
  { id: 339, name: "Purple Carrot", type: "Vegetable", allergens: [], chokingHazard: false, dogSafe: true, description: "Higher antioxidants than orange", icon: getIconForFood("Purple Carrot", "Vegetable") },
  { id: 340, name: "Romanesco", type: "Vegetable", allergens: [], chokingHazard: false, dogSafe: true, description: "Fractal broccoli-cauliflower hybrid", icon: getIconForFood("Romanesco", "Vegetable") },

  // PROCESSED ALTERNATIVES
  { id: 341, name: "Oat Milk", type: "Plant Milk", allergens: [], chokingHazard: false, dogSafe: true, description: "Not suitable as primary milk for babies under 12 months", icon: getIconForFood("Oat Milk", "Plant Milk") },
  { id: 342, name: "Almond Milk", type: "Plant Milk", allergens: ["Tree Nuts"], chokingHazard: false, dogSafe: true, description: "Not suitable as primary milk for babies under 12 months", icon: getIconForFood("Almond Milk", "Plant Milk") },
  { id: 343, name: "Coconut Milk", type: "Plant Milk", allergens: [], chokingHazard: false, dogSafe: true, description: "High in saturated fat", icon: getIconForFood("Coconut Milk", "Plant Milk") },

  // FORTIFIED FOODS
  { id: 344, name: "Fortified Cereal", type: "Prepared", allergens: ["Wheat"], chokingHazard: false, dogSafe: false, description: "Choose low sugar varieties", icon: getIconForFood("Fortified Cereal", "Prepared") },
  { id: 345, name: "Iron-Fortified Formula", type: "Prepared", allergens: ["Dairy"], chokingHazard: false, dogSafe: false, description: "Follow pediatrician recommendations", icon: getIconForFood("Iron-Fortified Formula", "Prepared") },

  // SPECIALTY PREPARATIONS
  { id: 346, name: "Bone Marrow", type: "Meat", allergens: [], chokingHazard: false, dogSafe: true, description: "Rich in nutrients, cook thoroughly", icon: getIconForFood("Bone Marrow", "Meat") },
  { id: 347, name: "Duck Fat", type: "Oil", allergens: [], chokingHazard: false, dogSafe: true, description: "Use sparingly for cooking", icon: getIconForFood("Duck Fat", "Oil") },

  // BABY-LED WEANING STAPLES
  { id: 348, name: "Roasted Vegetables", type: "Prepared", allergens: [], chokingHazard: false, dogSafe: true, description: "Soft enough to squish between fingers", icon: getIconForFood("Roasted Vegetables", "Prepared") },
  { id: 349, name: "Steamed Broccoli", type: "Prepared", allergens: [], chokingHazard: false, dogSafe: true, description: "Perfect finger food size", icon: getIconForFood("Steamed Broccoli", "Prepared") },
  { id: 350, name: "Soft Cooked Pasta", type: "Prepared", allergens: ["Wheat"], chokingHazard: false, dogSafe: true, description: "Good for self-feeding", icon: getIconForFood("Soft Cooked Pasta", "Prepared") },

  // HOLIDAY/SEASONAL FOODS
  { id: 351, name: "Turkey Gravy", type: "Prepared", allergens: [], chokingHazard: false, dogSafe: false, description: "Often high in sodium", icon: getIconForFood("Turkey Gravy", "Prepared") },
  { id: 352, name: "Stuffing", type: "Prepared", allergens: ["Wheat"], chokingHazard: false, dogSafe: false, description: "Check all ingredients", icon: getIconForFood("Stuffing", "Prepared") },
  { id: 353, name: "Mashed Potatoes", type: "Prepared", allergens: ["Dairy"], chokingHazard: false, dogSafe: true, description: "Great texture for babies", icon: getIconForFood("Mashed Potatoes", "Prepared") },

  // ETHNIC CUISINE BASICS
  { id: 354, name: "Tortilla", type: "Grain", allergens: ["Wheat"], chokingHazard: false, dogSafe: true, description: "Tear into strips", icon: getIconForFood("Tortilla", "Grain") },
  { id: 355, name: "Naan", type: "Grain", allergens: ["Wheat", "Dairy"], chokingHazard: false, dogSafe: false, description: "Often contains garlic", icon: getIconForFood("Naan", "Grain") },
  { id: 356, name: "Pita Bread", type: "Grain", allergens: ["Wheat"], chokingHazard: false, dogSafe: true, description: "Cut into appropriate sizes", icon: getIconForFood("Pita Bread", "Grain") },

  // BREAKFAST CEREALS
  { id: 357, name: "Cheerios", type: "Prepared", allergens: ["Wheat"], chokingHazard: true, dogSafe: false, description: "Classic finger food, choking hazard for under 9 months", icon: getIconForFood("Cheerios", "Prepared") },
  { id: 358, name: "Puffed Rice", type: "Prepared", allergens: [], chokingHazard: true, dogSafe: true, description: "Dissolves quickly in mouth", icon: getIconForFood("Puffed Rice", "Prepared") },

  // DESSERT ITEMS (occasional treats)
  { id: 359, name: "Vanilla Wafer", type: "Prepared", allergens: ["Wheat", "Egg"], chokingHazard: false, dogSafe: false, description: "High in sugar", icon: getIconForFood("Vanilla Wafer", "Prepared") },
  { id: 360, name: "Animal Crackers", type: "Prepared", allergens: ["Wheat"], chokingHazard: false, dogSafe: false, description: "Choose low sugar varieties", icon: getIconForFood("Animal Crackers", "Prepared") },

  // PRESERVED MEATS (use sparingly)
  { id: 361, name: "Ham", type: "Meat", allergens: [], chokingHazard: false, dogSafe: false, description: "High in sodium, processed", icon: getIconForFood("Ham", "Meat") },
  { id: 362, name: "Turkey Deli Meat", type: "Meat", allergens: [], chokingHazard: false, dogSafe: false, description: "High in sodium, check for nitrates", icon: getIconForFood("Turkey Deli Meat", "Meat") },

  // SPREADS & CONDIMENTS
  { id: 363, name: "Cream Cheese Spread", type: "Dairy", allergens: ["Dairy"], chokingHazard: false, dogSafe: true, description: "Use as spread, not standalone", icon: getIconForFood("Cream Cheese Spread", "Dairy") },
  { id: 364, name: "Avocado Spread", type: "Prepared", allergens: [], chokingHazard: false, dogSafe: false, description: "Avocado toxic to dogs", icon: getIconForFood("Avocado Spread", "Prepared") },

  // FROZEN FOODS
  { id: 365, name: "Frozen Peas", type: "Vegetable", allergens: [], chokingHazard: true, dogSafe: true, description: "Cook until soft, mash if needed", icon: getIconForFood("Frozen Peas", "Vegetable") },
  { id: 366, name: "Frozen Berries", type: "Fruit", allergens: [], chokingHazard: true, dogSafe: true, description: "Thaw and mash for babies", icon: getIconForFood("Frozen Berries", "Fruit") },

  // CANNED FOODS (choose low sodium)
  { id: 367, name: "Canned Pumpkin", type: "Prepared", allergens: [], chokingHazard: false, dogSafe: true, description: "Pure pumpkin, not pie filling", icon: getIconForFood("Canned Pumpkin", "Prepared") },
  { id: 368, name: "Canned Sweet Potato", type: "Prepared", allergens: [], chokingHazard: false, dogSafe: true, description: "Check for added sugar", icon: getIconForFood("Canned Sweet Potato", "Prepared") },

  // SPECIALTY BABY FOODS
  { id: 369, name: "Baby Meatballs", type: "Prepared", allergens: [], chokingHazard: false, dogSafe: true, description: "Soft texture, appropriate size", icon: getIconForFood("Baby Meatballs", "Prepared") },
  { id: 370, name: "Mini Muffin", type: "Prepared", allergens: ["Wheat", "Egg"], chokingHazard: false, dogSafe: false, description: "Choose low sugar varieties", icon: getIconForFood("Mini Muffin", "Prepared") },

  // SMOOTHIE INGREDIENTS
  { id: 371, name: "Spinach (for smoothies)", type: "Vegetable", allergens: [], chokingHazard: false, dogSafe: true, description: "Blend well, mild flavor", icon: getIconForFood("Spinach (for smoothies)", "Vegetable") },
  { id: 372, name: "Frozen Mango", type: "Fruit", allergens: [], chokingHazard: false, dogSafe: true, description: "Thaw or blend for smoothies", icon: getIconForFood("Frozen Mango", "Fruit") },

  // TEXTURED FOODS
  { id: 373, name: "Shredded Chicken", type: "Meat", allergens: [], chokingHazard: false, dogSafe: true, description: "Moist, easy to chew", icon: getIconForFood("Shredded Chicken", "Meat") },
  { id: 374, name: "Ground Turkey Meatballs", type: "Meat", allergens: [], chokingHazard: false, dogSafe: true, description: "Soft, appropriate size", icon: getIconForFood("Ground Turkey Meatballs", "Meat") },

  // HYDRATING FOODS
  { id: 375, name: "Watermelon (seedless)", type: "Fruit", allergens: [], chokingHazard: false, dogSafe: true, description: "High water content, remove any seeds", icon: getIconForFood("Watermelon (seedless)", "Fruit") },
  { id: 376, name: "Cucumber Sticks", type: "Vegetable", allergens: [], chokingHazard: false, dogSafe: true, description: "Remove seeds, appropriate size", icon: getIconForFood("Cucumber Sticks", "Vegetable") },

  // COMFORT FOODS
  { id: 377, name: "Mac and Cheese", type: "Prepared", allergens: ["Wheat", "Dairy"], chokingHazard: false, dogSafe: true, description: "Cook pasta until very soft", icon: getIconForFood("Mac and Cheese", "Prepared") },
  { id: 378, name: "Chicken Noodle Soup", type: "Prepared", allergens: ["Wheat"], chokingHazard: false, dogSafe: true, description: "Soft noodles, low sodium", icon: getIconForFood("Chicken Noodle Soup", "Prepared") },

  // CALCIUM-RICH FOODS
  { id: 379, name: "Sardines (boneless)", type: "Fish", allergens: ["Fish"], chokingHazard: false, dogSafe: true, description: "High in calcium, omega-3s", icon: getIconForFood("Sardines (boneless)", "Fish") },
  { id: 380, name: "Sesame Tahini", type: "Seed", allergens: ["Sesame"], chokingHazard: false, dogSafe: true, description: "Spread thinly, high in calcium", icon: getIconForFood("Sesame Tahini", "Seed") },

  // IRON-RICH FOODS
  { id: 381, name: "Beef Puree", type: "Prepared", allergens: [], chokingHazard: false, dogSafe: true, description: "High in iron, smooth texture", icon: getIconForFood("Beef Puree", "Prepared") },
  { id: 382, name: "Spinach Puree", type: "Prepared", allergens: [], chokingHazard: false, dogSafe: true, description: "High in iron, mix with vitamin C foods", icon: getIconForFood("Spinach Puree", "Prepared") },

  // PROBIOTIC FOODS
  { id: 383, name: "Plain Kefir", type: "Dairy", allergens: ["Dairy"], chokingHazard: false, dogSafe: true, description: "Probiotic benefits, thinner than yogurt", icon: getIconForFood("Plain Kefir", "Dairy") },
  { id: 384, name: "Yogurt with Live Cultures", type: "Dairy", allergens: ["Dairy"], chokingHazard: false, dogSafe: true, description: "Support digestive health", icon: getIconForFood("Yogurt with Live Cultures", "Dairy") },

  // OMEGA-3 RICH FOODS
  { id: 385, name: "Chia Seed Pudding", type: "Prepared", allergens: [], chokingHazard: false, dogSafe: true, description: "Soak seeds until gel-like", icon: getIconForFood("Chia Seed Pudding", "Prepared") },
  { id: 386, name: "Ground Flaxseed", type: "Seed", allergens: [], chokingHazard: false, dogSafe: true, description: "Mix into foods, must be ground", icon: getIconForFood("Ground Flaxseed", "Seed") },

  // ANTIOXIDANT-RICH FOODS
  { id: 387, name: "Purple Sweet Potato", type: "Vegetable", allergens: [], chokingHazard: false, dogSafe: true, description: "Higher antioxidants than orange variety", icon: getIconForFood("Purple Sweet Potato", "Vegetable") },
  { id: 388, name: "Blueberry Puree", type: "Prepared", allergens: [], chokingHazard: false, dogSafe: true, description: "High in antioxidants", icon: getIconForFood("Blueberry Puree", "Prepared") },

  // VITAMIN C RICH FOODS
  { id: 389, name: "Red Bell Pepper", type: "Vegetable", allergens: [], chokingHazard: false, dogSafe: true, description: "Higher vitamin C than oranges", icon: getIconForFood("Red Bell Pepper", "Vegetable") },
  { id: 390, name: "Strawberry Puree", type: "Prepared", allergens: [], chokingHazard: false, dogSafe: true, description: "High in vitamin C, aids iron absorption", icon: getIconForFood("Strawberry Puree", "Prepared") },

  // FINAL SPECIALTY ITEMS
  { id: 391, name: "Coconut Flour", type: "Grain", allergens: [], chokingHazard: false, dogSafe: true, description: "Alternative flour, very absorptive", icon: getIconForFood("Coconut Flour", "Grain") },
  { id: 392, name: "Almond Flour", type: "Tree Nut", allergens: ["Tree Nuts"], chokingHazard: false, dogSafe: true, description: "Alternative flour, high protein", icon: getIconForFood("Almond Flour", "Tree Nut") },
  { id: 393, name: "Bone Broth Powder", type: "Prepared", allergens: [], chokingHazard: false, dogSafe: true, description: "Convenient form of bone broth", icon: getIconForFood("Bone Broth Powder", "Prepared") },
  { id: 394, name: "Collagen Powder", type: "Prepared", allergens: [], chokingHazard: false, dogSafe: true, description: "Not necessary for babies", icon: getIconForFood("Collagen Powder", "Prepared") },
  { id: 395, name: "MCT Oil", type: "Oil", allergens: [], chokingHazard: false, dogSafe: true, description: "Medium-chain triglycerides", icon: getIconForFood("MCT Oil", "Oil") },
  { id: 396, name: "Ghee", type: "Dairy", allergens: [], chokingHazard: false, dogSafe: true, description: "Clarified butter, lactose-free", icon: getIconForFood("Ghee", "Dairy") },
  { id: 397, name: "Coconut Cream", type: "Plant Milk", allergens: [], chokingHazard: false, dogSafe: true, description: "Thick, rich coconut product", icon: getIconForFood("Coconut Cream", "Plant Milk") },
  { id: 398, name: "Cashew Cream", type: "Tree Nut", allergens: ["Tree Nuts"], chokingHazard: false, dogSafe: true, description: "Dairy-free cream alternative", icon: getIconForFood("Cashew Cream", "Tree Nut") },
  { id: 399, name: "Sunflower Seed Butter", type: "Seed", allergens: [], chokingHazard: false, dogSafe: true, description: "Nut-free alternative to peanut butter", icon: getIconForFood("Sunflower Seed Butter", "Seed") },
  { id: 400, name: "Tiger Nut Flour", type: "Grain", allergens: [], chokingHazard: false, dogSafe: true, description: "Not actually a nut, root vegetable flour", icon: getIconForFood("Tiger Nut Flour", "Grain") }
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