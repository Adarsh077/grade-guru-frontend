const endpoints = {
  auth: {
    login: "/auth/login",
  },
  user: {
    details: "/user",
    search: "/user/search",
  },
  departments: {
    getAllDepartments: "/departments",
    addDepartment: "/departments",
    getSingleDepartment: (departmentId) => `/departments/${departmentId}`,
    updateDepartment: (departmentId) => `/departments/${departmentId}`,
    deleteDepartment: (departmentId) => `/departments/${departmentId}`,
  },
};

export default endpoints;
