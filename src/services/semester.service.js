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

  static deleteSemester = catchAsync(async ({ semesterId }) => {
    const response = await appAxios.patch(
      endpoints.semesters.deleteSemester(semesterId)
    );

    if (response.data.status === "success" && response.data.body?.semester) {
      return { semester: response.data.body.semester };
    }

    return { semester: null };
  });

  static getStudentsBySemesterId = catchAsync(async ({ semesterId }) => {
    const response = await appAxios.get(
      endpoints.semesters.getStudentsBy(semesterId)
    );

    if (response.data.status === "success" && response.data.body?.students) {
      return { students: response.data.body.students };
    }

    return { students: [] };
  });

  static getEnrolledStudentsBySemester = catchAsync(async ({ semesterId }) => {
    const response = await appAxios.get(
      endpoints.semesters.getEnrolledStudentsBy(semesterId)
    );

    if (response.data.status === "success" && response.data.body?.students) {
      return { students: response.data.body.students };
    }

    return { students: [] };
  });
}

export default SemesterService;
