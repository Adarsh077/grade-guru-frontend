export const marksBySubjectIdSelector = (subjectId) => (state) =>
  state.marksBySubjectReducer.marksBySubjectId[subjectId];

export const marksBySubjectIdErrorSelector = (state) =>
  state.marksBySubjectReducer.error;

export const isCallingUpdateMarksBySubjectIdApiSelector = (state) =>
  state.marksBySubjectReducer.isCallingUpdateMarksBySubjectIdApi;

export const updateMarksBySubjectIdErrorSelector = (state) =>
  state.marksBySubjectReducer.updateMarksBySubjectIdError;
