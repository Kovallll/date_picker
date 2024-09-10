import { memo, useContext, useRef, useState } from 'react'

import {
    datePlaceholder,
    endRangePlaceholder,
    startRangePlaceholder,
} from './config'
import { CalendarBlock, Container, ErrorMesssage, InputBlock } from './styled'
import { DefaultCalendarProps } from './types'

import { InputContext } from '@components/Calendar'
import DateBar from '@components/DateBar'
import { DateInput } from '@components/DateInput'
import { DaysTable } from '@components/DaysTable'
import WeekBar from '@components/WeekBar'
import { daysInWeek, initialWeekDays } from '@constants'
import { useClickOutside, useCurrentDate, useInputDate } from '@hooks'

const DefaultCalendar = (props: DefaultCalendarProps) => {
    const {
        initialYear,
        initialMonth,
        isWithRange = false,
        onClickWithRange,
        ...restProps
    } = props
    const isWithInput = useContext(InputContext)
    const [isOpen, setIsOpen] = useState(!isWithInput)
    const [error, setError] = useState('')
    const [isKeyboardChange, setIsKeyboardChange] = useState(false)
    const calendarRef = useRef(null)
    const {
        firstInputDate,
        handleChangeFirstDateInput,
        secondInputDate,
        handleChangeSecondDateInput,
    } = useInputDate()
    const {
        currentMonth,
        year,
        handleChangeCurrentMonth,
        handleChangeYear,
        handleDecrementMonth,
        handleIncrementMonth,
    } = useCurrentDate(initialMonth, initialYear)

    const isDisabled = firstInputDate.length <= daysInWeek
    const handleChangeError = (error: string) => {
        setError(error)
    }

    useClickOutside(calendarRef, () => {
        if (isWithInput) {
            setError('')
            handleChangeFirstDateInput('')
            handleChangeSecondDateInput('')
            setIsOpen(false)
        }
    })

    const handleKeyboardChange = (isKeyboard: boolean) => {
        setIsKeyboardChange(isKeyboard)
    }

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
        <Container
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
                <CalendarBlock {...restProps}>
                    <DateBar
                        year={year}
                        currentMonth={currentMonth}
                        increment={handleIncrementMonth}
                        decrement={handleDecrementMonth}
                        handleChangeCurrentMonth={handleChangeCurrentMonth}
                        handleChangeYear={handleChangeYear}
                    />
                    <WeekBar />
                    <DaysTable
                        handleChangeError={handleChangeError}
                        firstInputDate={firstInputDate}
                        secondInputDate={secondInputDate}
                        isWithRange={isWithRange}
                        handleKeyboardChange={handleKeyboardChange}
                        isKeyboardChange={isKeyboardChange}
                        handleDecrementMonth={handleDecrementMonth}
                        handleIncrementMonth={handleIncrementMonth}
                        handleChangeCurrentMonth={handleChangeCurrentMonth}
                        handleChangeYear={handleChangeYear}
                        onClickWithRange={onClickWithRange}
                        handleChangeFirstDateInput={handleChangeFirstDateInput}
                        handleChangeSecondDateInput={
                            handleChangeSecondDateInput
                        }
                        year={year}
                        currentMonth={currentMonth}
                        initialWeekDays={initialWeekDays}
                    />
                </CalendarBlock>
            )}
        </Container>
    )
}

export default memo(DefaultCalendar)
