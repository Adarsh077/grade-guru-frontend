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
import { deleteDepartment } from "@/store/department/department.actions";
import {
  deleteDepartmentErrorSelector,
  isCallingDeleteDepartmentApiSelector,
} from "@/store/department/department.selectors";
import { AlertCircle, Loader2 } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";

const DeleteDepartmentAlertDailog = (props) => {
  const { department, handleClose } = props;

  const dispatch = useDispatch();

  const isCallingDeleteDepartmentApi = useSelector(
    isCallingDeleteDepartmentApiSelector
  );
  const deleteDepartmentError = useSelector(deleteDepartmentErrorSelector);

  const handleDeleteClick = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    const isDeleted = await dispatch(
      deleteDepartment({ departmentId: department._id })
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
          {deleteDepartmentError && deleteDepartmentError.message && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>
                {deleteDepartmentError.message}
              </AlertDescription>
            </Alert>
          )}
          <AlertDialogDescription>
            This action will delete <b>{department.name}</b> department and no
            one will be able to see it.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel disabled={isCallingDeleteDepartmentApi}>
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={handleDeleteClick}
            disabled={isCallingDeleteDepartmentApi}
            className="bg-destructive hover:bg-red-700"
          >
            {isCallingDeleteDepartmentApi && (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            )}
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
export default DeleteDepartmentAlertDailog;
