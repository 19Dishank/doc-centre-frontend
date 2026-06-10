import axiosInstance from "@/helper/axiosInstance";
import { getSubdomain } from "@/helper/getSubdomain";
import { toastNotification } from "@/helper/toastNotification";
import { clearTokens, getTokens } from "@/helper/tokens";
import axios from "axios";

export const refreshAccessToken = async () => {
    try {
        const { refreshToken } = getTokens();
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

export const getSignedURLForLogoUpload = async (payload) => {
    try {
        const response = await axiosInstance.post(
            `/tenants/logo-upload-url`,
            payload
        );
        return response.data;
    } catch (error) {
        console.error("Error getting presigned URL for logo upload:", error);
        throw error;
    }
}

export const uploadLogoToS3 = async (presignedUrl, file) => {
    try {
        const response = await axios.put(presignedUrl, file, {
            headers: {
                'Content-Type': file.type,
            },
        });
        return response;
    } catch (error) {
        console.error("Error uploading logo to S3:", error);
        throw error;
    }
};

export const createTenant = async (tenantData) => {
    try {
        const response = await axiosInstance.post(
            `/tenants/register`,
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

export const fetchLogo = async () => {
    try {
        const slug = getSubdomain();
        const response = await axiosInstance.get(`/tenants/logo-url?slug=${slug}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching logo:", error);
        throw error;
    }
}

export const validateSecureToken = async (token) => {
    try {
        console.log("Validating secure token:", token);
        const response = await axiosInstance.get(`/auth/validate-secure-token?token=${token}`);
        console.log("Response : ", response)
        return response.data;
    } catch (error) {
        console.error("Error validating secure token:", error);
        throw error;
    }
};

export const resendVerificationEmail = async (token) => {
    try {
        const response = await axiosInstance.post(
            `/tenants/resend-email`,
            { token }
        );
        return response.data;
    } catch (error) {
        console.error("Error resending verification email:", error);
        throw error;
    }
};

// eslint-disable-next-line no-unused-vars
export const validateMemberToken = async (token) => {
    // try {
    //     const response = await axiosInstance.get(`/members/validate/member?token=${token}`);
    //     return response.data;
    // } catch (error) {
    //     console.error("Error validating member token:", error);
    //     throw error;
    // }
    return { data: { status: "valid" } };
};

export const completeOnboarding = async (passwordData) => {
    try {
        const response = await axiosInstance.post(
            `/auth/complete-onboarding`,
            passwordData
        );
        return response.data;
    } catch (error) {
        console.error("Error completing onboarding:", error);
        throw error;
    }
};

export const setPassword = async (passwordData) => {
    try {
        const response = await axiosInstance.post(
            `/members/set-password`,
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

export const validateTenant = async (slug) => {
    try {
        const response = await axiosInstance.get(`/auth/${slug}`);
        return response.data;
    } catch (error) {
        console.error("Error validating tenant:", error);
        throw error;
    }
}

export const loginUser = async (credentials) => {
    try {
        const response = await axiosInstance.post(
            `/auth/login`,
            credentials
        );
        return response.data;
    } catch (error) {
        console.error("Error logging in:", error);
        return error?.response || { success: false, message: "An error occurred during login. Please try again." };
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
        clearTokens();
        window.location.replace(import.meta.env.VITE_APP_BASE_URL.replace("slug", "app") + `/login`);
    }
};
