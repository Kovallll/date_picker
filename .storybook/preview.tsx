import React from 'react'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from '../src/styles/global'
import theme from '../src/styles/theme'

import type { Preview } from '@storybook/react'

const preview: Preview = {
    tags: ['autodocs'],
    decorators: [
        (Story) => (
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <Story />
            </ThemeProvider>
        ),
    ],
}

export default preview
