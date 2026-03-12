import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import path from "path"

export default defineConfig({
	base: "/Lisa-06-anos/",
	logLevel: "error",

	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
		},
	},

	plugins: [
		react(),
	],
})