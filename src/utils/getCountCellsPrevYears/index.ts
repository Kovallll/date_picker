import { getCellsInMonth } from '../getCellsInMonth'

export const getCountCellsPrevYears = (year: number) => {
    let countYearCells = 0
    for (let i = 0; i < year; i++) {
        let countMonthCells = 0
        for (let j = 0; j < 12; j++) {
            countMonthCells += getCellsInMonth(i, j)
        }
        countYearCells += countMonthCells
    }
    return countYearCells
}
