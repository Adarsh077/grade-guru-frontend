import { setAuthHeader } from "@/services/axios.service";
import { AppError } from "@/utils";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: null,
  isCallingLoginApi: false,
  checkingIfAuthenticated: true,
  error: null,
};

export const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    reset: () => {
      setAuthHeader(null);
      localStorage.removeItem("token");
      return {
        ...initialState,
        checkingIfAuthenticated: false,
        isAuthenticated: false,
      };
    },
    setIsAuthenticated: (state, action) => {
      const { token, isAuthenticated } = action.payload;

      if (!isAuthenticated) {
        state.isAuthenticated = false;
        setAuthHeader(null);
        localStorage.removeItem("token");
        return state;
      }

      if (!token) {
        throw AppError({
          message: "Token is required!",
          name: "Error",
        });
      }

      state.isAuthenticated = isAuthenticated;
      setAuthHeader(token);
      localStorage.setItem("token", token);
    },
    setError: (state, action) => {
      state.error = action.payload.error;
    },
    setIsCallingLoginApi: (state, action) => {
      state.isCallingLoginApi = action.payload.isCallingLoginApi;
    },
    setCheckingIfAuthenticated: (state, action) => {
      state.checkingIfAuthenticated = action.payload.isChecking;
    },
  },
});

export const {
  setIsAuthenticated,
  reset,
  setCheckingIfAuthenticated,
  setIsCallingLoginApi,
  setError,
} = authSlice.actions;

export default authSlice.reducer;
