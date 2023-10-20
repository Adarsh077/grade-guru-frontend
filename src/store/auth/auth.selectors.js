export const checkingIfAutenticatedSelector = (state) =>
  state.authReducer.checkingIfAuthenticated;

export const isAutenticatedSelector = (state) =>
  state.authReducer.isAuthenticated;

export const isCallingLoginApiSelector = (state) =>
  state.authReducer.isCallingLoginApi;

export const authErrorSelector = (state) => state.authReducer.error;
