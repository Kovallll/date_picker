import { useState } from 'react'
import { createPortal } from 'react-dom'

import {
    addText,
    cancelText,
    checkTitleText,
    deleteText,
    removeAllText,
    removeText,
    title,
} from './config'
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
import { initialActiveCellId } from '@constants'
import { useTodo } from '@hooks'

export const TodoModal = ({
    onClose,
    todo,
    addTodo,
    removeTodo,
    removeAllTodos,
    updateTodo,
    todoId,
}: TodoModalProps) => {
    const [inputData, setInputData] = useState('')

    const isAddDisabled = inputData.length === 0

    const {
        todoData,
        handleSetTodoData,
        handleAddTodo: appendTodo,
        handleRemoveTodo,
        handleRemoveAllTodos,
        isRemoveAllDisabled,
        checkRemove,
        checkAllRemove,
        handleChangeIsDelete,
        removeId,
        isDelete,
    } = useTodo({
        initialTodoData: todo.data,
        addTodo,
        removeTodo,
        removeAllTodos,
        inputData,
        isAddDisabled,
    })

    const handleChangeInputData = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target
        setInputData(value)
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
            handleSetTodoData(newTodoData)
            updateTodo(todoId, { id, data: currentTodo.data, checked })
        }

    const onCloseTodoModal = () => {
        if (!isDelete) onClose()
    }

    const handleDeleteModal = () => {
        if (removeId === initialActiveCellId) {
            handleRemoveAllTodos(todoId)
        } else {
            handleRemoveTodo(todoId, removeId)
        }
    }

    const handleAddTodo = () => {
        appendTodo(todoId)
    }

    return (
        <Modal onCloseModal={onCloseTodoModal}>
            <Title>{title}</Title>
            <TodoCreater>
                <Input value={inputData} onChange={handleChangeInputData} />
                <Buttons>
                    <Button $isDisabled={isAddDisabled} onClick={handleAddTodo}>
                        {addText}
                    </Button>
                    <Button
                        $isDisabled={isRemoveAllDisabled}
                        onClick={checkAllRemove}
                    >
                        {removeAllText}
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
                        <Button onClick={checkRemove(id)}>{removeText}</Button>
                    </Todo>
                ))}
            </TodoList>
            {isDelete &&
                createPortal(
                    <Modal onCloseModal={handleChangeIsDelete}>
                        <Title>{checkTitleText}</Title>
                        <Buttons>
                            <Button onClick={handleDeleteModal}>
                                {deleteText}
                            </Button>
                            <Button onClick={handleChangeIsDelete}>
                                {cancelText}
                            </Button>
                        </Buttons>
                    </Modal>,
                    document.body
                )}
        </Modal>
    )
}
