import { MarksBySubjectService } from "@/services";
import { gracelyHandleError } from "@/utils";
import {
  setError,
  setIsCallingUpdateMarksBySubjectIdApi,
  setMarksBySubjectId,
  setUpdateMarksBySubjectIdError,
  updateMarksForStudent,
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
    try {
      const { subjectId, marksOfStudent } = data;
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

      const { status } = await MarksBySubjectService.updateMarksBySubject({
        subjectId,
        marksOfStudent,
      });

      if (status === "success") {
        await dispatch(updateMarksForStudent({ subjectId, marksOfStudent }));
      }
      return true;
    } catch (err) {
      const appError = gracelyHandleError(err);
      dispatch(
        setUpdateMarksBySubjectIdError({
          error: appError,
        })
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
