import { io } from "socket.io-client";

export const socket = io(import.meta.env.VITE_SOCKET_URL, {
  autoConnect: false,
  transports: ["websocket"],
});

socket.on("connect", () => {
  console.log("Socket connected:", socket.id);
});

socket.on("disconnect", (reason) => {
  console.log("Socket disconnected:", reason);
});

socket.on("connect_error", (error) => {
  console.error("Socket connection error:", error.message);
});

export const connectSocket = (accessToken) => {
  socket.auth = { token: accessToken };

  if (!socket.connected) {
    socket.connect();
  }
};

export const reconnectSocket = (newAccessToken) => {
  socket.auth = { token: newAccessToken };

  if (socket.connected) {
    socket.disconnect();
  }

  socket.connect();
};

export const disconnectSocket = () => {
  socket.disconnect();
};
