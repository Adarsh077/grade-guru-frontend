import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  semesters: {},
  error: null,

  isCallingAddSemesterApi: false,
  addSemesterError: null,

  isCallingUpdateSemesterApi: false,
  updateSemesterError: null,
};

export const semesterSlice = createSlice({
  name: "semesterSlice",
  initialState,
  reducers: {
    reset: () => initialState,
    setSemesters: (state, action) => {
      const { semesters, departmentId } = action.payload;

      state.semesters = {
        ...state.semesters,
        [departmentId]: semesters,
      };
    },
    setError: (state, action) => {
      state.error = action.payload.error;
    },
    setIsCallingAddSemesterApi: (state, action) => {
      const { isLoading } = action.payload;

      state.isCallingAddSemesterApi = isLoading;
    },
    setAddSemesterError: (state, action) => {
      state.addSemesterError = action.payload.error;
    },
    setIsCallingUpdateSemesterApi: (state, action) => {
      const { isLoading } = action.payload;

      state.isCallingUpdateSemesterApi = isLoading;
    },
    setUpdateSemesterError: (state, action) => {
      state.updateSemesterError = action.payload.error;
    },
  },
});

export const {
  setSemesters,
  reset,
  setError,
  setAddSemesterError,
  setIsCallingAddSemesterApi,

  setIsCallingUpdateSemesterApi,
  setUpdateSemesterError,
} = semesterSlice.actions;

export default semesterSlice.reducer;
