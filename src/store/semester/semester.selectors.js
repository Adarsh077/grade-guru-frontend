export const semestersSelector = (departmentId) => (state) => {
  return state.semesterReducer.semesters[departmentId];
};

export const semesterErrorSelector = (state) => state.semesterReducer.error;

export const isCallingAddSemesterApiSelector = (state) => {
  return state.semesterReducer.isCallingAddSemesterApi;
};

export const addSemesterErrorSelector = (state) =>
  state.semesterReducer.addSemesterError;

export const isCallingUpdateSemesterApiSelector = (state) => {
  return state.semesterReducer.isCallingUpdateSemesterApi;
};

export const updateSemesterErrorSelector = (state) =>
  state.semesterReducer.updateSemesterError;

export const isCallingDeleteSemesterApiSelector = (state) => {
  return state.semesterReducer.isCallingUpdateSemesterApi;
};

export const deleteSemesterErrorSelector = (state) =>
  state.semesterReducer.updateSemesterError;
