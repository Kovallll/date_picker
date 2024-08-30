import calendarIcon from '@assets/icons/calendar.svg'
import clearIcon from '@assets/icons/clear.svg'
import nextIcon from '@assets/icons/next.svg'
import prevIcon from '@assets/icons/prev.svg'

export enum Month {
    January = 'January',
    February = 'February',
    March = 'March',
    April = 'April',
    May = 'May',
    June = 'June',
    July = 'July',
    August = 'August',
    September = 'September',
    October = 'October',
    November = 'November',
    December = 'December',
}

export const monthDays = {
    [Month.January]: 31,
    [Month.February]: 28,
    [Month.March]: 31,
    [Month.April]: 30,
    [Month.May]: 31,
    [Month.June]: 30,
    [Month.July]: 31,
    [Month.August]: 31,
    [Month.September]: 30,
    [Month.October]: 31,
    [Month.November]: 30,
    [Month.December]: 31,
}

export const weekDays = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su']

export const months = [
    Month.January,
    Month.February,
    Month.March,
    Month.April,
    Month.May,
    Month.June,
    Month.July,
    Month.August,
    Month.September,
    Month.October,
    Month.November,
    Month.December,
]

export const yearNow = new Date().getFullYear()

export const daysOnTable = 35

export const daysInWeek = 7

export const icons = {
    prevArrowIcon: prevIcon,
    nextArrowIcon: nextIcon,
    calendarIcon: calendarIcon,
    clearIcon: clearIcon,
}
