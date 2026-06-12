import axiosInstance from "@/helper/axiosInstance";

export const fetchNotifications = async () => {
    try {
        const response = await axiosInstance.get("/notifications");
        return response.data;
    } catch (error) {
        console.error("Error fetching notifications:", error);
        throw error;
    }
}

export const markNotificationAsRead = async (notificationId) => {
    try {
        const response = await axiosInstance.put(`/notifications/${notificationId}/read`);
        return response.data;
    } catch (error) {
        console.error("Error marking notification as read:", error);
        throw error;
    }
}

export const markAllNotificationsAsRead = async () => {
    try {
        const response = await axiosInstance.put("/notifications/read-all");
        return response.data;
    } catch (error) {
        console.error("Error marking all notifications as read:", error);
        throw error;
    }
}