import axiosInstance from "@/helper/axiosInstance";
import { getSubdomain } from "@/helper/getSubdomain";
import axios from "axios";

export const getSignedURL = async (payload) => {
  try {
    const response = await axiosInstance.post("/docs/presigned-upload-url", payload);
    return response.data;
  } catch (error) {
    console.error("Error getting signed URL:", error);
    throw error;
  }
};

export const uploadOnSignedURL = async (signedURL, file, onProgress) => {
  try {
        const response = await axios.put(signedURL, file, {
      headers: {
        "Content-Type": file.type,
      },
      onUploadProgress: ({ loaded, total }) => {
        const processPercent = Math.round((loaded * 100) / total);
        onProgress?.(processPercent);
      },
    });
        return response;
  } catch (error) {
    console.error("Error uploading file to signed URL:", error);
    throw error;
  }
};

export const createFolder = async (payload) => {
  try {
    const response = await axiosInstance.post("/docs/folder", payload);
    return response.data;
  } catch (error) {
    console.error("Error creating folder:", error);
    throw error;
  }
};

export const upload = async (payload) => {
  try {
    const { file, parentId, name } = payload;
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

export const fetchFiles = async (parentId, filters) => {
  try {
    const response = parentId
      ? await axiosInstance.get(`/docs`, { params: { parentId, ...filters } })
      : await axiosInstance.get(`/docs`, { params: { ...filters } });
    return response.data;
  } catch (error) {
    console.error("Error fetching files:", error);
    throw error;
  }
};

export const getPresignedURLForView = async (id) => {
  try {
    const response = await axiosInstance.get(`/docs/${id}/view-url`);
    return response.data;
  } catch (error) {
    console.error("Error getting presigned URL for view:", error);
    throw error;
  }
};

export const deleteFile = async (id) => {
  try {
    const response = await axiosInstance.delete(`/docs/${id}/document`);
    return response.data;
  } catch (error) {
    console.error("Error deleting file:", error);
    throw error;
  }
};

export const deleteFolder = async (id) => {
  try {
    const response = await axiosInstance.delete(`/docs/${id}/folder`);
    return response.data;
  } catch (error) {
    console.error("Error deleting folder:", error);
    throw error;
  }
};

export const deleteFilePermanently = async (id) => {
  try {
    const response = await axiosInstance.delete(`/docs/recycle-bin/documents/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting file:", error);
    throw error;
  }
};

export const deleteFolderPermanently = async (id) => {
  try {
    const response = await axiosInstance.delete(`/docs/recycle-bin/folders/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting folder:", error);
    throw error;
  }
};

export const renameFile = async (id, name) => {
  try {
    const response = await axiosInstance.put(`/docs/${id}/document`, { name });
    return response.data;
  } catch (error) {
    console.error("Error renaming file/folder:", error);
    throw error;
  }
};

export const renameFolder = async (id, name) => {
  try {
    const response = await axiosInstance.put(`/docs/${id}/folder`, { name });
    return response.data;
  } catch (error) {
    console.error("Error renaming file/folder:", error);
    throw error;
  }
};

export const downloadFile = async (id) => {
  try {
    const response = await axiosInstance.get(`/docs/${id}/download`);
    window.open(response.data.data.url);
  } catch (error) {
    console.error("Error downloading file:", error);
    throw error;
  }
};

export const createShareLink = async (id, payload) => {
  try {
    const response = await axiosInstance.post(`/docs/${id}/share`, payload);
    return response.data;
  } catch (error) {
    console.error("Error creating share link:", error);
    throw error;
  }
};

export const fetchBinData = async () => {
  try {
    const response = await axiosInstance.get("/docs/restore-docs");
    return response.data;
  } catch (error) {
    console.error("Error fetching recycle bin data:", error);
    throw error;
  }
};

export const restoreFile = async (id) => {
  try {
    const response = await axiosInstance.put(`/docs/${id}/restore-doc`);
    return response.data;
  } catch (error) {
    console.error("Error restoring file:", error);
    throw error;
  }
};

export const restoreFolder = async (id) => {
  try {
    const response = await axiosInstance.put(`/docs/${id}/restore-folder`);
    return response.data;
  } catch (error) {
    console.error("Error restoring folder:", error);
    throw error;
  }
};

export const fetchSharedDocumentDetails = async (id) => {
  try {
    const response = await axiosInstance.get(`/docs/shared/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching shared document details:", error);
    throw error;
  }
};
