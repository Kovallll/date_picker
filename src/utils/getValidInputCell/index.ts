import {
    getAllCellsPrevMonths,
    getCellsPrevMonth,
    getCountCellsPrevYears,
} from '@utils'

export const getValidInputCell = (
    inputData: string,
    prevInputData: string = ''
) => {
    let [inputDay, inputMonth, inputYear] = inputData.split('/').map(Number)
    const limitYear = 1000
    const [prevInputDay, prevInputMonth, prevInputYear] = prevInputData
        .split('/')
        .map(Number)

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
    if (inputYear === 0 && prevInputYear) {
        inputYear = prevInputYear
    }
    const yearId = getCountCellsPrevYears(inputYear)
    const prevMonthCellsCount =
        getAllCellsPrevMonths(inputYear, inputMonth - 1) +
        getCellsPrevMonth(inputYear, inputMonth - 1)
    const inputCellId = String(yearId + prevMonthCellsCount + inputDay - 1)
    return { isValidDate, inputCellId, inputYear, inputMonth, inputDay }
}
