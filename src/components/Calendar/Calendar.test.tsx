import { ThemeProvider } from 'styled-components'

import { Calendar } from '.'

import '@testing-library/jest-dom'
import theme from '@styles/theme'
import { fireEvent, render, screen } from '@testing-library/react'

test('testing base Calendar', () => {
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

test('testing isWithInput', () => {
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

test('testing isWithInput & isWithRange', () => {
    render(
        <ThemeProvider theme={theme}>
            <Calendar isWithInput={true} isWithRange={true} />
        </ThemeProvider>
    )
    const firstInput = screen.getByPlaceholderText(
        'Start range'
    ) as HTMLInputElement
    expect(firstInput.value).toBe('')
    fireEvent.focus(firstInput)
    fireEvent.change(firstInput, { target: { value: '01/01/2024' } })
    expect(firstInput.value).toBe('01/01/2024')

    const secondInput = screen.getByPlaceholderText(
        'End range'
    ) as HTMLInputElement
    expect(secondInput.value).toBe('')
    fireEvent.focus(secondInput)
    fireEvent.change(secondInput, { target: { value: '01/01/2024' } })
    expect(secondInput.value).toBe('01/01/2024')
})

test('testing isWithRange', () => {
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

test('testing isWithHoliday', () => {
    render(
        <ThemeProvider theme={theme}>
            <Calendar isWithHoliday={true} />
        </ThemeProvider>
    )

    const style = window.getComputedStyle(screen.getByText('17'))
    expect(style.color).toBe('rgb(255, 207, 0)')
})

test('testing isWithStartSunday', () => {
    render(
        <ThemeProvider theme={theme}>
            <Calendar isWithStartSunday={true} />
        </ThemeProvider>
    )
    const week = screen.getByText('Su').parentElement
    expect(week?.firstChild?.textContent).toBe('Su')
})

test('testing isWithMinMax', () => {
    render(
        <ThemeProvider theme={theme}>
            <Calendar
                minDate="07/09/2024"
                maxDate="10/09/2024"
                isWithMinMax={true}
            />
        </ThemeProvider>
    )
    const styleDisabled = window.getComputedStyle(screen.getByText('17'))
    expect(styleDisabled.color).toBe('rgb(221, 221, 221)')
    const styleActive = window.getComputedStyle(screen.getByText('9'))
    expect(styleActive.color).toBe('rgb(57, 57, 57)')
})

test('testing isWithTodos', () => {
    render(
        <ThemeProvider theme={theme}>
            <Calendar isWithTodos={true} />
        </ThemeProvider>
    )
    screen.getByText('Add Todo')
})
