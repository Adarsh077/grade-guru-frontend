import catchAsync from "@/utils";
import appAxios from "./axios.service";
import endpoints from "@/constants/endpoints";

class DepartmentService {
  static getAllDepartments = catchAsync(async () => {
    const response = await appAxios.get(
      endpoints.departments.getAllDepartments
    );

    if (response.data.status === "success" && response.data.body?.departments) {
      return { departments: response.data.body.departments };
    }

    return { departments: [] };
  });
}

export default DepartmentService;
