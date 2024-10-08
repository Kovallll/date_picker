import { daysInWeek } from '@constants'
import { CustomHolidays, Holidays, StartDay } from '@types'
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

    const formattedYear = newDate.getFullYear()
    const formattedMonth = String(newDate.getMonth() + 1).padStart(2, '0')
    const formattedDay = String(newDate.getDate()).padStart(2, '0')

    const date = `${formattedDay}/${formattedMonth}/${formattedYear}`

    return date
}

export const getHolidaysData = (data: CustomHolidays[]) => {
    const holidaysData: Holidays[] = data.map((item) => {
        const [day, month, year] = item.date.split('/')
        if (year === '*') {
            return { id: `*${day}/${month}`, holiday: item.holiday }
        } else {
            const { isValidDate, inputCellId } = getValidInputCell(item.date)
            if (isValidDate)
                return { id: String(inputCellId), holiday: item.holiday }
        }
    })

    return holidaysData
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

    if (!inputDay || (inputDay === 0 && prevInputDay)) {
        inputDay = prevInputDay
    }
    if (!inputMonth || (inputMonth === 0 && prevInputMonth)) {
        inputMonth = prevInputMonth
    }

    const yearId = getCountCellsPrevYears(inputYear)
    const prevMonthCellsCount =
        getAllCellsPrevMonths(inputYear, inputMonth - 1) +
        getCellsPrevMonth(inputYear, inputMonth - 1)
    const inputCellId = yearId + prevMonthCellsCount + inputDay - 1
    return { isValidDate, inputCellId, inputYear, inputMonth, inputDay }
}

export const getMonthAndDaysByWeek = (
    year: number,
    weekNumber: number,
    startDay: StartDay
) => {
    const firstDayOfYear = new Date(year, 0, 1 - startDay)

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
        days.push(Number(new Date(d).toString().split(' ')[2]))
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
