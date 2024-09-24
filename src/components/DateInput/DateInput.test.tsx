import { useState } from 'react'
import { ThemeProvider } from 'styled-components'

import { DateInput } from '.'

import '@testing-library/jest-dom'
import theme from '@styles/theme'
import { fireEvent, render, screen } from '@testing-library/react'

const Input = ({ date }: { date: string }) => {
    const [inputValue, setInputValue] = useState(date)
    const [isOpenTable, setIsOpenTable] = useState(false)

    const mockFn = jest.fn()
    const handleChangeDateInput = (value: string) => {
        setInputValue(value)
    }
    const handleFocus = () => {
        setIsOpenTable(true)
    }
    return (
        <>
            <DateInput
                date={inputValue}
                handleChangeDateInput={handleChangeDateInput}
                handleChangeError={mockFn}
                handleFocus={handleFocus}
                handleKeyboardChange={mockFn}
                handleOpenCalendar={mockFn}
            />
            {isOpenTable && <div>I'm Visible</div>}
        </>
    )
}

describe('test DateInput validate value', () => {
    test('test days validate', () => {
        render(
            <ThemeProvider theme={theme}>
                <Input date="" />
            </ThemeProvider>
        )

        const input = screen.getByRole('textbox') as HTMLInputElement
        expect(input.value).toBe('')

        fireEvent.change(input, { target: { value: '6' } })
        expect(input.value).toBe('6')
        fireEvent.change(input, { target: { value: '65' } })
        expect(input.value).toBe('65/')
        fireEvent.change(input, { target: { value: '65/3' } })
        expect(input.value).toBe('65')
    })

    test('test month validate', () => {
        render(
            <ThemeProvider theme={theme}>
                <Input date="" />
            </ThemeProvider>
        )

        const input = screen.getByRole('textbox') as HTMLInputElement
        expect(input.value).toBe('')

        fireEvent.change(input, { target: { value: '12/' } })
        expect(input.value).toBe('12/')
        fireEvent.change(input, { target: { value: '12/3' } })
        expect(input.value).toBe('12/3')
        fireEvent.change(input, { target: { value: '12/31' } })
        expect(input.value).toBe('12/31/')
        fireEvent.change(input, { target: { value: '12/31/2' } })
        expect(input.value).toBe('12/31')
    })
})

test('test DateInput focus', () => {
    render(
        <ThemeProvider theme={theme}>
            <Input date="" />
        </ThemeProvider>
    )
    const input = screen.getByRole('textbox') as HTMLInputElement

    expect(screen.queryByText("I'm Visible")).not.toBeInTheDocument()
    fireEvent.focus(input)
    expect(screen.queryByText("I'm Visible")).toBeInTheDocument()
})

test('test DateInput clear input', () => {
    render(
        <ThemeProvider theme={theme}>
            <Input date="01/01/2024" />
        </ThemeProvider>
    )
    const input = screen.getByRole('textbox') as HTMLInputElement
    expect(input.value).toBe('01/01/2024')

    const clearButton = screen.getByAltText('clearIcon')
        .parentElement as HTMLButtonElement
    fireEvent.click(clearButton)
    expect(input.value).toBe('')
})
