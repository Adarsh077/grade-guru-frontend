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
    getStudentsBy: (semesterId) => `/semesters/${semesterId}/students`,
    addStudents: (semesterId) => `/semesters/${semesterId}/students`,
    updateStudentsBy: (semesterId) => `/semesters/${semesterId}/students`,
  },
  subjects: {
    getAllSubjectsBy: (semesterId) => `/semesters/${semesterId}/subjects`,
    addSubject: (semesterId) => `/semesters/${semesterId}/subjects`,
    getMySubjects: `/subjects/my`,
    getMarksBySubjectId: (subjectId) => `/subjects/${subjectId}/marks`,
    updateMarksBySubjectId: (subjectId) => `/subjects/${subjectId}/marks`,
  },
  result: {
    generateResult: (semesterId) => `/semesters/${semesterId}/result/generate`,
    generateResultPdf: (semesterId) => `/semesters/${semesterId}`,
  },
  students: {
    getAllStudents: `/students`,
  },
};

export default endpoints;
