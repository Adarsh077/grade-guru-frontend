import { SemesterService } from "@/services";
import { gracelyHandleError } from "@/utils";
import { setSemesters, setError } from "./semester.slice";

export const getAllSemesters =
  ({ departmentId }) =>
  async (dispatch) => {
    try {
      dispatch(
        setError({
          error: null,
        })
      );

      const { semesters } = await SemesterService.getAllSemesters({
        departmentId,
      });

      dispatch(setSemesters({ semesters, departmentId }));
    } catch (err) {
      const appError = gracelyHandleError(err);
      dispatch(
        setError({
          error: appError,
        })
      );
    }
  };
