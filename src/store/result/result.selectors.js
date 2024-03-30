export const resultsSelector = (subjectGroupId) => (state) => {
  return state.resultReducer.results[subjectGroupId];
};

export const resultsErrorSelector = (state) => state.subjectReducer.error;
