import axios from "axios";

import appConfig from "@/appConfig";

const appAxios = axios.create({
  baseURL: appConfig.apiBaseUrl,
});

export const setAuthHeader = (token) => {
  appAxios.defaults.headers["Authorization"] = token ? `Bearer ${token}` : "";
  appAxios.defaults.headers["agency-frontend-version"] = "v1.0.0";
};

export const resultGeneratorAxios = axios.create({
  baseURL: appConfig.resultGeneratorBaseUrl,
});

export default appAxios;
