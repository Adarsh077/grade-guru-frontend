import { useState } from "react";

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
import { SubjectService } from "@/services";

function ATKTFormDate(props) {
  const { open, handleClose, subjectId } = props;
  const [date, setDate] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      const { status } = await SubjectService.sendAtktReminder(subjectId, date);
      if (status === "success") {
        toast("Reminders sent!");
      } else {
        toast.error("Something went wrong!");
      }
    } catch (error) {
      toast.error(error?.message || "Something went wrong!");
    }
    setIsLoading(false);
  };

  return (
    <Dialog open={open} onOpenChange={() => handleClose()}>
      <DialogContent className="sm:max-w-[300px]">
        <DialogHeader>
          <DialogTitle>ATKT Form Last Date </DialogTitle>
          <DialogDescription>
            Please enter last date of form submission
          </DialogDescription>
        </DialogHeader>
        <Input
          id="date"
          onChange={(e) => setDate(e.target.value)}
          value={date}
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
