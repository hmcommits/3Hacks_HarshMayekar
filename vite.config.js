import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'sahayak-logo.svg'],
      manifest: {
        name: 'Sahayak — Trusted Local Services',
        short_name: 'Sahayak',
        description: "Every neighbourhood's trusted services marketplace",
        theme_color: '#FF6B35',
        background_color: '#FAFAF7',
        display: 'standalone',
        orientation: 'portrait',
        icons: [
          {
            src: '/sahayak-logo.svg',
            sizes: '192x192 512x512',
            type: 'image/svg+xml',
            purpose: 'any maskable'
          }
        ]
      }
    })
  ]
});
