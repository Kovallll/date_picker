import { countMonth, daysInWeek } from '@constants'
import { CellsInitialData } from '@types'
import {
    getAllCellsPrevMonths,
    getCellsInMonth,
    getCountCellsPrevYears,
} from '@utils'

const getDaysInMonth = (year: number, monthIndex: number) => {
    const days = new Date(year, monthIndex, 0).getDate()
    return days
}

const getInitialCells = <T>(
    len: number,
    array: Array<T> = [],
    initialId: number = 0
) => {
    return [
        ...Array(len)
            .fill({})
            .map((_, index) => ({
                id: String(initialId * countMonth + index + 1),
                data: array,
            })),
    ]
}

export const getCalendarCells = (year: number, monthIndex: number) => {
    let actualPrevMonthDays = new Date(year, monthIndex).getDay() - 1
    if (actualPrevMonthDays < 0)
        actualPrevMonthDays = daysInWeek - Math.abs(actualPrevMonthDays)
    const countDaysPrevMonth = getDaysInMonth(year, monthIndex)
    const countDaysActiveMonth = getDaysInMonth(year, monthIndex + 1)
    const cellsInActiveMonth = getCellsInMonth(year, monthIndex)
    const countDaysArrays = cellsInActiveMonth / daysInWeek
    const days: CellsInitialData[] = getInitialCells(countDaysArrays, [])

    let arr = []
    let j = 0

    const yearId = getCountCellsPrevYears(year)
    const prevMonthCellsCount = getAllCellsPrevMonths(year, monthIndex)
    const reversePrevId = 2
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
