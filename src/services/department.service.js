import catchAsync from "@/utils";
import appAxios from "./axios.service";
import endpoints from "@/constants/endpoints";

class DepartmentService {
  static getAllDepartments = catchAsync(async ({ batch }) => {
    const response = await appAxios.get(
      endpoints.departments.getAllDepartments,
      { params: { batch } }
    );

    if (response.data.status === "success" && response.data.body?.departments) {
      return { departments: response.data.body.departments };
    }

    return { departments: [] };
  });

  static addDepartment = catchAsync(async (data) => {
    const { name, hod, batch } = data;

    const response = await appAxios.post(endpoints.departments.addDepartment, {
      name,
      hod,
      batch,
    });

    if (response.data.status === "success" && response.data.body?.department) {
      return { department: response.data.body.department };
    }

    return { department: null };
  });

  static updateDepartment = catchAsync(async (data) => {
    const { departmentId, name, hod } = data;

    const response = await appAxios.patch(
      endpoints.departments.updateDepartment(departmentId),
      {
        name,
        hod,
      }
    );

    if (response.data.status === "success" && response.data.body?.department) {
      return { department: response.data.body.department };
    }

    return { department: null };
  });

  static deleteDepartment = catchAsync(async (data) => {
    const { departmentId } = data;

    const response = await appAxios.delete(
      endpoints.departments.deleteDepartment(departmentId)
    );

    if (response.data.status === "success" && response.data.body?.department) {
      return { department: response.data.body.department };
    }

    return { department: null };
  });
}

export default DepartmentService;
