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

export enum WeekDays {
    Monday = 'Mo',
    Tuesday = 'Tu',
    Wednesday = 'We',
    Thursday = 'Th',
    Friday = 'Fr',
    Saturday = 'Sa',
    Sunday = 'Su',
}

export const initialWeekDays = [
    WeekDays.Monday,
    WeekDays.Tuesday,
    WeekDays.Wednesday,
    WeekDays.Thursday,
    WeekDays.Friday,
    WeekDays.Saturday,
    WeekDays.Sunday,
]

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

export const initialInputDate = {
    isValidDate: true,
    inputCellId: '0',
    inputYear: 0,
    inputMonth: 0,
    inputDay: 0,
}

export const initialInput = {
    date: '',
    prevDate: '',
}

export const daysInWeek = 7

export const countMonth = 12

export const maxDays = 31

export const numberBaseMonth = 1

export const initialActiveCellId = '-1'

export const startMonday = 1

export const startSunday = 0

export const maxInputLen = 10

export const inputMonthSlashIndex = 5

export const inputDaySlashIndex = 2

export const prevCurrentMonth = 2

export const pickSlashRegExp = /\//g

export const NaNRegExp = /\D|\s/

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
