import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Cloud, Shield, Smartphone } from 'lucide-react';

interface SaveProgressModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSignUp: () => void;
  entryCount: number;
}

export function SaveProgressModal({
  isOpen,
  onClose,
  onSignUp,
  entryCount,
}: SaveProgressModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl">Save Your Progress! 🎉</DialogTitle>
          <DialogDescription className="text-base">
            You've logged {entryCount} entries! Create an account to keep tracking your baby's food journey.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-4">
          <div className="flex items-start gap-3">
            <Cloud className="h-5 w-5 text-primary mt-0.5" />
            <div>
              <h4 className="font-medium">Cross-Device Sync</h4>
              <p className="text-sm text-muted-foreground">
                Access your entries from anywhere, on any device
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Shield className="h-5 w-5 text-primary mt-0.5" />
            <div>
              <h4 className="font-medium">Secure Backup</h4>
              <p className="text-sm text-muted-foreground">
                Never lose your baby's food history
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Smartphone className="h-5 w-5 text-primary mt-0.5" />
            <div>
              <h4 className="font-medium">Track On The Go</h4>
              <p className="text-sm text-muted-foreground">
                Log meals from your phone, tablet, or computer
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
            <div>
              <h4 className="font-medium">Free Forever</h4>
              <p className="text-sm text-muted-foreground">
                All features, no subscription required
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <Button onClick={onSignUp} size="lg" className="w-full">
            Create Free Account
          </Button>
          <Button onClick={onClose} variant="ghost" className="w-full">
            Maybe Later
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
