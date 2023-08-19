import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

import { join, parse, resolve } from 'path';

function entryPoints(...paths) {
	const entries = paths.map(parse).map(entry => {
		const { dir, base, name, ext } = entry;
		const key = join(dir, name);
		const path = resolve(__dirname, dir, base);
		return [key, path];
	});
  
	const config = Object.fromEntries(entries);
	return config;
}

// https://vitejs.dev/config/
export default defineConfig({
	base: '/match-tracker',
	plugins: [react()],
	resolve: { alias: { './runtimeConfig': './runtimeConfig.browser' } },
	define: {
		'window.global': {},
	},
	build: {
		rollupOptions: {
			input: entryPoints(
				'index.html',
				'404.html',
			),
		},
	}
});
