import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import UpdateDepartment from "./UpdateDepartmentForm";

const UpdateDepartmentDailog = (props) => {
  const { department, open, handleClose } = props;

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
          <DialogTitle>Update Department</DialogTitle>
        </DialogHeader>
        <UpdateDepartment department={department} handleClose={handleClose} />
      </DialogContent>
    </Dialog>
  );
};
export default UpdateDepartmentDailog;
