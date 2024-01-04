import { StudentsBySemesterService } from "@/services";
import { AppError, gracelyHandleError } from "@/utils";
import {
  setStudentsBySemester,
  setError,
  setIsCallingUpdateStudentsBySemesterApi,
  setUpdateStudentsBySemesterError,
  updateStudentsBySemesterId,
} from "./students-by-semester.slice";

export const getStudentsBySemester =
  ({ semesterId }) =>
  async (dispatch) => {
    try {
      dispatch(
        setError({
          error: null,
        })
      );

      const { studentsBySemester } =
        await StudentsBySemesterService.getStudentsBySemester({
          semesterId,
        });

      dispatch(
        setStudentsBySemester({ students: studentsBySemester, semesterId })
      );
    } catch (err) {
      const appError = gracelyHandleError(err);
      dispatch(
        setError({
          error: appError,
        })
      );
    }
  };

export const updateStudentsBySemester =
  ({ semesterId, students }) =>
  async (dispatch) => {
    try {
      dispatch(
        setUpdateStudentsBySemesterError({
          error: null,
        })
      );
      dispatch(
        setIsCallingUpdateStudentsBySemesterApi({
          isLoading: true,
        })
      );
      const { status } =
        await StudentsBySemesterService.updateStudentsBySemester({
          semesterId,
          students,
        });

      if (status !== "success") {
        throw new AppError({ message: "Something went wrong!" });
      }

      dispatch(updateStudentsBySemesterId({ semesterId, students }));
    } catch (err) {
      const appError = gracelyHandleError(err);
      dispatch(
        setUpdateStudentsBySemesterError({
          error: appError,
        })
      );
      return false;
    } finally {
      dispatch(
        setIsCallingUpdateStudentsBySemesterApi({
          isLoading: false,
        })
      );
    }
  };
