/* eslint-disable react-refresh/only-export-components */
import { fetchMe } from "@/api/user";
import { getTokens } from "@/helper/tokens";
import { createContext, useContext, useEffect, useMemo, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const { accessToken } = getTokens();
    const [isAuthenticated, setIsAuthenticated] = useState(!!accessToken);
    const [responseData, setResponseData] = useState(null);

    const { user, userNotificationPreferences } = responseData || {};

    const permissions = useMemo(() => (user?.role?.permissions || []), [user]);
    const [loading, setLoading] = useState(isAuthenticated);

    const getUserDetails = async () => {
        setLoading(true);
        try {
            const res = await fetchMe();
            setResponseData(res.data);
        } catch (error) {
            console.error("Error fetching user details:", error);
            setResponseData(null);
        } finally {
            setLoading(false);
        }
    }

    const value = useMemo(() => (
        { isAuthenticated, setIsAuthenticated, user, userNotificationPreferences, permissions, loading, getUserDetails }
    ), [isAuthenticated, user, userNotificationPreferences, permissions, loading]);

    useEffect(() => {
        if (!isAuthenticated) return;
        // eslint-disable-next-line react-hooks/set-state-in-effect
        getUserDetails();
    }, [isAuthenticated]);

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;

export const useAuthContext = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuthContext must be used within an AuthProvider");
    }
    return context;
};