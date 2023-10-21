export const userSelector = (state) => state.userReducer.user;
export const userAbilityStatementsSelector = (state) =>
  state.userReducer.abilityStatements;
export const userErrorSelector = (state) => state.userReducer.error;
export const userAbilityStatementsErrorSelector = (state) =>
  state.userReducer.abilityStatementsError;
