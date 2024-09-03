import React from 'react'
import { ThemeProvider } from 'styled-components'

import theme from '../src/styles/theme'

import type { Preview } from '@storybook/react'

const preview: Preview = {
    tags: ['autodocs'],
    decorators: [
        (Story) => (
            <ThemeProvider theme={theme}>
                <Story />
            </ThemeProvider>
        ),
    ],
}

export default preview
