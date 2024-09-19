import { memo, useCallback, useContext, useRef, useState } from 'react'

import {
    datePlaceholder,
    endRangePlaceholder,
    startRangePlaceholder,
} from './config'
import { Article, CalendarSection, ErrorMesssage, InputBlock } from './styled'
import { DefaultCalendarProps } from './types'

import DateBar from '@components/DateBar'
import { DateInput } from '@components/DateInput'
import DaysTable from '@components/DaysTable'
import WeekBar from '@components/WeekBar'
import { initialWeekDays } from '@constants'
import { InputContext } from '@context'
import { useClickOutside, useInputDate } from '@hooks'
import { getValidInputCell } from '@utils'

const DefaultCalendar = (props: DefaultCalendarProps) => {
    const {
        isWithRange = false,
        onClickWithRange,
        isChangeStartDay,
        handleChangeWeekDays,
        handleGetHoliday,
        handleGetAllHolidays,
        minMaxDate,
        startDay = 1,
        ...restProps
    } = props
    const isWithInput = useContext(InputContext)
    const [isOpen, setIsOpen] = useState(!isWithInput)
    const [error, setError] = useState('')
    const [isKeyboardChange, setIsKeyboardChange] = useState(false)
    const [weekDays, setWeekDays] = useState(initialWeekDays)

    const calendarRef = useRef(null)
    const {
        firstInputDate,
        handleChangeFirstDateInput,
        secondInputDate,
        handleChangeSecondDateInput,
    } = useInputDate()
    const { isValidDate: isValidFirstInput } = getValidInputCell(firstInputDate)
    const validFirstInput = isValidFirstInput ? firstInputDate : ''
    const { isValidDate: isValidSecondInput } =
        getValidInputCell(secondInputDate)
    const validSecondInput = isValidSecondInput ? secondInputDate : ''

    const isSunday =
        !!isChangeStartDay &&
        weekDays === initialWeekDays &&
        !!handleChangeWeekDays

    if (isSunday) {
        const newWeekDays = handleChangeWeekDays()
        setWeekDays(newWeekDays)
    }

    const isDisabled = !validFirstInput
    const handleChangeError = useCallback((error: string) => {
        setError(error)
    }, [])

    useClickOutside(calendarRef, () => {
        if (isWithInput) {
            setError('')
            handleChangeFirstDateInput('')
            handleChangeSecondDateInput('')
            setIsOpen(false)
        }
    })

    const handleKeyboardChange = useCallback((isKeyboard: boolean) => {
        setIsKeyboardChange(isKeyboard)
    }, [])

    const handleFocus = () => {
        setIsOpen(true)
    }

    const handleOpenCalendar = () => {
        setIsOpen((prev) => !prev)
        handleChangeFirstDateInput('')
        handleChangeError('')
    }

    const placeholder = isWithRange ? startRangePlaceholder : datePlaceholder
    return (
        <CalendarSection
            $isWithRange={isWithRange}
            $isWithInput={isWithInput}
            ref={calendarRef}
        >
            <ErrorMesssage>{error && error}</ErrorMesssage>
            <InputBlock>
                {isWithInput && (
                    <DateInput
                        placeholder={placeholder}
                        handleChangeError={handleChangeError}
                        handleKeyboardChange={handleKeyboardChange}
                        handleFocus={handleFocus}
                        handleOpenCalendar={handleOpenCalendar}
                        handleChangeDateInput={handleChangeFirstDateInput}
                        date={firstInputDate}
                    />
                )}
                {isWithInput && isWithRange && (
                    <DateInput
                        placeholder={endRangePlaceholder}
                        handleChangeError={handleChangeError}
                        handleKeyboardChange={handleKeyboardChange}
                        handleFocus={handleFocus}
                        handleOpenCalendar={handleOpenCalendar}
                        handleChangeDateInput={handleChangeSecondDateInput}
                        date={secondInputDate}
                        isDisabled={isDisabled}
                    />
                )}
            </InputBlock>
            {isOpen && (
                <Article {...restProps}>
                    <DateBar minMaxDate={minMaxDate} />
                    <WeekBar weekDays={weekDays} />
                    <DaysTable
                        handleChangeError={handleChangeError}
                        firstInputDate={validFirstInput}
                        secondInputDate={validSecondInput}
                        isWithRange={isWithRange}
                        handleKeyboardChange={handleKeyboardChange}
                        isKeyboardChange={isKeyboardChange}
                        onClickWithRange={onClickWithRange}
                        handleChangeFirstDateInput={handleChangeFirstDateInput}
                        handleChangeSecondDateInput={
                            handleChangeSecondDateInput
                        }
                        weekDays={weekDays}
                        startDay={startDay}
                        handleGetHoliday={handleGetHoliday}
                        handleGetAllHolidays={handleGetAllHolidays}
                        minMaxDate={minMaxDate}
                    />
                </Article>
            )}
        </CalendarSection>
    )
}

export default memo(DefaultCalendar)
