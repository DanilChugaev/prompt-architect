import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { VitePWA } from 'vite-plugin-pwa';

// https://vite.dev/config/
export default defineConfig({
  base: '/prompt-architect/',
  plugins: [
    vue(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: '️Prompt Architect',
        short_name: 'Prompt Architect',
        description: 'Creating a prompt for your task',
        display: 'standalone',
        theme_color: '#1e1e1e',
        icons: [
          {
            src: 'hammer-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'hammer-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,png,svg,woff2}'],
      },
    }),
  ],
});
