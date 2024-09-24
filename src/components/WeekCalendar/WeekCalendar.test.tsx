import { ThemeProvider } from 'styled-components'

import WeekCalendar from '.'

import '@testing-library/jest-dom'
import theme from '@styles/theme'
import { fireEvent, render, screen } from '@testing-library/react'

const mockFn = jest.fn()

test('test WeekCalendar cell styles', () => {
    render(
        <ThemeProvider theme={theme}>
            <WeekCalendar handleOpenCalendar={mockFn} />
        </ThemeProvider>
    )
    const firstElement = screen.getByText('1')
    const secondElement = screen.getByText('2')

    const stylesFirstElement = window.getComputedStyle(firstElement)
    const stylesSecondElement = window.getComputedStyle(secondElement)

    fireEvent.click(firstElement)

    expect(stylesFirstElement.backgroundColor).toBe('rgb(194, 236, 235)')
    expect(stylesSecondElement.backgroundColor).toBe('rgb(255, 255, 255)')

    fireEvent.click(secondElement)

    expect(stylesSecondElement.backgroundColor).toBe('rgb(255, 255, 255)')
    expect(stylesFirstElement.backgroundColor).toBe('rgb(194, 236, 235)')
})

test('test WeekCalendar switch weeks', () => {
    render(
        <ThemeProvider theme={theme}>
            <WeekCalendar handleOpenCalendar={mockFn} />
        </ThemeProvider>
    )
    const nextButton = screen.getByAltText('next month button')
        .parentElement as HTMLButtonElement
    const prevButton = screen.getByAltText('prev month button')
        .parentElement as HTMLButtonElement

    expect(screen.getByText('1')).toBeInTheDocument()
    expect(screen.queryByText('17')).not.toBeInTheDocument()

    fireEvent.click(nextButton)

    expect(screen.queryByText('1')).not.toBeInTheDocument()
    expect(screen.getByText('17')).toBeInTheDocument()

    fireEvent.click(prevButton)

    expect(screen.getByText('1')).toBeInTheDocument()
    expect(screen.queryByText('17')).not.toBeInTheDocument()
})
