import { getCellsPrevMonth } from '@utils'

export const getDateFormat = (
    year: number,
    currentMonth: number,
    id: number
) => {
    const newDate = new Date()

    const day = id + 1 - getCellsPrevMonth(year, currentMonth - 1)
    newDate.setFullYear(year, currentMonth - 1, day)
    const date = newDate.toLocaleDateString().replace(/\./g, '/')

    return date
}
