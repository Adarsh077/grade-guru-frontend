import catchAsync from "@/utils";
import appAxios from "./axios.service";
import endpoints from "@/constants/endpoints";

class StudentsBySemesterService {
  static getStudentsBySemester = catchAsync(async ({ semesterId }) => {
    const response = await appAxios.get(
      endpoints.semesters.getStudentsBy(semesterId)
    );

    if (
      response.data.status === "success" &&
      response.data.body?.studentsBySemester
    ) {
      return { studentsBySemester: response.data.body.studentsBySemester };
    }

    return { studentsBySemester: [] };
  });

  static addStudentsBySemester = catchAsync(
    async ({ semesterId, students }) => {
      const response = await appAxios.post(
        endpoints.semesters.addStudents(semesterId),
        { students }
      );

      if (
        response.data.status === "success" &&
        response.data.body?.studentsBySemester
      ) {
        return { studentsBySemester: response.data.body?.studentsBySemester };
      }

      return { studentsBySemester: [] };
    }
  );

  static updateStudentsBySemester = catchAsync(
    async ({ semesterId, students }) => {
      const response = await appAxios.patch(
        endpoints.semesters.updateStudentsBy(semesterId),
        { students }
      );

      return { status: response.data.status };
    }
  );
}

export default StudentsBySemesterService;
