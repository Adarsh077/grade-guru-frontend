import { SubjectService } from "@/services";
import { gracelyHandleError } from "@/utils";
import { setSubjects, setError } from "./subject.slice";

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
