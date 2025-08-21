import { useState } from "react";
import { Search, Filter, AlertTriangle, Heart, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Sample food data - would come from a database in production
const FOODS = [
  {
    id: 1,
    name: "Avocado",
    type: "Fruit",
    allergens: [],
    chokingHazard: "unlikely",
    dogSafe: true,
    description: "Rich in healthy fats, perfect for first foods"
  },
  {
    id: 2,
    name: "Eggs",
    type: "Protein",
    allergens: ["eggs"],
    chokingHazard: "unlikely",
    dogSafe: true,
    description: "Great source of protein and choline"
  },
  {
    id: 3,
    name: "Peanut Butter",
    type: "Protein",
    allergens: ["peanuts"],
    chokingHazard: "yes",
    dogSafe: false,
    description: "Introduce early to reduce allergy risk"
  },
  {
    id: 4,
    name: "Sweet Potato",
    type: "Vegetable",
    allergens: [],
    chokingHazard: "unlikely",
    dogSafe: true,
    description: "Naturally sweet, rich in beta-carotene"
  },
  {
    id: 5,
    name: "Salmon",
    type: "Protein",
    allergens: ["fish"],
    chokingHazard: "unlikely",
    dogSafe: true,
    description: "Rich in omega-3 fatty acids"
  },
  {
    id: 6,
    name: "Whole Milk",
    type: "Dairy",
    allergens: ["milk"],
    chokingHazard: "unlikely",
    dogSafe: false,
    description: "Introduce after 12 months"
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
}

export function FoodLibrary() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [showAllergensOnly, setShowAllergensOnly] = useState(false);

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

  return (
    <div className="space-y-6 p-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <h1 className="text-2xl font-bold">Food Library</h1>
        <p className="text-muted-foreground">Explore foods, allergens, and safety information</p>
      </div>

      {/* Search and Filters */}
      <div className="space-y-4">
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
            All Types
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

      {/* Food Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredFoods.map(food => (
          <Card key={food.id} className="hover:shadow-medium transition-all duration-200 bg-gradient-card">
            <CardContent className="p-4 space-y-3">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold text-lg">{food.name}</h3>
                  <Badge variant="outline" className="mt-1">{food.type}</Badge>
                </div>
                <div className="flex gap-2">
                  {food.chokingHazard === "yes" && (
                    <div className="bg-choking-risk text-choking-risk-foreground p-1 rounded-full">
                      <AlertTriangle className="h-4 w-4" />
                    </div>
                  )}
                  {food.dogSafe && (
                    <div className="bg-dog-safe text-dog-safe-foreground p-1 rounded-full">
                      <Heart className="h-4 w-4" />
                    </div>
                  )}
                </div>
              </div>

              <p className="text-sm text-muted-foreground">{food.description}</p>

              {food.allergens.length > 0 && (
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-warning" />
                    <span className="text-sm font-medium">Allergens:</span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {food.allergens.map(allergen => (
                      <Badge
                        key={allergen}
                        variant="outline"
                        className={`bg-${getAllergenBadgeColor(allergen)} text-${getAllergenBadgeColor(allergen)}-foreground border-${getAllergenBadgeColor(allergen)}-foreground/20`}
                      >
                        {allergen}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex items-center justify-between pt-2">
                <div className="text-xs text-muted-foreground">
                  Choking Risk: <span className={food.chokingHazard === "yes" ? "text-warning font-medium" : "text-success font-medium"}>
                    {food.chokingHazard === "yes" ? "Yes" : "Unlikely"}
                  </span>
                </div>
                <div className="text-xs text-muted-foreground">
                  Dog Safe: <span className={food.dogSafe ? "text-success font-medium" : "text-destructive font-medium"}>
                    {food.dogSafe ? "Yes" : "No"}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredFoods.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No foods found matching your filters.</p>
          <Button 
            variant="outline" 
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
  );
}