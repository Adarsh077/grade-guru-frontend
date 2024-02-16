import { SemesterService } from "@/services";
import { gracelyHandleError } from "@/utils";

import {
  setSemesters,
  setError,
  setIsCallingAddSemesterApi,
  setAddSemesterError,
} from "./semester.slice";

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

export const addSemesters =
  ({ departmentId, name }) =>
  async (dispatch) => {
    try {
      dispatch(
        setAddSemesterError({
          error: null,
        })
      );
      dispatch(
        setIsCallingAddSemesterApi({
          isLoading: true,
        })
      );
      const { semester } = await SemesterService.addSemester({
        departmentId,
        name,
      });

      if (semester) {
        await dispatch(getAllSemesters({ departmentId }));
      }
      return true;
    } catch (err) {
      const appError = gracelyHandleError(err);
      dispatch(
        setAddSemesterError({
          error: appError,
        })
      );
      return false;
    } finally {
      dispatch(
        setIsCallingAddSemesterApi({
          isLoading: false,
        })
      );
    }
  };
