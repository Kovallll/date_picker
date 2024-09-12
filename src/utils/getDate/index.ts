import { daysInWeek } from '@constants'
import {
    getAllCellsPrevMonths,
    getCellsPrevMonth,
    getCountCellsPrevYears,
} from '@utils'

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

export const getValidInputCell = (
    inputData: string,
    prevInputData: string = ''
) => {
    let [inputDay, inputMonth] = inputData.split('/').map(Number)
    const inputYear = Number(inputData.split('/')[2])

    const limitYear = 1000
    const [prevInputDay, prevInputMonth] = prevInputData.split('/').map(Number)

    const dateObj = new Date(inputYear, inputMonth - 1, inputDay)
    let dateYear = dateObj.getFullYear()
    if (inputYear >= 0 && inputYear < limitYear) {
        const d = new Date(
            Date.UTC(inputYear + limitYear, inputMonth - 1, inputDay)
        )
        d.setUTCFullYear(d.getFullYear() - limitYear)
        dateYear = d.getFullYear()
    }
    const isValidDate =
        dateYear === inputYear &&
        dateObj.getMonth() === inputMonth - 1 &&
        dateObj.getDate() === inputDay

    if (inputDay === 0 && prevInputDay) {
        inputDay = prevInputDay
    }
    if (inputMonth === 0 && prevInputMonth) {
        inputMonth = prevInputMonth
    }

    const yearId = getCountCellsPrevYears(inputYear)
    const prevMonthCellsCount =
        getAllCellsPrevMonths(inputYear, inputMonth - 1) +
        getCellsPrevMonth(inputYear, inputMonth - 1)
    const inputCellId = String(yearId + prevMonthCellsCount + inputDay - 1)
    return { isValidDate, inputCellId, inputYear, inputMonth, inputDay }
}

export const getMonthAndDaysByWeek = (year: number, weekNumber: number) => {
    const firstDayOfYear = new Date(year, 0, 1)

    const firstMonday = new Date(firstDayOfYear)
    firstMonday.setDate(
        firstDayOfYear.getDate() +
            ((1 - firstDayOfYear.getDay() + daysInWeek) % daysInWeek)
    )

    const startOfWeek = new Date(firstMonday)
    startOfWeek.setDate(firstMonday.getDate() + (weekNumber - 1) * daysInWeek)

    const endOfWeek = new Date(startOfWeek)
    endOfWeek.setDate(startOfWeek.getDate() + daysInWeek - 1)

    const monthStart = startOfWeek.getMonth() + 1
    const monthEnd = endOfWeek.getMonth() + 1

    const days = []
    for (let d = startOfWeek; d <= endOfWeek; d.setDate(d.getDate() + 1)) {
        days.push(Number(new Date(d).toLocaleDateString().split('.')[0]))
    }

    return {
        monthStart,
        monthEnd,
        days,
    }
}

export const getMonthByWeek = (year: number, weekNumber: number) => {
    const firstDayOfYear = new Date(year, 0, 1)

    const firstMonday = new Date(firstDayOfYear)
    firstMonday.setDate(
        firstDayOfYear.getDate() +
            ((1 - firstDayOfYear.getDay() + daysInWeek) % daysInWeek)
    )

    const startOfWeek = new Date(firstMonday)
    startOfWeek.setDate(firstMonday.getDate() + (weekNumber - 1) * daysInWeek)
    const month = startOfWeek.getMonth() + 1

    return month
}

export const getWeekNumber = (date: Date) => {
    const tempDate = new Date(date.getTime())
    const countMsInDay = 86400000

    tempDate.setHours(0, 0, 0, 0)
    tempDate.setDate(tempDate.getDate() + 4 - (tempDate.getDay() || daysInWeek))
    const yearStart = new Date(tempDate.getFullYear(), 0, 1)
    const weekNumber = Math.ceil(
        ((Number(tempDate) - Number(yearStart)) / countMsInDay + 1) / daysInWeek
    )

    return weekNumber
}
