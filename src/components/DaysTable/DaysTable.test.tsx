import { ThemeProvider } from 'styled-components'

import DaysTable from '.'

import '@testing-library/jest-dom'
import { calendarInfo } from '@service'
import theme from '@styles/theme'
import { render, screen } from '@testing-library/react'

test('check DayTable childCount', () => {
    const mockFn = jest.fn()
    render(
        <ThemeProvider theme={theme}>
            <DaysTable
                firstInputDate=""
                handleChangeError={mockFn}
                handleChangeFirstDateInput={mockFn}
                handleChangeSecondDateInput={mockFn}
                handleKeyboardChange={mockFn}
                isKeyboardChange={false}
                secondInputDate=""
                startDay={0}
                weekDays={[]}
                activeCellId={''}
                handleChangeActiveCellId={mockFn}
                calendarData={new calendarInfo()}
            />
        </ThemeProvider>
    )

    const week = screen.getAllByRole('button')[0].parentElement
    expect(week?.childElementCount).toBe(7)
    const month = week?.parentElement
    expect(month?.childElementCount).toBe(6)
})
