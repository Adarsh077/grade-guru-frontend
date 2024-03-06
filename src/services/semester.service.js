import endpoints from "@/constants/endpoints";
import catchAsync from "@/utils";

import appAxios from "./axios.service";

class SemesterService {
  static getAllSemesters = catchAsync(async ({ departmentId }) => {
    const response = await appAxios.get(
      endpoints.semesters.getAllSemestersBy(departmentId)
    );

    if (response.data.status === "success" && response.data.body?.semesters) {
      return { semesters: response.data.body.semesters };
    }

    return { semesters: null };
  });

  static addSemester = catchAsync(async ({ departmentId, name }) => {
    const response = await appAxios.post(
      endpoints.semesters.addSemesterBy(departmentId),
      { name }
    );

    if (response.data.status === "success" && response.data.body?.semester) {
      return { semester: response.data.body.semester };
    }

    return { semester: null };
  });

  static updateSemester = catchAsync(async ({ semesterId, name }) => {
    const response = await appAxios.patch(
      endpoints.semesters.updateSemester(semesterId),
      { name }
    );

    if (response.data.status === "success" && response.data.body?.semester) {
      return { semester: response.data.body.semester };
    }

    return { semester: null };
  });
}

export default SemesterService;
