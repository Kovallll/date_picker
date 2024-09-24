import { ThemeProvider } from 'styled-components'
import { v4 as uuidv4 } from 'uuid'

import TodoModal from '.'

import '@testing-library/jest-dom'
import { maxLenTodo, todosKey } from '@constants'
import theme from '@styles/theme'
import { fireEvent, render, screen } from '@testing-library/react'
import { TodoData } from '@types'
import { LocalStorage } from '@utils'

const TestTodoModal = () => {
    const localStorage = new LocalStorage()
    const handleAddTodo = (cellId: string, data: string) => {
        const id = uuidv4()
        const allTodos = localStorage.getItem(todosKey, [])
        let newData = data
        if (data.length > maxLenTodo) {
            newData = data.slice(0, maxLenTodo) + '...'
        }
        const todo = allTodos.find((item) => item.id === cellId)

        const newTodo = { id: String(id), data: newData, checked: false }
        const todoData = todo ? [...todo?.data, newTodo] : [newTodo]
        const filtredTodos = allTodos.filter((todo) => todo.id !== cellId)
        const newTodos = [...filtredTodos, { id: cellId, data: todoData }]
        localStorage.setItem(todosKey, newTodos)
        return newTodos
    }

    const handleRemoveAllTodos = (cellId: string) => {
        const allTodos = localStorage.getItem(todosKey, [])
        const newTodos = allTodos.filter((item) => item.id !== cellId)
        localStorage.setItem(todosKey, newTodos)
        return newTodos
    }

    const handleRemoveTodo = (cellId: string, todoDataId: string) => {
        const allTodos = localStorage.getItem(todosKey, [])
        const todo = allTodos.find((todo) => todo.id === cellId)!
        const newTodo = todo?.data.filter(
            (todoData) => todoData.id !== todoDataId
        )
        const todos = allTodos.filter((todo) => todo.id !== cellId)
        const newTodos = [...todos, { id: cellId, data: newTodo }]
        localStorage.setItem(todosKey, newTodos)
        return newTodos
    }

    const handleUpdateTodo = (todoId: string, todo: TodoData) => {
        const allTodos = localStorage.getItem(todosKey, [])
        const currentTodo = allTodos.find((todo) => todo.id === todoId)!
        const newCurrentTodo = currentTodo.data.map((todoData) => {
            if (todoData.id === todo.id) {
                return todo
            } else return todoData
        })
        const filteredAllTodos = allTodos.filter((todo) => todo.id !== todoId)
        const newAllTodos = [
            ...filteredAllTodos,
            { id: todoId, data: newCurrentTodo },
        ]
        localStorage.setItem(todosKey, newAllTodos)
    }

    const mockFn = jest.fn()
    return (
        <ThemeProvider theme={theme}>
            <TodoModal
                addTodo={handleAddTodo}
                onClose={mockFn}
                removeAllTodos={handleRemoveAllTodos}
                removeTodo={handleRemoveTodo}
                todo={{ id: '', data: [] }}
                updateTodo={handleUpdateTodo}
            />
        </ThemeProvider>
    )
}

describe('test CRUD TodoModal', () => {
    test('test add todo', () => {
        render(
            <ThemeProvider theme={theme}>
                <TestTodoModal />
            </ThemeProvider>
        )
        const input = screen.getByPlaceholderText(
            'Input todo'
        ) as HTMLInputElement
        const addTodo = screen.getByAltText('addIcon')
            .parentElement as HTMLButtonElement

        expect(input.value).toBe('')
        fireEvent.change(input, { target: { value: 'todo' } })
        expect(input.value).toBe('todo')
        fireEvent.click(addTodo)
        expect(input.value).toBe('')
        expect(screen.getByText('todo')).toBeInTheDocument()
    })

    test('test remove all todos', () => {
        render(
            <ThemeProvider theme={theme}>
                <TestTodoModal />
            </ThemeProvider>
        )
        const input = screen.getByPlaceholderText(
            'Input todo'
        ) as HTMLInputElement
        const addTodo = screen.getByAltText('addIcon')
            .parentElement as HTMLButtonElement

        const removeAllTodo = screen.getByAltText('removeAllIcon')
            .parentElement as HTMLButtonElement

        fireEvent.change(input, { target: { value: 'todo1' } })
        fireEvent.click(addTodo)
        fireEvent.change(input, { target: { value: 'todo2' } })
        fireEvent.click(addTodo)

        fireEvent.click(removeAllTodo)
        fireEvent.click(screen.queryByText('Delete') as HTMLButtonElement)

        expect(screen.queryByText('todo1')).not.toBeInTheDocument()
        expect(screen.queryByText('todo2')).not.toBeInTheDocument()
    })

    test('test remove todo', () => {
        render(
            <ThemeProvider theme={theme}>
                <TestTodoModal />
            </ThemeProvider>
        )
        const input = screen.getByPlaceholderText(
            'Input todo'
        ) as HTMLInputElement
        const addTodo = screen.getByAltText('addIcon')
            .parentElement as HTMLButtonElement

        fireEvent.change(input, { target: { value: 'todo1' } })
        fireEvent.click(addTodo)
        fireEvent.change(input, { target: { value: 'todo2' } })
        fireEvent.click(addTodo)

        const removeTodo = screen.getAllByAltText('removeIcon')[0]
        const parentElement = removeTodo.closest('button') as HTMLButtonElement

        fireEvent.click(parentElement)
        fireEvent.click(screen.queryByText('Delete') as HTMLButtonElement)

        expect(screen.queryByText('todo1')).not.toBeInTheDocument()
        expect(screen.queryByText('todo2')).toBeInTheDocument()
    })
})
