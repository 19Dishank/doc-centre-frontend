import axios from 'axios';
import { toastNotification } from './toastNotification';

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
});

axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        const message = error.response?.data?.message || "Something went wrong";
        toastNotification("error", message);
        return Promise.reject(error);
    }
);

export default axiosInstance;