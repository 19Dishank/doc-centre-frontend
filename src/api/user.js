import axiosInstance from "@/helper/axiosInstance"

export const getUsers = async () => {
    try {
        const response = await axiosInstance.get("/users");
        return response.data;
    } catch (error) {
        console.error("Error fetching users:", error);
        throw error;
    }
}

export const inviteUser = () => { }