import React from 'react'

import { ThemeWrapper } from '../src/providers/ThemeProvider'

import type { Preview } from '@storybook/react'
import { themes } from '@storybook/theming'

const preview: Preview = {
    parameters: {
        docs: {
            theme: themes.dark,
        },
    },
    tags: ['autodocs'],
    decorators: [
        (Story) => (
            <ThemeWrapper>
                <Story />
            </ThemeWrapper>
        ),
    ],
}

export default preview
