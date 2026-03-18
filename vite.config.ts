import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import compression from "vite-plugin-compression";

export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    compression({
      algorithm: 'gzip',
      ext: '.gz',
    }),
    compression({
      algorithm: 'brotliCompress',
      ext: '.br',
    }),
  ],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  server: {
    host: true,
    port: 8080,
    hmr: {
      overlay: false,
    },
  },

  esbuild: {
    drop: mode === "production" ? ["console", "debugger"] : [],
    legalComments: "none",
  },

  build: {
    target: "es2017",
    minify: "esbuild",
    cssCodeSplit: true,
    sourcemap: false,
    chunkSizeWarningLimit: 700,

    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes("node_modules")) return;

          // React core
          if (
            id.includes("react") ||
            id.includes("react-dom") ||
            id.includes("scheduler")
          ) {
            return "vendor-react";
          }

          // Animation
          if (id.includes("framer-motion")) {
            return "vendor-framer";
          }

          // Icons
          if (id.includes("lucide-react")) {
            return "vendor-icons";
          }

          // React Query
          if (id.includes("@tanstack")) {
            return "vendor-query";
          }

          // Forms
          if (
            id.includes("react-hook-form") ||
            id.includes("@hookform") ||
            id.includes("zod")
          ) {
            return "vendor-form";
          }

          return "vendor";
        },
      },
    },
  },

  optimizeDeps: {
    include: [
      "react",
      "react-dom",
      "framer-motion",
      "lucide-react",
      "@tanstack/react-query",
    ],
  },
}));