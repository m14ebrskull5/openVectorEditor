// vite.config.js
// import { defineConfig } from "vite";
// import { config } from "./vite.config";

// const { config } = vite
// config.build = {
//   ...config.build,
//   lib: undefined, //remove the lib build so we just get the demo build
//   outDir: "demo/dist",
// };
// export default defineConfig(config);
// vite.config.js
import fs from "node:fs";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as esbuild from "esbuild";
import path, { resolve } from "node:path";

const sourceJSPattern = /\/src\/.*\.js$/;
const rollupPlugin = (matchers) => ({
  name: "js-in-jsx",
  load(id) {
    if (matchers.some(matcher => matcher.test(id))) {
      const file = fs.readFileSync(id, { encoding: "utf-8" });
      return esbuild.transformSync(file, { loader: "jsx" });
    }
  }
});


export default defineConfig({
  plugins: [
    react()
  ],
  define: {
    'process.platform': {}
  },
  build: {
    target: "es2015",
    lib: undefined, //remove the lib build so we just get the demo build
    outDir: "demo/dist",
    rollupOptions: {
      plugins: [
        rollupPlugin([sourceJSPattern])
      ],
    },
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        ".js": "jsx",
      },
    },
  },
  resolve: {
    alias: {
      // "@teselagen/range-utils": path.resolve(__dirname, "../tg-oss/packages/range-utils/src"),
      // "@teselagen/sequence-utils": path.resolve(__dirname, "../tg-oss/packages/sequence-utils/src"),
      // "@teselagen/bio-parsers": path.resolve(__dirname, "../tg-oss/packages/bio-parsers/src"),
    }
  },
  esbuild: {
    loader: "jsx",
    include: [sourceJSPattern],
    exclude: [],
  },
});
