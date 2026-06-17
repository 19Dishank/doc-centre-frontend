export function getAvatarColors(name) {
  // Generate deterministic color from name
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }

  const color = (hash & 0x00ffffff)
    .toString(16)
    .toUpperCase()
    .padStart(6, "0");

  const bgColor = color;

  // Calculate luminance
  const r = parseInt(bgColor.substring(0, 2), 16);
  const g = parseInt(bgColor.substring(2, 4), 16);
  const b = parseInt(bgColor.substring(4, 6), 16);

  const luminance = (0.299 * r + 0.587 * g + 0.114 * b);

  const textColor = luminance > 186 ? "000000" : "FFFFFF";

  return { bgColor, textColor };
}

// const fullName = `${item.uploadedBy.firstName} ${item.uploadedBy.lastName}`;
// const { bgColor, textColor } = getAvatarColors(fullName);