
import { useState } from "react";
import { Calendar, ChevronLeft, ChevronRight, Edit, Trash2, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { EditFoodModal } from "./EditFoodModal";

interface DiaryEntry {
  id: number;
  date: string;
  time: string;
  foodName: string;
  preparation: string;
  babyReaction: string;
  hadReaction: boolean;
  notes: string;
  timestamp: string;
  isAllergen: boolean;
  allergens: string[];
}

interface FoodDiaryProps {
  entries: DiaryEntry[];
  onEntryUpdated: (updatedEntry: DiaryEntry) => void;
  onEntryDeleted: (entryId: number) => void;
}

export function FoodDiary({ entries, onEntryUpdated, onEntryDeleted }: FoodDiaryProps) {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [editingEntry, setEditingEntry] = useState<DiaryEntry | null>(null);

  // Get diary entries for selected date
  const selectedDateStr = selectedDate.toISOString().split('T')[0];
  const dayEntries = entries.filter(entry => entry.date === selectedDateStr);

  // Get weekly data (last 7 days from selected date)
  const getWeeklyData = () => {
    const weekStart = new Date(selectedDate);
    weekStart.setDate(weekStart.getDate() - 6);
    const weekStartStr = weekStart.toISOString().split('T')[0];
    
    const weekEntries = entries.filter(entry => entry.date >= weekStartStr && entry.date <= selectedDateStr);
    
    // Get unique foods tried this week
    const uniqueFoods = Array.from(new Set(weekEntries.map(entry => entry.foodName)));
    const newFoods = uniqueFoods.filter(food => {
      const firstTry = entries.find(entry => entry.foodName === food);
      return firstTry && firstTry.date >= weekStartStr;
    });
    
    // Count allergic reactions this week
    const allergicReactions = weekEntries.filter(entry => entry.hadReaction).length;
    
    return {
      totalMeals: weekEntries.length,
      newFoods,
      allergicReactions
    };
  };

  const weeklyData = getWeeklyData();

  // Calendar navigation
  const previousDay = () => {
    const newDate = new Date(selectedDate);
    newDate.setDate(newDate.getDate() - 1);
    setSelectedDate(newDate);
  };

  const nextDay = () => {
    const newDate = new Date(selectedDate);
    newDate.setDate(newDate.getDate() + 1);
    setSelectedDate(newDate);
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const handleDeleteEntry = (entryId: number) => {
    if (confirm("Are you sure you want to delete this entry?")) {
      onEntryDeleted(entryId);
    }
  };

  return (
    <div className="space-y-6 p-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <h1 className="text-2xl font-bold">Food Diary</h1>
        <p className="text-muted-foreground">Track your baby's feeding journey</p>
      </div>

      {/* Date Navigation */}
      <Card className="bg-gradient-card">
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <Button variant="ghost" size="sm" onClick={previousDay}>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            
            <div className="text-center">
              <div className="flex items-center gap-2 justify-center">
                <Calendar className="h-4 w-4 text-primary" />
                <span className="font-medium">{formatDate(selectedDate)}</span>
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                {dayEntries.length} {dayEntries.length === 1 ? 'entry' : 'entries'} logged
              </p>
            </div>

            <Button variant="ghost" size="sm" onClick={nextDay}>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Diary Entries */}
      <div className="space-y-4">
        {dayEntries.length > 0 ? (
          dayEntries.map(entry => (
            <Card key={entry.id} className="hover:shadow-medium transition-all duration-200 bg-gradient-card">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg flex items-center gap-2">
                      {entry.foodName}
                      <span className="text-sm font-normal text-muted-foreground">
                        {entry.time}
                      </span>
                    </CardTitle>
                    <p className="text-sm text-muted-foreground mt-1">
                      Preparation: {entry.preparation || "Not specified"}
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="flex gap-2 mb-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setEditingEntry(entry)}
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleDeleteEntry(entry.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="flex gap-2 flex-wrap">
                      {entry.isAllergen && (
                        <Badge className="bg-allergen-high text-allergen-high-foreground">
                          Allergen
                        </Badge>
                      )}
                      <Badge 
                        variant="outline"
                        className={
                          entry.babyReaction === "loved" ? "bg-success/20 text-success border-success/40" :
                          entry.babyReaction === "liked" ? "bg-success/10 text-success border-success/20" :
                          entry.babyReaction === "mixed" ? "bg-warning/10 text-warning border-warning/20" :
                          "bg-destructive/10 text-destructive border-destructive/20"
                        }
                      >
                        {entry.babyReaction === "loved" ? "🤤 Loved" :
                         entry.babyReaction === "liked" ? "😋 Liked" :
                         entry.babyReaction === "mixed" ? "😐 Mixed" :
                         "😤 Disliked"}
                      </Badge>
                      {entry.hadReaction && (
                        <Badge className="bg-destructive text-destructive-foreground">
                          ⚠️ Reaction
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-sm leading-relaxed">{entry.notes}</p>
              </CardContent>
            </Card>
          ))
        ) : (
          <Card className="border-dashed border-2 bg-muted/30">
            <CardContent className="p-12 text-center space-y-4">
              <div className="text-6xl">🍽️</div>
              <div>
                <h3 className="font-medium mb-2">No entries for this day</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Start tracking your baby's foods by logging their first meal
                </p>
              </div>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Weekly Summary */}
      {weeklyData.totalMeals > 0 && (
        <Card className="bg-accent/50">
          <CardHeader>
            <CardTitle className="text-base">This Week's Progress</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4 text-center">
              <div>
                <p className="text-2xl font-bold text-success">{weeklyData.newFoods.length}</p>
                <p className="text-xs text-muted-foreground">New Foods Tried</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">{weeklyData.totalMeals}</p>
                <p className="text-xs text-muted-foreground">Total Meals Logged</p>
              </div>
            </div>
            
            {weeklyData.allergicReactions > 0 && (
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 text-destructive">
                  <AlertTriangle className="h-4 w-4" />
                  <p className="text-sm font-medium">{weeklyData.allergicReactions} Allergic Reactions This Week</p>
                </div>
              </div>
            )}
            
            {weeklyData.newFoods.length > 0 && (
              <div>
                <p className="text-sm font-medium mb-2">New Foods This Week:</p>
                <div className="flex flex-wrap gap-1">
                  {weeklyData.newFoods.map(food => (
                    <Badge key={food} variant="outline" className="bg-success/10 text-success border-success/20">
                      {food}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      )}

      <EditFoodModal
        isOpen={!!editingEntry}
        onClose={() => setEditingEntry(null)}
        entry={editingEntry}
        onEntryUpdated={onEntryUpdated}
      />
    </div>
  );
}
