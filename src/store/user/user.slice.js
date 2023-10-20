import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  error: null,
};

export const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    reset: () => initialState,
    setUser: (state, action) => {
      const { user } = action.payload;

      state.user = user;
    },
    setError: (state, action) => {
      state.error = action.payload.error;
    },
  },
});

export const { setUser, reset, setError } = userSlice.actions;

export default userSlice.reducer;
