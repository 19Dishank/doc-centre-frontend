import axiosInstance from "@/helper/axiosInstance";

export const generateApiKey = async (keyName) => {
    try {
        const res = await axiosInstance.post("/api-key", { name: keyName });
        return res.data;
    } catch (error) {
        console.error("Error generating API key: ", error);
        throw error;
    }
}

export const fetchApiKeys = async () => {
    try {
        const res = await axiosInstance.get("/api-key");
        return res.data;
    } catch (error) {
        console.error("Error fetching API keys: ", error);
        throw error;
    }
}

export const revokeApiKey = async (id) => {
    try {
        const res = await axiosInstance.delete(`/api-key/${id}`);
        return res.data;
    } catch (error) {
        console.error("Error revoking API key: ", error);
        throw error;
    }
}
