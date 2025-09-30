import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { User, LogOut } from 'lucide-react';

interface UserStatusProps {
  onOpenAuth: () => void;
}

export function UserStatus({ onOpenAuth }: UserStatusProps) {
  const { user, signOut } = useAuth();

  if (user) {
    const displayName = user.user_metadata?.display_name || user.email?.split('@')[0] || 'User';
    
    return (
      <div className="flex items-center gap-2">
        <span className="text-sm text-foreground">👋 {displayName}</span>
        <Button
          variant="ghost"
          size="sm"
          onClick={signOut}
          className="h-8"
        >
          <LogOut className="h-4 w-4" />
        </Button>
      </div>
    );
  }

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            size="sm"
            onClick={onOpenAuth}
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            <User className="h-4 w-4 mr-2" />
            Guest User
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p className="max-w-xs">
            Create an account to save your entries across devices and preserve your baby's food journey
          </p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
