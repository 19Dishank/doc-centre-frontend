import axiosInstance from "@/helper/axiosInstance";
import { toastNotification } from "@/helper/toastNotification";

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

export const fetchPermissionsCatalog = async () => {
    try {
        const response = await axiosInstance.get("/permissions/catalog");
        return response.data;
    } catch (error) {
        console.error("Error fetching permissions catalog:", error);
        throw error;
    }
}

export const updateRolePermissions = async (roleId, permissionIds) => {
    try {
        const response = await axiosInstance.put(`/roles/permissions/${roleId}`, { permissionIds });
        return response.data;
    } catch (error) {
        console.error("Error updating role permissions:", error);
        throw error;
    }
}

export const deleteRole = async (roleId) => {
    try {
        const response = await axiosInstance.delete(`/roles/${roleId}`);
        return response.data;
    } catch (error) {
        console.error("Error deleting role:", error);
        toastNotification(error?.response?.data?.message || "An error occurred while deleting the role.", "error");
        throw error;
    }
}

export const updateRole = async (roleId, data) => {
    try {
        const response = await axiosInstance.put(`/roles/${roleId}`, data);
        return response.data;
    } catch (error) {
        console.error("Error updating role:", error);
        toastNotification(error?.response?.data?.message || "An error occurred while updating the role.", "error");
        throw error;
    }
}