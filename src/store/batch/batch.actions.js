import { BatchService } from "@/services";
import { gracelyHandleError } from "@/utils";
import { setBatches, setError } from "./batch.slice";

export const getAllBatches = () => async (dispatch) => {
  try {
    dispatch(
      setError({
        error: null,
      })
    );

    const { batches } = await BatchService.getAllBatches();

    dispatch(setBatches({ batches }));
  } catch (err) {
    const appError = gracelyHandleError(err);
    dispatch(
      setError({
        error: appError,
      })
    );
  }
};
