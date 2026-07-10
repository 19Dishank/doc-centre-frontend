import { toastNotification } from "./toastNotification";

export function handleHttpError(status, data) {
  const serverMessage = data?.message || data?.error || data?.errors[0]?.msg;

  switch (status) {
    case 400:
      toastNotification(serverMessage || "Bad request. Please check your input.", "error");
      break;

    case 403:
      toastNotification(serverMessage || "You don't have permission to perform this action.", "error");
      break;

    case 404:
      toastNotification(serverMessage || "The requested resource was not found.", "error");
      break;

    case 405:
      toastNotification(serverMessage || "This action is not allowed.", "error");
      break;

    case 408:
      toastNotification(serverMessage || "Request timed out. Please try again.", "error");
      break;

    case 409:
      toastNotification(serverMessage || "There was a conflict with the current state of the resource.", "error");
      break;

    case 410:
      toastNotification(serverMessage || "This resource is no longer available.", "error");
      break;

    case 413:
      toastNotification(serverMessage || "The uploaded data is too large.", "error");
      break;

    case 415:
      toastNotification(serverMessage || "Unsupported file or data type.", "error");
      break;

    case 422:
      toastNotification(serverMessage || "Validation failed. Please check your input.", "error");
      break;

    case 429:
      toastNotification(serverMessage || "Too many requests. Please slow down and try again shortly.", "error");
      break;

    case 502:
      toastNotification(serverMessage || "Bad gateway. Please try again later.", "error");
      break;

    case 503:
      toastNotification(serverMessage || "Service unavailable. Please try again later.", "error");
      break;

    case 504:
      toastNotification(serverMessage || "Gateway timeout. Please try again later.", "error");
      break;

    default:
      toastNotification(serverMessage || `Unexpected error occurred (status ${status}).`, "error");
      break;
  }
}
