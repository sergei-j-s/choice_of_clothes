import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    server: {
        host: true,
        port: '8085',
        hot: true
    },
    plugins: [vue()],
})
