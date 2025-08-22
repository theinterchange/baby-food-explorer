
import { useState } from "react";
import { CheckCircle2, Circle, AlertTriangle, FileText, History } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

interface AllergenHistory {
  date: string;
  hadReaction: boolean;
  notes: string;
}

interface Allergen {
  name: string;
  tried: boolean;
  reactions: string;
  lastTried: string | null;
  history: AllergenHistory[];
}

interface AllergenDashboardProps {
  allergenData: Allergen[];
  setAllergenData: React.Dispatch<React.SetStateAction<Allergen[]>>;
}

export function AllergenDashboard({ allergenData, setAllergenData }: AllergenDashboardProps) {
  const [editingId, setEditingId] = useState<string | null>(null);
  const [noteText, setNoteText] = useState("");

  const triedCount = allergenData.filter(a => a.tried).length;
  const remainingCount = allergenData.length - triedCount;

  const toggleTried = (allergenName: string) => {
    setAllergenData(prev => 
      prev.map(allergen => 
        allergen.name === allergenName 
          ? { 
              ...allergen, 
              tried: !allergen.tried,
              lastTried: !allergen.tried ? new Date().toISOString().split('T')[0] : null
            }
          : allergen
      )
    );
  };

  const saveNote = (allergenName: string) => {
    setAllergenData(prev => 
      prev.map(allergen => 
        allergen.name === allergenName 
          ? { ...allergen, reactions: noteText }
          : allergen
      )
    );
    setEditingId(null);
    setNoteText("");
  };

  const startEditing = (allergenName: string, currentNote: string) => {
    setEditingId(allergenName);
    setNoteText(currentNote);
  };

  const getAllergenStatus = (allergen: Allergen) => {
    if (!allergen.tried) return 'untried';
    if (allergen.history.length === 0) return 'unknown';
    
    const recentReaction = allergen.history[allergen.history.length - 1];
    return recentReaction.hadReaction ? 'allergic' : 'safe';
  };

  return (
    <div className="space-y-6 p-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <h1 className="text-2xl font-bold">Allergen Dashboard</h1>
        <p className="text-muted-foreground">Track major allergen introductions and reactions</p>
      </div>

      {/* Progress Overview */}
      <Card className="bg-gradient-card">
        <CardContent className="p-6">
          <div className="grid grid-cols-2 gap-6 text-center">
            <div>
              <p className="text-3xl font-bold text-success">{triedCount}/{allergenData.length}</p>
              <p className="text-sm text-muted-foreground">Allergens Introduced</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary">{remainingCount}</p>
              <p className="text-sm text-muted-foreground">Still to Try</p>
            </div>
          </div>
          
          {/* Progress Bar */}
          <div className="mt-4">
              <div className="w-full bg-muted rounded-full h-2">
                <div 
                  className="bg-gradient-primary h-2 rounded-full transition-all duration-300"
                  style={{ width: `${(triedCount / allergenData.length) * 100}%` }}
                />
              </div>
          </div>
        </CardContent>
      </Card>

      {/* Important Note */}
      <Card className="bg-allergen-medium border-allergen-medium-foreground/20">
        <CardContent className="p-4">
          <div className="flex items-start gap-3">
            <AlertTriangle className="h-5 w-5 text-allergen-medium-foreground mt-0.5 flex-shrink-0" />
            <div className="text-sm">
              <p className="font-medium text-allergen-medium-foreground mb-1">
                Allergen Introduction Guidelines
              </p>
              <p className="text-allergen-medium-foreground/80 leading-relaxed">
                Introduce allergens between 4-11 months. Start with small amounts and wait 3-5 days between 
                new allergens. Consult your pediatrician before introducing if there's a family history of food allergies.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Allergen List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {allergenData.map(allergen => {
          const status = getAllergenStatus(allergen);
          const cardClass = 
            status === 'allergic' ? 'bg-destructive/5 border-destructive/20' :
            status === 'safe' ? 'bg-success/5 border-success/20' :
            'bg-gradient-card';
          
          return (
            <Card 
              key={allergen.name} 
              className={`hover:shadow-medium transition-all duration-200 ${cardClass}`}
            >
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-base flex items-center gap-2">
                    <button
                      onClick={() => toggleTried(allergen.name)}
                      className="flex items-center gap-2 hover:opacity-70 transition-opacity"
                    >
                      {allergen.tried ? (
                        <CheckCircle2 className={`h-5 w-5 ${
                          status === 'allergic' ? 'text-destructive' :
                          status === 'safe' ? 'text-success' :
                          'text-muted-foreground'
                        }`} />
                      ) : (
                        <Circle className="h-5 w-5 text-muted-foreground" />
                      )}
                      {allergen.name}
                    </button>
                  </CardTitle>
                  
                  <div className="flex gap-2">
                    {allergen.tried && (
                      <Badge 
                        variant="outline" 
                        className={
                          status === 'allergic' ? 'bg-destructive/10 text-destructive border-destructive/20' :
                          status === 'safe' ? 'bg-success/10 text-success border-success/20' :
                          'bg-warning/10 text-warning border-warning/20'
                        }
                      >
                        {status === 'allergic' ? '⚠️ Allergic' :
                         status === 'safe' ? '✅ Safe' :
                         '? Unknown'}
                      </Badge>
                    )}
                  </div>
                </div>
                
                {allergen.lastTried && (
                  <p className="text-xs text-muted-foreground">
                    Last tried: {new Date(allergen.lastTried).toLocaleDateString()}
                  </p>
                )}
              </CardHeader>
              
              <CardContent className="pt-0 space-y-3">
                {allergen.history.length > 0 && (
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <History className="h-4 w-4" />
                      <span className="text-sm font-medium">
                        Reaction History ({allergen.history.length} {allergen.history.length === 1 ? 'try' : 'tries'})
                      </span>
                    </div>
                    <div className="space-y-1 max-h-24 overflow-y-auto">
                      {allergen.history.map((entry, index) => (
                        <div key={index} className="flex items-center justify-between text-xs bg-muted/50 p-2 rounded">
                          <span>{new Date(entry.date).toLocaleDateString()}</span>
                          <Badge 
                            variant="outline" 
                            className={entry.hadReaction ? 
                              'bg-destructive/10 text-destructive border-destructive/20' :
                              'bg-success/10 text-success border-success/20'
                            }
                          >
                            {entry.hadReaction ? 'Reaction' : 'No Reaction'}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {allergen.tried && (
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium flex items-center gap-2">
                        <FileText className="h-4 w-4" />
                        Reaction Notes
                      </span>
                      {editingId !== allergen.name && (
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => startEditing(allergen.name, allergen.reactions)}
                        >
                          {allergen.reactions ? 'Edit' : 'Add Notes'}
                        </Button>
                      )}
                    </div>
                    
                    {editingId === allergen.name ? (
                      <div className="space-y-2">
                        <Textarea
                          placeholder="Describe any reactions, symptoms, or notes about introduction..."
                          value={noteText}
                          onChange={(e) => setNoteText(e.target.value)}
                          className="min-h-[80px]"
                        />
                        <div className="flex gap-2">
                          <Button 
                            size="sm" 
                            onClick={() => saveNote(allergen.name)}
                            className="bg-gradient-primary"
                          >
                            Save
                          </Button>
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            onClick={() => setEditingId(null)}
                          >
                            Cancel
                          </Button>
                        </div>
                      </div>
                    ) : (
                      <div className="bg-muted/50 p-3 rounded-md min-h-[60px] flex items-center">
                        <p className="text-sm leading-relaxed">
                          {allergen.reactions || (
                            <span className="text-muted-foreground italic">
                              No reaction notes yet. Click "Add Notes" to record any observations.
                            </span>
                          )}
                        </p>
                      </div>
                    )}
                  </div>
                )}
                
                {!allergen.tried && (
                  <div className="text-center py-4">
                    <p className="text-sm text-muted-foreground mb-3">
                      Ready to introduce this allergen?
                    </p>
                    <Button 
                      size="sm" 
                      onClick={() => toggleTried(allergen.name)}
                      className="bg-gradient-primary"
                    >
                      Mark as Tried
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
