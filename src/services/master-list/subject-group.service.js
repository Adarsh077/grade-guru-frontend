import endpoints from "@/constants/endpoints";
import catchAsync from "@/utils";

import appAxios from "../axios.service";

class SubjectGroupService {
  static getAllSubjectGroups = catchAsync(async ({ semesterId }) => {
    const response = await appAxios.get(
      endpoints.masterList.subjectGroups.getAllSubjectGroupsBy(semesterId)
    );

    if (
      response.data.status === "success" &&
      response.data.body?.subjectGroups
    ) {
      return { subjectGroups: response.data.body.subjectGroups };
    }

    return { subjectGroups: [] };
  });
}

export default SubjectGroupService;
