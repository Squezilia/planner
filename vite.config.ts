import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import VueRouter from "unplugin-vue-router/vite";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import vercel from "vite-plugin-vercel";

// https://vite.dev/config/
export default defineConfig({
	server: {
		port: process.env.PORT as unknown as number,
	},
	plugins: [vercel(), VueRouter({}), vue(), tailwindcss()],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
		},
	},
});
