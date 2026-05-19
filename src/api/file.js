import axiosInstance from "@/helper/axiosInstance";
import { getSubdomain } from "@/helper/getSubdomain";

export const upload = async (payload) => {
    try {
        const { file, parentId, name } = payload;
        console.log("File : ", file);
        const formData = new FormData();
        const subdomain = getSubdomain();

        if (file) {
            formData.append("document", file);
            formData.append("type", "file");
        } else {
            formData.append("name", name);
            formData.append("type", "folder");
        }
        formData.append("slug", subdomain);
        formData.append("parentId", parentId);
        const response = await axiosInstance.post("/docs/upload", formData);
        return response.data;
    } catch (error) {
        console.error("Error uploading file:", error);
        throw error;
    }
};

export const deleteFile = async (fileId) => {
    try {
        const response = await axiosInstance.delete(`/docs/${fileId}`);
        return response.data;
    } catch (error) {
        console.error("Error deleting file:", error);
        throw error;
    }
};

export const fetchFiles = async (parentId) => {
    try {
        const response = parentId
            ? await axiosInstance.get(`/docs?parentId=${parentId}`)
            : await axiosInstance.get("/docs");
        return response.data;
    } catch (error) {
        console.error("Error fetching files:", error);
        throw error;
    }
};