import catchAsync from "@/utils";
import appAxios from "./axios.service";
import endpoints from "@/constants/endpoints";

class UserService {
  static getUserDetails = catchAsync(async () => {
    const response = await appAxios.get(endpoints.user.details);

    if (response.data.status === "success" && response.data.body?.user) {
      return { user: response.data.body.user };
    }

    return { user: null };
  });

  static search = catchAsync(async (query) => {
    const response = await appAxios.get(endpoints.user.search, {
      params: {
        query,
      },
    });

    if (response.data.status === "success" && response.data.body?.users) {
      return { users: response.data.body.users };
    }

    return { users: [] };
  });
}

export default UserService;
