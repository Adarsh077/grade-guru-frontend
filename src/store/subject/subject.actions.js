import { SubjectService } from "@/services";
import { gracelyHandleError } from "@/utils";

import {
  setSubjects,
  setError,
  setMySubjects,
  setMySubjectsError,
  setAddSubjectError,
  setSubjectById,
} from "./subject.slice";
import { setIsCallingAddSemesterApi } from "../semester/semester.slice";

export const getAllSubjects =
  ({ subjectGroupId }) =>
  async (dispatch) => {
    try {
      dispatch(
        setError({
          error: null,
        })
      );

      const { subjects } = await SubjectService.getAllSubjects({
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

export const getSingleSubject =
  ({ subjectId }) =>
  async (dispatch) => {
    try {
      dispatch(
        setError({
          error: null,
        })
      );

      const { subject } = await SubjectService.getSingleSubject({
        subjectId,
      });

      dispatch(setSubjectById({ subject }));
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
  ({ subjectGroupId, name, staffId, code, exams }) =>
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
        subjectGroupId,
        name,
        staffId,
        code,
        exams,
      });

      if (subject) {
        await dispatch(getAllSubjects({ subjectGroupId }));
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
