export const SOCKET_EVENTS = {
  // notification events
  NOTIFICATION_RECEIVED: "notification:received", //
  NOTIFICATION_READ: "notification:read", //
  NOTIFICATION_READ_ALL: "notification:read-all", //
  NOTIFICATION_UNREAD_COUNT: "notification:unread-count", //

  // document events
  DOCUMENT_UPLOADED: "document:uploaded", //
  DOCUMENT_TRASHED: "document:trashed", //
  DOCUMENT_DELETED: "document:deleted", //
  DOCUMENT_RESTORED: "document:restored", //

  // folder events
  FOLDER_DELETED: "folder:deleted", //
  FOLDER_TRASHED: "folder:trashed", //
  FOLDER_RESTORED: "folder:restored", //
  FOLDER_CREATED: "folder:created", //

  // role events
  ROLE_CHANGED: "role:updated",
};
