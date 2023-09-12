import { message } from "antd";
import axios, { AxiosError, AxiosInstance } from "axios";

const api: AxiosInstance = axios.create({
  baseURL: BACKEND_HOST_EXAMPLE,
  timeout: 10000,
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("jwtToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    const { data }: any = response;
    if (data && data.success) {
      message.success(data.message || "Request successful");
    }
    return response;
  },
  (error: AxiosError) => {
    if (error.response) {
      const { data, status }: any = error.response;
      switch (status) {
        case 401:
          message.error("Unauthorized: Please log in again.");

          break;
        default:
          if (data && data?.message) {
            message.error(data?.message);
          } else {
            message.error("An error occurred while processing your request.");
          }
          break;
      }
    } else {
      message.error("Network error: Please check your internet connection.");
    }
    return Promise.reject(error);
  }
);

export default api;
