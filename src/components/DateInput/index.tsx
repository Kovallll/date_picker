import { calendarAlt, clearAlt, noDateError } from './config'
import {
    CalendarImageButton,
    ClearImageButton,
    DateSection,
    Image,
    Input,
    InputBlock,
} from './styled'
import { DateInputProps } from './types'

import {
    countMonth,
    dayWithSlashId,
    icons,
    inputDaySlashIndex,
    inputMonthSlashIndex,
    maxDays,
    monthWithSlashId,
    NaNRegExp,
    pickSlashRegExp,
} from '@constants'
import { getValidInputCell } from '@utils'

export const DateInput = (props: DateInputProps) => {
    const {
        handleChangeError,
        handleKeyboardChange,
        handleOpenCalendar,
        handleChangeDateInput,
        handleFocus,
        placeholder,
        date,
        isDisabled = false,
    } = props

    const { isValidDate, inputYear, inputMonth, inputDay } =
        getValidInputCell(date)
    const isError =
        !isValidDate && inputYear >= 0 && inputMonth >= 1 && inputDay >= 1

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target
        const clearValue = value.replace(pickSlashRegExp, '')
        const isNotNumber = NaNRegExp.test(clearValue)

        if (!isNotNumber) {
            const maskedValue = maskDateInput(value)
            handleChangeDateInput(maskedValue)
        }
    }

    const maskDateInput = (date: string) => {
        handleChangeError('')

        const dateLen = date.length
        if (isError) {
            handleChangeError(noDateError)
        }
        if (inputDay > maxDays) {
            return date.slice(0, inputDaySlashIndex)
        }
        if (inputMonth > countMonth) {
            return date.slice(0, inputMonthSlashIndex)
        }
        if (dateLen === inputMonthSlashIndex) {
            return (
                date.slice(0, inputMonthSlashIndex) +
                '/' +
                date.slice(inputMonthSlashIndex)
            )
        }
        if (dateLen === inputDaySlashIndex) {
            return (
                date.slice(0, inputDaySlashIndex) +
                '/' +
                date.slice(inputDaySlashIndex)
            )
        }
        return date
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        handleKeyboardChange(true)

        if (e.key === 'Backspace' || e.key === 'Delete') {
            const cursorPosition = (e.target as HTMLInputElement).selectionStart

            const isCursorAfterSlash =
                (cursorPosition === inputDaySlashIndex + 1 &&
                    date.length <= dayWithSlashId) ||
                (cursorPosition === inputMonthSlashIndex + 1 &&
                    date.length <= monthWithSlashId)

            if (isCursorAfterSlash) {
                const inputDate =
                    date.slice(0, cursorPosition - 1) +
                    date.slice(cursorPosition)
                handleChangeDateInput(inputDate)
            }
        }
    }

    const handleClearDate = () => {
        handleChangeDateInput('')
        handleChangeError('')
    }
    const maxLenInput = 10
    return (
        <DateSection>
            <InputBlock>
                <CalendarImageButton onClick={handleOpenCalendar}>
                    <Image src={icons.calendarIcon} alt={calendarAlt} />
                </CalendarImageButton>
                <Input
                    value={date}
                    onChange={handleChange}
                    type="text"
                    placeholder={placeholder && placeholder}
                    onKeyDown={handleKeyDown}
                    onFocus={handleFocus}
                    maxLength={maxLenInput}
                    disabled={isDisabled}
                />
                <ClearImageButton onClick={handleClearDate}>
                    <Image src={icons.clearIcon} alt={clearAlt} />
                </ClearImageButton>
            </InputBlock>
        </DateSection>
    )
}
