import { MasterSemesterService } from "@/services";
import { gracelyHandleError } from "@/utils";

import {
  setSemesters,
  setError,
  setIsCallingAddSemesterApi,
  setAddSemesterError,
} from "./semester.slice";

export const getAllMasterSemesters =
  ({ departmentId }) =>
  async (dispatch) => {
    try {
      dispatch(
        setError({
          error: null,
        })
      );

      const { semesters } = await MasterSemesterService.getAllSemesters({
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

export const addMasterSemesters =
  ({ departmentId, name, number }) =>
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
      const { semester } = await MasterSemesterService.addSemester({
        departmentId,
        name,
        number,
      });

      if (semester) {
        await dispatch(getAllMasterSemesters({ departmentId }));
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
