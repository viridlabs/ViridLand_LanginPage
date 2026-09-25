// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://viridlabs.github.io',
  base: '/ViridLand_LanginPage',
  vite: {
    plugins: [tailwindcss()]
  }
});