import { useState } from "react";

import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { SubjectGroupService } from "@/services";

function LockConfirm(props) {
  const { open, handleClose, subjectGroupId } = props;
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      const { status } = await SubjectGroupService.lockMarksEntry(
        subjectGroupId
      );
      if (status === "success") {
        toast("Marks Entry Locked!");
      } else {
        toast.error("Something went wrong!");
      }
    } catch (error) {
      toast.error(error?.message || "Something went wrong!");
    }
    setIsLoading(false);
    handleClose();
  };

  return (
    <Dialog open={open} onOpenChange={() => handleClose()}>
      <DialogContent className="sm:max-w-[300px]">
        <DialogHeader>
          <DialogTitle>Lock Marks Entry</DialogTitle>
        </DialogHeader>
        <DialogFooter>
          <Button
            isLoading={isLoading}
            className="w-full"
            onClick={handleSubmit}
            type="submit"
            variant="ghost"
          >
            Cancel
          </Button>
          <Button
            isLoading={isLoading}
            className="w-full"
            onClick={handleSubmit}
            type="submit"
          >
            Lock
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default LockConfirm;
