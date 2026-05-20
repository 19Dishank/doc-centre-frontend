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

export const createNewRole = async (data) => {
    try {
        const response = await axiosInstance.post("/roles", data);
        return response.data;
    } catch (error) {
        console.error("Error creating role:", error);
        throw error;
    }
}