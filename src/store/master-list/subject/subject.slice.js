import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  subjects: {},
  error: null,

  isCallingAddSubjectApi: false,
  addSubjectError: null,
};

export const masterSubjectSlice = createSlice({
  name: "masterSubjectSlice",
  initialState,
  reducers: {
    reset: () => initialState,
    setSubjects: (state, action) => {
      const { subjects, subjectGroupId } = action.payload;

      state.subjects = {
        ...state.subjects,
        [subjectGroupId]: subjects,
      };
    },
    setError: (state, action) => {
      state.error = action.payload.error;
    },
    setIsCallingAddSubjectApi: (state, action) => {
      const { isLoading } = action.payload;
      state.isCallingAddSubjectApi = isLoading;
    },
    setAddSubjectError: (state, action) => {
      state.addSubjectError = action.payload.error;
    },
  },
});

export const {
  setSubjects,
  reset,
  setError,
  setAddSubjectError,
  setIsCallingAddSubjectApi,
} = masterSubjectSlice.actions;

export default masterSubjectSlice.reducer;
