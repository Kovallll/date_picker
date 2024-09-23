import { ThemeProvider } from 'styled-components'

import WeekCalendar from '.'

import '@testing-library/jest-dom'
import theme from '@styles/theme'
import { fireEvent, render, screen } from '@testing-library/react'

test('test WeekCalendar', async () => {
    const mockFn = jest.fn()
    render(
        <ThemeProvider theme={theme}>
            <WeekCalendar handleOpenCalendar={mockFn} />
        </ThemeProvider>
    )
    const firstElement = screen.getByText('1')
    fireEvent.click(firstElement)
})
