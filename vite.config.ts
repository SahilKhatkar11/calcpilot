import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import { defineConfig } from 'vite';

export default defineConfig(({ command }) => {
  // If running local development server (command === 'serve'), use relative './'
  // When building for GitHub Pages, use BASE_PATH if set by actions/configure-pages, or default to repository path '/calcpilot/'
  const isDev = command === 'serve';
  const rawBasePath = process.env.BASE_PATH;
  const base = isDev
    ? './'
    : (rawBasePath !== undefined
        ? (rawBasePath ? `${rawBasePath}/`.replace(/\/+/g, '/') : '/')
        : '/calcpilot/');

  return {
    base,
    plugins: [
      react(),
      tailwindcss(),
      {
        name: 'github-pages-helper',
        closeBundle() {
          try {
            const distDir = path.resolve(__dirname, 'dist');
            const indexPath = path.resolve(distDir, 'index.html');
            const notFoundPath = path.resolve(distDir, '404.html');
            const noJekyllPath = path.resolve(distDir, '.nojekyll');

            // Generate 404.html for GitHub Pages SPA routing fallback
            if (fs.existsSync(indexPath) && !fs.existsSync(notFoundPath)) {
              fs.copyFileSync(indexPath, notFoundPath);
            }

            // Ensure .nojekyll is always in dist
            if (!fs.existsSync(noJekyllPath)) {
              fs.writeFileSync(noJekyllPath, '');
            }
          } catch (e) {
            console.warn('GitHub pages helper post-build error:', e);
          }
        },
      },
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
