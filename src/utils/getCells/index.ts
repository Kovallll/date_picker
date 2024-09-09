import { countMonth, daysInWeek } from '@constants'

export const getCountCellsPrevYears = (year: number) => {
    let countYearCells = 0
    for (let i = 0; i < year; i++) {
        let countMonthCells = 0
        for (let j = 0; j < countMonth; j++) {
            countMonthCells += getCellsInMonth(i, j)
        }
        countYearCells += countMonthCells
    }
    return countYearCells
}

export const getAllCellsPrevMonths = (
    year: number,
    countPrevMonths: number
) => {
    let countCells = 0
    for (let i = 0; i < countPrevMonths; i++) {
        countCells += getCellsInMonth(year, i)
    }
    return countCells
}

export const getCellsPrevMonth = (year: number, monthIndex: number) => {
    return new Date(year, monthIndex).getDay() - 1 >= 0
        ? new Date(year, monthIndex).getDay() - 1
        : new Date(year, monthIndex).getDay() - 1 + daysInWeek
}

export const getCellsNextMonth = (year: number, monthIndex: number) => {
    return (
        (daysInWeek - (new Date(year, monthIndex + 1).getDay() - 1)) %
        daysInWeek
    )
}

export const getCellsInMonth = (year: number, monthIndex: number) => {
    let daysInMonth = 0
    const dateNumber = 33

    const currentDays =
        dateNumber - new Date(year, monthIndex, dateNumber).getDate()
    const prevDays = getCellsPrevMonth(year, monthIndex)

    const nextDays = getCellsNextMonth(year, monthIndex)

    daysInMonth += currentDays
    daysInMonth += prevDays
    daysInMonth += nextDays

    return daysInMonth
}
