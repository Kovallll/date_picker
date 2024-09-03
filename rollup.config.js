import path from 'path'
import jsx from 'rollup-plugin-jsx'
import styles from 'rollup-plugin-styles'

import alias from '@rollup/plugin-alias'
import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import image from '@rollup/plugin-image'
import json from '@rollup/plugin-json'
import resolve from '@rollup/plugin-node-resolve'
import terser from '@rollup/plugin-terser'
import typescript from '@rollup/plugin-typescript'

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
        styles(),
        typescript({ tsconfig: './tsconfig.json' }),
        jsx({ factory: 'React.createElement' }),
        babel({ exclude: 'node_modules/**', babelHelpers: 'bundled' }),
        alias({
            '@': path.resolve(__dirname, 'src/*'),
            '@types': path.resolve(__dirname, 'src/types'),
            '@components/*': path.resolve(__dirname, 'src/components/*'),
            '@assets/*': path.resolve(__dirname, 'src/assets/*'),
            '@constants': path.resolve(__dirname, 'src/constants'),
            '@providers/*': path.resolve(__dirname, 'src/providers/*'),
            '@styles/*': path.resolve(__dirname, 'src/styles/*'),
            '@utils/*': path.resolve(__dirname, 'src/utils/*'),
            '@hooks': path.resolve(__dirname, 'src/hooks'),
            '@decorators': path.resolve(__dirname, 'src/decorators'),
            '@service': path.resolve(__dirname, 'src/service'),
        }),
    ],
}
