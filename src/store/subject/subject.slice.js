import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  subjects: {},
  error: null,

  mySubjects: [],
  mySubjectsError: null,

  isCallingAddSubjectApi: false,
  addSubjectError: null,
};

export const subjectSlice = createSlice({
  name: "subjectSlice",
  initialState,
  reducers: {
    reset: () => initialState,
    setSubjects: (state, action) => {
      const { subjects, semesterId } = action.payload;

      state.subjects = {
        ...state.subjects,
        [semesterId]: subjects,
      };
    },
    setError: (state, action) => {
      state.error = action.payload.error;
    },
    setMySubjects: (state, action) => {
      const { subjects } = action.payload;
      state.mySubjects = subjects;
    },
    setMySubjectsError: (state, action) => {
      state.mySubjectsError = action.payload.error;
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
  setMySubjects,
  setMySubjectsError,
  setAddSubjectError,
  setIsCallingAddSubjectApi,
} = subjectSlice.actions;

export default subjectSlice.reducer;
