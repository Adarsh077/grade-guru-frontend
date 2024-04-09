import { MasterSubjectService } from "@/services";
import { gracelyHandleError } from "@/utils";

import { setSubjects, setError, setAddSubjectError } from "./subject.slice";
import { setIsCallingAddSemesterApi } from "../semester/semester.slice";

export const getAllMasterSubjects =
  ({ subjectGroupId }) =>
  async (dispatch) => {
    try {
      dispatch(
        setError({
          error: null,
        })
      );

      const { subjects } = await MasterSubjectService.getAllSubjects({
        subjectGroupId,
      });

      dispatch(setSubjects({ subjects, subjectGroupId }));
    } catch (err) {
      const appError = gracelyHandleError(err);
      dispatch(
        setError({
          error: appError,
        })
      );
    }
  };

export const addMasterSubject =
  ({
    subjectGroupId,
    name,
    staffId,
    code,
    subjectType,
    isATKTSubject,
    credits,
  }) =>
  async (dispatch) => {
    try {
      dispatch(
        setAddSubjectError({
          error: null,
        })
      );
      dispatch(
        setIsCallingAddSemesterApi({
          isLoading: true,
        })
      );
      const { subject } = await MasterSubjectService.addMasterSubject({
        subjectGroupId,
        name,
        staffId,
        code,
        subjectType,
        isATKTSubject,
        credits,
      });

      if (subject) {
        await dispatch(getAllMasterSubjects({ subjectGroupId }));
      }
      return true;
    } catch (err) {
      const appError = gracelyHandleError(err);
      dispatch(
        setAddSubjectError({
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
