export const subjectSelector = (semesterId) => (state) => {
  return state.subjectReducer.subjects[semesterId];
};
export const subjectErrorSelector = (state) => state.subjectReducer.error;

export const mySubjectsSelector = (state) => {
  return state.subjectReducer.mySubjects;
};
export const mySubjectsErrorSelector = (state) =>
  state.subjectReducer.mySubjectsError;
