export const subjectGroupsSelector = (semesterId) => (state) => {
  return state.subjectGroupReducer.subjectGroups[semesterId];
};

export const subjectGroupErrorSelector = (state) => state.subjectReducer.error;

export const isCallingEnrollStudentsApiSelector = (state) => {
  return state.subjectReducer.isCallingEnrollStudentsApi;
};
export const enrollSubjectErrorSelector = (state) =>
  state.subjectReducer.enrollSubjectError;
