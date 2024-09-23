import { Todo, TodoData } from '@types'

export interface UseTodoProps {
    initialTodoData: TodoData[]
    addTodo: (cellId: string, data: string) => Todo[]
    removeTodo: (cellId: string, todoDataId: string) => Todo[]
    removeAllTodos: (cellId: string) => Todo[]
    inputData: string
    isAddDisabled: boolean
}
