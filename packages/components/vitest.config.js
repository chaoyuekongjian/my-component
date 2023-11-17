import { defineConfig } from "vite";
import { mergeConfig } from "vite";
import viteConfig from "./vite.config";

export default mergeConfig(viteConfig, defineConfig({
  // build: {
  //   rollupOptions: {
  //     input: {
  //       main: "src/main.js",
  //       nested: "src/nested.js",
  //     },
  //   },
  // },
  test: {
    environment: "jsdom"
  }
}));