import { ThemeProvider } from 'styled-components'

import { DateInput } from '.'

import '@testing-library/jest-dom'
import theme from '@styles/theme'
import { render, screen } from '@testing-library/react'

test('test DateInput', async () => {
    const mockFn = jest.fn()
    render(
        <ThemeProvider theme={theme}>
            <DateInput
                date={'01/01/2024'}
                handleChangeDateInput={mockFn}
                handleChangeError={mockFn}
                handleFocus={mockFn}
                handleKeyboardChange={mockFn}
                handleOpenCalendar={mockFn}
            />
        </ThemeProvider>
    )

    const input = screen.getByRole('textbox') as HTMLInputElement
    expect(input.value).toBe('01/01/2024')
})
