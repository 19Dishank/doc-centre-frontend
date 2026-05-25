import axiosInstance from "@/helper/axiosInstance";

export const fetchOrganizationDetails = async () => {
    try {
        const res = await axiosInstance.get("/orgs");
        return res.data;
    } catch (error) {
        console.error("Error fetching organization details:", error);
        throw error;
    }
} 

export const updateOrganizationDetails = async (data) => {
    try {
        const res = await axiosInstance.put("/orgs", data);
        return res.data;
    } catch (error) {
        console.error("Error updating organization details:", error);
        throw error;
    }
}