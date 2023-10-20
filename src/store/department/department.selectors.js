export const departmentSelector = (state) =>
  state.departmentReducer.departments;

export const departmentErrorSelector = (state) => state.departmentReducer.error;
