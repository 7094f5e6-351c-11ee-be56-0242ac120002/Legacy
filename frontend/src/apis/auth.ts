import axios from "axios";

const BASE_URL = "https://domena.com/";
const apiRoute = BASE_URL + "api/";

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

  refreshToken: async (refreshToken: string) => {
    return axios.post(`${apiRoute}/auth/refresh-token`, {
      refreshToken,
    });
  },

  passwordResetRequest: async (email: string) => {
    return axios.get(`${apiRoute}/auth/reset`, {
      params: { email },
    });
  },

  passwordReset: async (password: string) => {
    return axios.post(`${apiRoute}/auth/reset`, {
      password,
    });
  },
};
