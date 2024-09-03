import { getCellsInMonth } from '../getCellsInMonth'

export const getCountCellsPrevMonths = (
    year: number,
    countPrevMonths: number
) => {
    let countCells = 0
    for (let i = 0; i < countPrevMonths; i++) {
        countCells += getCellsInMonth(year, i)
    }
    return countCells
}
