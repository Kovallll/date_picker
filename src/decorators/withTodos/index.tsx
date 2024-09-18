import { ComponentType } from 'react'
import { v4 as uuidv4 } from 'uuid'

import { WithTodos } from './types'

import { maxLenTodo, todosKey } from '@constants'
import { TodoData } from '@types'
import { LocalStorage } from '@utils'

export const withTodos = <T extends WithTodos>(
    WrappedComponent: ComponentType<T>
) => {
    const localStorage = new LocalStorage()

    const handleAddTodo = (cellId: string, data: string) => {
        const allTodos = localStorage.getItem(todosKey, [])
        let newData = data
        if (data.length > maxLenTodo) {
            newData = data.slice(0, maxLenTodo) + '...'
        }
        const todo = allTodos.find((item) => item.id === cellId)
        const id = uuidv4()

        const todoData = todo
            ? [...todo?.data, { id: String(id), data: newData, checked: false }]
            : [{ id: String(id), data: newData, checked: false }]
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

    const ComponentWithChangeStartDay = (props: T) => {
        return (
            <WrappedComponent
                isWithTodos={true}
                handleAddTodo={handleAddTodo}
                handleRemoveTodo={handleRemoveTodo}
                handleRemoveAllTodos={handleRemoveAllTodos}
                handleUpdateTodo={handleUpdateTodo}
                {...props}
            />
        )
    }

    return ComponentWithChangeStartDay
}
