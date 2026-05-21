import axiosInstance from "@/helper/axiosInstance"


export const fetchMe = async () => {
    try {
        const response = await axiosInstance.get(`/users/me`);
        return response.data;
    } catch (error) {
        console.error("Error fetching user data:", error);
        throw error;
    }
};

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

export const updateUserProfile = async (profileData) => {
    try {
        const response = await axiosInstance.put(`/users`, profileData);
        return response.data;
    } catch (error) {
        console.error("Error updating user profile:", error);
        throw error;
    }
}

export const changeUserPassword = async (passwordData) => {
    try {
        const response = await axiosInstance.post(`/users/change-password`, passwordData);
        return response.data;
    } catch (error) {
        console.error("Error changing user password:", error);
        throw error;
    }
}