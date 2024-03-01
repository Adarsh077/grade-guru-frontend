import { AlertCircle, Loader2 } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";

import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { deleteMasterDepartment } from "@/store/master-list/department/department.actions";
import {
  deleteMasterDepartmentErrorSelector,
  isCallingDeleteMasterDepartmentApiSelector,
} from "@/store/master-list/department/department.selectors";

const DeleteMasterDepartmentAlertDailog = (props) => {
  const { department, handleClose } = props;

  const dispatch = useDispatch();

  const isCallingDeleteMasterDepartmentApi = useSelector(
    isCallingDeleteMasterDepartmentApiSelector
  );
  const deleteMasterDepartmentError = useSelector(
    deleteMasterDepartmentErrorSelector
  );

  const handleDeleteClick = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    const isDeleted = await dispatch(
      deleteMasterDepartment({ departmentId: department._id })
    );
    if (isDeleted) {
      handleClose();
    }
  };

  return (
    <AlertDialog
      defaultOpen
      onOpenChange={(open) => {
        if (!open) handleClose();
      }}
    >
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          {deleteMasterDepartmentError &&
            deleteMasterDepartmentError.message && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>
                  {deleteMasterDepartmentError.message}
                </AlertDescription>
              </Alert>
            )}
          <AlertDialogDescription>
            This action will delete{" "}
            <span className="font-semibold bg-slate-200 text-slate-600 px-1 py-[3px] rounded-md">
              {department.name}
            </span>{" "}
            department and no one will be able to see it.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel disabled={isCallingDeleteMasterDepartmentApi}>
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={handleDeleteClick}
            disabled={isCallingDeleteMasterDepartmentApi}
            className="bg-destructive hover:bg-red-700"
          >
            {isCallingDeleteMasterDepartmentApi && (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            )}
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
export default DeleteMasterDepartmentAlertDailog;
