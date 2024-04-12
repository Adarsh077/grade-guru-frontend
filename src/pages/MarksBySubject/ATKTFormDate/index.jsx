import { useState } from "react";

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

function ATKTFormDate(props) {
  const { open, handleClose, subjectId } = props;

  const handleSubmit = () => {};

  return (
    <Dialog open={open} onOpenChange={() => handleClose()}>
      <DialogContent className="sm:max-w-[50vw]">
        <DialogHeader>
          <DialogTitle>ATKT Form Last Date</DialogTitle>
          <DialogDescription>
            Please enter last date of form submission
          </DialogDescription>
        </DialogHeader>
        <Input id="date" onOpenChange className="col-span-2" type="date" />
        <DialogFooter>
          <Button onClick={handleSubmit} type="submit">
            Send Reminder
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default ATKTFormDate;
