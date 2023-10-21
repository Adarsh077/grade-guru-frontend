import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  error: null,
  abilityStatements: [],
  abilityStatementsError: null,
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
    setAbilityStatements: (state, action) => {
      const { statements } = action.payload;

      state.abilityStatements = statements;
    },
    setAbilityStatementsError: (state, action) => {
      state.abilityStatementsError = action.payload.error;
    },
  },
});

export const {
  setUser,
  reset,
  setError,
  setAbilityStatements,
  setAbilityStatementsError,
} = userSlice.actions;

export default userSlice.reducer;
