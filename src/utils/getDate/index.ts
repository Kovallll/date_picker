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
    let [inputDay, inputMonth, inputYear] = inputData.split('/').map(Number)
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
