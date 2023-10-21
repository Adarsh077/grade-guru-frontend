import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import AddSemesterForm from "./AddSemesterForm";
import { useState } from "react";

const AddSemesterDailog = (props) => {
  const { children, departmentId } = props;
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={(isOpen) => setOpen(isOpen)}>
      <DialogTrigger onClick={() => setOpen(true)} asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Add Semester</DialogTitle>
        </DialogHeader>
        <AddSemesterForm
          departmentId={departmentId}
          handleClose={() => setOpen(false)}
        />
      </DialogContent>
    </Dialog>
  );
};
export default AddSemesterDailog;
