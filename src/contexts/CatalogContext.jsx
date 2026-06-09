import { fetchPermissionsCatalog } from "@/api/role";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { useAuthContext } from "./AuthContext";
import { fetchPreferencesCatalog } from "@/api/user";

const CatalogContext = createContext();

const CatalogProvider = ({ children }) => {
    const [permissionsCatalog, setPermissionsCatalog] = useState([]);
    const [preferencesCatalog, setPreferencesCatalog] = useState([]);
    const { isAuthenticated } = useAuthContext();

    const getPermissionsCatalog = async () => {
        try {
            const res = await fetchPermissionsCatalog();
            setPermissionsCatalog(res?.data?.permissionCatalog);
        } catch (error) {
            console.error("Error fetching permissions catalog:", error);
        }
    }

    const getPreferencesCatalog = async () => {
        try {
            const res = await fetchPreferencesCatalog();
            setPreferencesCatalog(res.notificationsCatalog);
        } catch (error) {
            console.error("Error fetching preferences catalog:", error);
        }
    }

    useEffect(() => {
        if (!isAuthenticated) return;
        // eslint-disable-next-line react-hooks/set-state-in-effect
        getPermissionsCatalog();
        getPreferencesCatalog();
    }, [isAuthenticated]);

    const value = useMemo(() => ({
        permissionsCatalog,
        preferencesCatalog
    }), [permissionsCatalog, preferencesCatalog]);

    return (
        <CatalogContext.Provider value={value}>
            {children}
        </CatalogContext.Provider>
    );
}

export default CatalogProvider;

// eslint-disable-next-line react-refresh/only-export-components
export const useCatalogContext = () => {
    const context = useContext(CatalogContext);
    if (!context) {
        throw new Error("useCatalogContext must be used within a CatalogProvider");
    }
    return context;
};