import catchAsync from "@/utils";
import appAxios from "./axios.service";
import endpoints from "@/constants/endpoints";

class MarksBySubjectService {
  static getMarksBySubject = catchAsync(async ({ subjectId }) => {
    const response = await appAxios.get(
      endpoints.subjects.getMarksBySubjectId(subjectId)
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
    async ({ subjectId, marksOfStudent }) => {
      const response = await appAxios.patch(
        endpoints.subjects.updateMarksBySubjectId(subjectId),
        { marksOfStudent }
      );

      return { status: response.data.status };
    }
  );
}

export default MarksBySubjectService;
