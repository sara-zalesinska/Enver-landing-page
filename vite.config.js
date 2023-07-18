import { fileURLToPath, URL } from 'node:url';

export default {
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./', import.meta.url)),
      '@styles': fileURLToPath(new URL('./styles/', import.meta.url)),
      '@scripts': fileURLToPath(new URL('./scripts/', import.meta.url)),
    },
  },
};
