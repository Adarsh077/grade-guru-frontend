import { useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import AddMasterSubjectForm from "./AddMasterSubjectForm";

const AddMasterSubjectDailog = (props) => {
  const { children, subjectGroupId } = props;
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
        <AddMasterSubjectForm
          subjectGroupId={subjectGroupId}
          handleClose={() => setOpen(false)}
        />
      </DialogContent>
    </Dialog>
  );
};
export default AddMasterSubjectDailog;
