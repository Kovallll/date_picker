import React from 'react'
import { ThemeProvider } from 'styled-components'

import theme from '../src/styles/theme'

export default {
    decorators: [
        (Story) => (
            <ThemeProvider theme={theme}>
                <Story />
            </ThemeProvider>
        ),
    ],
}
