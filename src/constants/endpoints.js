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
  },
};

export default endpoints;
