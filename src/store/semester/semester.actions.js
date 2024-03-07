import { SemesterService } from "@/services";
import { gracelyHandleError } from "@/utils";

import {
  setSemesters,
  setError,
  setIsCallingAddSemesterApi,
  setAddSemesterError,
  setIsCallingUpdateSemesterApi,
  setUpdateSemesterError,
  setIsCallingDeleteSemesterApi,
  setDeleteSemesterError,
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

export const updateSemesters =
  ({ semesterId, name }) =>
  async (dispatch) => {
    try {
      dispatch(
        setUpdateSemesterError({
          error: null,
        })
      );
      dispatch(
        setIsCallingUpdateSemesterApi({
          isLoading: true,
        })
      );
      const { semester } = await SemesterService.updateSemester({
        semesterId,
        name,
      });

      if (semester) {
        await dispatch(getAllSemesters({ departmentId: semester.department }));
      }

      return true;
    } catch (err) {
      const appError = gracelyHandleError(err);
      dispatch(
        setUpdateSemesterError({
          error: appError,
        })
      );
      return false;
    } finally {
      dispatch(
        setIsCallingUpdateSemesterApi({
          isLoading: false,
        })
      );
    }
  };

  export const deleteSemesters =
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
      const { semester } = await SemesterService.deleteSemester({
        semesterId,
      });

      if (semester) {
        await dispatch(getAllSemesters({ departmentId: semester.department }));
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
