import endpoints from "@/constants/endpoints";
import catchAsync from "@/utils";

import appAxios from "../axios.service";

class MasterSubjectService {
  static getAllSubjects = catchAsync(async ({ semesterId }) => {
    const response = await appAxios.get(
      endpoints.masterList.subjects.getAllSubjectsBy(semesterId)
    );

    if (response.data.status === "success" && response.data.body?.subjects) {
      return { subjects: response.data.body.subjects };
    }

    return { subjects: null };
  });

  static addMasterSubject = catchAsync(
    async ({ semesterId, name, staffId, code, subjectType }) => {
      const response = await appAxios.post(
        endpoints.masterList.subjects.addSubject(semesterId),
        {
          name,
          staffId,
          code,
          subjectType,
        }
      );

      if (response.data.status === "success" && response.data.body?.subject) {
        return { subject: response.data.body.subject };
      }

      return { subject: null };
    }
  );
}

export default MasterSubjectService;
