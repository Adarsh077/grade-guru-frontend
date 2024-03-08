import { MasterSemesterService } from "@/services";
import { gracelyHandleError } from "@/utils";

import {
  setSemesters,
  setError,
  setIsCallingAddSemesterApi,
  setAddSemesterError,
  setIsCallingDeleteSemesterApi,
  setDeleteSemesterError,
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

export const deleteMasterSemesters =
  ({ semesterId }) =>
  async (dispatch) => {
    try {
      dispatch(
        setDeleteSemesterError({
          error: null,
        })
      );
      dispatch(
        setIsCallingDeleteSemesterApi({
          isLoading: true,
        })
      );
      const { semester } = await MasterSemesterService.deleteSemester({
        semesterId,
      });

      if (semester) {
        await dispatch(
          getAllMasterSemesters({ departmentId: semester.department })
        );
      }
      return true;
    } catch (err) {
      const appError = gracelyHandleError(err);
      dispatch(
        setDeleteSemesterError({
          error: appError,
        })
      );
      return false;
    } finally {
      dispatch(
        setIsCallingDeleteSemesterApi({
          isLoading: false,
        })
      );
    }
  };
