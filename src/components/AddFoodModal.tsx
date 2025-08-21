import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
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
  const [liked, setLiked] = useState(false);
  const [notes, setNotes] = useState("");
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
    
    if (!foodName || !preparation) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    const entry = {
      id: Date.now(), // Simple ID generation
      date,
      time,
      foodName,
      preparation,
      liked,
      notes,
      timestamp: new Date(`${date} ${time}`).toISOString(),
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
    setLiked(false);
    setNotes("");
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
          {/* Food Name */}
          <div className="space-y-2">
            <Label htmlFor="foodName">Food Name *</Label>
            <Input
              id="foodName"
              value={foodName}
              onChange={(e) => setFoodName(e.target.value)}
              placeholder="Enter food name"
              required
            />
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
            <Label htmlFor="preparation">Preparation Method *</Label>
            <Select value={preparation} onValueChange={setPreparation} required>
              <SelectTrigger>
                <SelectValue placeholder="Select preparation method" />
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

          {/* Liked Toggle */}
          <div className="flex items-center justify-between">
            <Label htmlFor="liked" className="text-sm font-medium">
              Baby liked it?
            </Label>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-muted-foreground">
                {liked ? "😋 Liked" : "😐 Mixed"}
              </span>
              <Switch
                id="liked"
                checked={liked}
                onCheckedChange={setLiked}
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