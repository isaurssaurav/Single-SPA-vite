import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        index: "./index.html",
        "root-config": "./main.js",
      },
      output: {
        dir: "dist",
        entryFileNames: "[name].js",
      },
    },
  },
});
