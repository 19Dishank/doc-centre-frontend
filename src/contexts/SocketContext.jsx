import { createContext, useContext, useEffect, useMemo } from "react";
import { io } from "socket.io-client";
import { useAuthContext } from "./AuthContext";
import { getTokens } from "@/helper/tokens";

const SocketContext = createContext();

export const SocketProvider = ({ children }) => {
    const { isAuthenticated } = useAuthContext();
    const { accessToken } = getTokens();
    
    const socket = useMemo(() => {
        return io(import.meta.env.VITE_SOCKET_URL, {
            autoConnect: false,
            transports: ["websocket"],
            auth: {
                token: accessToken,
            },
        });
    }, []);

    useEffect(() => {
        
        if (isAuthenticated) {
            if (!socket.connected) {
                socket.connect();
            }
        } else {
            if (socket.connected) {
                socket.disconnect(); 
            }
        }

        socket.on("hello", (message) => {
                        socket.emit("helloResponse", `Hello from client in response i have received! ${message}`);
        });

        socket.on("connect_error", (err) => {
                    });

        return () => {
            socket.off("connect");
            socket.off("connect_error");
            socket.off("hello");
            socket.off("helloResponse");
        };
    }, [isAuthenticated, socket]);

    const value = { socket };

    return (
        <SocketContext.Provider value={value}>
            {children}
        </SocketContext.Provider>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useSocketContext = () => useContext(SocketContext);