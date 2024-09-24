import { ThemeProvider } from 'styled-components'

import WeekBar from '.'

import '@testing-library/jest-dom'
import { initialWeekDays } from '@constants'
import theme from '@styles/theme'
import { fireEvent, render, screen } from '@testing-library/react'

test('render week', () => {
    render(
        <ThemeProvider theme={theme}>
            <WeekBar weekDays={initialWeekDays} />
        </ThemeProvider>
    )
    for (let i = 0; i < initialWeekDays.length; i++) {
        expect(screen.getByText(initialWeekDays[i])).toBeInTheDocument()
    }
})

test('render open/close weekCalendar', () => {
    render(
        <ThemeProvider theme={theme}>
            <div>Outside</div>
            <WeekBar weekDays={initialWeekDays} />
        </ThemeProvider>
    )

    expect(screen.queryByText('1')).not.toBeInTheDocument()

    const sunday = screen.getByText('Su')
    fireEvent.click(sunday)

    for (let i = 1; i < 12; i++) {
        expect(screen.queryByText(i)).toBeInTheDocument()
    }

    fireEvent.click(screen.getByText('Outside'))
    expect(screen.queryByText('1')).not.toBeInTheDocument()
})
