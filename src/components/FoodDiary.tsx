import { useState } from "react";
import { Calendar, Plus, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Sample diary data - would come from a database in production
const DIARY_ENTRIES = [
  {
    id: 1,
    date: "2024-01-20",
    foodName: "Avocado",
    isNewFood: true,
    liked: true,
    preparation: "Mashed",
    notes: "First time trying! Loved it and asked for more."
  },
  {
    id: 2,
    date: "2024-01-20",
    foodName: "Sweet Potato",
    isNewFood: false,
    liked: true,
    preparation: "Steamed",
    notes: "Third time having this. Still enjoys it."
  },
  {
    id: 3,
    date: "2024-01-19",
    foodName: "Eggs",
    isNewFood: true,
    liked: false,
    preparation: "Scrambled",
    notes: "Made a face but ate a few bites. Will try again."
  }
];

interface DiaryEntry {
  id: number;
  date: string;
  foodName: string;
  isNewFood: boolean;
  liked: boolean;
  preparation: string;
  notes: string;
}

export function FoodDiary() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  // Get diary entries for selected date
  const selectedDateStr = selectedDate.toISOString().split('T')[0];
  const dayEntries = DIARY_ENTRIES.filter(entry => entry.date === selectedDateStr);

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
                    <CardTitle className="text-lg">{entry.foodName}</CardTitle>
                    <p className="text-sm text-muted-foreground mt-1">
                      Preparation: {entry.preparation}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    {entry.isNewFood && (
                      <Badge className="bg-primary-soft text-primary-foreground">
                        New Food!
                      </Badge>
                    )}
                    <Badge 
                      variant="outline"
                      className={entry.liked 
                        ? "bg-success/10 text-success border-success/20" 
                        : "bg-warning/10 text-warning border-warning/20"
                      }
                    >
                      {entry.liked ? "😋 Liked" : "😐 Mixed"}
                    </Badge>
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