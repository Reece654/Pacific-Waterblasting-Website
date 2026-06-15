// astro.config.mjs
// tells Astro where the site lives, used by the sitemap to generate correct URLs
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://pacificwaterblasting.co.nz',
  integrations: [sitemap()]
});