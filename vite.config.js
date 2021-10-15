import { defineConfig } from 'vite';
import { createVuePlugin } from 'vite-plugin-vue2';
import { createSvgPlugin } from 'vite-plugin-vue2-svg';

import path from 'path';

export default defineConfig({
  plugins: [createVuePlugin(), createSvgPlugin()],
  base: '/',
  publicDir: 'public',
  server: {
    port: 8080,
    proxy: {
      '/api/*': {
        target: 'http://localhost:5000',
      },
    },
  },
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, 'src'),
      },
    ],
  },
  build: {
    outDir: 'docs',
    assetsDir: '',
    sourcemap: true,
  },
});
