import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslint()],
  server: {
    proxy: {
      "/api": {
        target: "https://kvbmsqxhfbgkllamshdx.supabase.co",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
      cors: false,
    },
  },
});
