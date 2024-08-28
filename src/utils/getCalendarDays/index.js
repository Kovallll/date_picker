import { monthDays, months } from '../../constants'

export const getCalendarDays = (year, month) => {
    const actualPrevMonthDays = new Date(year, month).getDay() - 1
    const prevMonth = months[month - 1]
    const activeMonth = months[month]
    const countDaysPrevMonth = monthDays[prevMonth]
    const countDaysActiveMonth = monthDays[activeMonth]
    const days = [
        { id: 1, data: [] },
        { id: 2, data: [] },
        { id: 3, data: [] },
        { id: 4, data: [] },
        { id: 5, data: [] },
    ]
    let j = 0
    let id = 1
    for (
        let i = countDaysPrevMonth;
        i > countDaysPrevMonth - actualPrevMonthDays;
        i--
    ) {
        if (days[j].data.length === 7) {
            j++
        }
        days[j].data.unshift({ id, day: i })
        id++
    }
    for (let i = 1; i <= countDaysActiveMonth; i++) {
        if (days[j].data.length === 7) {
            j++
        }
        days[j].data.push({ id, day: i })
        id++
    }
    let i = 1
    while (days[j].data.length !== 7) {
        days[j].data.push({ id, day: i })
        i++
        id++
    }

    return days
}
