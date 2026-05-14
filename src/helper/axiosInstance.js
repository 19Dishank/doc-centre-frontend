import axios from 'axios';
import { toastNotification } from './toastNotification';
import { getSubdomain } from './getSubdomain';
import { refreshAccessToken } from '@/api/auth';

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
});

axiosInstance.interceptors.request.use(
    (config) => {

        
        
        const token = localStorage.getItem('accessToken');
        console.log("Old Access Token : ", token);

        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }

        if (config.data) {

            const slug = getSubdomain();

            config.data = {
                ...config.data,
                slug: slug !== "app" ? slug : config?.data?.slug || undefined,
            };
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

let isRefreshing = false;
let failedQueue = [];

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
    (response) => {
        return response;
    },
    async (error) => {

        console.log("Axios Response Error Intercepted:", JSON.parse(JSON.stringify(error)));

        const { config, response } = error;
        const originalRequest = config;

        if (!response) {
            if (error.code === 'ECONNABORTED' || error.message.includes('timeout')) {
                return toastNotification('Server timed out. Please try again.', "error");
            } else {
                return toastNotification('Network error. Please check if your Express server is running.', "error");
            }
        } else {
            const status = response.status;
            console.log("Original Request : ", originalRequest.url);
            if (status === 500) {
                return toastNotification('Internal Server Error. Please contact support.', "error");
            } else if (status === 404) {
                return toastNotification('Requested resource not found.', "error");
            } else if (status === 401 && !originalRequest._retry) {

                if(originalRequest.url.includes('/auth') && !originalRequest.url.includes('/auth/me') && !originalRequest.url.includes('/auth/refresh-access-token')) {
                    return Promise.reject(error);
                }

                if (isRefreshing) {
                    try {
                        const token = await new Promise((resolve, reject) => {
                            failedQueue.push({ resolve, reject });
                        });
                        originalRequest.headers['Authorization'] = `Bearer ${token}`;
                        return await axiosInstance(originalRequest);
                    } catch (err) {
                        return Promise.reject(err);
                    }
                }

                originalRequest._retry = true;
                isRefreshing = true;

                try {
                    const res = await refreshAccessToken();
                    console.log("New Access Token : ", res);
                    axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${res.data.accessToken}`;
                    originalRequest.headers['Authorization'] = `Bearer ${res.data.accessToken}`;
                    localStorage.setItem('accessToken', res.data.accessToken);
                    localStorage.setItem('refreshToken', res.data.refreshToken);

                    processQueue(null, res.data.accessToken);

                    return await axiosInstance(originalRequest);
                } catch (refreshError) {
                    localStorage.removeItem('accessToken');
                    localStorage.removeItem('refreshToken');
                    processQueue(refreshError, null);
                    return Promise.reject(refreshError);
                } finally {
                    isRefreshing = false;
                }
            }
        }

        return Promise.reject(error);
    }
);

export default axiosInstance;