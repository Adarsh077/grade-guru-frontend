import catchAsync, { AppError } from "@/utils";
import appAxios from "./axios.service";

class AuthService {
  static login = catchAsync(async ({ email, password }) => {
    const response = await appAxios.post("/auth/login", { email, password });

    if (response.data.status === "success" && response.data.body?.token) {
      return { token: response.data.body.token };
    } else {
      throw new AppError({
        message: "Something went wrong!",
        name: "Error",
      });
    }
  });
}

export default AuthService;
