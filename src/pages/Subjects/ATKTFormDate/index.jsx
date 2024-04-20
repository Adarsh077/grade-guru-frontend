import { useState } from "react";

import { DateTime } from "luxon";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { SubjectGroupService } from "@/services";

function ATKTFormDate(props) {
  const { open, handleClose, subjectGroupId } = props;
  const [date, setDate] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      const { status } = await SubjectGroupService.sendRevalutionReminder(
        subjectGroupId,
        date
      );
      if (status === "success") {
        toast("Reminders sent!");
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
          <DialogTitle>Revalution Form Last Date </DialogTitle>
          <DialogDescription>
            Please enter last date of form submission
          </DialogDescription>
        </DialogHeader>
        <Input
          id="date"
          onChange={(e) => setDate(e.target.value)}
          value={date}
          min={DateTime.now().plus({ days: 1 }).toFormat("yyyy-LL-dd")}
          max={DateTime.now().plus({ days: 90 }).toFormat("yyyy-LL-dd")}
          type="date"
        />

        <DialogFooter>
          <Button
            isLoading={isLoading}
            className="w-full"
            onClick={handleSubmit}
            type="submit"
          >
            Send Reminder
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default ATKTFormDate;
