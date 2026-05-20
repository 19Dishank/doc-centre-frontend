import axiosInstance from "@/helper/axiosInstance";

export const fetchRoles = async () => {
    try {
        const response = await axiosInstance.get("/roles");
        return response.data;
    } catch (error) {
        console.error("Error fetching roles:", error);
        throw error;
    }
}