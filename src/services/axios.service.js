import appConfig from "@/appConfig";
import axios from "axios";

const appAxios = axios.create({
  baseURL: appConfig.apiBaseUrl,
});

export const setAuthHeader = (token) => {
  appAxios.defaults.headers["Authorization"] = token ? `Bearer ${token}` : "";
};

export default appAxios;
