import { useCallback, useState } from 'react'

import { UseTodoProps } from './types'

import { initialActiveCellId } from '@constants'
import { TodoData } from '@types'

export const useTodo = (props: UseTodoProps) => {
    const {
        initialTodoData,
        addTodo,
        removeTodo,
        removeAllTodos,
        inputData,
        isAddDisabled,
    } = props

    const [todoData, setTodoData] = useState(initialTodoData)
    const [isDelete, setIsDelete] = useState(false)
    const [removeId, setRemoveId] = useState(initialActiveCellId)

    const handleSetTodoData = useCallback((todoData: TodoData[]) => {
        setTodoData(todoData)
    }, [])

    const handleChangeIsDelete = useCallback(() => {
        setIsDelete((prev) => !prev)
    }, [])

    const handleAddTodo = useCallback(
        (todoId: string) => {
            if (!isAddDisabled) {
                const allTodos = addTodo(todoId, inputData)
                const currentTodo = allTodos.find((todo) => todo.id === todoId)!
                setTodoData(currentTodo.data)
            }
        },
        [addTodo, inputData, isAddDisabled]
    )

    const handleRemoveAllTodos = useCallback(
        (todoId: string) => {
            removeAllTodos(todoId)
            setTodoData([])
            handleChangeIsDelete()
        },
        [handleChangeIsDelete, removeAllTodos]
    )

    const handleRemoveTodo = useCallback(
        (todoId: string, removeId: string) => {
            const allTodos = removeTodo(todoId, removeId)
            const currentTodo = allTodos.find((todo) => todo.id === todoId)!
            setTodoData(currentTodo.data)
            handleChangeIsDelete()
        },
        [handleChangeIsDelete, removeTodo]
    )

    const isRemoveAllDisabled = todoData.length === 0

    const checkAllRemove = useCallback(() => {
        if (!isRemoveAllDisabled) {
            setIsDelete((prev) => !prev)
            setRemoveId(initialActiveCellId)
        }
    }, [isRemoveAllDisabled])

    const checkRemove = useCallback(
        (id: string) => () => {
            setIsDelete((prev) => !prev)
            setRemoveId(id)
        },
        []
    )

    return {
        todoData,
        handleSetTodoData,
        handleAddTodo,
        handleRemoveTodo,
        handleRemoveAllTodos,
        isRemoveAllDisabled,
        checkRemove,
        checkAllRemove,
        handleChangeIsDelete,
        removeId,
        isDelete,
    }
}
