import {
    countMonth,
    dateNumberForCurrentDays,
    daysInWeek,
    reversePrevId,
} from '@constants'
import { CellsInitialData, StartDay } from '@types'

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

    const currentDays =
        dateNumberForCurrentDays -
        new Date(year, monthIndex, dateNumberForCurrentDays).getDate()
    const prevDays = getCellsPrevMonth(year, monthIndex)

    const nextDays = getCellsNextMonth(year, monthIndex)

    daysInMonth += currentDays
    daysInMonth += prevDays
    daysInMonth += nextDays

    return daysInMonth
}

export const getDaysInMonth = (year: number, monthIndex: number) => {
    const days = new Date(year, monthIndex, 0).getDate()
    return days
}

export const getInitialCells = <T>(
    len: number,
    data: T[] = [],
    initialIndex: number = 0
) => {
    return [
        ...Array(len)
            .fill({})
            .map((_, index) => ({
                id: String(index + 1 + initialIndex),
                data: data[initialIndex + index] ?? [],
            })),
    ]
}

export const getCalendarCells = (
    year: number,
    monthIndex: number,
    startDay: StartDay
) => {
    let actualPrevMonthDays = new Date(year, monthIndex).getDay() - startDay
    if (actualPrevMonthDays < 0)
        actualPrevMonthDays = daysInWeek - Math.abs(actualPrevMonthDays)
    const countDaysPrevMonth = getDaysInMonth(year, monthIndex)
    const countDaysActiveMonth = getDaysInMonth(year, monthIndex + 1)
    const cellsInActiveMonth = getCellsInMonth(year, monthIndex)
    const countDaysArrays = cellsInActiveMonth / daysInWeek
    const prevMonthCellsCount = getAllCellsPrevMonths(year, monthIndex)

    const days: CellsInitialData[] = getInitialCells(countDaysArrays)

    let arr = []
    let j = 0
    const yearId = getCountCellsPrevYears(year)

    let numberForReversePrevMonthIds = actualPrevMonthDays - 1
    let cellId = yearId + prevMonthCellsCount
    for (
        let i = countDaysPrevMonth;
        i > countDaysPrevMonth - actualPrevMonthDays;
        i--
    ) {
        if (days[j].data.length === daysInWeek) {
            ++j
        }
        arr.unshift({
            id: String(cellId + numberForReversePrevMonthIds),
            day: i,
        })
        cellId++
        numberForReversePrevMonthIds -= reversePrevId
    }
    for (let i = 1; i <= countDaysActiveMonth; i++) {
        arr.push({ id: String(cellId), day: i })
        cellId++
        if (arr.length === daysInWeek) {
            days[j].data = arr
            arr = []
            j++
        }
    }
    const len = arr.length
    for (let i = 1; i <= cellsInActiveMonth - j * daysInWeek + len; i++) {
        arr.push({ id: String(cellId), day: i })
        cellId++
        if (arr.length === daysInWeek) {
            days[j].data = arr
            arr = []
            j++
        }
    }
    return days
}

export const getPopupTableCells = (len: number, id: number) => {
    return [
        ...Array(len)
            .fill({})
            .map((_, index) => String(id + index)),
    ]
}
