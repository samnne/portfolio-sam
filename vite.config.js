import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from "@tailwindcss/vite"

export default defineConfig({
  base: "/",
  plugins: [
    react(),
    // Automatically generate .br (Brotli) or .gz (Gzip) files
    tailwindcss()
  ],
  preview: {
    allowedHosts: ['.up.railway.app', 'samechefu.com', '.samechefu.com'],
  },
  build: {
    // Minify code using Esbuild (fastest and highly efficient)
    minify: 'esbuild',
    // Remove console logs and debuggers in production to save bytes
    esbuild: {
      drop: ['console', 'debugger'],
    },
    assetsInlineLimit: 8192,
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Group all node_modules (including React) into a single vendor chunk
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
      },
    },
  },
});
