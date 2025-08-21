import { useState } from "react";
import { Search, Filter, AlertTriangle, Heart, Shield, Info, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { useToast } from "@/hooks/use-toast";
import { AddFoodModal } from "./AddFoodModal";

// Sample food data - would come from a database in production
const FOODS = [
  {
    id: 1,
    name: "Avocado",
    type: "Fruit",
    allergens: [],
    chokingHazard: "unlikely",
    dogSafe: true,
    description: "Rich in healthy fats, perfect for first foods",
    icon: "🥑" // Placeholder - replace with your cute avocado icon
  },
  {
    id: 2,
    name: "Pumpkin",
    type: "Vegetable",
    allergens: [],
    chokingHazard: "unlikely",
    dogSafe: true,
    description: "Sweet, nutritious, and perfect for baby's first foods",
    icon: "🎃" // Replace with your cute pumpkin icon
  },
  {
    id: 3,
    name: "Mango",
    type: "Fruit",
    allergens: [],
    chokingHazard: "unlikely",
    dogSafe: true,
    description: "Sweet tropical fruit rich in vitamins A and C",
    icon: "🥭" // Replace with your cute mango icon
  },
  {
    id: 4,
    name: "Cucumber",
    type: "Vegetable",
    allergens: [],
    chokingHazard: "unlikely",
    dogSafe: true,
    description: "Mild, refreshing, and great for teething",
    icon: "🥒" // Replace with your cute cucumber icon
  },
  {
    id: 5,
    name: "Broccoli",
    type: "Vegetable",
    allergens: [],
    chokingHazard: "unlikely",
    dogSafe: true,
    description: "Nutrient-dense green vegetable, steam until soft",
    icon: "🥦" // Replace with your cute broccoli icon
  },
  {
    id: 6,
    name: "Carrot",
    type: "Vegetable",
    allergens: [],
    chokingHazard: "unlikely",
    dogSafe: true,
    description: "Sweet, colorful, packed with beta-carotene",
    icon: "🥕" // Replace with your cute carrot icon
  },
  {
    id: 7,
    name: "Tomato",
    type: "Fruit",
    allergens: [],
    chokingHazard: "unlikely",
    dogSafe: true,
    description: "Rich in lycopene, remove skin for babies",
    icon: "🍅" // Replace with your cute tomato icon
  },
  {
    id: 8,
    name: "Eggs",
    type: "Protein",
    allergens: ["eggs"],
    chokingHazard: "unlikely",
    dogSafe: true,
    description: "Great source of protein and choline",
    icon: "🥚" // Placeholder - add your cute egg icon
  },
  {
    id: 9,
    name: "Peanut Butter",
    type: "Protein",
    allergens: ["peanuts"],
    chokingHazard: "yes",
    dogSafe: false,
    description: "Introduce early to reduce allergy risk - thin with water",
    icon: "🥜" // Placeholder - add your cute peanut icon
  },
  {
    id: 10,
    name: "Salmon",
    type: "Protein",
    allergens: ["fish"],
    chokingHazard: "unlikely",
    dogSafe: true,
    description: "Rich in omega-3 fatty acids, remove all bones",
    icon: "🐟" // Placeholder - add your cute fish icon
  },
  {
    id: 11,
    name: "Whole Milk",
    type: "Dairy",
    allergens: ["milk"],
    chokingHazard: "unlikely",
    dogSafe: false,
    description: "Introduce after 12 months",
    icon: "🥛" // Placeholder - add your cute milk icon
  }
];

interface Food {
  id: number;
  name: string;
  type: string;
  allergens: string[];
  chokingHazard: string;
  dogSafe: boolean;
  description: string;
  icon: string;
}

export function FoodLibrary() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [showAllergensOnly, setShowAllergensOnly] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFood, setSelectedFood] = useState<string | undefined>();
  const { toast } = useToast();

  const foodTypes = [...new Set(FOODS.map(food => food.type))];

  const filteredFoods = FOODS.filter(food => {
    const matchesSearch = food.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         food.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = !selectedType || food.type === selectedType;
    const matchesAllergenFilter = !showAllergensOnly || food.allergens.length > 0;
    
    return matchesSearch && matchesType && matchesAllergenFilter;
  });

  const getAllergenBadgeColor = (allergen: string) => {
    const commonAllergens = ["eggs", "milk", "peanuts", "tree nuts", "fish", "shellfish", "soy", "wheat"];
    return commonAllergens.includes(allergen) ? "allergen-high" : "allergen-medium";
  };

  const handleQuickAdd = (food: Food) => {
    setSelectedFood(food.name);
    setIsModalOpen(true);
  };

  const handleFoodLogged = (entry: any) => {
    // Here you would typically update your food diary state/database
    console.log("Food logged:", entry);
  };

  return (
    <TooltipProvider>
      <div className="space-y-4 p-4">
        {/* Header - Mobile Optimized */}
        <div className="text-center space-y-2">
          <h1 className="text-xl font-bold">Food Library</h1>
          <p className="text-sm text-muted-foreground">Tap info for details</p>
        </div>

        {/* Search and Filters - Mobile Optimized */}
        <div className="space-y-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search foods..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            <Button
              variant={selectedType === null ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedType(null)}
            >
              All
            </Button>
            {foodTypes.map(type => (
              <Button
                key={type}
                variant={selectedType === type ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedType(type)}
              >
                {type}
              </Button>
            ))}
          </div>

          <Button
            variant={showAllergensOnly ? "default" : "outline"}
            size="sm"
            onClick={() => setShowAllergensOnly(!showAllergensOnly)}
            className="flex items-center gap-2"
          >
            <Filter className="h-4 w-4" />
            Allergens Only
          </Button>
        </div>

        {/* Mobile-Optimized Food Cards */}
        <div className="space-y-3">
          {filteredFoods.map(food => (
            <Card key={food.id} className="hover:shadow-medium transition-all duration-200 bg-gradient-card">
              <CardContent className="p-3">
                <div className="flex items-center gap-3">
                  {/* Food Icon */}
                  <div className="text-3xl flex-shrink-0">
                    {food.icon}
                  </div>
                  
                  {/* Main Food Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold text-base truncate">{food.name}</h3>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button variant="ghost" size="sm" className="p-1 h-6 w-6">
                            <Info className="h-4 w-4" />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent className="max-w-xs">
                          <p className="text-sm">{food.description}</p>
                          <div className="mt-2 text-xs">
                            <p>Choking Risk: {food.chokingHazard === "yes" ? "Yes" : "Unlikely"}</p>
                          </div>
                        </TooltipContent>
                      </Tooltip>
                    </div>
                    
                    <div className="flex items-center gap-2 flex-wrap">
                      <Badge variant="outline" className="text-xs">{food.type}</Badge>
                      
                      {food.allergens.length > 0 && (
                        <Badge 
                          variant="outline" 
                          className="bg-allergen-high text-allergen-high-foreground text-xs"
                        >
                          <Shield className="h-3 w-3 mr-1" />
                          Allergen
                        </Badge>
                      )}
                      
                      {food.dogSafe && (
                        <Badge variant="outline" className="bg-dog-safe text-dog-safe-foreground text-xs">
                          <Heart className="h-3 w-3 mr-1" />
                          Dog Safe
                        </Badge>
                      )}
                      
                      {food.chokingHazard === "yes" && (
                        <Badge variant="outline" className="bg-choking-risk text-choking-risk-foreground text-xs">
                          <AlertTriangle className="h-3 w-3 mr-1" />
                          Choking Risk
                        </Badge>
                      )}
                    </div>
                  </div>
                  
                  {/* Quick Add Button */}
                  <Button 
                    size="sm" 
                    onClick={() => handleQuickAdd(food)}
                    className="flex-shrink-0"
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>

                {/* Allergen Details - Only show if present */}
                {food.allergens.length > 0 && (
                  <div className="mt-3 pt-2 border-t border-border/50">
                    <div className="flex flex-wrap gap-1">
                      {food.allergens.map(allergen => (
                        <Badge
                          key={allergen}
                          variant="outline"
                          className="text-xs bg-allergen-medium text-allergen-medium-foreground"
                        >
                          {allergen}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredFoods.length === 0 && (
          <div className="text-center py-8">
            <p className="text-muted-foreground text-sm">No foods found matching your filters.</p>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => {
                setSearchTerm("");
                setSelectedType(null);
                setShowAllergensOnly(false);
              }}
              className="mt-2"
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
      
      <AddFoodModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedFood(undefined);
        }}
        selectedFood={selectedFood}
        onFoodLogged={handleFoodLogged}
      />
    </TooltipProvider>
  );
}