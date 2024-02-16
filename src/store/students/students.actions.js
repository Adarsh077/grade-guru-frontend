import { StudentsService } from "@/services";
import { gracelyHandleError } from "@/utils";

import { setStudents, setError } from "./students.slice";

export const getAllStudentsByBatch =
  ({ batch }) =>
  async (dispatch) => {
    try {
      dispatch(
        setError({
          error: null,
        })
      );

      const { students } = await StudentsService.getAllStudentsBy({
        batch,
      });

      dispatch(setStudents({ students, batchYear: batch }));
    } catch (err) {
      const appError = gracelyHandleError(err);
      dispatch(
        setError({
          error: appError,
        })
      );
    }
  };
