import { ThemeProvider } from 'styled-components'

import { SwapButton } from '.'

import '@testing-library/jest-dom'
import theme from '@styles/theme'
import { render, screen } from '@testing-library/react'

test('test SwapButton render', () => {
    const mockFn = jest.fn()
    render(
        <ThemeProvider theme={theme}>
            <SwapButton alt="icon" src="" onClick={mockFn} />
        </ThemeProvider>
    )
    const image = screen.getByAltText('icon')
    expect(image).toBeInTheDocument()
})
