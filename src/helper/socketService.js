import { io } from "socket.io-client";

export const socket = io(import.meta.env.VITE_SOCKET_URL, {
  autoConnect: false,
  transports: ["websocket"],
});

export const connectSocket = (accessToken) => {

  if (socket?.connected) {
    return socket;
  }

  socket.auth = {
    token: accessToken
  };

  socket.connect();

  socket.on("connect", () => {
    console.log("Socket connected:", socket.id);

    // socket.on("hello", (message) => {
    //   console.log("Received 'hello' event from server:", message);
    // });   

  });

  socket.on("disconnect", (reason) => {
    console.log("Socket disconnected:", reason);
  });

  socket.on("connect_error", (error) => {
    console.error("Socket error:", error.message);
  });

  return socket;
};

export const disconnectSocket = () => {
  socket?.disconnect();
};
