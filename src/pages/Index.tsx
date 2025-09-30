import { useState, useEffect } from "react";
import { Plus } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useDataService } from "@/hooks/useDataService";
import { Navigation } from "@/components/Navigation";
import { FoodLibrary } from "@/components/FoodLibrary";
import { FoodDiary } from "@/components/FoodDiary";
import { AllergenDashboard } from "@/components/AllergenDashboard";
import { AddFoodModal } from "@/components/AddFoodModal";
import { AuthModal } from "@/components/AuthModal";
import { SaveProgressModal } from "@/components/SaveProgressModal";
import { UserStatus } from "@/components/UserStatus";
import { Button } from "@/components/ui/button";
import { Toaster } from "@/components/ui/toaster";

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

// Map food allergen names to dashboard allergen names
const mapAllergenName = (foodAllergen: string): string => {
  const mapping: { [key: string]: string } = {
    'Egg': 'eggs',
    'Dairy': 'milk',
    'Peanut': 'peanuts',
    'Tree Nut': 'tree nuts',
    'Tree Nuts': 'tree nuts',
    'Fish': 'fish',
    'Shellfish': 'shellfish',
    'Soy': 'soy',
    'Wheat': 'wheat'
  };
  return mapping[foodAllergen] || foodAllergen.toLowerCase();
};

const Index = () => {
  const { user } = useAuth();
  const { entries, addEntry, updateEntry, deleteEntry, migrateGuestData, entryCount } = useDataService();
  const [activeTab, setActiveTab] = useState("library");
  const [isGlobalModalOpen, setIsGlobalModalOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isSaveProgressModalOpen, setIsSaveProgressModalOpen] = useState(false);
  const [hasShownSavePrompt, setHasShownSavePrompt] = useState(() => {
    return localStorage.getItem('has-shown-save-prompt') === 'true';
  });
  const [allergenData, setAllergenData] = useState(INITIAL_ALLERGENS.map(allergen => ({
    ...allergen,
    history: [] as { date: string; hadReaction: boolean; notes: string }[]
  })));

  // Show save progress modal after 3 entries for guest users
  useEffect(() => {
    if (!user && entryCount >= 3 && !hasShownSavePrompt) {
      setIsSaveProgressModalOpen(true);
      setHasShownSavePrompt(true);
      localStorage.setItem('has-shown-save-prompt', 'true');
    }
  }, [entryCount, user, hasShownSavePrompt]);

  // Migrate guest data when user signs in
  useEffect(() => {
    if (user && entryCount > 0) {
      migrateGuestData();
    }
  }, [user]);

  const handleFoodLogged = async (entry: any) => {
    await addEntry(entry);
    
    // Update allergen data if the food is an allergen
    if (entry.isAllergen && entry.allergens.length > 0) {
      setAllergenData(prev => 
        prev.map(allergen => {
          const mappedAllergens = entry.allergens.map(mapAllergenName);
          if (mappedAllergens.includes(allergen.name)) {
            const historyEntry = {
              date: entry.date,
              hadReaction: entry.hadReaction,
              notes: entry.notes
            };
            
            return {
              ...allergen,
              tried: true,
              lastTried: entry.date,
              history: [...allergen.history, historyEntry],
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

  const handleEntryUpdated = async (updatedEntry: any) => {
    await updateEntry(updatedEntry);
    
    // Update allergen data if this entry affects allergens
    if (updatedEntry.isAllergen && updatedEntry.allergens.length > 0) {
      setAllergenData(prev => 
        prev.map(allergen => {
          const mappedAllergens = updatedEntry.allergens.map(mapAllergenName);
          if (mappedAllergens.includes(allergen.name)) {
            const historyWithoutThisDate = allergen.history.filter(h => h.date !== updatedEntry.date);
            const newHistoryEntry = {
              date: updatedEntry.date,
              hadReaction: updatedEntry.hadReaction,
              notes: updatedEntry.notes
            };
            
            return {
              ...allergen,
              history: [...historyWithoutThisDate, newHistoryEntry].sort((a, b) => a.date.localeCompare(b.date)),
              lastTried: updatedEntry.date
            };
          }
          return allergen;
        })
      );
    }
  };

  const handleEntryDeleted = async (entryId: number) => {
    const entryToDelete = entries.find(entry => entry.id === entryId);
    await deleteEntry(entryId);
    
    // Remove from allergen history if it was an allergen entry
    if (entryToDelete?.isAllergen && entryToDelete.allergens.length > 0) {
      setAllergenData(prev => 
        prev.map(allergen => {
          const mappedAllergens = entryToDelete.allergens.map(mapAllergenName);
          if (mappedAllergens.includes(allergen.name)) {
            const updatedHistory = allergen.history.filter(h => h.date !== entryToDelete.date);
            return {
              ...allergen,
              history: updatedHistory,
              tried: updatedHistory.length > 0,
              lastTried: updatedHistory.length > 0 ? updatedHistory[updatedHistory.length - 1].date : null
            };
          }
          return allergen;
        })
      );
    }
  };

  const handleOpenAuth = () => {
    setIsSaveProgressModalOpen(false);
    setIsAuthModalOpen(true);
  };

  const renderContent = () => {
    switch (activeTab) {
      case "library":
        return <FoodLibrary onFoodLogged={handleFoodLogged} />;
      case "diary":
        return (
          <FoodDiary 
            entries={entries} 
            onEntryUpdated={handleEntryUpdated}
            onEntryDeleted={handleEntryDeleted}
          />
        );
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
        <div className="px-6 py-4">
          <div className="relative max-w-4xl mx-auto">
            <div className="text-center">
              <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Baby Food Tracker
              </h1>
              <p className="text-sm text-muted-foreground mt-1">
                Safe, healthy food introduction for your little one
              </p>
            </div>
            <div className="absolute right-0 top-1/2 -translate-y-1/2">
              <UserStatus onOpenAuth={handleOpenAuth} />
            </div>
          </div>
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

      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
      />

      <SaveProgressModal
        isOpen={isSaveProgressModalOpen}
        onClose={() => setIsSaveProgressModalOpen(false)}
        onSignUp={handleOpenAuth}
        entryCount={entryCount}
      />
      
      <Toaster />
    </div>
  );
};

export default Index;
