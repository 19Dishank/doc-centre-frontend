import axiosInstance from "@/helper/axiosInstance";

export const fetchOrganizationDetails = async () => {
    try {
        const response = await axiosInstance.get("/orgs");
        return response.data;
    } catch (error) {
        console.error("Error fetching organization details:", error);
        throw error;
    }
} 

export const updateOrganizationDetails = async (data) => {
    try {
        const response = await axiosInstance.put("/orgs", data);
        return response.data;
    } catch (error) {
        console.error("Error updating organization details:", error);
        throw error;
    }
}