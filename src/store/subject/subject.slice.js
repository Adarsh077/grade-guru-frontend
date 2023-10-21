import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  subjects: {},
  error: null,
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
  },
});

export const { setSubjects, reset, setError } = subjectSlice.actions;

export default subjectSlice.reducer;
