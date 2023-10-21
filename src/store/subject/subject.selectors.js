export const subjectSelector = (semesterId) => (state) => {
  return state.subjectReducer.subjects[semesterId];
};
export const subjectErrorSelector = (state) => state.subjectReducer.error;

export const mySubjectsSelector = (state) => {
  return state.subjectReducer.mySubjects;
};
export const mySubjectsErrorSelector = (state) =>
  state.subjectReducer.mySubjectsError;

export const isCallingAddSubjectApiSelector = (state) => {
  return state.subjectReducer.isCallingAddSubjectApi;
};
export const addSubjectErrorSelector = (state) =>
  state.subjectReducer.addSubjectError;
