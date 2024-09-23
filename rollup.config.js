import path from 'path'
import dts from 'rollup-plugin-dts'
import image from 'rollup-plugin-img'
import jsx from 'rollup-plugin-jsx'
import PeerDepsExternalPlugin from 'rollup-plugin-peer-deps-external'
import styles from 'rollup-plugin-styles'
import { terser } from 'rollup-plugin-terser'

import packageJson from './package.json'

import alias from '@rollup/plugin-alias'
import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import resolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'

export default [
    {
        input: 'src/index.tsx',
        output: [
            {
                file: packageJson.main,
                format: 'cjs',
                sourcemap: true,
            },
            {
                file: packageJson.module,
                format: 'esm',
                sourcemap: true,
            },
        ],
        plugins: [
            alias({
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
                entries: [
                    {
                        find: /^@assets\/(.*)/,
                        replacement: path.resolve(__dirname, 'src/assets/$1'),
                    },
                ],
            }),
            PeerDepsExternalPlugin(),
            resolve(),
            commonjs(),
            image({
                output: `dist/images`,
                extensions: /\.(png|jpg|jpeg|gif|svg)$/,
                limit: 8192,
                exclude: 'node_modules/**',
            }),
            json(),
            styles(),
            jsx({ factory: 'React.createElement' }),
            babel({ exclude: 'node_modules/**', babelHelpers: 'bundled' }),
            typescript({ tsconfig: './tsconfig.json' }),
            terser(),
        ],
    },
    {
        input: 'dist/esm/types/index.d.ts',
        output: [{ file: 'dist/index.d.ts', format: 'esm' }],
        plugins: [
            dts.default(),
            alias({
                entries: [
                    {
                        find: /^@types$/,
                        replacement: path.resolve(__dirname, 'src/types'),
                    },
                ],
            }),
        ],
    },
]
