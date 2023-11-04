import { defineConfig } from "vite";
import { svelte } from '@sveltejs/vite-plugin-svelte';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte({ configFile: 'svelte.config.js' }),
    dts({
      tsconfigPath: 'tsconfig.lib.json',
      rollupTypes: true,
    }),
  ],
  build: {
    outDir: "dist",
    emptyOutDir: false,
    sourcemap: true,

    lib: {
      name: "mmvc",
      entry: "src/main.ts",
      formats: ["es", "cjs", "umd"],
    },
  },
});
