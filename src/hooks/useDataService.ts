import { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { useLocalStorage } from './useLocalStorage';
import { toast } from '@/hooks/use-toast';

export interface DiaryEntry {
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

export function useDataService() {
  const { user } = useAuth();
  const [guestEntries, setGuestEntries] = useLocalStorage<DiaryEntry[]>('guest-entries', []);
  const [dbEntries, setDbEntries] = useState<DiaryEntry[]>([]);
  const [entryCount, setEntryCount] = useLocalStorage<number>('entry-count', 0);
  const [loading, setLoading] = useState(false);

  // Load entries from database when user is authenticated
  useEffect(() => {
    if (user) {
      loadDbEntries();
    }
  }, [user]);

  const loadDbEntries = async () => {
    if (!user) return;
    
    setLoading(true);
    try {
      const { data, error } = await (supabase as any)
        .from('food_entries')
        .select('*')
        .order('entry_date', { ascending: false })
        .order('entry_time', { ascending: false });

      if (error) throw error;

      const mappedEntries: DiaryEntry[] = (data || []).map((entry: any) => ({
        id: entry.id,
        date: entry.entry_date,
        time: entry.entry_time,
        foodName: entry.food_name,
        preparation: entry.preparation || '',
        babyReaction: entry.reaction || 'loved-it',
        hadReaction: false,
        notes: entry.notes || '',
        timestamp: entry.created_at,
        isAllergen: entry.allergens && entry.allergens.length > 0,
        allergens: entry.allergens || [],
      }));

      setDbEntries(mappedEntries);
    } catch (error: any) {
      console.error('Error loading entries:', error);
      toast({
        title: 'Error loading entries',
        description: error.message,
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  const addEntry = async (entry: Omit<DiaryEntry, 'id' | 'timestamp'>) => {
    const newEntry = {
      ...entry,
      id: Date.now(),
      timestamp: new Date().toISOString(),
    };

    if (user) {
      // Save to database
      try {
        const { error } = await (supabase as any).from('food_entries').insert({
          user_id: user.id,
          entry_date: entry.date,
          entry_time: entry.time,
          food_name: entry.foodName,
          preparation: entry.preparation,
          reaction: entry.babyReaction,
          notes: entry.notes,
          allergens: entry.allergens,
        });

        if (error) throw error;
        await loadDbEntries();
      } catch (error: any) {
        console.error('Error saving entry:', error);
        toast({
          title: 'Error saving entry',
          description: error.message,
          variant: 'destructive',
        });
      }
    } else {
      // Save to localStorage
      setGuestEntries((prev) => [newEntry, ...prev]);
      setEntryCount((prev) => prev + 1);
    }
  };

  const updateEntry = async (updatedEntry: DiaryEntry) => {
    if (user) {
      // Update in database
      try {
        const { error } = await (supabase as any)
          .from('food_entries')
          .update({
            entry_date: updatedEntry.date,
            entry_time: updatedEntry.time,
            food_name: updatedEntry.foodName,
            preparation: updatedEntry.preparation,
            reaction: updatedEntry.babyReaction,
            notes: updatedEntry.notes,
            allergens: updatedEntry.allergens,
          })
          .eq('id', updatedEntry.id);

        if (error) throw error;
        await loadDbEntries();
      } catch (error: any) {
        console.error('Error updating entry:', error);
        toast({
          title: 'Error updating entry',
          description: error.message,
          variant: 'destructive',
        });
      }
    } else {
      // Update in localStorage
      setGuestEntries((prev) =>
        prev.map((entry) => (entry.id === updatedEntry.id ? updatedEntry : entry))
      );
    }
  };

  const deleteEntry = async (entryId: number) => {
    if (user) {
      // Delete from database
      try {
        const { error } = await (supabase as any).from('food_entries').delete().eq('id', entryId);

        if (error) throw error;
        await loadDbEntries();
      } catch (error: any) {
        console.error('Error deleting entry:', error);
        toast({
          title: 'Error deleting entry',
          description: error.message,
          variant: 'destructive',
        });
      }
    } else {
      // Delete from localStorage
      setGuestEntries((prev) => prev.filter((entry) => entry.id !== entryId));
    }
  };

  const migrateGuestData = async () => {
    if (!user || guestEntries.length === 0) return;

    try {
      const entriesToMigrate = guestEntries.map((entry) => ({
        user_id: user.id,
        entry_date: entry.date,
        entry_time: entry.time,
        food_name: entry.foodName,
        preparation: entry.preparation,
        reaction: entry.babyReaction,
        notes: entry.notes,
        allergens: entry.allergens,
      }));

      const { error } = await (supabase as any).from('food_entries').insert(entriesToMigrate);

      if (error) throw error;

      // Clear guest data after successful migration
      setGuestEntries([]);
      setEntryCount(0);
      await loadDbEntries();

      toast({
        title: 'Data migrated successfully!',
        description: `${guestEntries.length} entries have been saved to your account.`,
      });
    } catch (error: any) {
      console.error('Error migrating data:', error);
      toast({
        title: 'Error migrating data',
        description: error.message,
        variant: 'destructive',
      });
    }
  };

  const entries = user ? dbEntries : guestEntries;

  return {
    entries,
    addEntry,
    updateEntry,
    deleteEntry,
    migrateGuestData,
    entryCount,
    loading,
  };
}
