import { memo, useState } from 'react'

import {
    allText,
    cancelText,
    checkTitleText,
    deleteText,
    placeholderText,
    title,
} from './config'
import {
    Button,
    Buttons,
    Image,
    Input,
    Title,
    Todo,
    TodoCreater,
    TodoList,
    TodoText,
} from './styled'
import { TodoModalProps } from './types'

import { Modal } from '@components/Modal'
import { icons, initialActiveCellId } from '@constants'
import { useTodo } from '@hooks'

const TodoModal = ({
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
        setInputData('')
    }

    const addIcon = isAddDisabled ? icons.disabledAddIcon : icons.addIcon
    const deleteIcon = isRemoveAllDisabled
        ? icons.disabledDeleteIcon
        : icons.deleteIcon

    return (
        <Modal onCloseModal={onCloseTodoModal}>
            <Title>{title}</Title>
            <TodoCreater>
                <Input
                    value={inputData}
                    onChange={handleChangeInputData}
                    $isCheckbox={false}
                    placeholder={placeholderText}
                />
                <Buttons $isCheckModal={false}>
                    <Button disabled={isAddDisabled} onClick={handleAddTodo}>
                        <Image src={addIcon} />
                    </Button>
                    <Button
                        disabled={isRemoveAllDisabled}
                        onClick={checkAllRemove}
                    >
                        <Image src={deleteIcon} /> {allText}
                    </Button>
                </Buttons>
            </TodoCreater>
            <TodoList>
                {todoData.map(({ id, data, checked }) => (
                    <Todo key={id}>
                        <Input
                            type="checkbox"
                            defaultChecked={checked}
                            onChange={handleChangeCheckBox(id)}
                            $isCheckbox={true}
                        />
                        <TodoText $isChecked={checked}>{data}</TodoText>
                        <Button onClick={checkRemove(id)}>
                            <Image src={icons.deleteIcon} />
                        </Button>
                    </Todo>
                ))}
            </TodoList>
            {isDelete && (
                <Modal onCloseModal={handleChangeIsDelete}>
                    <Title>{checkTitleText}</Title>
                    <Buttons $isCheckModal={true}>
                        <Button onClick={handleDeleteModal}>
                            {deleteText}
                        </Button>
                        <Button onClick={handleChangeIsDelete}>
                            {cancelText}
                        </Button>
                    </Buttons>
                </Modal>
            )}
        </Modal>
    )
}

export default memo(TodoModal)
