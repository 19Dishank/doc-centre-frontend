import axios from "axios";
import { toastNotification } from "./toastNotification";
import { getSubdomain } from "./getSubdomain";
import { refreshAccessToken } from "@/api/auth";
import { clearTokens, getTokens, setTokens } from "./tokens";
import { reconnectSocket } from "./socketService";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
  headers: {
    Accept: "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const { accessToken } = getTokens();

    if (accessToken) {
      config.headers = config.headers || {};
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    const isPlainObject = config.data && typeof config.data === "object" && config.data.constructor === Object;

    if (isPlainObject) {
      const slug = getSubdomain();
      config.data.slug = slug !== "app" ? slug : config.data.slug;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

let isRefreshing = false;
let failedQueue = [];

const isAuthRoute = [
  "/auth/refresh-access-token",
  "/tenants/register",
  "/auth/validate-secure-token",
  "/auth/complete-onboarding",
  "/members/set-password",
  "/auth/verify-email",
  "/auth/validate-login-token",
  "/auth/login",
  "/auth/forgot-password",
  "/auth/resend-otp",
  "/auth/verify-forgot-password-otp",
  "/auth/reset-password",
  "/auth/logout",
  "/users/change-password",
];

const processQueue = (error, token = null) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });
  failedQueue = [];
};

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    console.log("Axios Error:", {
      message: error.message,
      status: error.response?.status,
      data: error.response?.data,
      url: error.config?.url,
    });

    const { config, response } = error;
    const originalRequest = config;

    if (!response) {
      if (error.code === "ECONNABORTED" || error?.message?.includes("timeout")) {
        toastNotification("Server timed out. Please try again.", "error");
      } else {
        toastNotification("Network error. Please check if your Express server is running.", "error");
      }
      return Promise.reject(error);
    }

    const status = response.status;

    if (status === 500) {
      toastNotification("Internal Server Error. Please contact support.", "error");
      return Promise.reject(error);
    }

    if (status === 401 && !originalRequest._retry) {
      if (isAuthRoute.includes(originalRequest.url)) {
        return Promise.reject(error);
      }

      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        })
          .then((token) => {
            originalRequest.headers["Authorization"] = `Bearer ${token}`;
            return axiosInstance(originalRequest);
          })
          .catch((err) => Promise.reject(err));
      }

      originalRequest._retry = true;
      isRefreshing = true;

      try {
        const res = await refreshAccessToken();
        const newAccessToken = res.data.accessToken;
        const newRefreshToken = res.data.refreshToken;

        // console.log("New Access Token:", newAccessToken);

        setTokens(newAccessToken, newRefreshToken);
        axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${newAccessToken}`;
        originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;

        // reconnect socket with new token
        reconnectSocket(newAccessToken);
        // console.log("Socket reconnected with new token");

        processQueue(null, newAccessToken);

        return axiosInstance(originalRequest);
      } catch (refreshError) {
        console.log("Token refresh failed:", {
          status: refreshError?.response?.status,
          data: refreshError?.response?.data,
        });

        processQueue(refreshError, null);

        const refreshStatus = refreshError?.response?.status;
        if (refreshStatus === 401 || refreshStatus === 403) {
          clearTokens();
          toastNotification("Session expired. Please log in again.", "error");
          window.location.replace(import.meta.env.VITE_APP_BASE_URL.replace("slug", "app") + "/login");
        }

        return Promise.reject(refreshError);
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
