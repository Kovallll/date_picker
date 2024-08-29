import path from 'path'
import { defineConfig } from 'vite'
import viteTsconfigPaths from 'vite-tsconfig-paths'

import react from '@vitejs/plugin-react'

export default defineConfig({
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src/*'),
            '@types': path.resolve(__dirname, 'src/types'),
            '@components/*': path.resolve(__dirname, 'src/components/*'),
            '@assets/*': path.resolve(__dirname, 'src/assets/*'),
            '@constants': path.resolve(__dirname, 'src/constants'),
            '@providers/*': path.resolve(__dirname, 'src/providers/*'),
            '@styles/*': path.resolve(__dirname, 'src/styles/*'),
            '@utils/*': path.resolve(__dirname, 'src/utils/*'),
            '@hooks': path.resolve(__dirname, 'src/hooks'),
        },
    },
    plugins: [react(), viteTsconfigPaths()],
    server: {
        fs: {
            cachedChecks: false,
        },
    },
})
