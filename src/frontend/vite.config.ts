import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      app: "/src/app/",
      entities: "/src/entities/",
      features: "/src/features/",
      pages: "/src/pages/",
      shared: "/src/shared/",
      widgets: "/src/widgets/",
    },
  },
  server: {
    port: 3000,
    host: "0.0.0.0",
    proxy: {
      '/api': {
        target: 'https://98grm2t1-8000.euw.devtunnels.ms',
        changeOrigin: true,
      },
      '/media': {
        target: 'https://98grm2t1-8000.euw.devtunnels.ms',
        changeOrigin: true,
      },
    },
  },
});
