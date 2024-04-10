import endpoints from "@/constants/endpoints";
import catchAsync from "@/utils";

import appAxios from "./axios.service";

class StudentsService {
  static getAllStudentsBy = catchAsync(async ({ batch, departmentId }) => {
    const response = await appAxios.get(endpoints.students.getAllStudents, {
      params: { admissionYear: batch, departmentId },
    });

    if (response.data.status === "success" && response.data.body?.students) {
      return { students: response.data.body.students };
    }

    return { students: [] };
  });

  static addStudent = catchAsync(
    async ({
      name,
      email,
      studentType,
      admissionYear,
      departmentId,
      gender,
    }) => {
      const response = await appAxios.post(endpoints.students.addStudent, {
        name,
        email,
        studentType,
        admissionYear,
        departmentId,
        gender,
      });

      if (response.data.status === "success" && response.data.body?.student) {
        return { student: response.data.body.student };
      }

      return { student: null };
    }
  );
}

export default StudentsService;
