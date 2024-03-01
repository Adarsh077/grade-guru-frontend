import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import UpdateMasterDepartmentForm from "./UpdateMasterDepartmentForm";

const UpdateMasterDepartmentDailog = (props) => {
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
        <UpdateMasterDepartmentForm
          department={department}
          handleClose={handleClose}
        />
      </DialogContent>
    </Dialog>
  );
};
export default UpdateMasterDepartmentDailog;
