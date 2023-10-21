import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import AddDepartmentForm from "./AddDepartmentForm";
import { useState } from "react";

const AddDepartmentDailog = (props) => {
  const { children } = props;
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={(isOpen) => setOpen(isOpen)}>
      <DialogTrigger onClick={() => setOpen(true)} asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Add Department</DialogTitle>
        </DialogHeader>
        <AddDepartmentForm handleClose={() => setOpen(false)} />
      </DialogContent>
    </Dialog>
  );
};
export default AddDepartmentDailog;
