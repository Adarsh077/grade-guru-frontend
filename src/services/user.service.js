import endpoints from "@/constants/endpoints";
import catchAsync from "@/utils";

import appAxios from "./axios.service";

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

  static addUser = catchAsync(async ({ email, name, role }) => {
    const response = await appAxios.post(endpoints.user.add, {
      email,
      name,
      role,
    });

    if (response.data.status === "success" && response.data.body?.user) {
      return { user: response.data.body.user };
    }

    return { user: null };
  });

  static getAllUsers = catchAsync(async () => {
    const response = await appAxios.get(endpoints.user.getAllUsers);

    if (response.data.status === "success" && response.data.body?.users) {
      return { users: response.data.body.users };
    }

    return { users: [] };
  });

  static getAbilityStatements = catchAsync(async () => {
    const response = await appAxios.get(endpoints.user.getAbilityStatements);

    if (response.data.status === "success" && response.data.body?.statements) {
      return { statements: response.data.body.statements };
    }

    return { statements: [] };
  });
}

export default UserService;
