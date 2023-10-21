import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  batches: null,
  error: null,
};

export const batchSlice = createSlice({
  name: "batchSlice",
  initialState,
  reducers: {
    reset: () => initialState,
    setBatches: (state, action) => {
      const { batches } = action.payload;

      state.batches = batches;
    },
    setError: (state, action) => {
      state.error = action.payload.error;
    },
  },
});

export const { setBatches, reset, setError } = batchSlice.actions;

export default batchSlice.reducer;
