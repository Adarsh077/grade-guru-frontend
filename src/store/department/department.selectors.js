export const departmentSelector = (state) =>
  state.departmentReducer.departments;

export const departmentErrorSelector = (state) => state.departmentReducer.error;

export const isCallingAddDepartmentApiSelector = (state) =>
  state.departmentReducer.isCallingAddDepartmentApi;

export const addDepartmentErrorSelector = (state) =>
  state.departmentReducer.addDepartmentError;

export const isCallingUpdateDepartmentApiSelector = (state) =>
  state.departmentReducer.isCallingUpdateDepartmentApi;

export const updateDepartmentErrorSelector = (state) =>
  state.departmentReducer.updateDepartmentError;

export const isCallingDeleteDepartmentApiSelector = (state) =>
  state.departmentReducer.isCallingDeleteDepartmentApi;

export const deleteDepartmentErrorSelector = (state) =>
  state.departmentReducer.deleteDepartmentError;
