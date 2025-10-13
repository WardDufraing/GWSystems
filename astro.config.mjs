import { defineConfig } from 'astro/config';
import { resolve } from 'path';

export default defineConfig({
  site: 'https://madebywd.be',
  scopedStyleStrategy: 'where',
  vite: {
    resolve: {
      alias: {
        '@components': resolve('./src/components'),
        '@layouts': resolve('./src/layouts'),
        '@styles': resolve('./src/styles'),
        '@content': resolve('./src/content'),
      }
    }
  }
});
