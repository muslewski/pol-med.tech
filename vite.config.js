import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/pol-med.tech/",
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
  },
});
