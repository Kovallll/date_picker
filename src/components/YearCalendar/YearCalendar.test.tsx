import { ThemeProvider } from 'styled-components'

import YearCalendar from '.'

import '@testing-library/jest-dom'
import theme from '@styles/theme'
import { fireEvent, render, screen } from '@testing-library/react'

const mockFn = jest.fn()

test('test YearCalendar cell styles', async () => {
    render(
        <ThemeProvider theme={theme}>
            <YearCalendar handleSelectYear={mockFn} year={2024} />
        </ThemeProvider>
    )
    const firstElement = screen.getByText('2024')
    const secondElement = screen.getByText('2025')
    screen.debug()
    const stylesFirstElement = window.getComputedStyle(firstElement)
    const stylesSecondElement = window.getComputedStyle(secondElement)

    fireEvent.click(firstElement)

    expect(stylesFirstElement.backgroundColor).toBe('rgb(194, 236, 235)')
    expect(stylesSecondElement.backgroundColor).toBe('rgb(255, 255, 255)')

    fireEvent.click(secondElement)

    expect(stylesSecondElement.backgroundColor).toBe('rgb(255, 255, 255)')
    expect(stylesFirstElement.backgroundColor).toBe('rgb(194, 236, 235)')
})

test('test YearCalendar switch years', () => {
    render(
        <ThemeProvider theme={theme}>
            <YearCalendar handleSelectYear={mockFn} year={2024} />
        </ThemeProvider>
    )
    const nextButton = screen.getByAltText('next year button')
        .parentElement as HTMLButtonElement
    const prevButton = screen.getByAltText('prev year button')
        .parentElement as HTMLButtonElement

    expect(screen.getByText('2024')).toBeInTheDocument()
    expect(screen.queryByText('2040')).not.toBeInTheDocument()

    fireEvent.click(nextButton)

    expect(screen.queryByText('2024')).not.toBeInTheDocument()
    expect(screen.getByText('2040')).toBeInTheDocument()

    fireEvent.click(prevButton)

    expect(screen.getByText('2024')).toBeInTheDocument()
    expect(screen.queryByText('2040')).not.toBeInTheDocument()
})
