import axios from "axios";
import * as configJson from "../../config.json";
import { AppConfig } from "./config";

const config: AppConfig = configJson as AppConfig;

const baseUrl = config.baseUrl;
const apiRoute = baseUrl + "api/";

export const authApi = {
  login: async (data: { email: string; password: string }) => {
    try {
      const response = await axios.post(`${apiRoute}/login`, data);

      if (response.status === 200) {
        const { token } = response.data;
        localStorage.setItem("token", `Bearer ${token}`);
      }
    } catch (error) {
      console.error("Authentication failed:", error);
      throw error;
    }
  },

  register: async (data: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  }) => {
    try {
      const response = await axios.post(`${apiRoute}/register`, data);

      if (response.status === 200) {
        const { token } = response.data;
        localStorage.setItem("token", `Bearer ${token}`);
      }
    } catch (error) {
      console.error("Authentication failed:", error);
      throw error;
    }
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
