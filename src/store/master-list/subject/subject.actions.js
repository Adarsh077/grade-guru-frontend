import { MasterSubjectService } from "@/services";
import { gracelyHandleError } from "@/utils";

import { setSubjects, setError, setAddSubjectError } from "./subject.slice";
import { setIsCallingAddSemesterApi } from "../semester/semester.slice";

export const getAllMasterSubjects =
  ({ semesterId }) =>
  async (dispatch) => {
    try {
      dispatch(
        setError({
          error: null,
        })
      );

      const { subjects } = await MasterSubjectService.getAllSubjects({
        semesterId,
      });

      dispatch(setSubjects({ subjects, semesterId }));
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
  ({ semesterId, name, staffId, code, subjectType }) =>
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
        semesterId,
        name,
        staffId,
        code,
        subjectType,
      });

      if (subject) {
        await dispatch(getAllMasterSubjects({ semesterId }));
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
