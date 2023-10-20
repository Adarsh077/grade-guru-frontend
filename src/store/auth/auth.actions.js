import { AuthService } from "@/services";
import { gracelyHandleError } from "@/utils";
import {
  setIsAuthenticated,
  setIsCallingLoginApi,
  setError,
  setCheckingIfAuthenticated,
  reset,
} from "./auth.slice";

export const login = (data) => async (dispatch) => {
  try {
    dispatch(setIsCallingLoginApi({ isCallingLoginApi: true }));
    dispatch(
      setError({
        error: null,
      })
    );

    const { token } = await AuthService.login({
      email: data.email,
      password: data.password,
    });

    dispatch(
      setIsAuthenticated({
        token,
        isAuthenticated: true,
      })
    );
  } catch (err) {
    const appError = gracelyHandleError(err);
    dispatch(
      setError({
        error: appError,
      })
    );
  } finally {
    dispatch(
      setIsCallingLoginApi({
        isCallingLoginApi: false,
      })
    );
  }
};

export const logout = () => async (dispatch) => {
  try {
    dispatch(reset());
  } catch (err) {
    const appError = gracelyHandleError(err);
    dispatch(
      setError({
        error: appError,
      })
    );
  }
};

export const checkIsAuthenticated = () => async (dispatch) => {
  try {
    dispatch(
      setError({
        error: null,
      })
    );

    const token = localStorage.getItem("token");
    if (token) {
      dispatch(
        setIsAuthenticated({
          token,
          isAuthenticated: true,
        })
      );
    } else {
      dispatch(
        setIsAuthenticated({
          isAuthenticated: false,
        })
      );
    }
  } catch (err) {
    const appError = gracelyHandleError(err);
    dispatch(
      setError({
        error: appError,
      })
    );
  } finally {
    dispatch(setCheckingIfAuthenticated({ isChecking: false }));
  }
};
