import { useState } from "react";
import { Search, Filter, AlertTriangle, Heart, Shield, Info, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { AddFoodModal } from "./AddFoodModal";
import { FOODS, Food, getFoodTypes } from "@/data/foods";

interface FoodLibraryProps {
  onFoodLogged?: (entry: any) => void;
}

export function FoodLibrary({ onFoodLogged }: FoodLibraryProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState<string>("all");
  const [selectedAllergen, setSelectedAllergen] = useState<string>("all");
  const [selectedDogSafe, setSelectedDogSafe] = useState<string>("all");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFood, setSelectedFood] = useState<string | undefined>();
  const { toast } = useToast();

  const foodTypes = getFoodTypes();
  const allergens = Array.from(new Set(FOODS.flatMap(food => food.allergens))).sort();

  const filteredFoods = FOODS.filter(food => {
    const matchesSearch = food.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         food.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === "all" || food.type === selectedType;
    const matchesAllergen = selectedAllergen === "all" || 
                           food.allergens.some(allergen => allergen === selectedAllergen);
    const matchesDogSafe = selectedDogSafe === "all" || 
                          (selectedDogSafe === "yes" && food.dogSafe) ||
                          (selectedDogSafe === "no" && !food.dogSafe);
    
    return matchesSearch && matchesType && matchesAllergen && matchesDogSafe;
  });

  const getAllergenBadgeColor = (allergen: string) => {
    const commonAllergens = ["Egg", "Dairy", "Peanut", "Tree Nut", "Fish", "Shellfish", "Soy", "Wheat"];
    return commonAllergens.includes(allergen) ? "allergen-high" : "allergen-medium";
  };

  const handleQuickAdd = (food: Food) => {
    setSelectedFood(food.name);
    setIsModalOpen(true);
  };

  const handleFoodLogged = (entry: any) => {
    if (onFoodLogged) {
      onFoodLogged(entry);
    }
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

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-foreground flex items-center gap-2">
                <Filter className="h-4 w-4 text-primary" />
                Food Type
              </label>
              <Select value={selectedType} onValueChange={setSelectedType}>
                <SelectTrigger className="h-11 bg-card border-border/50 hover:bg-accent/50 transition-colors">
                  <SelectValue placeholder="All Types" />
                </SelectTrigger>
                <SelectContent className="bg-popover border-border shadow-lg">
                  <SelectItem value="all" className="font-medium">All Types</SelectItem>
                  {foodTypes.map(type => (
                    <SelectItem key={type} value={type}>{type}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-foreground flex items-center gap-2">
                <Shield className="h-4 w-4 text-destructive" />
                Allergens
              </label>
              <Select value={selectedAllergen} onValueChange={setSelectedAllergen}>
                <SelectTrigger className="h-11 bg-card border-border/50 hover:bg-accent/50 transition-colors">
                  <SelectValue placeholder="All Allergens" />
                </SelectTrigger>
                <SelectContent className="bg-popover border-border shadow-lg">
                  <SelectItem value="all" className="font-medium">All Allergens</SelectItem>
                  {allergens.map(allergen => (
                    <SelectItem key={allergen} value={allergen}>{allergen}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-foreground flex items-center gap-2">
                <Heart className="h-4 w-4 text-green-600" />
                Dog Safe
              </label>
              <Select value={selectedDogSafe} onValueChange={setSelectedDogSafe}>
                <SelectTrigger className="h-11 bg-card border-border/50 hover:bg-accent/50 transition-colors">
                  <SelectValue placeholder="All" />
                </SelectTrigger>
                <SelectContent className="bg-popover border-border shadow-lg">
                  <SelectItem value="all" className="font-medium">All</SelectItem>
                  <SelectItem value="yes" className="text-green-600">
                    <div className="flex items-center gap-2">
                      <Heart className="h-3 w-3" />
                      Dog Safe
                    </div>
                  </SelectItem>
                  <SelectItem value="no" className="text-orange-600">
                    <div className="flex items-center gap-2">
                      <AlertTriangle className="h-3 w-3" />
                      Not Dog Safe
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
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
                            <p>Choking Risk: {food.chokingHazard ? "Yes" : "Unlikely"}</p>
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
                          Allergen: {food.allergens.join(", ")}
                        </Badge>
                      )}
                      
                      {food.dogSafe && (
                        <Badge variant="outline" className="bg-dog-safe text-dog-safe-foreground text-xs">
                          <Heart className="h-3 w-3 mr-1" />
                          Dog Safe
                        </Badge>
                      )}
                      
                      {food.chokingHazard && (
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
                setSelectedType("all");
                setSelectedAllergen("all");
                setSelectedDogSafe("all");
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