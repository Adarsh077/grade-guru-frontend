import { SubjectService } from "@/services";
import { gracelyHandleError } from "@/utils";
import {
  setSubjects,
  setError,
  setMySubjects,
  setMySubjectsError,
  setAddSubjectError,
} from "./subject.slice";
import { setIsCallingAddSemesterApi } from "../semester/semester.slice";

export const getAllSubjects =
  ({ semesterId }) =>
  async (dispatch) => {
    try {
      dispatch(
        setError({
          error: null,
        })
      );

      const { subjects } = await SubjectService.getAllSubjects({
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

export const getMySubjects =
  ({ batch }) =>
  async (dispatch) => {
    try {
      dispatch(
        setMySubjectsError({
          error: null,
        })
      );

      const { subjects } = await SubjectService.getMySubjects({ batch });

      dispatch(setMySubjects({ subjects }));
    } catch (err) {
      const appError = gracelyHandleError(err);
      dispatch(
        setMySubjectsError({
          error: appError,
        })
      );
    }
  };

export const addSubject =
  ({ semesterId, name, staffId }) =>
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
      const { subject } = await SubjectService.addSubject({
        semesterId,
        name,
        staffId,
      });

      if (subject) {
        await dispatch(getAllSubjects({ semesterId }));
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
