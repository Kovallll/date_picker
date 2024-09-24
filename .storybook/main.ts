import { mergeConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

import type { StorybookConfig } from '@storybook/react-vite'
/** @type { import('@storybook/react-vite').StorybookConfig } */

const config: StorybookConfig = {
    framework: {
        name: '@storybook/react-vite',
        options: {},
    },
    stories: ['../src/**/stories.@(js|jsx|mjs|ts|tsx)'],
    addons: [
        '@storybook/addon-onboarding',
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@chromatic-com/storybook',
        '@storybook/addon-interactions',
        '@storybook/addon-outline/manager',
        '@storybook/addon-backgrounds/manager',
        '@storybook/addon-measure/manager',
        '@storybook/addon-viewport/manager',
        '@storybook/addon-actions/manager',
        '@storybook/addon-toolbars/manager',
        'storybook/internal/core-events',
        '@storybook/addon-controls/manager',
        '@storybook/instrumenter',
        '@storybook/global',
        'storybook/internal/core-events',
        'polished',
        'react-confetti',
        'filesize',
        'strip-ansi',
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
