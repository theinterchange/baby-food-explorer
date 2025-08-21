import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { FoodLibrary } from "@/components/FoodLibrary";
import { FoodDiary } from "@/components/FoodDiary";
import { AllergenDashboard } from "@/components/AllergenDashboard";

const Index = () => {
  const [activeTab, setActiveTab] = useState("library");

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
      <main className="max-w-4xl mx-auto">
        {renderContent()}
      </main>
    </div>
  );
};

export default Index;
