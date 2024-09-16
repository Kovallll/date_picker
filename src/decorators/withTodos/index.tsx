import { ComponentType } from 'react'

import { WithTodos } from './types'

import { todosKey } from '@constants'
import { LocalStorage } from '@utils'

export const withTodos = <T extends WithTodos>(
    WrappedComponent: ComponentType<T>
) => {
    const localStorage = new LocalStorage()
    let count = 0
    const handleAddTodo = (cellId: string, data: string) => {
        const allTodos = localStorage.getItem(todosKey, [])
        console.log(todosKey, 'todos')
        const todo = allTodos.find((item) => item.id === cellId)
        const todoData = todo
            ? [...todo?.data, { id: String(count), data }]
            : [{ id: String(count), data }]
        count++
        const filtredTodos = allTodos.filter((todo) => todo.id !== cellId)
        const newTodos = [...filtredTodos, { id: cellId, data: todoData }]
        localStorage.setItem(todosKey, newTodos)
        return newTodos
    }

    const handleRemoveAllTodos = (cellId: string) => {
        const allTodos = localStorage.getItem(todosKey)
        const newTodos = allTodos.filter((item) => item.id !== cellId)
        localStorage.setItem(todosKey, newTodos)
        return newTodos
    }

    const handleRemoveTodo = (cellId: string, todoDataId: string) => {
        const allTodos = localStorage.getItem(todosKey)
        const todo = allTodos.find((todo) => todo.id === cellId)!
        const newTodo = todo?.data.filter(
            (todoData) => todoData.id !== todoDataId
        )
        const todos = allTodos.filter((todo) => todo.id !== cellId)
        const newTodos = [...todos, { id: cellId, data: newTodo }]
        localStorage.setItem(todosKey, newTodos)
        return newTodos
    }
    const ComponentWithChangeStartDay = (props: T) => {
        return (
            <WrappedComponent
                isWithTodos={true}
                handleAddTodo={handleAddTodo}
                handleRemoveTodo={handleRemoveTodo}
                handleRemoveAllTodos={handleRemoveAllTodos}
                {...props}
            />
        )
    }

    return ComponentWithChangeStartDay
}
