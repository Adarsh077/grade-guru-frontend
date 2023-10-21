export const semestersSelector = (departmentId) => (state) => {
  return state.semesterReducer.semesters[departmentId];
};

export const semesterErrorSelector = (state) => state.semesterReducer.error;
