export const subjectSelector = (semesterId) => (state) => {
  return state.subjectReducer.subjects[semesterId];
};

export const subjectByIdSelector = (subjectId) => (state) => {
  return state.subjectReducer.subjectById[subjectId];
};

export const subjectErrorSelector = (state) => state.subjectReducer.error;
export const subjectByIdErrorSelector = (state) =>
  state.subjectReducer.subjectByIdError;

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
