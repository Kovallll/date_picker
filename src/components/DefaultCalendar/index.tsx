import { memo, useContext, useRef, useState } from 'react'

import {
    datePlaceholder,
    endRangePlaceholder,
    startRangePlaceholder,
} from './config'
import { Article, ErrorMesssage, InputBlock, Section } from './styled'
import { DefaultCalendarProps } from './types'

import DateBar from '@components/DateBar'
import { DateInput } from '@components/DateInput'
import { DaysTable } from '@components/DaysTable'
import WeekBar from '@components/WeekBar'
import { daysInWeek, initialWeekDays } from '@constants'
import { InputContext } from '@context'
import { useClickOutside, useInputDate } from '@hooks'

const DefaultCalendar = (props: DefaultCalendarProps) => {
    const {
        isWithRange = false,
        onClickWithRange,
        isChangeStartDay,
        handleChangeWeekDays,
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

    const isSunday =
        !!isChangeStartDay &&
        weekDays === initialWeekDays &&
        !!handleChangeWeekDays

    if (isSunday) {
        const newWeekDays = handleChangeWeekDays()
        setWeekDays(newWeekDays)
    }

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
        <Section
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
                    <DateBar />
                    <WeekBar weekDays={weekDays} />
                    <DaysTable
                        handleChangeError={handleChangeError}
                        firstInputDate={firstInputDate}
                        secondInputDate={secondInputDate}
                        isWithRange={isWithRange}
                        handleKeyboardChange={handleKeyboardChange}
                        isKeyboardChange={isKeyboardChange}
                        onClickWithRange={onClickWithRange}
                        handleChangeFirstDateInput={handleChangeFirstDateInput}
                        handleChangeSecondDateInput={
                            handleChangeSecondDateInput
                        }
                        initialWeekDays={initialWeekDays}
                        startDay={startDay}
                    />
                </Article>
            )}
        </Section>
    )
}

export default memo(DefaultCalendar)
