import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

const PREPARATION_METHODS = [
  "Purée",
  "Mashed", 
  "Soft-cooked",
  "Steamed",
  "Boiled",
  "Roasted",
  "Baked",
  "Sautéed",
  "Minced",
  "Grated",
  "Sliced/Strips",
  "Cubed"
];

// Food library data for autocomplete
const FOODS = [
  { name: "Avocado", allergens: [] },
  { name: "Pumpkin", allergens: [] },
  { name: "Mango", allergens: [] },
  { name: "Cucumber", allergens: [] },
  { name: "Broccoli", allergens: [] },
  { name: "Carrot", allergens: [] },
  { name: "Tomato", allergens: [] },
  { name: "Eggs", allergens: ["eggs"] },
  { name: "Peanut Butter", allergens: ["peanuts"] },
  { name: "Salmon", allergens: ["fish"] },
  { name: "Whole Milk", allergens: ["milk"] },
  { name: "Sweet Potato", allergens: [] },
  { name: "Banana", allergens: [] },
  { name: "Apple", allergens: [] },
  { name: "Pear", allergens: [] },
  { name: "Rice Cereal", allergens: [] },
  { name: "Oatmeal", allergens: ["wheat"] },
  { name: "Yogurt", allergens: ["milk"] },
  { name: "Chicken", allergens: [] },
  { name: "Beef", allergens: [] }
];

const BABY_REACTIONS = [
  { value: "disliked", label: "Disliked", emoji: "😤" },
  { value: "mixed", label: "Mixed", emoji: "😐" },
  { value: "liked", label: "Liked", emoji: "😋" },
  { value: "loved", label: "Loved", emoji: "🤤" }
];

interface AddFoodModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedFood?: string;
  onFoodLogged?: (entry: any) => void;
}

export function AddFoodModal({ isOpen, onClose, selectedFood, onFoodLogged }: AddFoodModalProps) {
  const [foodName, setFoodName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [preparation, setPreparation] = useState("");
  const [babyReaction, setBabyReaction] = useState("mixed");
  const [hadReaction, setHadReaction] = useState(false);
  const [notes, setNotes] = useState("");
  const [open, setOpen] = useState(false);
  const { toast } = useToast();

  // Auto-populate date and time when modal opens
  useEffect(() => {
    if (isOpen) {
      const now = new Date();
      setDate(now.toISOString().split('T')[0]);
      setTime(now.toTimeString().slice(0, 5));
    }
  }, [isOpen]);

  // Auto-populate food name when selectedFood changes
  useEffect(() => {
    if (selectedFood) {
      setFoodName(selectedFood);
    }
  }, [selectedFood]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!foodName) {
      toast({
        title: "Missing Information",
        description: "Please enter a food name.",
        variant: "destructive",
      });
      return;
    }

    // Check if food is an allergen
    const food = FOODS.find(f => f.name.toLowerCase() === foodName.toLowerCase());
    const isAllergen = food?.allergens && food.allergens.length > 0;

    const entry = {
      id: Date.now(),
      date,
      time,
      foodName,
      preparation,
      babyReaction,
      hadReaction,
      notes,
      timestamp: new Date(`${date} ${time}`).toISOString(),
      isAllergen,
      allergens: food?.allergens || [],
    };

    // Call callback if provided
    if (onFoodLogged) {
      onFoodLogged(entry);
    }

    toast({
      title: "Food Logged Successfully!",
      description: `${foodName} has been added to the diary.`,
    });

    // Reset form and close modal
    resetForm();
    onClose();
  };

  const resetForm = () => {
    setFoodName("");
    setPreparation("");
    setBabyReaction("mixed");
    setHadReaction(false);
    setNotes("");
    setOpen(false);
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center">Log Food Entry</DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Food Name with Autocomplete */}
          <div className="space-y-2">
            <Label htmlFor="foodName">Food Name *</Label>
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  role="combobox"
                  aria-expanded={open}
                  className="w-full justify-between"
                >
                  {foodName || "Select or type food name..."}
                  <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-full p-0">
                <Command>
                  <CommandInput 
                    placeholder="Search foods..." 
                    value={foodName}
                    onValueChange={setFoodName}
                  />
                  <CommandList>
                    <CommandEmpty>No food found.</CommandEmpty>
                    <CommandGroup>
                      {FOODS.map((food) => (
                        <CommandItem
                          key={food.name}
                          value={food.name}
                          onSelect={(currentValue) => {
                            setFoodName(currentValue);
                            setOpen(false);
                          }}
                        >
                          <Check
                            className={cn(
                              "mr-2 h-4 w-4",
                              foodName === food.name ? "opacity-100" : "opacity-0"
                            )}
                          />
                          {food.name}
                          {food.allergens.length > 0 && (
                            <span className="ml-2 text-xs text-allergen-high-foreground">
                              (Allergen)
                            </span>
                          )}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
          </div>

          {/* Date and Time */}
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-2">
              <Label htmlFor="date">Date</Label>
              <Input
                id="date"
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="time">Time</Label>
              <Input
                id="time"
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Preparation Method */}
          <div className="space-y-2">
            <Label htmlFor="preparation">Preparation Method</Label>
            <Select value={preparation} onValueChange={setPreparation}>
              <SelectTrigger>
                <SelectValue placeholder="Select preparation method (optional)" />
              </SelectTrigger>
              <SelectContent>
                {PREPARATION_METHODS.map((method) => (
                  <SelectItem key={method} value={method}>
                    {method}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Baby's Reaction to Food */}
          <div className="space-y-2">
            <Label className="text-sm font-medium">How did baby like it?</Label>
            <div className="grid grid-cols-2 gap-2">
              {BABY_REACTIONS.map((reaction) => (
                <Button
                  key={reaction.value}
                  type="button"
                  variant={babyReaction === reaction.value ? "default" : "outline"}
                  onClick={() => setBabyReaction(reaction.value)}
                  className="flex items-center gap-2 h-auto py-3"
                >
                  <span className="text-lg">{reaction.emoji}</span>
                  <span className="text-sm">{reaction.label}</span>
                </Button>
              ))}
            </div>
          </div>

          {/* Allergic Reaction Toggle */}
          <div className="flex items-center justify-between">
            <Label htmlFor="reaction" className="text-sm font-medium">
              Any allergic reaction?
            </Label>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-muted-foreground">
                {hadReaction ? "⚠️ Yes" : "✅ No"}
              </span>
              <Switch
                id="reaction"
                checked={hadReaction}
                onCheckedChange={setHadReaction}
              />
            </div>
          </div>

          {/* Notes */}
          <div className="space-y-2">
            <Label htmlFor="notes">Notes</Label>
            <Textarea
              id="notes"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Any observations, reactions, or notes about this feeding..."
              className="min-h-[80px]"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4">
            <Button type="button" variant="outline" onClick={handleClose} className="flex-1">
              Cancel
            </Button>
            <Button type="submit" className="flex-1 bg-gradient-primary">
              Log Food
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}