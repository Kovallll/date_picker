import { ThemeProvider } from 'styled-components'

import YearCalendar from '.'

import '@testing-library/jest-dom'
import theme from '@styles/theme'
import { render, screen } from '@testing-library/react'

test('test YearCalendar', async () => {
    const mockFn = jest.fn()
    render(
        <ThemeProvider theme={theme}>
            <YearCalendar handleSelectYear={mockFn} year={2024} />
        </ThemeProvider>
    )
    screen.getByText('2024')
    screen.getByAltText('next month button')
})
