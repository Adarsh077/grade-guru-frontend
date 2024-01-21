import catchAsync from "@/utils";
import appAxios from "./axios.service";
import endpoints from "@/constants/endpoints";

class SubjectService {
  static getAllSubjects = catchAsync(async ({ semesterId }) => {
    const response = await appAxios.get(
      endpoints.subjects.getAllSubjectsBy(semesterId)
    );

    if (response.data.status === "success" && response.data.body?.subjects) {
      return { subjects: response.data.body.subjects };
    }

    return { subjects: null };
  });

  static getMySubjects = catchAsync(async ({ batch }) => {
    const response = await appAxios.get(endpoints.subjects.getMySubjects, {
      params: { batch },
    });

    if (response.data.status === "success" && response.data.body?.subjects) {
      return { subjects: response.data.body.subjects };
    }

    return { subjects: null };
  });

  static addSubject = catchAsync(
    async ({ semesterId, name, staffId, code }) => {
      const response = await appAxios.post(
        endpoints.subjects.addSubject(semesterId),
        {
          name,
          staffId,
          code,
        }
      );

      if (response.data.status === "success" && response.data.body?.subject) {
        return { subject: response.data.body.subject };
      }

      return { subject: null };
    }
  );
}

export default SubjectService;
