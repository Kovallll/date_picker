import { ThemeProvider } from 'styled-components'

import DefaultCalendar from '.'

import '@testing-library/jest-dom'
import theme from '@styles/theme'
import { render, screen } from '@testing-library/react'

test('test DefaultCalendar render todo button', () => {
    const mockFn = jest.fn()
    render(
        <ThemeProvider theme={theme}>
            <DefaultCalendar
                isWithTodos={true}
                handleAddTodo={mockFn}
                handleRemoveTodo={mockFn}
                handleUpdateTodo={mockFn}
                handleRemoveAllTodos={mockFn}
            />
        </ThemeProvider>
    )
    const addTodo = screen.getByText('Add Todo')
    expect(addTodo).toBeInTheDocument()
})
