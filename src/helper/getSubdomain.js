export const getSubdomain = () => {
  const host = window.location.hostname;

  const parts = host.split(".");

  if (parts.length <= 1) {
    return null;
  }

  return parts[0];
};