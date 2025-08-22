
import { useState, useEffect } from "react";
import { X, Calendar, Clock, ChefHat, Heart, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";

const PREPARATION_OPTIONS = [
  "Purée", "Mashed", "Soft-cooked", "Steamed", "Boiled", 
  "Roasted", "Baked", "Sautéed", "Minced", "Grated", "Sliced/Strips", "Cubed"
];

const REACTION_OPTIONS = [
  { value: "disliked", label: "😤 Disliked", emoji: "😤" },
  { value: "mixed", label: "😐 Mixed", emoji: "😐" },
  { value: "liked", label: "😋 Liked", emoji: "😋" },
  { value: "loved", label: "🤤 Loved", emoji: "🤤" }
];

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

interface EditFoodModalProps {
  isOpen: boolean;
  onClose: () => void;
  entry: DiaryEntry | null;
  onEntryUpdated: (updatedEntry: DiaryEntry) => void;
}

export function EditFoodModal({ isOpen, onClose, entry, onEntryUpdated }: EditFoodModalProps) {
  const [formData, setFormData] = useState({
    foodName: "",
    date: "",
    time: "",
    preparation: "",
    babyReaction: "liked",
    hadReaction: false,
    notes: ""
  });

  useEffect(() => {
    if (entry) {
      setFormData({
        foodName: entry.foodName,
        date: entry.date,
        time: entry.time,
        preparation: entry.preparation,
        babyReaction: entry.babyReaction,
        hadReaction: entry.hadReaction,
        notes: entry.notes
      });
    }
  }, [entry]);

  const handleSubmit = () => {
    if (!entry) return;

    const updatedEntry: DiaryEntry = {
      ...entry,
      foodName: formData.foodName,
      date: formData.date,
      time: formData.time,
      preparation: formData.preparation,
      babyReaction: formData.babyReaction,
      hadReaction: formData.hadReaction,
      notes: formData.notes,
      timestamp: `${formData.date}T${formData.time}:00.000Z`
    };

    onEntryUpdated(updatedEntry);
    onClose();
  };

  if (!isOpen || !entry) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-md max-h-[90vh] overflow-y-auto">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
          <CardTitle className="text-lg">Edit Food Entry</CardTitle>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </CardHeader>
        
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="foodName" className="flex items-center gap-2">
              <ChefHat className="h-4 w-4" />
              Food Name
            </Label>
            <Input
              id="foodName"
              value={formData.foodName}
              onChange={(e) => setFormData(prev => ({ ...prev, foodName: e.target.value }))}
              placeholder="Enter food name"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="date" className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                Date
              </Label>
              <Input
                id="date"
                type="date"
                value={formData.date}
                onChange={(e) => setFormData(prev => ({ ...prev, date: e.target.value }))}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="time" className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                Time
              </Label>
              <Input
                id="time"
                type="time"
                value={formData.time}
                onChange={(e) => setFormData(prev => ({ ...prev, time: e.target.value }))}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label>Preparation Method (Optional)</Label>
            <Select value={formData.preparation} onValueChange={(value) => setFormData(prev => ({ ...prev, preparation: value }))}>
              <SelectTrigger>
                <SelectValue placeholder="Select preparation method" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">No preparation specified</SelectItem>
                {PREPARATION_OPTIONS.map(prep => (
                  <SelectItem key={prep} value={prep}>{prep}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label className="flex items-center gap-2">
              <Heart className="h-4 w-4" />
              Baby's Reaction
            </Label>
            <Select value={formData.babyReaction} onValueChange={(value) => setFormData(prev => ({ ...prev, babyReaction: value }))}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {REACTION_OPTIONS.map(option => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {entry.isAllergen && (
            <div className="space-y-2">
              <Label className="flex items-center gap-2">
                <AlertTriangle className="h-4 w-4" />
                Allergic Reaction
              </Label>
              <div className="flex items-center space-x-2">
                <Switch
                  checked={formData.hadReaction}
                  onCheckedChange={(checked) => setFormData(prev => ({ ...prev, hadReaction: checked }))}
                />
                <span className="text-sm">Baby had an allergic reaction</span>
              </div>
            </div>
          )}

          <div className="space-y-2">
            <Label htmlFor="notes">Notes</Label>
            <Textarea
              id="notes"
              value={formData.notes}
              onChange={(e) => setFormData(prev => ({ ...prev, notes: e.target.value }))}
              placeholder="Any additional observations..."
              className="min-h-[80px]"
            />
          </div>

          {entry.isAllergen && entry.allergens.length > 0 && (
            <div className="p-3 bg-muted rounded-lg">
              <p className="text-sm font-medium mb-2">Allergens in this food:</p>
              <div className="flex flex-wrap gap-1">
                {entry.allergens.map(allergen => (
                  <Badge key={allergen} className="bg-allergen-high text-allergen-high-foreground">
                    {allergen}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          <div className="flex gap-2 pt-4">
            <Button onClick={handleSubmit} className="flex-1 bg-gradient-primary">
              Save Changes
            </Button>
            <Button variant="outline" onClick={onClose} className="flex-1">
              Cancel
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
