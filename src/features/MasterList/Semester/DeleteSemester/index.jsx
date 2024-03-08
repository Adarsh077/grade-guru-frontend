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
import { deleteMasterSemesters } from "@/store/master-list/semester/semester.actions";
import { deleteMasterSemesterErrorSelector, isCallingDeleteMasterSemesterApiSelector } from "@/store/master-list/semester/semester.selectors";
// import { deleteSemesterErrorSelector, isCallingDeleteSemesterApiSelector } from "@/store/semester/semester.selectors";



const DeleteMasterSemester = (props) => {
  const { semester, handleClose } = props;

  const dispatch = useDispatch();

  const isCallingDeleteMasterSemesterApi = useSelector(
    isCallingDeleteMasterSemesterApiSelector
  );
  const deleteMasterSemesterError = useSelector(deleteMasterSemesterErrorSelector);

  const handleDeleteClick = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    const isDeleted = await dispatch(
      deleteMasterSemesters({ semesterId: semester._id })
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
          {deleteMasterSemesterError && deleteMasterSemesterError.message && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>
                {deleteMasterSemesterError.message}
              </AlertDescription>
            </Alert>
          )}
          <AlertDialogDescription>
            This action will delete{" "}
            <span className="font-semibold bg-slate-200 text-slate-600 px-1 py-[3px] rounded-md">
              {semester.name}
            </span>{" "}
            semester and no one will be able to see it.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel disabled={isCallingDeleteMasterSemesterApi}>
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={handleDeleteClick}
            disabled={isCallingDeleteMasterSemesterApi}
            className="bg-destructive hover:bg-red-700"
          >
            {isCallingDeleteMasterSemesterApi && (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            )}
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
export default DeleteMasterSemester;
