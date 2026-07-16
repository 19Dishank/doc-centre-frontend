import { io } from "socket.io-client";
import { getTokens, setTokens } from "./tokens";
import axios from "axios";

export const socket = io(import.meta.env.VITE_SOCKET_URL, {
  autoConnect: false,
  transports: ["websocket"],
});

const isTokenExpired = (token) => {
  if (!token) return true;
  try {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
      window.atob(base64)
        .split('')
        .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
        .join('')
    );
    const { exp } = JSON.parse(jsonPayload);
    return Date.now() >= exp * 1000;
  } catch {
    return true;
  }
};

let refreshTimeoutId = null;

socket.on("connect_error", async (error) => {
  console.error("Socket connection error:", error.message);
  if (error.message === "Access token expired" || error.message === "Authentication error") {
    // Clear any pending refresh timeouts
    if (refreshTimeoutId) {
      clearTimeout(refreshTimeoutId);
    }

    // Check if another component (like Axios) has already refreshed the token
    const currentToken = getTokens().accessToken;
    if (currentToken && !isTokenExpired(currentToken)) {
      socket.auth = { token: currentToken };
      socket.connect();
      return;
    }

    // Wait 1.5 seconds to let Axios handle the token refresh first
    refreshTimeoutId = setTimeout(async () => {
      if (socket.connected) return;

      // Check if localStorage has been updated in the meantime
      const freshToken = getTokens().accessToken;
      if (freshToken && !isTokenExpired(freshToken)) {
        socket.auth = { token: freshToken };
        socket.connect();
        return;
      }

      // If token is still expired, trigger the refresh
      try {
        const { refreshToken } = getTokens();
        if (!refreshToken) return;

        const response = await axios.post(
          `${import.meta.env.VITE_API_URL}/auth/refresh-access-token`,
          { refreshToken }
        );
        const { accessToken, refreshToken: newRefreshToken } = response.data.data;
        setTokens(accessToken, newRefreshToken);

        socket.auth = { token: accessToken };
        socket.connect();
      } catch (refreshError) {
        console.error("Failed to refresh token on socket connect error:", refreshError);
      }
    }, 1500);
  }
});

export const connectSocket = (accessToken) => {
  const token = accessToken || getTokens().accessToken;
  socket.auth = { token };

  if (!socket.connected) {
    socket.connect();
  }
};

export const reconnectSocket = (newAccessToken) => {
  const token = newAccessToken || getTokens().accessToken;
  socket.auth = { token };

  // Always call disconnect first to clear any pending connection attempts
  socket.disconnect();
  socket.connect();
};

export const disconnectSocket = () => {
  socket.disconnect();
};

