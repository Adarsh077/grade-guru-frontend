const endpoints = {
  auth: {
    login: "/auth/login",
  },
  user: {
    details: "/user",
    search: "/user/search",
    getAbilityStatements: "/user/ability",
  },
  batch: {
    getAllBatches: "/batches",
    addBatch: "/batches",
  },
  departments: {
    getAllDepartments: "/departments",
    addDepartment: "/departments",
    getSingleDepartment: (departmentId) => `/departments/${departmentId}`,
    updateDepartment: (departmentId) => `/departments/${departmentId}`,
    deleteDepartment: (departmentId) => `/departments/${departmentId}`,
  },
  semesters: {
    getAllSemestersBy: (departmentId) =>
      `/departments/${departmentId}/semesters`,
    addSemesterBy: (departmentId) => `/departments/${departmentId}/semesters`,
    updateSemester: (semesterId) => `/semesters/${semesterId}`,
    deleteSemester: (semesterId) => `/semesters/${semesterId}`,

    getStudentsBy: (semesterId) => `/semesters/${semesterId}/students`,
  },
  subjects: {
    getAllSubjectsBy: (semesterId) => `/semesters/${semesterId}/subjects`,
    getSingleSubject: (subjectId) => `/subjects/${subjectId}`,
    addSubject: (semesterId) => `/semesters/${semesterId}/subjects`,
    getMySubjects: `/subjects/my`,
  },
  marksBySubject: {
    getMarksBySubjectId: (subjectId) => `/subjects/${subjectId}/marks`,
    enterMarks: ({ subjectId, studentId }) =>
      `/subjects/${subjectId}/students/${studentId}/marks`,
  },
  result: {
    generateResult: (semesterId) => `/semesters/${semesterId}/result/generate`,
    generateResultPdf: (semesterId) => `/semesters/${semesterId}`,
  },
  students: {
    getAllStudents: `/students`,
    addStudent: `/students`,
  },
  masterList: {
    departments: {
      addDepartment: "/master/departments",
      getAllDepartments: "/master/departments",
      updateDepartment: (departmentId) => `/master/departments/${departmentId}`,
      deleteDepartment: (departmentId) => `/master/departments/${departmentId}`,
    },
    semesters: {
      getAllSemestersBy: (departmentId) =>
        `/master/departments/${departmentId}/semesters`,
      addSemesterBy: (departmentId) =>
        `/master/departments/${departmentId}/semesters`,
      updateSemesterBy: (semesterId) => `/master/semesters/${semesterId}/`,
    },
    subjects: {
      getAllSubjectsBy: (semesterId) =>
        `/master/semesters/${semesterId}/subjects`,
      addSubject: (semesterId) => `/master/semesters/${semesterId}/subjects`,
    },
  },
};

export default endpoints;
