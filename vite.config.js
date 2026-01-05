import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// Use local source in development if available, otherwise use npm package
const useLocalSource = process.env.USE_LOCAL !== 'false';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      ...(useLocalSource
        ? {
            '@vk-develop/custom-ui': path.resolve(__dirname, '../src/index.js'),
          }
        : {}),
    },
  },
});

