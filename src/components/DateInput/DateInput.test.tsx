import { useState } from 'react'
import { ThemeProvider } from 'styled-components'

import { DateInput } from '.'

import '@testing-library/jest-dom'
import theme from '@styles/theme'
import { render, screen } from '@testing-library/react'

const Input = ({ mockOnClick }: { mockOnClick: () => void }) => {
    const [inputData, setInputData] = useState('01/01/202')

    const handleChange = (date: string) => {
        setInputData(date)
    }
    return (
        <DateInput
            date={inputData}
            handleChangeDateInput={handleChange}
            handleChangeError={mockOnClick}
            handleFocus={mockOnClick}
            handleKeyboardChange={mockOnClick}
            handleOpenCalendar={mockOnClick}
        />
    )
}

test('loads and displays greeting', async () => {
    const mockOnClick = jest.fn()

    render(
        <ThemeProvider theme={theme}>
            <Input mockOnClick={mockOnClick} />
        </ThemeProvider>
    )

    const input = screen.getByRole('textbox') as HTMLInputElement
    expect(input.value).toBe('01/01/202')
})
