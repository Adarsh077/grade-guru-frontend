import endpoints from "@/constants/endpoints";
import catchAsync from "@/utils";

import appAxios from "./axios.service";

class SubjectGroupService {
  static getAllSubjectGroups = catchAsync(async ({ semesterId }) => {
    const response = await appAxios.get(
      endpoints.subjectGroups.getAllSubjectGroupsBy(semesterId)
    );

    if (
      response.data.status === "success" &&
      response.data.body?.subjectGroups
    ) {
      return { subjectGroups: response.data.body.subjectGroups };
    }

    return { subjectGroups: [] };
  });

  static getSubjectGroup = catchAsync(async (subjectGroupId) => {
    const response = await appAxios.get(
      endpoints.subjectGroups.getSubjectGroup(subjectGroupId)
    );

    if (
      response.data.status === "success" &&
      response.data.body?.subjectGroup
    ) {
      return { subjectGroup: response.data.body.subjectGroup };
    }

    return { subjectGroup: null };
  });

  static enrollStudents = catchAsync(
    async ({ subjectGroupId, enrolledStudents }) => {
      const response = await appAxios.post(
        endpoints.subjectGroups.enrollStudents(subjectGroupId),
        { enrolledStudents }
      );

      return { status: response.data.status };
    }
  );

  static getEnrollStudents = catchAsync(async (subjectGroupId) => {
    const response = await appAxios.get(
      endpoints.subjectGroups.enrollStudents(subjectGroupId)
    );

    if (response.data.status === "success" && response.data.body?.students) {
      return { students: response.data.body.students };
    }

    return { students: null };
  });

  static sendRevalutionReminder = catchAsync(async (subjectGroupId, date) => {
    const response = await appAxios.post(
      endpoints.subjectGroups.sendRevalutionReminder(subjectGroupId),
      { date }
    );

    return { status: response.data.status };
  });

  static lockMarksEntry = catchAsync(async (subjectGroupId) => {
    const response = await appAxios.post(
      endpoints.subjectGroups.lockMarksEntry(subjectGroupId)
    );

    return { status: response.data.status };
  });
}

export default SubjectGroupService;
