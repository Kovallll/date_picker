import { useState } from 'react'
import { ThemeProvider } from 'styled-components'

import MonthCalendar from '.'

import '@testing-library/jest-dom'
import theme from '@styles/theme'
import { fireEvent, render, screen } from '@testing-library/react'

const TestMonthCalendar = () => {
    const [isFirstMonth, setIsFirstMonth] = useState(true)
    const handleSelectMonth = () => {
        setIsFirstMonth((prev) => !prev)
    }

    const month = isFirstMonth ? 1 : 2

    return <MonthCalendar handleSelectMonth={handleSelectMonth} month={month} />
}

test('test MonthCalendar', () => {
    render(
        <ThemeProvider theme={theme}>
            <TestMonthCalendar />
        </ThemeProvider>
    )
    const firstMonth = screen.getByText('January')
    const secondMonth = screen.getByText('February')

    const stylesFirstMonth = window.getComputedStyle(firstMonth)
    expect(stylesFirstMonth.backgroundColor).toBe('rgb(194, 236, 235)')

    fireEvent.click(secondMonth)
    const stylesSecondMonth = window.getComputedStyle(secondMonth)
    expect(stylesSecondMonth.backgroundColor).toBe('rgb(194, 236, 235)')
})
