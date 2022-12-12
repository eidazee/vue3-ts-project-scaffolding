import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/

// noinspection JSUnusedGlobalSymbols
export default defineConfig({
	base: "/",
	plugins: [vue()],
	resolve: {
		alias: {
			"@": fileURLToPath(new URL("./src", import.meta.url)),
		},
	},
	css: {
		devSourcemap: true,
	},
	build: {
		target: "esnext",
		minify: "esbuild",
		sourcemap: false,
	},
});
