import endpoints from "@/constants/endpoints";
import catchAsync from "@/utils";

import appAxios from "./axios.service";

class MarksBySubjectService {
  static getMarksBySubject = catchAsync(async ({ subjectId }) => {
    const response = await appAxios.get(
      endpoints.marksBySubject.getMarksBySubjectId(subjectId)
    );

    if (
      response.data.status === "success" &&
      response.data.body?.marksBySubject
    ) {
      return { marksBySubject: response.data.body.marksBySubject };
    }

    return { marksBySubject: null };
  });

  static updateMarksBySubject = catchAsync(
    async ({
      subjectId,
      studentId,
      examName,
      marksScored,
      hasParticipatedInNss,
    }) => {
      const response = await appAxios.post(
        endpoints.marksBySubject.enterMarks({ subjectId, studentId }),
        { examName, marksScored, hasParticipatedInNss }
      );

      return { status: response.data.status };
    }
  );
}

export default MarksBySubjectService;
