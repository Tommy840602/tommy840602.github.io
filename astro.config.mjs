import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';

export default defineConfig({
  site: 'https://tommy840602.github.io',
  output: 'static',
  integrations: [vue()]
});
