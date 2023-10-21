export const departmentSelector = (state) =>
  state.departmentReducer.departments;

export const departmentErrorSelector = (state) => state.departmentReducer.error;

export const isCallingAddDepartmentApiSelector = (state) =>
  state.departmentReducer.isCallingAddDepartmentApi;

export const addDepartmentErrorSelector = (state) =>
  state.departmentReducer.addDepartmentError;
