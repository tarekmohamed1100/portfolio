import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base "./" => relative asset paths, so the build works on GitHub Pages
// (project sites), Netlify, Vercel or any sub-folder without changes.
export default defineConfig({
  base: "./",
  plugins: [react()],
});
