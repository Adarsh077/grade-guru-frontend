import { SubjectGroupService } from "@/services";
import { gracelyHandleError } from "@/utils";

import {
  setError,
  setSubjectGroups,
  setEnrollSubjectError,
  setIsCallingEnrollStudentsApi,
} from "./subject-group.slice";

export const getAllSubjectGroups =
  ({ semesterId }) =>
  async (dispatch) => {
    try {
      dispatch(
        setError({
          error: null,
        })
      );

      const { subjectGroups } = await SubjectGroupService.getAllSubjectGroups({
        semesterId,
      });

      dispatch(setSubjectGroups({ subjectGroups, semesterId }));
    } catch (err) {
      const appError = gracelyHandleError(err);
      dispatch(
        setError({
          error: appError,
        })
      );
    }
  };

export const enrollStudents =
  ({ subjectGroupId, enrolledStudents }) =>
  async (dispatch) => {
    try {
      dispatch(
        setEnrollSubjectError({
          error: null,
        })
      );
      dispatch(
        setIsCallingEnrollStudentsApi({
          isLoading: true,
        })
      );

      await SubjectGroupService.enrollStudents({
        subjectGroupId,
        enrolledStudents,
      });

      return true;
    } catch (err) {
      const appError = gracelyHandleError(err);
      dispatch(
        setEnrollSubjectError({
          error: appError,
        })
      );
      return false;
    } finally {
      dispatch(
        setIsCallingEnrollStudentsApi({
          isLoading: false,
        })
      );
    }
  };
