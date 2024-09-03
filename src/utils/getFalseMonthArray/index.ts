import { getCellsInMonth } from '../getCellsInMonth'

export const getFalseMonthArray = (year: number, monthIndex: number) => {
    const cellsCount = getCellsInMonth(year, monthIndex)
    const falseArray = [...Array(cellsCount).fill(false)]
    return falseArray
}
