import endpoints from "@/constants/endpoints";
import catchAsync from "@/utils";

import appAxios from "./axios.service";

class SubjectService {
  static getAllSubjects = catchAsync(async ({ subjectGroupId }) => {
    const response = await appAxios.get(
      endpoints.subjects.getAllSubjectsBy(subjectGroupId)
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

  static getAtktStudents = catchAsync(async (subjectId) => {
    const response = await appAxios.get(
      endpoints.subjects.getAtktStudents(subjectId),
      {}
    );

    if (response.data.status === "success" && response.data.body?.students) {
      return { students: response.data.body.students };
    }

    return { students: [] };
  });

  static addSubject = catchAsync(
    async ({ subjectGroupId, name, staffId, code, exams }) => {
      const response = await appAxios.post(
        endpoints.subjects.addSubject(subjectGroupId),
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

  static enrollStudents = catchAsync(async ({ subjectId, students }) => {
    const response = await appAxios.post(
      endpoints.subjects.enrollStudent(subjectId),
      { students }
    );

    if (
      response.data.status === "success" &&
      response.data.body?.marksBySubject
    ) {
      return { marksBySubject: response.data.body.marksBySubject };
    }

    return { marksBySubject: null };
  });
}

export default SubjectService;
