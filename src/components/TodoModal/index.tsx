import { useRef, useState } from 'react'

import {
    Button,
    Buttons,
    CloseButton,
    Container,
    Image,
    Input,
    Title,
    Todo,
    TodoCreater,
    TodoList,
    Window,
} from './styled'
import { TodoModalProps } from './types'

import { icons } from '@constants'
import { useClickOutside } from '@hooks'

export const TodoModal = ({
    onClose,
    todo,
    addTodo,
    removeTodo,
    removeAllTodos,
    todoId,
}: TodoModalProps) => {
    const [todoData, setTodoData] = useState(todo.data)
    const [inputData, setInputData] = useState('')
    const modalRef = useRef(null)
    useClickOutside(modalRef, () => onClose())

    const handleChangeInputData = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target
        setInputData(value)
    }

    const handleAddTodo = () => {
        const allTodos = addTodo(todoId, inputData)
        const currentTodo = allTodos.find((todo) => todo.id === todoId)!
        setTodoData(currentTodo.data)
    }

    const handleRemoveAllTodos = () => {
        removeAllTodos(todoId)
        setTodoData([])
    }

    const handleRemoveTodo = (id: string) => () => {
        const allTodos = removeTodo(todoId, id)
        const currentTodo = allTodos.find((todo) => todo.id === todoId)!
        setTodoData(currentTodo.data)
    }

    return (
        <Container>
            <Window ref={modalRef}>
                <CloseButton onClick={onClose}>
                    <Image src={icons.clearIcon} />
                </CloseButton>
                <Title>Add Todo</Title>
                <TodoCreater>
                    <Input value={inputData} onChange={handleChangeInputData} />
                    <Buttons>
                        <Button onClick={handleAddTodo}>Add</Button>
                        <Button onClick={handleRemoveAllTodos}>
                            Remove All
                        </Button>
                    </Buttons>
                </TodoCreater>
                <TodoList>
                    {todoData.map(({ id, data }) => (
                        <>
                            <Todo key={id}>{data}</Todo>
                            <Button onClick={handleRemoveTodo(id)}>
                                Remove
                            </Button>
                        </>
                    ))}
                </TodoList>
            </Window>
        </Container>
    )
}
