export const subjectSelector = (semesterId) => (state) => {
  return state.subjectReducer.subjects[semesterId];
};
export const subjectErrorSelector = (state) => state.subjectReducer.error;
