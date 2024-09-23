import { ThemeProvider } from 'styled-components'

import TodoModal from '.'

import '@testing-library/jest-dom'
import theme from '@styles/theme'
import { fireEvent, render, screen } from '@testing-library/react'

test('test DefaultCalendar', async () => {
    const mockFn = jest.fn()
    render(
        <ThemeProvider theme={theme}>
            <TodoModal
                addTodo={mockFn}
                onClose={mockFn}
                removeAllTodos={mockFn}
                removeTodo={mockFn}
                todo={{ id: '', data: [] }}
                todoId=""
                updateTodo={mockFn}
            />
        </ThemeProvider>
    )
    const input = screen.getByPlaceholderText('Input todo') as HTMLInputElement
    fireEvent.focus(input)
    fireEvent.change(input, { target: { value: 'todo' } })
    expect(input.value).toBe('todo')
})
