import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  studentsByBatch: {},
  error: null,

  isCallingGetStudentsApi: false,
  getStudentsError: null,
};

export const studentSlice = createSlice({
  name: "studentSlice",
  initialState,
  reducers: {
    reset: () => initialState,
    setStudents: (state, action) => {
      const { students, batchYear } = action.payload;

      state.studentsByBatch = {
        ...state.studentsByBatch,
        [batchYear]: students,
      };
    },
    setError: (state, action) => {
      state.error = action.payload.error;
    },
    setIsCallingGetStudentsApi: (state, action) => {
      const { isLoading } = action.payload;

      state.isCallingGetStudentsApi = isLoading;
    },
    setGetStudentsError: (state, action) => {
      state.getStudentsError = action.payload.error;
    },
  },
});

export const {
  setStudents,
  reset,
  setError,
  setGetStudentsError,
  setIsCallingGetStudentsApi,
} = studentSlice.actions;

export default studentSlice.reducer;
