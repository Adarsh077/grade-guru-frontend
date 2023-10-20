import { UserService } from "@/services";
import { gracelyHandleError } from "@/utils";
import { setUser, setError } from "./user.slice";

export const getUserDetails = () => async (dispatch) => {
  try {
    dispatch(
      setError({
        error: null,
      })
    );

    const { user } = await UserService.getUserDetails();

    dispatch(setUser({ user }));
  } catch (err) {
    const appError = gracelyHandleError(err);
    dispatch(
      setError({
        error: appError,
      })
    );
  }
};
