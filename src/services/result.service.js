import endpoints from "@/constants/endpoints";
import catchAsync from "@/utils";

import appAxios from "./axios.service";

class ResultService {
  static generateResult = catchAsync(async ({ subjectGroupId }) => {
    const response = await appAxios.post(
      endpoints.result.generateResult(subjectGroupId)
    );

    return { status: response.data.status };
  });

  static getResult = catchAsync(async ({ subjectGroupId }) => {
    const response = await appAxios.get(
      endpoints.result.getResult(subjectGroupId)
    );

    if (response.data.status === "success" && response.data.body?.result) {
      return { result: response.data.body.result };
    }

    return { result: null };
  });
}

export default ResultService;
