import { memo, useContext, useRef, useState } from 'react'

import {
    datePlaceholder,
    endRangePlaceholder,
    startRangePlaceholder,
} from './config'
import { CalendarBlock, Container, ErrorMesssage, InputBlock } from './styled'
import { DefaultCalendarProps } from './types'

import { InputContext } from '@components/Calendar'
import { DateInput } from '@components/DateInput'
import { DaysTable } from '@components/DaysTable'
import MonthBar from '@components/MonthBar'
import WeekBar from '@components/WeekBar'
import {
    countMonth,
    daysInWeek,
    initialWeekDays,
    numberBaseMonth,
} from '@constants'
import { useClickOutside } from '@hooks'

const DefaultCalendar = (props: DefaultCalendarProps) => {
    const {
        initialYear,
        initialMonth,
        isWithRange = false,
        onClickWithRange,
        ...restProps
    } = props
    const isWithInput = useContext(InputContext)
    const [currentMonth, setCurrentMonth] = useState(initialMonth)
    const [year, setYear] = useState(initialYear)
    const [isOpen, setIsOpen] = useState(!isWithInput)
    const [error, setError] = useState('')
    const [firstInputDate, setFirstInputDateDate] = useState('')
    const [secondInputDate, setSecondInputDateDate] = useState('')
    const [isKeyboardChange, setIsKeyboardChange] = useState(false)
    const calendarRef = useRef(null)
    const isDisabled = firstInputDate.length <= daysInWeek
    const handleChangeError = (error: string) => {
        setError(error)
    }
    useClickOutside(calendarRef, () => {
        if (isWithInput) {
            setError('')
            setSecondInputDateDate('')
            setFirstInputDateDate('')
            setIsOpen(false)
        }
    })
    const handleChangeYear = (year: number) => {
        setYear(year)
    }

    const handleKeyboardChange = (isKeyboard: boolean) => {
        setIsKeyboardChange(isKeyboard)
    }

    const handleChangeCurrentMonth = (currentMonth: number) => {
        setCurrentMonth(currentMonth)
    }

    const handleChangeFirstDateInput = (value: string) => {
        setFirstInputDateDate(value)
    }

    const handleChangeSecondDateInput = (value: string) => {
        if (!isDisabled) setSecondInputDateDate(value)
    }

    const handleFocus = () => {
        setIsOpen(true)
    }

    const handleOpenCalendar = () => {
        setIsOpen((prev) => !prev)
        handleChangeFirstDateInput('')
        handleChangeError('')
    }

    const handleIncrementMonth = () => {
        if (currentMonth === countMonth) {
            setCurrentMonth(numberBaseMonth)
            setYear((prev) => prev + 1)
        } else setCurrentMonth((prev) => prev + 1)
    }

    const handleDecrementMonth = () => {
        if (currentMonth === numberBaseMonth) {
            setCurrentMonth(countMonth)
            setYear((prev) => prev - 1)
        } else setCurrentMonth((prev) => prev - 1)
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
                    <MonthBar
                        year={year}
                        currentMonth={currentMonth}
                        increment={handleIncrementMonth}
                        decrement={handleDecrementMonth}
                    />
                    <WeekBar />
                    <DaysTable
                        error={error}
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
