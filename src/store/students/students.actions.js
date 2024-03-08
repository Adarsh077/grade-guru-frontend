import { StudentsService } from "@/services";
import { gracelyHandleError } from "@/utils";

import { setStudents, setError } from "./students.slice";

export const getAllStudentsByBatch =
  ({ batch, departmentId }) =>
  async (dispatch) => {
    try {
      dispatch(
        setError({
          error: null,
        })
      );

      const { students } = await StudentsService.getAllStudentsBy({
        batch,
        departmentId,
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

export const addStudent =
  ({ name, email, studentType, admissionYear, departmentId }) =>
  async (dispatch) => {
    try {
      const { student } = await StudentsService.addStudent({
        name,
        email,
        studentType,
        admissionYear,
        departmentId,
      });

      if (student) {
        await dispatch(
          getAllStudentsByBatch({
            batch: admissionYear,
          })
        );
      }
    } catch (err) {
      const appError = gracelyHandleError(err);
      dispatch(
        setError({
          error: appError,
        })
      );
    }
  };
