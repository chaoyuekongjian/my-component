import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: { // 别名映射
      "@": fileURLToPath(new URL("./src", import.meta.url))
    }
  }
});