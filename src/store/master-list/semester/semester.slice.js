import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  semesters: {},
  error: null,

  isCallingAddSemesterApi: false,
  addSemesterError: null,

  isCallingDeleteSemesterApi: false,
  deleteSemesterError: null,
};

export const masterSemesterSlice = createSlice({
  name: "masterSemesterSlice",
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

    setIsCallingDeleteSemesterApi: (state, action) => {
      const { isLoading } = action.payload;

      state.isCallingAddSemesterApi = isLoading;
    },
    setDeleteSemesterError: (state, action) => {
      state.addSemesterError = action.payload.error;
    },
  },
});

export const {
  setSemesters,
  reset,
  setError,
  setAddSemesterError,
  setIsCallingAddSemesterApi,
  setDeleteSemesterError,
  setIsCallingDeleteSemesterApi,
} = masterSemesterSlice.actions;

export default masterSemesterSlice.reducer;
