import endpoints from "@/constants/endpoints";
import catchAsync from "@/utils";

import appAxios from "../axios.service";

class MasterDepartmentService {
  static getAllDepartments = catchAsync(async () => {
    const response = await appAxios.get(
      endpoints.masterList.departments.getAllDepartments
    );

    if (response.data.status === "success" && response.data.body?.departments) {
      return { departments: response.data.body.departments };
    }

    return { departments: [] };
  });

  static addDepartment = catchAsync(async (data) => {
    const { name, hod } = data;

    const response = await appAxios.post(
      endpoints.masterList.departments.addDepartment,
      { name, hod }
    );

    if (response.data.status === "success" && response.data.body?.department) {
      return { department: response.data.body.department };
    }

    return { department: null };
  });

  static updateDepartment = catchAsync(async (data) => {
    const { departmentId, name, hod } = data;

    const response = await appAxios.patch(
      endpoints.masterList.departments.updateDepartment(departmentId),
      { name, hod }
    );

    if (response.data.status === "success" && response.data.body?.department) {
      return { department: response.data.body.department };
    }

    return { department: null };
  });

  static deleteDepartment = catchAsync(async (data) => {
    const { departmentId } = data;

    const response = await appAxios.delete(
      endpoints.masterList.departments.deleteDepartment(departmentId)
    );

    if (response.data.status === "success" && response.data.body?.department) {
      return { department: response.data.body.department };
    }

    return { department: null };
  });
}

export default MasterDepartmentService;
