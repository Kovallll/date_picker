import { ThemeProvider } from 'styled-components'

import Cell from '.'

import '@testing-library/jest-dom'
import theme from '@styles/theme'
import { render, screen } from '@testing-library/react'

test('test Cell', async () => {
    const mockFn = jest.fn()
    render(
        <ThemeProvider theme={theme}>
            <Cell children={1} id="" onClickCell={mockFn} />
        </ThemeProvider>
    )
    screen.getByText('1')
})
