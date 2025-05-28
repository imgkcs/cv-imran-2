import { defineConfig } from 'astro/config';

// https://astro.build/config
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  vite: {
    ssr: {
      external: ['svgo'],
    },
  },
  site: 'https://imgkcs.github.io/cv-imran-2',
  base: '/cv-imran-2/',
});
