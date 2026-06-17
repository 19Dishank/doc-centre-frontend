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

    allowedHosts: [
      ".192.168.100.166.nip.io",
    ],

    proxy: {
      "/api": {
        target: 'https://7qzvqdrz-3000.inc1.devtunnels.ms',
        changeOrigin: true
      },
    },
  },
});