import endpoints from "@/constants/endpoints";
import catchAsync from "@/utils";

import appAxios from "./axios.service";

class StudentsService {
  static getAllStudentsBy = catchAsync(async ({ batch }) => {
    const response = await appAxios.get(endpoints.students.getAllStudents, {
      params: { admissionYear: batch },
    });

    if (response.data.status === "success" && response.data.body?.students) {
      return { students: response.data.body.students };
    }

    return { students: [] };
  });
}

export default StudentsService;
