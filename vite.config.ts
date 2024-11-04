import { defineConfig } from 'vite';
import { crx, defineManifest } from '@crxjs/vite-plugin';

const manifest = defineManifest({
  manifest_version: 3,
  name: '売り切れを非表示',
  version: '0.1',
  description: '鉄道部品店の一覧から売り切れの商品を非表示にする拡張機能',
//   icons: {
//     '16': 'images/icon-16.png',
//     '32': 'images/icon-32.png',
//     '48': 'images/icon-48.png',
//     '128': 'images/icon-128.png',
//   },
  action: {
    default_popup: 'index.html',
  },
  // content_scripts: [
  //   {
  //     js: ['scripts/content.ts'],
  //     matches: [
  //       'https://developer.chrome.com/docs/extensions/*',
  //       'https://developer.chrome.com/docs/webstore/*',
  //     ]
  //   }
  // ],
});

export default defineConfig({
  plugins: [crx({ manifest })],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
  server: {
    port: 5173,
    strictPort: true,
    hmr: {
      port: 5173,
    },
  },
});
