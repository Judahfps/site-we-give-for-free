// import { defineConfig } from 'vite';

// export default defineConfig({
//   build: {
//     outDir: 'dist',
//   }
// });

import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: './',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      }
    }
  }
});