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
}

export default SubjectService;
