/// <reference types="vitest" />
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";
import { NodeGlobalsPolyfillPlugin } from "@esbuild-plugins/node-globals-polyfill";
import { NodeModulesPolyfillPlugin } from "@esbuild-plugins/node-modules-polyfill";
import rollupNodePolyFill from "rollup-plugin-node-polyfills";
import * as path from "path";

import { manifest } from "./manifest";

export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return defineConfig({
    plugins: [
      react(),
      VitePWA({
        registerType: "autoUpdate",
        workbox: {
          maximumFileSizeToCacheInBytes: 5000000, // 5 mb
          globPatterns: ["**/*.{js,css,html,ico,png,svg}"],
        },
        manifest: {
          ...manifest,
          name: `${process.env.VITE_COMPANY_NAME}`,
          short_name: `${process.env.VITE_COMPANY_SHORT_NAME}`,
          description: `${process.env.VITE_COMPANY_DESCRIPTION}`,
          shortcuts: [
            {
              name: `${process.env.VITE_COMPANY_NAME}`,
              short_name: `${process.env.VITE_COMPANY_SHORT_NAME}`,
              description: `${process.env.VITE_COMPANY_DESCRIPTION}`,
              url: ".",
              icons: [
                { src: "/assets/media/pwa/logo-192.png", sizes: "192x192" },
              ],
            },
          ],
        },
        devOptions: { enabled: true },
      }),
    ],
    envDir: "./config",
    optimizeDeps: {
      esbuildOptions: {
        define: {
          global: "globalThis",
        },
        plugins: [
          NodeGlobalsPolyfillPlugin({
            process: true,
            buffer: true,
          }),
          NodeModulesPolyfillPlugin(),
        ],
      },
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    build: {
      chunkSizeWarningLimit: 5000, //5 mb
      commonjsOptions: {
        transformMixedEsModules: true,
      },
      rollupOptions: {
        plugins: [rollupNodePolyFill()],
      },
    },
    server: {
      port: 3000,
    },
    test: {
      globals: true,
      environment: "jsdom",
      setupFiles: "./test/setup.ts",
      coverage: {
        reporter: ["text", "json", "html"],
      },
    },
  });
};
