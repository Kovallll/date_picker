import { ThemeProvider } from 'styled-components'

import { Calendar } from '.'

import '@testing-library/jest-dom'
import theme from '@styles/theme'
import { fireEvent, render, screen } from '@testing-library/react'

test('testing base Calendar', async () => {
    render(
        <ThemeProvider theme={theme}>
            <Calendar />
        </ThemeProvider>
    )
    const cell = screen.getByText('18')
    fireEvent.click(cell)
    const styleActiveCell = window.getComputedStyle(cell)
    expect(styleActiveCell.color).toBe('rgb(255, 255, 255)')
    expect(styleActiveCell.backgroundColor).toBe('rgb(47, 128, 237)')
})

test('testing isWithInput', async () => {
    render(
        <ThemeProvider theme={theme}>
            <Calendar isWithInput={true} />
        </ThemeProvider>
    )
    const firstInput = screen.getByPlaceholderText(
        'Choose Date'
    ) as HTMLInputElement
    expect(firstInput.value).toBe('')
    fireEvent.focus(firstInput)
    fireEvent.change(firstInput, { target: { value: '01/01/2024' } })
    expect(firstInput.value).toBe('01/01/2024')
    fireEvent.focus(firstInput)
    fireEvent.change(firstInput, { target: { value: '' } })
    expect(firstInput.value).toBe('')
})

test('testing isWithInput & isWithRange', async () => {
    render(
        <ThemeProvider theme={theme}>
            <Calendar isWithInput={true} isWithRange={true} />
        </ThemeProvider>
    )
    const firstInput = screen.getByPlaceholderText(
        'Start range'
    ) as HTMLInputElement
    expect(firstInput.value).toBe('')
    fireEvent.click(firstInput)
    fireEvent.change(firstInput, { target: { value: '01/01/2024' } })
    expect(firstInput.value).toBe('01/01/2024')

    const secondInput = screen.getByPlaceholderText(
        'End range'
    ) as HTMLInputElement
    expect(secondInput.value).toBe('')
    fireEvent.click(secondInput)
    fireEvent.change(secondInput, { target: { value: '01/01/2024' } })
    expect(secondInput.value).toBe('01/01/2024')
})

test('testing isWithRange', async () => {
    render(
        <ThemeProvider theme={theme}>
            <Calendar isWithRange={true} />
        </ThemeProvider>
    )
    const startRange = screen.getByText('17')
    const inRange = screen.getByText('18')
    const endRange = screen.getByText('19')

    fireEvent.click(startRange)
    fireEvent.click(endRange)

    const styleStart = window.getComputedStyle(startRange)
    const styleEnd = window.getComputedStyle(endRange)
    const styleInRange = window.getComputedStyle(inRange)

    expect(styleStart.backgroundColor).toBe('rgb(130, 179, 244)')
    expect(styleEnd.backgroundColor).toBe('rgb(47, 128, 237)')
    expect(styleInRange.backgroundColor).toBe('rgb(234, 242, 253)')
})

test('testing isWithHoliday', async () => {
    render(
        <ThemeProvider theme={theme}>
            <Calendar isWithHoliday={true} />
        </ThemeProvider>
    )

    const style = window.getComputedStyle(screen.getByText('17'))
    expect(style.color).toBe('rgb(255, 207, 0)')
})

test('testing isWithStartSunday', async () => {
    render(
        <ThemeProvider theme={theme}>
            <Calendar isWithStartSunday={true} />
        </ThemeProvider>
    )
    const week = screen.getByText('Su').parentElement
    expect(week?.firstChild?.textContent).toBe('Su')
})
