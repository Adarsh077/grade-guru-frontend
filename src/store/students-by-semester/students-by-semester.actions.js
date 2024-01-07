import { StudentsBySemesterService } from "@/services";
import { AppError, gracelyHandleError } from "@/utils";
import {
  setStudentsBySemester,
  setError,
  setIsCallingUpdateStudentsBySemesterApi,
  setUpdateStudentsBySemesterError,
  updateStudentsBySemesterId,
  addStudentsBySemesterId,
  setAddStudentsBySemesterError,
  setIsCallingAddStudentsBySemesterApi,
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
      dispatch(updateStudentsBySemesterId({ semesterId, students }));

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
      } else if (students.find((student) => !student.name)) {
        await dispatch(getStudentsBySemester({ semesterId }));
      }
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

export const addStudentsBySemester =
  ({ semesterId, students }) =>
  async (dispatch) => {
    try {
      dispatch(
        setAddStudentsBySemesterError({
          error: null,
        })
      );
      dispatch(
        setIsCallingAddStudentsBySemesterApi({
          isLoading: true,
        })
      );
      const { studentsBySemester } =
        await StudentsBySemesterService.addStudentsBySemester({
          semesterId,
          students,
        });

      if (studentsBySemester && studentsBySemester.length) {
        await dispatch(
          addStudentsBySemesterId({ students: studentsBySemester, semesterId })
        );
      }
    } catch (err) {
      const appError = gracelyHandleError(err);
      dispatch(
        setAddStudentsBySemesterError({
          error: appError,
        })
      );
      return false;
    } finally {
      dispatch(
        setIsCallingAddStudentsBySemesterApi({
          isLoading: false,
        })
      );
    }
  };
