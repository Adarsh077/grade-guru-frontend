import endpoints from "@/constants/endpoints";
import catchAsync from "@/utils";

import appAxios from "./axios.service";

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

  static getSingleSubject = catchAsync(async ({ subjectId }) => {
    const response = await appAxios.get(
      endpoints.subjects.getSingleSubject(subjectId)
    );

    if (response.data.status === "success" && response.data.body?.subject) {
      return { subject: response.data.body.subject };
    }

    return { subject: null };
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
    async ({ semesterId, name, staffId, code, exams }) => {
      const response = await appAxios.post(
        endpoints.subjects.addSubject(semesterId),
        {
          name,
          staffId,
          code,
          exams,
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
