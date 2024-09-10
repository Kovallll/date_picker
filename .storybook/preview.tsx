import React from 'react'

import { ThemeWrapper } from '../src/providers/ThemeProvider'

import type { Preview } from '@storybook/react'

const preview: Preview = {
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
