import { getCellsInMonth } from '../getCellsInMonth'
import { getCountCellsPrevMonths } from '../getCountCellsPrevMonths'
import { getCountCellsPrevYears } from '../getCountCellsPrevYears'
import { getDaysInMonth } from '../getDaysInMonth'
import { getInitialCells } from '../getInitialCells'

import { daysInWeek } from '@constants'
import { CellsInitialData, StartDay } from '@types'

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
    const countDaysArrays = cellsInActiveMonth / 7
    const days: CellsInitialData[] = getInitialCells(countDaysArrays, [])

    let arr = []
    let j = 0

    const yearId = getCountCellsPrevYears(year)
    const prevMonthCellsCount = getCountCellsPrevMonths(year, monthIndex)
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
        numberForReversePrevMonthIds -= 2
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
