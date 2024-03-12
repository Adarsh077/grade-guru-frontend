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
    getEnrolledStudentsBy: (semesterId) =>
      `/semesters/${semesterId}/enrolled-students`,
  },
  subjects: {
    getAllSubjectsBy: (subjectGroupId) =>
      `/subject-groups/${subjectGroupId}/subjects`,
    getSingleSubject: (subjectId) => `/subjects/${subjectId}`,
    addSubject: (subjectGroupId) => `/semesters/${subjectGroupId}/subjects`,
    getMySubjects: `/subjects/my`,
  },
  subjectGroups: {
    getAllSubjectGroupsBy: (semesterId) =>
      `/semesters/${semesterId}/subject-groups`,
    enrollStudents: (subjectGroupId) =>
      `/subject-groups/${subjectGroupId}/students`,
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
      deleteSemesterBy: (semesterId) => `/master/semesters/${semesterId}/`,
    },
    subjectGroups: {
      getAllSubjectGroupsBy: (semesterId) =>
        `/master/semesters/${semesterId}/subject-groups`,
      enrollStudents: (subjectGroupId) =>
        `/master/subject-groups/${subjectGroupId}/students`,
    },
    subjects: {
      getAllSubjectsBy: (subjectGroupId) =>
        `/master/subject-groups/${subjectGroupId}/subjects`,
    },
  },
};

export default endpoints;
