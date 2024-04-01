import { toast } from "sonner";

import { MarksBySubjectService } from "@/services";
import { gracelyHandleError } from "@/utils";

import {
  setError,
  setIsCallingUpdateMarksBySubjectIdApi,
  setMarksBySubjectId,
  setUpdateMarksBySubjectIdError,
  updateMarksOfStudent,
} from "./marks-by-subject.slice";

export const getMarksBySubjectId =
  ({ subjectId }) =>
  async (dispatch) => {
    try {
      dispatch(
        setError({
          error: null,
        })
      );

      const { marksBySubject } = await MarksBySubjectService.getMarksBySubject({
        subjectId,
      });

      dispatch(setMarksBySubjectId({ marksBySubject, subjectId }));
    } catch (err) {
      const appError = gracelyHandleError(err);
      dispatch(
        setError({
          error: appError,
        })
      );
    }
  };

export const updateMarksBySubjectId =
  (data = {}) =>
  async (dispatch) => {
    const {
      subjectId,
      studentId,
      examName,
      marksScored,
      hasParticipatedInNss,
    } = data;
    try {
      dispatch(
        setUpdateMarksBySubjectIdError({
          error: null,
        })
      );
      dispatch(
        setIsCallingUpdateMarksBySubjectIdApi({
          isLoading: true,
        })
      );

      await dispatch(
        updateMarksOfStudent({
          subjectId,
          studentId,
          examName,
          marksScored,
          hasParticipatedInNss,
        })
      );

      const { status } = await MarksBySubjectService.updateMarksBySubject({
        subjectId,
        studentId,
        examName,
        marksScored,
        hasParticipatedInNss,
      });

      if (status !== "success") {
        await dispatch(getMarksBySubjectId({ subjectId }));
      }
      return true;
    } catch (err) {
      const appError = gracelyHandleError(err);
      dispatch(
        setUpdateMarksBySubjectIdError({
          error: appError,
        })
      );
      toast.error(
        appError.message ||
          Object.keys(appError.errors)
            .map((error) => appError.errors[error])
            .join(", ")
      );
      return false;
    } finally {
      dispatch(
        setIsCallingUpdateMarksBySubjectIdApi({
          isLoading: false,
        })
      );
    }
  };
