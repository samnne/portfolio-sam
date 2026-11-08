import { defineConfig } from 'vite';
import react from '@vitejs/react-refresh';
import compression from 'vite-plugin-compression2';

export default defineConfig({
  plugins: [
    react(),
    
    compression({ algorithm: 'brotliCompress', exclude: [/\.(br|gz)$/] })
  ],
  build: {
   
    minify: 'esbuild',
    esbuild: {
      drop: ['console', 'debugger'],
    },
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react')) return 'vendor-react';
            return 'vendor'; 
          }
        },
      },
    },
  },
});
