import { useState } from 'react'
import { createPortal } from 'react-dom'

import {
    Button,
    Buttons,
    Input,
    Title,
    Todo,
    TodoCreater,
    TodoList,
    TodoText,
} from './styled'
import { TodoModalProps } from './types'

import { Modal } from '@components/Modal'

export const TodoModal = ({
    onClose,
    todo,
    addTodo,
    removeTodo,
    removeAllTodos,
    updateTodo,
    todoId,
}: TodoModalProps) => {
    const [todoData, setTodoData] = useState(todo.data)
    const [inputData, setInputData] = useState('')
    const [isDelete, setIsDelete] = useState(false)
    const [removeId, setRemoveId] = useState('-1')

    const handleChangeInputData = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target
        setInputData(value)
    }

    const handleAddTodo = () => {
        if (!isAddDisabled) {
            const allTodos = addTodo(todoId, inputData)
            const currentTodo = allTodos.find((todo) => todo.id === todoId)!
            setTodoData(currentTodo.data)
        }
    }

    const checkAllRemove = () => {
        if (!isRemoveAllDisabled) {
            setIsDelete((prev) => !prev)
            setRemoveId('-1')
        }
    }

    const checkRemove = (id: string) => () => {
        setIsDelete((prev) => !prev)
        setRemoveId(id)
    }

    const handleRemoveAllTodos = () => {
        removeAllTodos(todoId)
        setTodoData([])
        onCloseCheckModal()
    }

    const handleRemoveTodo = () => {
        const allTodos = removeTodo(todoId, removeId)
        const currentTodo = allTodos.find((todo) => todo.id === todoId)!
        setTodoData(currentTodo.data)
        onCloseCheckModal()
    }

    const handleChangeCheckBox =
        (id: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
            const { checked } = e.target
            const currentTodo = todoData.find((todo) => todo.id === id)!
            const newTodoData = todoData.map((todoData) => {
                if (todoData.id === currentTodo.id) {
                    return {
                        id: currentTodo.id,
                        data: currentTodo.data,
                        checked: !currentTodo.checked,
                    }
                } else return todoData
            })
            setTodoData(newTodoData)
            updateTodo(todoId, { id, data: currentTodo.data, checked })
        }
    console.log(todoData, 'todoData')
    const onCloseCheckModal = () => {
        setIsDelete((prev) => !prev)
    }

    const onCloseTodoModal = () => {
        if (!isDelete) onClose()
    }

    const handleDeleteModal = () => {
        if (removeId === '-1') {
            handleRemoveAllTodos()
        } else {
            handleRemoveTodo()
        }
    }

    const isAddDisabled = inputData.length === 0
    const isRemoveAllDisabled = todoData.length === 0
    return (
        <Modal onCloseModal={onCloseTodoModal}>
            <Title>Add Todo</Title>
            <TodoCreater>
                <Input value={inputData} onChange={handleChangeInputData} />
                <Buttons>
                    <Button $isDisabled={isAddDisabled} onClick={handleAddTodo}>
                        Add
                    </Button>
                    <Button
                        $isDisabled={isRemoveAllDisabled}
                        onClick={checkAllRemove}
                    >
                        Remove All
                    </Button>
                </Buttons>
            </TodoCreater>
            <TodoList>
                {todoData.map(({ id, data, checked }) => (
                    <Todo>
                        <Input
                            type="checkbox"
                            defaultChecked={checked}
                            onChange={handleChangeCheckBox(id)}
                        />
                        <TodoText key={id} $isChecked={checked}>
                            {data}
                        </TodoText>
                        <Button onClick={checkRemove(id)}>Remove</Button>
                    </Todo>
                ))}
            </TodoList>
            {isDelete &&
                createPortal(
                    <Modal onCloseModal={onCloseCheckModal}>
                        <Title>Are you sure?</Title>
                        <Buttons>
                            <Button onClick={handleDeleteModal}>Delete</Button>
                            <Button onClick={onCloseCheckModal}>Cancel</Button>
                        </Buttons>
                    </Modal>,
                    document.body
                )}
        </Modal>
    )
}
