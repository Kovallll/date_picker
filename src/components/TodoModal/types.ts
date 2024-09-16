import { Todo } from '@types'

export interface TodoModalProps {
    onClose: () => void
    todo: Todo
    addTodo: (cellId: string, data: string) => Todo[]
    removeTodo: (cellId: string, todoDataId: string) => Todo[]
    removeAllTodos: (cellId: string) => Todo[]
    todoId: string
}
