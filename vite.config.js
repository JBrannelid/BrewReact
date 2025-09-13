import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import compression from "vite-plugin-compression";

export default defineConfig({
  base: "/",
  // Note: Remove assets that are not needed before production build
  assetsInclude: [
    "**/*.woff",
    "**/*.woff2",
    "**/*.png",
    "**/*.jpg",
    "**/*.jpeg",
    "**/*.svg",
    "**/*.gif",
    "**/*.webp",
  ],
  plugins: [
    react({
      jsxRuntime: "automatic",
    }),
    tailwindcss(),
    // Gzip compression
    compression({
      algorithm: "gzip",
      ext: ".gz",
      filter: /\.(js|css|html|svg|webp)$/i,
      threshold: 1024,
      deleteOriginFile: false,
      compressionOptions: { level: 6 },
      verbose: true,
      disable: false,
    }),
    // Brotli compression
    compression({
      algorithm: "brotliCompress",
      ext: ".br",
      filter: /\.(js|css|html|svg|json|webp)$/i,
      compressionOptions: { level: 4 },
      threshold: 1024,
      deleteOriginFile: false,
      verbose: true,
      disable: false,
    }),
  ],
  // Dev server configuration
  server: {
    middlewareMode: false,
    cors: true,
    hmr: true,
    compress: true,
  },
  // Build configuration
  build: {
    target: "esnext",
    assetsDir: "assets",
    rollupOptions: {
      output: {
        assetFileNames: "assets/[name]-[hash][extname]",
        manualChunks: {
          "vendor-react": ["react", "react-dom"],
          "vendor-router": ["react-router"],
          "vendor-forms": ["react-hook-form"],
        },
      },
    },
    cssCodeSplit: true,
    reportCompressedSize: false,
    chunkSizeWarningLimit: 1000,
    minify: "esbuild",
  },
});
