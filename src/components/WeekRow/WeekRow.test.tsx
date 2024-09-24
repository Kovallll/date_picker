import { ThemeProvider } from 'styled-components'

import { WeekRow } from '.'

import '@testing-library/jest-dom'
import { initialWeekDays } from '@constants'
import theme from '@styles/theme'
import { render, screen } from '@testing-library/react'

const minMaxDate = {
    minDate: '',
    maxDate: '',
    minDateCellId: 0,
    maxDateCellId: 0,
    minMonth: 0,
    maxMonth: 0,
    minYear: 0,
    maxYear: 0,
}

const data = [
    { id: '1', day: 1 },
    { id: '2', day: 2 },
    { id: '3', day: 3 },
    { id: '4', day: 4 },
    { id: '5', day: 5 },
    { id: '6', day: 6 },
    { id: '7', day: 7 },
]

const mockFn = jest.fn()
test('test WeekRow active cell', () => {
    render(
        <ThemeProvider theme={theme}>
            <WeekRow
                activeCellId="1"
                data={data}
                firstDayIndex={1}
                handleClickDay={mockFn}
                range={{ start: null, end: 0 }}
                startDay={1}
                weekDays={initialWeekDays}
                minMaxDate={minMaxDate}
            />
        </ThemeProvider>
    )
    const activeCell = screen.getByText('1')
    const notActiveCell = screen.getByText('2')

    const stylesNotActive = window.getComputedStyle(notActiveCell)
    const stylesActive = window.getComputedStyle(activeCell)

    expect(stylesActive.backgroundColor).toBe('rgb(47, 128, 237)')
    expect(stylesNotActive.backgroundColor).toBe('rgb(255, 255, 255)')
})

test('test WeekRow range cells', () => {
    render(
        <ThemeProvider theme={theme}>
            <WeekRow
                activeCellId="1"
                data={data}
                firstDayIndex={1}
                handleClickDay={mockFn}
                range={{ start: 1, end: 3 }}
                startDay={1}
                weekDays={initialWeekDays}
                minMaxDate={minMaxDate}
            />
        </ThemeProvider>
    )
    const startRangeCell = screen.getByText('1')
    const inRangeCell = screen.getByText('2')
    const endRangeCell = screen.getByText('3')

    const stylesStartRangeCell = window.getComputedStyle(startRangeCell)
    const stylesInRangeCell = window.getComputedStyle(inRangeCell)
    const stylesEndRangeCell = window.getComputedStyle(endRangeCell)

    expect(stylesStartRangeCell.backgroundColor).toBe('rgb(130, 179, 244)')
    expect(stylesInRangeCell.backgroundColor).toBe('rgb(234, 242, 253)')
    expect(stylesEndRangeCell.backgroundColor).toBe('rgb(47, 128, 237)')
})
