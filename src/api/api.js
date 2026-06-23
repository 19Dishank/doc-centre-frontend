import axiosInstance from "@/helper/axiosInstance";

export const generateApiKey = async (keyName) => {
    try {
        const response = await axiosInstance.post("/api-key", { name: keyName });
        return response.data;
    } catch (error) {
        console.error("Error generating API key: ", error);
        throw error;
    }
}

export const fetchApiKeys = async () => {
    try {
        const response = await axiosInstance.get("/api-key");
        return response.data;
    } catch (error) {
        console.error("Error fetching API keys: ", error);
        throw error;
    }
}

export const revokeApiKey = async (id) => {
    try {
        const response = await axiosInstance.delete(`/api-key/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error revoking API key: ", error);
        throw error;
    }
}

export const fetchActivityLogs = async () => {
    try {
        const response = await axiosInstance.get("/api-key/activity-logs");
        return response.data;
    } catch (error) {
        console.error("Error fetching activity logs: ", error);
        throw error;
    }
}