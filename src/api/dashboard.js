import axiosInstance from "@/helper/axiosInstance";

export const fetchRecentDocs = async () => {
    try {
        const response = await axiosInstance.get("/dashboard/docs?limit=5");
        return response.data;
    } catch (error) {
        console.error("Error fetching recent documents:", error);
        throw error;
    }
};

export const fetchStorageStats = async () => {
    try {
        const response = await axiosInstance.get("/dashboard/stats");
        return response.data;
    } catch (error) {
        console.error("Error fetching storage stats:", error);
        throw error;
    }
};

export const fetchUsageData = async () => {
    try {
        const response = await axiosInstance.get("/dashboard/usage");
        return response.data;
    } catch (error) {
        console.error("Error fetching usage data:", error);
        throw error;
    }
};