export const masterSubjectSelector = (semesterId) => (state) => {
  return state.masterSubjectReducer.subjects[semesterId];
};
export const masterSubjectErrorSelector = (state) =>
  state.masterSubjectReducer.error;

export const isCallingAddMasterSubjectApiSelector = (state) => {
  return state.masterSubjectReducer.isCallingAddSubjectApi;
};

export const addMasterSubjectErrorSelector = (state) =>
  state.masterSubjectReducer.addSubjectError;
