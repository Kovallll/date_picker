import { ThemeProvider } from 'styled-components'

import DateBar from '.'

import '@testing-library/jest-dom'
import theme from '@styles/theme'
import { fireEvent, render, screen } from '@testing-library/react'

test('loads and displays greeting', async () => {
    render(
        <ThemeProvider theme={theme}>
            <DateBar />
        </ThemeProvider>
    )

    const year = screen.getByText('2024')
    fireEvent.click(year)
    screen.getByText('2025')
    fireEvent.click(year)
    const january = screen.getByText('September')
    fireEvent.click(january)
    screen.getByText('February')
})
