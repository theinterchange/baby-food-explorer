import { useState } from "react";
import { Calendar, Plus, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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
}

export function FoodDiary({ entries }: FoodDiaryProps) {
  const [selectedDate, setSelectedDate] = useState(new Date());

  // Get diary entries for selected date
  const selectedDateStr = selectedDate.toISOString().split('T')[0];
  const dayEntries = entries.filter(entry => entry.date === selectedDateStr);

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
      {dayEntries.length > 0 && (
        <Card className="bg-accent/50">
          <CardHeader>
            <CardTitle className="text-base">This Week's Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div>
                <p className="text-2xl font-bold text-primary">3</p>
                <p className="text-xs text-muted-foreground">New Foods Tried</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-success">12</p>
                <p className="text-xs text-muted-foreground">Total Meals Logged</p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}