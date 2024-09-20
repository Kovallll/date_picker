import { ThemeProvider } from 'styled-components'

import { SwapButton } from '.'

import '@testing-library/jest-dom'
import theme from '@styles/theme'
import { render } from '@testing-library/react'

test('test SwapButton', async () => {
    render(
        <ThemeProvider theme={theme}>
            <SwapButton alt="" src="" onClick={() => {}} />
        </ThemeProvider>
    )
})
