import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  semesters: [],
  error: null,
};

export const semesterSlice = createSlice({
  name: "semesterSlice",
  initialState,
  reducers: {
    reset: () => initialState,
    setSemesters: (state, action) => {
      const { semesters } = action.payload;

      state.semesters = semesters;
    },
    setError: (state, action) => {
      state.error = action.payload.error;
    },
  },
});

export const { setSemesters, reset, setError } = semesterSlice.actions;

export default semesterSlice.reducer;
