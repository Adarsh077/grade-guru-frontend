import { ResultService } from "@/services";
import { AppError, gracelyHandleError } from "@/utils";

import { setError, setResult } from "./result.slice";

export const generateResult =
  ({ subjectGroupId }) =>
  async (dispatch) => {
    try {
      dispatch(
        setError({
          error: null,
        })
      );

      const { status } = await ResultService.generateResult({
        subjectGroupId,
      });

      if (status === "success") {
        return { status };
      } else {
        throw AppError({ message: "Something went wrong!" });
      }
    } catch (err) {
      const appError = gracelyHandleError(err);
      dispatch(
        setError({
          error: appError,
        })
      );
    }
  };

export const getResult =
  ({ subjectGroupId }) =>
  async (dispatch) => {
    try {
      dispatch(
        setError({
          error: null,
        })
      );

      const { result } = await ResultService.getResult({
        subjectGroupId,
      });

      if (result) {
        dispatch(setResult({ subjectGroupId, result }));
      }
    } catch (err) {
      const appError = gracelyHandleError(err);
      dispatch(
        setError({
          error: appError,
        })
      );
    }
  };
