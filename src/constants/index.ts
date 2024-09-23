import addIcon from '@assets/icons/add.svg'
import calendarIcon from '@assets/icons/calendar.svg'
import clearIcon from '@assets/icons/clear.svg'
import deleteIcon from '@assets/icons/delete.svg'
import disabledAddIcon from '@assets/icons/disabledAdd.svg'
import disabledDeleteIcon from '@assets/icons/disabledDelete.svg'
import disabledNextArrowIcon from '@assets/icons/disabledNextArrow.svg'
import disabledPrevArrowIcon from '@assets/icons/disabledPrevArrow.svg'
import nextArrowIcon from '@assets/icons/nextArrow.svg'
import prevArrowIcon from '@assets/icons/prevArrow.svg'
import { getWeekNumber } from '@utils'

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

export const daysInWeek = 7

export const countMonth = 12

export const countElementInPopupTableRow = 3

export const countElementInPopupTableColumn = 4

export const countElementInPopupTable = 12

export const maxCountWeeks = 52

export const minBarrierWeek = 29

export const maxWeekInPopupTable = 41

export const minWeekInPopupTable = 1

export const maxDays = 31

export const numberBaseMonth = 1

export const initialActiveCellId = '-1'

export const startMonday = 1

export const startSunday = 0

export const inputMonthSlashIndex = 5

export const inputDaySlashIndex = 2

export const prevCurrentMonth = 2

export const reversePrevId = 2

export const dateNumberForCurrentDays = 33

export const dayWithSlashId = 3

export const countMsInDay = 86400000

export const thursdayIndex = 4

export const monthWithSlashId = 7

export const waitTime = 600

export const pickSlashRegExp = /\//g

export const NaNRegExp = /\D|\s/

export const defaultHoliday = { id: '0', holiday: '' }

export const defaultGetHoliday = { isHoliday: false, holidayTitle: '' }

export const maxLenHolidayText = 25

export const currentDate = new Date()

export const maxLenTodo = 12

export const icons = {
    prevArrowIcon,
    nextArrowIcon,
    disabledNextArrowIcon,
    disabledPrevArrowIcon,
    calendarIcon,
    clearIcon,
    deleteIcon,
    disabledDeleteIcon,
    disabledAddIcon,
    addIcon,
}

export const defaultMinMaxDate = {
    minDate: '',
    maxDate: '',
    minDateCellId: 0,
    maxDateCellId: 0,
    minMonth: 0,
    maxMonth: 0,
    minYear: 0,
    maxYear: 0,
}

export const initialProps = {
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
    weekId: getWeekNumber(currentDate),
}

export const todosKey = 'todos'

export const holidays = [
    { date: '15/03/*', holiday: 'Constitution Day' },
    {
        date: '2/04/*',
        holiday: 'Union Day of Belarus and Russia',
    },
    {
        date: '09/05/*',
        holiday: 'Victory Day',
    },
    {
        date: '03/07/*',
        holiday: 'Independence Day',
    },
    {
        date: '17/09/*',
        holiday: 'Day of People’s Unity',
    },
    {
        date: '01/01/*',
        holiday: 'New Year',
    },
    {
        date: '07/01/*',
        holiday: 'Orthodox Christmas',
    },
    {
        date: '23/02/*',
        holiday:
            'Fatherland Defenders and Armed Forces day of the Republic of Belarus',
    },
]
