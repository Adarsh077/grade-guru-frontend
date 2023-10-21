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

    return { department: [] };
  });
}

export default DepartmentService;
