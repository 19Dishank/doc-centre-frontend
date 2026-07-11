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

export const getUsers = async (params) => {
    try {
        const response = await axiosInstance.get("/users", { params });
        return response.data;
    } catch (error) {
        console.error("Error fetching users:", error);
        throw error;
    }
}

export const inviteUser = async (invitationData) => {
    try {
                const response = await axiosInstance.post("/members/invite", invitationData);
        return response.data;
    } catch (error) {
        console.error("Error inviting user:", error);
        throw error;
    }
}

export const updateUserRole = async (userId, roleId) => {
    try {
        const response = await axiosInstance.put(`/users/${userId}/roles/${roleId}`, {});
        return response.data;
    } catch (error) {
        console.error("Error updating user:", error);
        throw error;
    }
}

export const deleteUser = async (userId) => {
    try {
        const response = await axiosInstance.delete(`/users/${userId}`);
        return response.data;
    } catch (error) {
        console.error("Error deleting user:", error);
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

export const fetchPreferencesCatalog = async () => {
    try {
        const response = await axiosInstance.get("/notifications/details");
        return response.data;
    } catch (error) {
        console.error("Error fetching notifications catalog:", error);
        throw error;
    }
}

export const changePreferences = async (preferencesData) => {
    try {
        const response = await axiosInstance.put(`/notifications/preferences`, preferencesData);
        return response.data;
    } catch (error) {
        console.error("Error changing user preferences:", error);
        throw error;
    }
}