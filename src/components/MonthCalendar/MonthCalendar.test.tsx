import { ThemeProvider } from 'styled-components'

import MonthCalendar from '.'

import '@testing-library/jest-dom'
import theme from '@styles/theme'
import { render, screen } from '@testing-library/react'

test('test MonthCalendar', async () => {
    const mockFn = jest.fn()
    render(
        <ThemeProvider theme={theme}>
            <MonthCalendar handleSelectMonth={mockFn} month={1} />
        </ThemeProvider>
    )
    screen.getByText('February')
})
