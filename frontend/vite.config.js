// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // ...other config settings
  build: {
    rollupOptions: {
      external: ['react-router-dom'],
    },
  },
});
