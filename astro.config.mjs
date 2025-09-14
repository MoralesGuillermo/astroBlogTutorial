// @ts-check
import { defineConfig } from 'astro/config';
import icon from "astro-icon";
import react from '@astrojs/react';

import sitemap from "@astrojs/sitemap";

import tailwindcss from "@tailwindcss/vite";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  site: "https://astro-blog-cip.netlify.app",
  integrations: [icon(), sitemap(), react()],

  vite: {
    plugins: [tailwindcss()]
  },

  adapter: netlify()
});