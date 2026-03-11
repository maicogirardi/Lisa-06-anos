import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
	base: "/Lisa-06-anos/",
	logLevel: 'error',
	plugins: [
		react(),
	],
})