import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import AddSubjectForm from "./AddSubjectForm";
import { useState } from "react";

const AddSubjectDailog = (props) => {
  const { children, semesterId } = props;
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={(isOpen) => setOpen(isOpen)}>
      <DialogTrigger onClick={() => setOpen(true)} asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Add Subject</DialogTitle>
        </DialogHeader>
        <AddSubjectForm
          semesterId={semesterId}
          handleClose={() => setOpen(false)}
        />
      </DialogContent>
    </Dialog>
  );
};
export default AddSubjectDailog;
