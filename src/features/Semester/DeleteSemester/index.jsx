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
  AlertDialogTitle,} from "@/components/ui/alert-dialog";
import { deleteSemesters } from "@/store/semester/semester.actions";
import { deleteSemesterErrorSelector, isCallingDeleteSemesterApiSelector } from "@/store/semester/semester.selectors";



const DeleteSemesterAlertDailog = (props) => {
  const { Semester, handleClose } = props;

  const dispatch = useDispatch();

  const isCallingDeleteSemesterApi = useSelector(
    isCallingDeleteSemesterApiSelector
  );
  const deleteSemesterError = useSelector(deleteSemesterErrorSelector);

  const handleDeleteClick = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    const isDeleted = await dispatch(
      deleteSemesters({ SemesterId: Semester._id })
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
          {deleteSemesterError && deleteSemesterError.message && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>
                {deleteSemesterError.message}
              </AlertDescription>
            </Alert>
          )}
          <AlertDialogDescription>
            This action will delete{" "}
            <span className="font-semibold bg-slate-200 text-slate-600 px-1 py-[3px] rounded-md">
              {Semester.name}
            </span>{" "}
            Semester and no one will be able to see it.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel disabled={isCallingDeleteSemesterApi}>
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={handleDeleteClick}
            disabled={isCallingDeleteSemesterApi}
            className="bg-destructive hover:bg-red-700"
          >
            {isCallingDeleteSemesterApi && (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            )}
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
export default DeleteSemesterAlertDailog;
