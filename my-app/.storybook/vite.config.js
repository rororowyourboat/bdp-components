import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  resolve: {
    alias: {
      'next/image': resolve(__dirname, './mocks/next-image.js'),
      'next/link': resolve(__dirname, './mocks/next-link.js'),
    },
  },
  define: {
    'process.env': {},
  },
});