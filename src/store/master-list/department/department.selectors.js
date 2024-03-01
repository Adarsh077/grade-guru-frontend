export const masterDepartmentSelector = (state) =>
  state.masterDepartmentReducer.departments;

export const masterDepartmentErrorSelector = (state) =>
  state.masterDepartmentReducer.error;

export const isCallingAddMasterDepartmentApiSelector = (state) =>
  state.masterDepartmentReducer.isCallingAddDepartmentApi;

export const addMasterDepartmentErrorSelector = (state) =>
  state.masterDepartmentReducer.addDepartmentError;

export const isCallingUpdateMasterDepartmentApiSelector = (state) =>
  state.masterDepartmentReducer.isCallingUpdateDepartmentApi;

export const updateMasterDepartmentErrorSelector = (state) =>
  state.masterDepartmentReducer.updateDepartmentError;

export const isCallingDeleteMasterDepartmentApiSelector = (state) =>
  state.masterDepartmentReducer.isCallingDeleteDepartmentApi;

export const deleteMasterDepartmentErrorSelector = (state) =>
  state.masterDepartmentReducer.deleteDepartmentError;
