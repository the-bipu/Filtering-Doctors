// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // ...other config settings
  plugins: [react()],
  resolve: {
    alias: {
      'react-router-dom': require.resolve('react-router-dom'),
    },
  },
});
