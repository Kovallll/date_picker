import { daysInWeek } from '@constants'

export const getCellsInMonth = (year: number, monthIndex: number) => {
    let daysInMonth = 0
    const dateNumber = 33

    const currentDays =
        dateNumber - new Date(year, monthIndex, dateNumber).getDate()
    const prevDays =
        new Date(year, monthIndex).getDay() - 1 >= 0
            ? new Date(year, monthIndex).getDay() - 1
            : new Date(year, monthIndex).getDay() - 1 + daysInWeek
    const nextDays =
        (daysInWeek - (new Date(year, monthIndex + 1).getDay() - 1)) %
        daysInWeek
    daysInMonth += currentDays
    daysInMonth += prevDays
    daysInMonth += nextDays

    return daysInMonth
}
