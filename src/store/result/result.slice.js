import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  results: {},
  error: null,
};

export const resultSlice = createSlice({
  name: "resultSlice",
  initialState,
  reducers: {
    reset: () => initialState,
    setResult: (state, action) => {
      const { result, subjectGroupId } = action.payload;

      state.results = {
        ...state.results,
        [subjectGroupId]: result,
      };
    },
    setError: (state, action) => {
      state.error = action.payload.error;
    },
  },
});

export const { setResult, reset, setError } = resultSlice.actions;

export default resultSlice.reducer;
