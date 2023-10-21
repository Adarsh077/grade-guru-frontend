import { UserService } from "@/services";
import { gracelyHandleError } from "@/utils";
import {
  setUser,
  setError,
  setAbilityStatements,
  setAbilityStatementsError,
} from "./user.slice";

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

export const getUserAbilityStatements = () => async (dispatch) => {
  try {
    dispatch(
      setAbilityStatementsError({
        error: null,
      })
    );

    const { statements } = await UserService.getAbilityStatements();

    dispatch(setAbilityStatements({ statements }));
  } catch (err) {
    const appError = gracelyHandleError(err);
    dispatch(
      setAbilityStatementsError({
        error: appError,
      })
    );
  }
};
