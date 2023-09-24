import axios from "axios";
import * as configJson from "../../config.json";
import { AppConfig } from "./config";

const config: AppConfig = configJson as AppConfig;

const baseUrl = config.baseUrl;
const apiRoute = baseUrl + "api/";

export const authApi = {
  login: async (email: string, password: string) => {
    return axios.post(`${apiRoute}/login`, {
      email,
      password,
    });
  },

  register: async (data: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  }) => {
    return axios.post(`${apiRoute}/auth/register`, data);
  },

  refreshToken: async (data: { refreshToken: string }) => {
    return axios.post(`${apiRoute}/auth/refresh-token`, data);
  },

  passwordResetRequest: async (data: { email: string }) => {
    return axios.get(`${apiRoute}/auth/reset`, {
      params: { email: data.email },
    });
  },

  passwordReset: async (data: { password: string }) => {
    return axios.post(`${apiRoute}/auth/reset`, data);
  },
};
