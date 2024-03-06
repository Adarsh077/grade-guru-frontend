import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import UpdateSemesterForm from "./UpdateSemesterForm";

const UpdateSemesterDailog = (props) => {
  const { semester, open, handleClose } = props;

  return (
    <Dialog
      open={open}
      onOpenChange={(isOpen) => {
        if (!isOpen) {
          handleClose();
        }
      }}
    >
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Update Semester</DialogTitle>
        </DialogHeader>
        <UpdateSemesterForm semester={semester} handleClose={handleClose} />
      </DialogContent>
    </Dialog>
  );
};
export default UpdateSemesterDailog;
