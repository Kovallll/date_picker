import { Todo } from '@types'

export class LocalStorage {
    getItem = (
        key: string,
        undefinedItem: object | null | [] = null
    ): Todo[] => {
        return JSON.parse(
            window.localStorage.getItem(key) ?? JSON.stringify(undefinedItem)
        )
    }

    setItem = (key: string, value: Todo[]) => {
        window.localStorage.setItem(key, JSON.stringify(value))
    }
}
