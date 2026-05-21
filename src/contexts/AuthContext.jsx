/* eslint-disable react-refresh/only-export-components */
import { fetchMe } from "@/api/user";
import { getTokens } from "@/helper/tokens";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const { accessToken } = getTokens();
    const [isAuthenticated, setIsAuthenticated] = useState(!!accessToken);
    const [user, setUser] = useState(null);
    const permissions = user?.role?.permissions || [];
    const [loading, setLoading] = useState(false);

    const getUserDetails = async () => {
        setLoading(true);
        try {
            const res = await fetchMe();
            setUser(res.data.userData);
        } catch (error) {
            console.error("Error fetching user details:", error);
            setUser(null);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        if (!isAuthenticated) return;
        // eslint-disable-next-line react-hooks/set-state-in-effect
        getUserDetails();
    }, [isAuthenticated]);

    return (
        <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, user, setUser, permissions, loading, getUserDetails }}>
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