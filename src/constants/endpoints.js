const endpoints = {
  auth: {
    login: "/auth/login",
  },
  user: {
    details: "/user",
    search: "/user/search",
    add: "/auth/register",
    getAbilityStatements: "/user/ability",
    getAllUsers: "/user/all",
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
    getSemester: (semesterId) => `/semesters/${semesterId}`,
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
    enrollStudent: (subjectId) => `/subjects/${subjectId}/students`,
    getMySubjects: `/subjects/my`,
    getAtktStudents: (subjectId) => `/subjects/${subjectId}/atkt-students`,
    sendAtktReminder: (subjectId) => `/subjects/${subjectId}/reminder/atkt`,
  },
  subjectGroups: {
    getAllSubjectGroupsBy: (semesterId) =>
      `/semesters/${semesterId}/subject-groups`,
    getSubjectGroup: (subjectGroupId) => `/subject-groups/${subjectGroupId}`,
    enrollStudents: (subjectGroupId) =>
      `/subject-groups/${subjectGroupId}/students`,
    sendRevalutionReminder: (subjectGroupId) =>
      `/subject-groups/${subjectGroupId}/reminder/revalution`,
  },
  marksBySubject: {
    getMarksBySubjectId: (subjectId) => `/subjects/${subjectId}/marks`,
    enterMarks: ({ subjectId, studentId }) =>
      `/subjects/${subjectId}/students/${studentId}/marks`,
  },
  result: {
    generateResult: (subjectGroupId) =>
      `/subject-groups/${subjectGroupId}/result`,
    getResult: (subjectGroupId) => `/subject-groups/${subjectGroupId}/result`,
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
      addSubject: (subjectGroupId) =>
        `/master/subject-groups/${subjectGroupId}/subjects`,
    },
  },
};

export default endpoints;
