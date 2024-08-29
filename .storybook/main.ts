import { mergeConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

import type { StorybookConfig } from '@storybook/react-vite'
/** @type { import('@storybook/react-vite').StorybookConfig } */

const config: StorybookConfig = {
    framework: {
        name: '@storybook/react-vite',
        options: {},
    },
    stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: [
        '@storybook/addon-onboarding',
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@chromatic-com/storybook',
        '@storybook/addon-interactions',
    ],
    viteFinal: async (config) => {
        return mergeConfig(config, {
            plugins: [tsconfigPaths()],
        })
    },

    docs: {
        autodocs: true,
    },
}

export default config
