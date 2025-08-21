import { useState } from "react";
import { Plus } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { FoodLibrary } from "@/components/FoodLibrary";
import { FoodDiary } from "@/components/FoodDiary";
import { AllergenDashboard } from "@/components/AllergenDashboard";
import { AddFoodModal } from "@/components/AddFoodModal";
import { Button } from "@/components/ui/button";
import { Toaster } from "@/components/ui/toaster";

const Index = () => {
  const [activeTab, setActiveTab] = useState("library");
  const [isGlobalModalOpen, setIsGlobalModalOpen] = useState(false);

  const renderContent = () => {
    switch (activeTab) {
      case "library":
        return <FoodLibrary />;
      case "diary":
        return <FoodDiary />;
      case "allergens":
        return <AllergenDashboard />;
      default:
        return <FoodLibrary />;
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
        onFoodLogged={(entry) => {
          // Handle global food logging
          console.log("Global food logged:", entry);
        }}
      />
      
      <Toaster />
    </div>
  );
};

export default Index;
