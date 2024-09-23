import { Todo, TodoData } from '@types'

export interface TodoModalProps {
    onClose: () => void
    todo: Todo
    addTodo: (cellId: string, data: string) => Todo[]
    removeTodo: (cellId: string, todoDataId: string) => Todo[]
    removeAllTodos: (cellId: string) => Todo[]
    updateTodo: (todoId: string, todo: TodoData) => void
    todoId: string
}

export interface TodoTextProps {
    $isChecked: boolean
}

export interface InputProps {
    $isCheckbox: boolean
}

export interface ButtonsProps {
    $isCheckModal: boolean
}
