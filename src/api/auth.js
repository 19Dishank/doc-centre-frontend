import axiosInstance from "@/helper/axiosInstance";
import { toastNotification } from "@/helper/toastNotification";

const createTenant = async (tenantData) => {
    try {
        const response = await axiosInstance.post(
            `/tenant/register`,
            tenantData
        );
        if(response.success) {
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

const validateSecureToken = async (token) => {
    try {
        const response = await axiosInstance.get(`/auth/validate-secure-token?token=${token}`);
        return response.data;
    } catch (error) {
        console.error("Error validating secure token:", error);
        throw error;
    }
};

const setPassword = async (passwordData) => {
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

const verifyUser = async (email) => {
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

const loginUser = async (credentials) => {
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

export { createTenant, validateSecureToken, setPassword, verifyUser, loginUser };