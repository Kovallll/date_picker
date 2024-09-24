import { memo, useState } from 'react'

import {
    addAltText,
    allText,
    cancelText,
    checkTitleText,
    deleteText,
    placeholderText,
    removeAllAltText,
    removeAltText,
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
import { icons, initialActiveCellId, maxLenTodo } from '@constants'
import { useTodo } from '@hooks'

const TodoModal = ({
    onClose,
    todo,
    addTodo,
    removeTodo,
    removeAllTodos,
    updateTodo,
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
            updateTodo(todo.id, { id, data: currentTodo.data, checked })
        }

    const onCloseTodoModal = () => {
        if (!isDelete) onClose()
    }

    const handleDeleteModal = () => {
        if (removeId === initialActiveCellId) {
            handleRemoveAllTodos(todo.id)
        } else {
            handleRemoveTodo(todo.id, removeId)
        }
    }

    const handleAddTodo = () => {
        appendTodo(todo.id)
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
                    maxLength={maxLenTodo}
                />
                <Buttons $isCheckModal={false}>
                    <Button disabled={isAddDisabled} onClick={handleAddTodo}>
                        <Image src={addIcon} alt={addAltText} />
                    </Button>
                    <Button
                        disabled={isRemoveAllDisabled}
                        onClick={checkAllRemove}
                    >
                        <Image src={deleteIcon} alt={removeAllAltText} />{' '}
                        {allText}
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
                            <Image src={icons.deleteIcon} alt={removeAltText} />
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
