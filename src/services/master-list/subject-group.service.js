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

  static addSubjectGroups = catchAsync(
    async ({ semesterId, name, isATKTSubjectGroup }) => {
      const response = await appAxios.post(
        endpoints.masterList.subjectGroups.getAllSubjectGroupsBy(semesterId),
        { name, isATKTSubjectGroup }
      );

      if (
        response.data.status === "success" &&
        response.data.body?.subjectGroup
      ) {
        return { subjectGroup: response.data.body.subjectGroup };
      }

      return { subjectGroup: [] };
    }
  );
}

export default SubjectGroupService;
