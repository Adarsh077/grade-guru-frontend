import { useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import AddMasterDepartmentForm from "./AddMasterDepartmentForm";

const AddMasterDepartmentDailog = (props) => {
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
        <AddMasterDepartmentForm handleClose={() => setOpen(false)} />
      </DialogContent>
    </Dialog>
  );
};
export default AddMasterDepartmentDailog;
