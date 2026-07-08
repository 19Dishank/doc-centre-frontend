import { emailRegex, slugRegex } from "@/constants";

export const validateField = (name, value) => {
  switch (name) {
    case "firstName":
      if (!value.trim()) return "First name is required";
      if (value.length < 2 || value.length > 50) return "First name must be between 2 and 50 characters";
      return "";

    case "lastName":
      if (!value.trim()) return "Last name is required";
      if (value.length < 2 || value.length > 50) return "Last name must be between 2 and 50 characters";
      return "";

    case "email":
      if (!value.trim()) return "Email is required";
      if (!emailRegex.test(value)) return "Please provide a valid email";
      return "";

    case "orgName":
      if (!value.trim()) return "Organization name is required";
      if (value.length < 2 || value.length > 100) return "Organization name must be between 2 and 100 characters";
      return "";

    case "orgSlogan":
      if (!value.trim()) return "Organization slogan is required";
      if (value.length > 200) return "Organization slogan cannot exceed 200 characters";
      return "";

    case "slug":
      if (!value.trim()) return "Tenant slug is required";
      if (value.length < 3 || value.length > 50) return "Slug must be between 3 and 50 characters";
      if (!slugRegex.test(value)) return "Slug can only contain lowercase letters, numbers, and hyphens";
      return "";

    case "logo":
      if (!value) return "Organization logo is required";
      return "";

    default:
      return "";
  }
};

export const normalizeSlug = (value) => {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9-]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-+|-+$/g, "");
};
