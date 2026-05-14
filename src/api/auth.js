import axiosInstance from "@/helper/axiosInstance";
import { toastNotification } from "@/helper/toastNotification";

export const refreshAccessToken = async () => {
    try {
        console.log("Refreshing Access Token")
        const refreshToken = localStorage.getItem('refreshToken');
        const response = await axiosInstance.post(
            `/auth/refresh-access-token`,
            { refreshToken }
        );
        return response.data;
    } catch (error) {
        console.error("Error refreshing access token:", error);
        throw error;
    }
};

export const createTenant = async (tenantData) => {
    try {
        const response = await axiosInstance.post(
            `/tenant/register`,
            tenantData
        );
        if (response.success) {
            console.log("Tenant created successfully:", response.data);
            toastNotification("Tenant created successfully, please check your mailbox to activate your account!", "success");
        }
        console.log("Response Data:", response)
        return response.data;
    } catch (error) {
        console.error("Error creating tenant:", error);
        throw error;
    }
};

export const validateSecureToken = async (token) => {
    try {
        const response = await axiosInstance.get(`/auth/validate-secure-token?token=${token}`);
        return response.data;
    } catch (error) {
        console.error("Error validating secure token:", error);
        throw error;
    }
};

export const setPassword = async (passwordData) => {
    try {
        const response = await axiosInstance.post(
            `/auth/complete-onboarding`,
            passwordData
        );
        return response.data;
    } catch (error) {
        console.error("Error setting password:", error);
        throw error;
    }
};

export const verifyUser = async (email) => {
    try {
        const response = await axiosInstance.post(
            `/auth/verify-email`,
            email
        );
        return response.data;
    } catch (error) {
        console.error("Error verifying user:", error);
        throw error;
    }
};

export const validateEmailVerificationToken = async (token) => {
    try {
        const response = await axiosInstance.post(`/auth/validate-login-token`, { token });
        return response.data;
    } catch (error) {
        console.error("Error validating email verification token:", error);
        throw error;
    }
};

export const loginUser = async (credentials) => {
    try {
        const response = await axiosInstance.post(
            `/auth/login`,
            credentials
        );
        return response.data;
    } catch (error) {
        console.error("Error logging in:", error);
        throw error;
    }
};

export const generateOTP = async (email) => {
    try {
        const response = await axiosInstance.post(
            `/auth/forgot-password`,
            email
        );
        return response.data;
    } catch (error) {
        console.error("Error generating OTP:", error);
        throw error;
    } finally {
        toastNotification("OTP Sent Successfully! please check your email.", "success");
    }
};

export const resendOTP = async (email) => {
    try {
        const response = await axiosInstance.post(
            `/auth/resend-otp`,
            email
        );
        return response.data;
    } catch (error) {
        console.error("Error resending OTP:", error);
        throw error;
    }
};

export const verifyOTP = async (otpData) => {
    try {
        const response = await axiosInstance.post(
            `/auth/verify-forgot-password-otp`,
            otpData
        );
        console.log("response", response)
        return response.data;
    } catch (error) {
        console.error("Error verifying OTP:", error);
        throw error;
    }
};

export const resetPassword = async (resetPasswordData) => {
    try {
        const response = await axiosInstance.post(
            `/auth/reset-password`,
            resetPasswordData
        );
        console.log("response", response)
        return response.data;
    } catch (error) {
        console.error("Error resetting password:", error);
        throw error;
    }
};

export const logoutUser = async () => {
    try {
        await axiosInstance.post(`/auth/logout`);
    } catch (error) {
        console.error("Error logging out:", error);
        throw error;
    } finally {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        window.location.replace(import.meta.env.VITE_APP_BASE_URL.replace("slug", "app") + `/login`);
    }
};

export const fetchMe = async () => {
    try {
        const response = await axiosInstance.get(`/auth/me`);
        return response.data;
    } catch (error) {
        console.error("Error fetching user data:", error);
        throw error;
    }
};