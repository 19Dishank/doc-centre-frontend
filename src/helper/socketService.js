import { io } from "socket.io-client";

export const socket = io(import.meta.env.VITE_SOCKET_URL, {
  autoConnect: false,
  transports: ["websocket"],
});

let documentDeletedListenerAttached = false;

const handleDocumentDeleted = (event) => {
  };

socket.onAny((eventName, ...args) => {
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
    // ensureDocumentDeletedListener();
});

socket.on("disconnect", (reason) => {
  });

socket.on("connect_error", (error) => {
  console.error("Socket connection error:", error.message);
});

export const connectSocket = (accessToken) => {
  socket.auth = { token: accessToken };
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
