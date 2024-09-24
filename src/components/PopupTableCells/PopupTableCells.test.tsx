import { ThemeProvider } from 'styled-components'

import PopupTableCells from '.'

import '@testing-library/jest-dom'
import { months } from '@constants'
import theme from '@styles/theme'
import { render, screen } from '@testing-library/react'

test('test PopupTableCells months', () => {
    const mockFn = jest.fn()
    render(
        <ThemeProvider theme={theme}>
            <PopupTableCells
                activeId={1}
                changeType="month"
                fillData={months}
                handleSelectElement={mockFn}
            />
        </ThemeProvider>
    )
    const month = screen.getByText('January')
    expect(month).toBeInTheDocument()

    const stylesMonth = window.getComputedStyle(month)
    expect(stylesMonth.backgroundColor).toBe('rgb(194, 236, 235)')
})

test('test PopupTableCells week', () => {
    const mockFn = jest.fn()
    render(
        <ThemeProvider theme={theme}>
            <PopupTableCells
                activeId={1}
                changeType="week"
                fillData={['1', '2']}
                handleSelectElement={mockFn}
            />
        </ThemeProvider>
    )
    const week = screen.getByText('1')
    expect(week).toBeInTheDocument()

    const stylesWeek = window.getComputedStyle(week)
    expect(stylesWeek.backgroundColor).toBe('rgb(194, 236, 235)')
})

test('test PopupTableCells year', () => {
    const mockFn = jest.fn()
    render(
        <ThemeProvider theme={theme}>
            <PopupTableCells
                activeId={2024}
                changeType="year"
                fillData={['2024', '2025']}
                handleSelectElement={mockFn}
            />
        </ThemeProvider>
    )
    const year = screen.getByText('2024')
    expect(year).toBeInTheDocument()

    const stylesYear = window.getComputedStyle(year)
    expect(stylesYear.backgroundColor).toBe('rgb(194, 236, 235)')
})
