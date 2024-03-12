export const masterSubjectGroupsSelector = (semesterId) => (state) => {
  return state.masterSubjectGroupReducer.subjectGroups[semesterId];
};

export const masterSubjectGroupErrorSelector = (state) =>
  state.masterSubjectGroupReducer.error;
