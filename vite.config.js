import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { fileURLToPath } from "url";
import tailwindcss from "@tailwindcss/vite";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [react(), tailwindcss()],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  server: {
    host: true,

    allowedHosts: [".10.155.219.87.nip.io", ".192.168.100.99.nip.io", ".nip.io", "localhost"],

    proxy: {
      "/api": {
        target: "http://aman-alb-529653104.ap-south-1.elb.amazonaws.com",
        changeOrigin: true,
      },
    },
  },
});
