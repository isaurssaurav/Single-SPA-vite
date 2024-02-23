import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig(({ mode }) => {
  const input = {};
  let preserveEntrySignatures = true;
  let assetFileNames;
  let output = {};

  if (mode === "standalone") {
    console.log("Standalone build.");

    input["index"] = "index.html";
  } else {
    console.log("SPA build.");

    input["spa"] = "src/spa.js";
    preserveEntrySignatures = "exports-only";
    assetFileNames = "assets/[name][extname]";
    output = {
      dir: "dist",
      assetFileNames,
      entryFileNames: "[name].js",
    };
  }

  return {
    plugins: [vue()],
    build: {
      rollupOptions: {
        input,
        preserveEntrySignatures,
        output,
      },
    },
  };
});
