import { defineConfig } from "vite";
import { svelte } from '@sveltejs/vite-plugin-svelte';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte({ configFile: 'svelte.config.js' })],
  build: {
    outDir: "dist",
    emptyOutDir: false,
    sourcemap: true,

    lib: {
      entry: "src/main.ts",
      formats: ["es", "cjs"],
    },
  },
});
