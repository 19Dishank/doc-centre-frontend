/* eslint-disable react-refresh/only-export-components */
import { fetchPermissionsCatalog } from "@/api/role";
import { createContext, useContext, useEffect, useState } from "react";
import { useAuthContext } from "./AuthContext";

const PermissionsCatalogContext = createContext();

const PermissionsCatalogProvider = ({ children }) => {
    const [permissionsCatalog, setPermissionsCatalog] = useState([]);
    const { isAuthenticated } = useAuthContext();

    const getPermissionsCatalog = async () => {
        try {
            const res = await fetchPermissionsCatalog();
            setPermissionsCatalog(res.data.permissionCatalog);
        } catch (error) {
            console.error("Error fetching permissions catalog:", error);
        }
    }

    useEffect(() => {
        if (!isAuthenticated) return;
        // eslint-disable-next-line react-hooks/set-state-in-effect
        getPermissionsCatalog();
    }, [isAuthenticated]);

    return (
        <PermissionsCatalogContext.Provider value={{ permissionsCatalog }}>
            {children}
        </PermissionsCatalogContext.Provider>
    );
}

export default PermissionsCatalogProvider;

export const usePermissionsCatalog = () => {
    const context = useContext(PermissionsCatalogContext);
    if (!context) {
        throw new Error("usePermissionsCatalog must be used within a PermissionsCatalogProvider");
    }
    return context;
};