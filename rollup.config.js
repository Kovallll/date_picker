import path from 'path'
import jsx from 'rollup-plugin-jsx'

import alias from '@rollup/plugin-alias'
import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import image from '@rollup/plugin-image'
import json from '@rollup/plugin-json'
import resolve from '@rollup/plugin-node-resolve'
import terser from '@rollup/plugin-terser'

const devMode = process.env.NODE_ENV === 'development'

export default {
    input: 'src/index.tsx',
    watch: {
        include: './src/**',
        clearScreen: false,
    },
    output: {
        file: 'dist/bundle.min.js',
        format: 'iife',
        plugins: [terser()],
    },
    plugins: [
        resolve(),
        commonjs(),
        image(),
        json(),
        jsx({ factory: 'React.createElement' }),
        babel({ exclude: 'node_modules/**' }),
        alias({
            '@': path.resolve(__dirname, 'src/*'),
        }),
    ],
    sourceMap: devMode ? 'inline' : false,
}
