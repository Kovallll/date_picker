import calendarIcon from '@assets/icons/calendar.svg'
import clearIcon from '@assets/icons/clear.svg'
import disabledNextArrowIcon from '@assets/icons/disabledNextArrow.svg'
import disabledPrevArrowIcon from '@assets/icons/disabledPrevArrow.svg'
import nextArrowIcon from '@assets/icons/nextArrow.svg'
import prevArrowIcon from '@assets/icons/prevArrow.svg'

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

export const initialWeekDays = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su']

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

export const daysInWeek = 7

export const countMonth = 12

export const numberBaseMonth = 1

export const initialRangeStart = -1

export const initialRangeEnd = -1

export const initialActiveCellId = '-1'

export const defaultProps = {
    defaultYear: 2024,
    defaultMonth: 1,
}

export const icons = {
    prevArrowIcon,
    nextArrowIcon,
    disabledNextArrowIcon,
    disabledPrevArrowIcon,
    calendarIcon,
    clearIcon,
}
