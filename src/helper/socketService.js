import { io } from "socket.io-client";

export const socket = io(import.meta.env.VITE_SOCKET_URL, {
  autoConnect: false,
  transports: ["websocket"],
});

let documentDeletedListenerAttached = false;

const handleDocumentDeleted = (event) => {
  console.log("document-deleted event received:", event);
};

socket.onAny((eventName, ...args) => {
  console.log(`[socket] event received: ${eventName}`, args);
});

const ensureDocumentDeletedListener = () => {
  if (!documentDeletedListenerAttached) {
    socket.on("document-deleted", handleDocumentDeleted);
    documentDeletedListenerAttached = true;
  }
};

const removeDocumentDeletedListener = () => {
  if (documentDeletedListenerAttached) {
    socket.off("document-deleted", handleDocumentDeleted);
    documentDeletedListenerAttached = false;
  }
};

socket.on("connect", () => {
  console.log("Socket connected:", socket.id, "connected:", socket.connected);
  // ensureDocumentDeletedListener();
});

socket.on("disconnect", (reason) => {
  console.log("Socket disconnected:", reason);
});

socket.on("connect_error", (error) => {
  console.error("Socket connection error:", error.message);
});

export const connectSocket = (accessToken) => {
  socket.auth = { token: accessToken };
  console.log("Connecting socket with auth token:", !!accessToken);
  // ensureDocumentDeletedListener();

  if (!socket.connected) {
    socket.connect();
  }
};

export const reconnectSocket = (newAccessToken) => {
  socket.auth = { token: newAccessToken };
  // ensureDocumentDeletedListener();

  if (socket.connected) {
    socket.disconnect();
  }

  socket.connect();
};

export const disconnectSocket = () => {
  // removeDocumentDeletedListener();
  socket.disconnect();
};
