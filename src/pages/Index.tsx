import { useState } from "react";
import { Plus } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { FoodLibrary } from "@/components/FoodLibrary";
import { FoodDiary } from "@/components/FoodDiary";
import { AllergenDashboard } from "@/components/AllergenDashboard";
import { AddFoodModal } from "@/components/AddFoodModal";
import { Button } from "@/components/ui/button";
import { Toaster } from "@/components/ui/toaster";

// Initial diary entries
const INITIAL_DIARY_ENTRIES = [
  {
    id: 1,
    date: "2024-01-20",
    time: "09:30",
    foodName: "Avocado",
    preparation: "Mashed",
    babyReaction: "liked",
    hadReaction: false,
    notes: "First time trying! Loved it and asked for more.",
    timestamp: "2024-01-20T09:30:00.000Z",
    isAllergen: false,
    allergens: []
  }
];

// Initial allergen data
const INITIAL_ALLERGENS = [
  { name: "eggs", tried: false, reactions: "", lastTried: null },
  { name: "milk", tried: false, reactions: "", lastTried: null },
  { name: "peanuts", tried: false, reactions: "", lastTried: null },
  { name: "tree nuts", tried: false, reactions: "", lastTried: null },
  { name: "fish", tried: false, reactions: "", lastTried: null },
  { name: "shellfish", tried: false, reactions: "", lastTried: null },
  { name: "soy", tried: false, reactions: "", lastTried: null },
  { name: "wheat", tried: false, reactions: "", lastTried: null }
];

const Index = () => {
  const [activeTab, setActiveTab] = useState("library");
  const [isGlobalModalOpen, setIsGlobalModalOpen] = useState(false);
  const [diaryEntries, setDiaryEntries] = useState(INITIAL_DIARY_ENTRIES);
  const [allergenData, setAllergenData] = useState(INITIAL_ALLERGENS);

  const handleFoodLogged = (entry: any) => {
    // Add to diary
    setDiaryEntries(prev => [entry, ...prev]);
    
    // Update allergen data if the food is an allergen
    if (entry.isAllergen && entry.allergens.length > 0) {
      setAllergenData(prev => 
        prev.map(allergen => {
          if (entry.allergens.includes(allergen.name)) {
            return {
              ...allergen,
              tried: true,
              lastTried: entry.date,
              reactions: entry.hadReaction ? 
                `${entry.notes ? entry.notes + ' - ' : ''}Reaction noted on ${entry.date}` : 
                (allergen.reactions || "No reaction observed")
            };
          }
          return allergen;
        })
      );
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case "library":
        return <FoodLibrary onFoodLogged={handleFoodLogged} />;
      case "diary":
        return <FoodDiary entries={diaryEntries} />;
      case "allergens":
        return <AllergenDashboard allergenData={allergenData} setAllergenData={setAllergenData} />;
      default:
        return <FoodLibrary onFoodLogged={handleFoodLogged} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-soft">
      {/* Header */}
      <header className="bg-card shadow-soft">
        <div className="px-6 py-4 text-center">
          <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Baby Food Tracker
          </h1>
          <p className="text-sm text-muted-foreground mt-1">
            Safe, healthy food introduction for your little one
          </p>
        </div>
      </header>

      {/* Navigation */}
      <Navigation activeTab={activeTab} onTabChange={setActiveTab} />

      {/* Main Content */}
      <main className="max-w-4xl mx-auto pb-20">
        {renderContent()}
      </main>

      {/* Global Floating Add Button */}
      <Button
        onClick={() => setIsGlobalModalOpen(true)}
        className="fixed bottom-6 right-6 h-14 w-14 rounded-full bg-gradient-primary shadow-lg hover:shadow-xl transition-all duration-200 z-50"
        size="icon"
      >
        <Plus className="h-6 w-6" />
      </Button>

      <AddFoodModal
        isOpen={isGlobalModalOpen}
        onClose={() => setIsGlobalModalOpen(false)}
        onFoodLogged={handleFoodLogged}
      />
      
      <Toaster />
    </div>
  );
};

export default Index;
