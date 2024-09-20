import { ThemeProvider } from 'styled-components'

import WeekBar from '.'

import '@testing-library/jest-dom'
import { initialWeekDays } from '@constants'
import theme from '@styles/theme'
import { fireEvent, render, screen } from '@testing-library/react'

test('loads and displays greeting', async () => {
    render(
        <ThemeProvider theme={theme}>
            <WeekBar weekDays={initialWeekDays} />
        </ThemeProvider>
    )

    const sunday = screen.getByText('Su')
    fireEvent.click(sunday)
    screen.getAllByTestId('week-calendar')
})
