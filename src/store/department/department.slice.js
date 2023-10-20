import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  departments: [],
  error: null,
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
  },
});

export const { setDepartments, reset, setError } = departmentSlice.actions;

export default departmentSlice.reducer;
