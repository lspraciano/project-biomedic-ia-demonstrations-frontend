import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    base: '/biomedic-ia-demonstration-frontend/',
    preview: {
        port: 8001,
        strictPort: true,
    },
    server: {
        port: 8001,
        strictPort: true,
        host: true,
    },
})
