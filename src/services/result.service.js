import catchAsync from "@/utils";
import appAxios, { resultGeneratorAxios } from "./axios.service";
import endpoints from "@/constants/endpoints";

class ResultService {
  static generateResult = catchAsync(async ({ semesterId }) => {
    const response = await appAxios.post(
      endpoints.result.generateResult(semesterId)
    );

    if (response.data.status === "success") {
      await resultGeneratorAxios.get(
        endpoints.result.generateResultPdf(semesterId)
      );
    }
  });
}

export default ResultService;
