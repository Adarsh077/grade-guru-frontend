export const studentsBySemesterSelector = (semesterId) => (state) => {
  return state.studentsBySemesterReducer.studentsBySemester[semesterId];
};

export const studentsBySemesterErrorSelector = (state) =>
  state.studentsBySemesterReducer.error;

export const isCallingUpdateStudentsBySemesterApiSelector = (state) => {
  return state.studentsBySemesterReducer.isCallingUpdateStudentsBySemesterApi;
};
export const updateStudentsBySemesterErrorSelector = (state) =>
  state.studentsBySemesterReducer.updateStudentsBySemesterErrorError;
