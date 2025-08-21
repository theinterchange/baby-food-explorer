import { useState } from "react";
import { Book, Calendar, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const tabs = [
  {
    id: "library",
    label: "Food Library",
    icon: Book,
    description: "Browse foods & allergens"
  },
  {
    id: "diary", 
    label: "Diary",
    icon: Calendar,
    description: "Track daily feeds"
  },
  {
    id: "allergens",
    label: "Allergens", 
    icon: Shield,
    description: "Monitor introductions"
  }
];

export function Navigation({ activeTab, onTabChange }: NavigationProps) {
  return (
    <div className="bg-gradient-soft border-b border-border/50 px-6 py-4">
      <div className="flex justify-center">
        <div className="flex bg-card rounded-lg p-1 shadow-soft">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            
            return (
              <Button
                key={tab.id}
                variant="ghost"
                onClick={() => onTabChange(tab.id)}
                className={`
                  flex flex-col items-center gap-1 px-4 py-3 h-auto min-w-[100px] transition-all duration-200
                  ${isActive 
                    ? 'bg-gradient-primary text-primary-foreground shadow-medium' 
                    : 'hover:bg-accent/50 text-muted-foreground hover:text-foreground'
                  }
                `}
              >
                <Icon className={`h-5 w-5 ${isActive ? 'text-primary-foreground' : ''}`} />
                <span className={`text-xs font-medium ${isActive ? 'text-primary-foreground' : ''}`}>
                  {tab.label}
                </span>
              </Button>
            );
          })}
        </div>
      </div>
    </div>
  );
}