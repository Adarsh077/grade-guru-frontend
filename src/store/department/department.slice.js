import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  departments: [],
  error: null,

  isCallingAddDepartmentApi: false,
  addDepartmentError: null,
};

export const departmentSlice = createSlice({
  name: "departmentSlice",
  initialState,
  reducers: {
    reset: () => initialState,
    setDepartments: (state, action) => {
      const { departments } = action.payload;

      state.departments = departments;
    },
    setError: (state, action) => {
      state.error = action.payload.error;
    },
    setIsCallingAddDepartmentApi: (state, action) => {
      const { isLoading } = action.payload;

      state.isCallingAddDepartmentApi = isLoading;
    },
    setAddDepartmentError: (state, action) => {
      state.addDepartmentError = action.payload.error;
    },
  },
});

export const {
  setDepartments,
  reset,
  setError,
  setAddDepartmentError,
  setIsCallingAddDepartmentApi,
} = departmentSlice.actions;

export default departmentSlice.reducer;
