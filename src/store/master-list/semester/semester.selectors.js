export const masterSemestersSelector = (departmentId) => (state) => {
  return state.masterSemesterReducer.semesters[departmentId];
};

export const masterSemesterErrorSelector = (state) =>
  state.masterSemesterReducer.error;

export const isCallingAddMasterSemesterApiSelector = (state) => {
  return state.masterSemesterReducer.isCallingAddSemesterApi;
};

export const addMasterSemesterErrorSelector = (state) =>
  state.masterSemesterReducer.addSemesterError;

  export const isCallingDeleteMasterSemesterApiSelector = (state) => {
    return state.masterSemesterReducer.isCallingAddSemesterApi;
  };
  
  export const deleteMasterSemesterErrorSelector = (state) =>
    state.masterSemesterReducer.addSemesterError;
  