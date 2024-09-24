import { ThemeProvider } from 'styled-components'

import Cell from '.'

import '@testing-library/jest-dom'
import theme from '@styles/theme'
import { fireEvent, render, screen } from '@testing-library/react'

test('not active cell', () => {
    const mockFn = jest.fn()
    render(
        <ThemeProvider theme={theme}>
            <Cell children={1} id="1" onClickCell={mockFn} />
        </ThemeProvider>
    )
    const cell = screen.getByText('1')
    const stylesCell = window.getComputedStyle(cell)
    expect(stylesCell.backgroundColor).toBe('rgb(255, 255, 255)')
    expect(stylesCell.color).toBe('rgb(57, 57, 57)')

    fireEvent.click(cell)
    expect(mockFn).toHaveBeenCalledTimes(1)
})

test('active cell', async () => {
    const mockFn = jest.fn()
    render(
        <ThemeProvider theme={theme}>
            <Cell children={1} id="1" onClickCell={mockFn} $isActive={true} />
        </ThemeProvider>
    )
    const cell = screen.getByText('1')
    const styleActiveCell = window.getComputedStyle(cell)
    expect(styleActiveCell.backgroundColor).toBe('rgb(47, 128, 237)')
    expect(styleActiveCell.color).toBe('rgb(255, 255, 255)')
})

test('in range cell', async () => {
    const mockFn = jest.fn()
    render(
        <ThemeProvider theme={theme}>
            <Cell children={1} id="1" onClickCell={mockFn} $inRange={true} />
        </ThemeProvider>
    )
    const cell = screen.getByText('1')
    const styleInRangeCell = window.getComputedStyle(cell)
    expect(styleInRangeCell.backgroundColor).toBe('rgb(234, 242, 253)')
    expect(styleInRangeCell.color).toBe('rgb(47, 128, 237)')
})

test('end range cell', async () => {
    const mockFn = jest.fn()
    render(
        <ThemeProvider theme={theme}>
            <Cell children={1} id="1" onClickCell={mockFn} $isEndRange={true} />
        </ThemeProvider>
    )
    const cell = screen.getByText('1')
    const styleEndRangeCell = window.getComputedStyle(cell)
    expect(styleEndRangeCell.backgroundColor).toBe('rgb(47, 128, 237)')
    expect(styleEndRangeCell.color).toBe('rgb(255, 255, 255)')
})

test('holiday cell', async () => {
    const mockFn = jest.fn()
    render(
        <ThemeProvider theme={theme}>
            <Cell children={1} id="1" onClickCell={mockFn} $isHoliday={true} />
        </ThemeProvider>
    )
    const cell = screen.getByText('1')
    const styleHolidayCell = window.getComputedStyle(cell)
    expect(styleHolidayCell.backgroundColor).toBe('rgb(255, 255, 255)')
    expect(styleHolidayCell.color).toBe('rgb(255, 207, 0)')
})

test('weekend cell', async () => {
    const mockFn = jest.fn()
    render(
        <ThemeProvider theme={theme}>
            <Cell children={1} id="1" onClickCell={mockFn} $isWeekend={true} />
        </ThemeProvider>
    )
    const cell = screen.getByText('1')
    const styleWeekendCell = window.getComputedStyle(cell)
    expect(styleWeekendCell.backgroundColor).toBe('rgb(255, 255, 255)')
    expect(styleWeekendCell.color).toBe('rgb(187, 0, 0)')
})
