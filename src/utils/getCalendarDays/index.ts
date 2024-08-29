import { daysInWeek, Month, monthDays, months } from '@constants'
import { DaysTable } from '@types'

export const getCalendarDays = (
    year: number,
    month: number,
    countOfRows: number
) => {
    const actualPrevMonthDays = new Date(year, month).getDay() - 1
    const prevMonth: Month = months[month - 1]
    const activeMonth = months[month]
    const countDaysPrevMonth = monthDays[prevMonth]
    const countDaysActiveMonth = monthDays[activeMonth]
    const days: DaysTable[] = [
        ...Array(countOfRows)
            .fill({})
            .map((_, index) => ({
                id: String(index),
                data: [],
            })),
    ]
    let j = 0
    let id = 1
    for (
        let i = countDaysPrevMonth;
        i > countDaysPrevMonth - actualPrevMonthDays;
        i--
    ) {
        if (days[j].data.length === daysInWeek) {
            j++
        }
        days[j].data.unshift({ id: String(id), day: i })
        id++
    }
    for (let i = 1; i <= countDaysActiveMonth; i++) {
        if (days[j].data.length === daysInWeek) {
            j++
        }
        days[j].data.push({ id: String(id), day: i })
        id++
    }
    const length = days[j].data.length
    for (let i = 1; i <= daysInWeek - length; i++) {
        days[j].data.push({ id: String(id), day: i })
        id++
    }

    return days
}
