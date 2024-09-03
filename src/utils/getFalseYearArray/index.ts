import { getCellsInMonth } from '../getCellsInMonth'
import { getCountCellsPrevMonths } from '../getCountCellsPrevMonths'
import { getCountCellsPrevYears } from '../getCountCellsPrevYears'

import { countMonth } from '@constants'

export const getFalseYearArray = (year: number) => {
    const arr = []
    const yearId = getCountCellsPrevYears(year)

    const cellId = yearId
    for (let i = 0; i < countMonth; i++) {
        const prevMonthCellsCount = getCountCellsPrevMonths(year, i)
        const cellsCount = getCellsInMonth(year, i)
        const falseArray: boolean[] = [...Array(cellsCount).fill(false)]
        arr.push({ id: String(cellId + prevMonthCellsCount), data: falseArray })
    }

    return arr
}
