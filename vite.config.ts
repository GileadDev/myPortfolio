import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// base: './' — относительные пути к ассетам.
// Благодаря этому сборка одинаково работает и на GitHub Pages
// (username.github.io/portfolio/), и на любом другом хостинге в корне.
export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss()],
});
