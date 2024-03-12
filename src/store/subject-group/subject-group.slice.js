import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  subjectGroups: {},
  error: null,

  isCallingEnrollStudentsApi: false,
  enrollSubjectError: null,
};

export const subjectGroupSlice = createSlice({
  name: "subjectGroupSlice",
  initialState,
  reducers: {
    reset: () => initialState,
    setSubjectGroups: (state, action) => {
      const { subjectGroups, semesterId } = action.payload;

      state.subjectGroups = {
        ...state.subjectGroups,
        [semesterId]: subjectGroups,
      };
    },
    setError: (state, action) => {
      state.error = action.payload.error;
    },
    setIsCallingEnrollStudentsApi: (state, action) => {
      const { isLoading } = action.payload;
      state.isCallingEnrollStudentsApi = isLoading;
    },
    setEnrollSubjectError: (state, action) => {
      state.enrollSubjectError = action.payload.error;
    },
  },
});

export const {
  setSubjectGroups,
  reset,
  setError,
  setEnrollSubjectError,
  setIsCallingEnrollStudentsApi,
} = subjectGroupSlice.actions;

export default subjectGroupSlice.reducer;
