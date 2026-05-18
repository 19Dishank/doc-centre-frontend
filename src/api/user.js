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

export const inviteUser = async (invitationData) => {
    try {
        console.log("Invitation Data", invitationData)
        const response = await axiosInstance.post("/members/invite", invitationData);
        return response.data;
    } catch (error) {
        console.error("Error inviting user:", error);
        throw error;
    }
}
