import endpoints from "@/constants/endpoints";
import catchAsync from "@/utils";

import appAxios from "../axios.service";

class MasterSemesterService {
  static getAllSemesters = catchAsync(async ({ departmentId }) => {
    const response = await appAxios.get(
      endpoints.masterList.semesters.getAllSemestersBy(departmentId)
    );

    if (response.data.status === "success" && response.data.body?.semesters) {
      return { semesters: response.data.body.semesters };
    }

    return { semesters: null };
  });

  static addSemester = catchAsync(async ({ departmentId, name, number }) => {
    const response = await appAxios.post(
      endpoints.masterList.semesters.addSemesterBy(departmentId),
      { name, number: +number }
    );

    if (response.data.status === "success" && response.data.body?.semester) {
      return { semester: response.data.body.semester };
    }

    return { semester: null };
  });

  static updateSemester = catchAsync(async ({ semesterId, name, number }) => {
    const response = await appAxios.post(
      endpoints.masterList.semesters.updateSemesterBy(semesterId),
      { name, number: +number }
    );

    if (response.data.status === "success" && response.data.body?.semester) {
      return { semester: response.data.body.semester };
    }

    return { semester: null };
  });

  static deleteSemester = catchAsync(async ({ semesterId, }) => {
    const response = await appAxios.delete(
      endpoints.masterList.semesters.deleteSemesterBy(semesterId),
    );

    if (response.data.status === "success" && response.data.body?.semester) {
      return { semester: response.data.body.semester };
    }

    return { semester: null };
  });
}


export default MasterSemesterService;
