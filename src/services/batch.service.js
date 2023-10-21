import catchAsync from "@/utils";
import appAxios from "./axios.service";
import endpoints from "@/constants/endpoints";

class UserService {
  static getAllBatches = catchAsync(async () => {
    const response = await appAxios.get(endpoints.batch.getAllBatches);

    if (response.data.status === "success" && response.data.body?.batches) {
      return { batches: response.data.body.batches };
    }

    return { batches: null };
  });
}

export default UserService;
