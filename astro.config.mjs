// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import vue from '@astrojs/vue';

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  redirects: {
      "/guides": "/guides/intro",
      "/log": "/guides/log/history",
      "/guides/log": "/guides/log/history",
      "/help": "/guides/help/loginhelp",
      "/guides/help": "/guides/help/loginhelp",
  },
  integrations: [starlight({
      title: '灵动Minecraft文档库',
      components: {
          SiteTitle: './src/components/SiteTitle.astro',
          Header: './src/components/Header.astro',
      },
      // social: {
      //     github: 'https://github.com/withastro/starlight',
      // },
      favicon: '/images/favicon.svg',
      logo: {
          light: './src/assets/lightingMCreverse_dark.webp',
          dark: './src/assets/lightingMCreverse.webp',
      },
      sidebar: [
          {
              label: '导言',
              autogenerate: { directory: 'guides/intro' },
          },
          {
              label: '帮助',
              items: [
                  { label: '如何加入灵动MC', slug: 'guides/help/loginhelp' },
                  { label: '好友系统', slug: 'guides/help/friendsystem' },
                  { label: '位置及传送系统', slug: 'guides/help/teleportsystem' },
              ],
          },
          {
              label: '日志',
              autogenerate: { directory: 'guides/log' },
          },
      ],
      }), vue(), react()],

  vite: {
    plugins: [tailwindcss()],
  },
});