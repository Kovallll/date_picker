import {
    CalendarImageButton,
    ClearImageButton,
    Container,
    Image,
    Input,
    InputBlock,
} from './styled'
import { DateInputProps } from './types'

import {
    countMonth,
    icons,
    inputDaySlashIndex,
    inputMonthSlashIndex,
    maxDays,
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

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target

        const maskedValue = maskDateInput(value)
        handleChangeDateInput(maskedValue)
    }

    const maskDateInput = (date: string) => {
        handleChangeError('')
        const { isValidDate, inputYear, inputMonth, inputDay } =
            getValidInputCell(date)
        const clearValue = date.replace(/\//g, '')
        const isNotNumber = /\D/.test(clearValue)
        const dateLen = date.length
        if (
            !isValidDate &&
            inputYear >= 0 &&
            inputMonth >= 1 &&
            inputDay >= 1
        ) {
            handleChangeError('Такой даты не существует!')
        }
        if (isNotNumber) {
            return date.slice(0, date.length - 1)
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
        const dayWithSlashId = 3
        const monthWithSlashId = 7
        if (e.key === 'Backspace' || e.key === 'Delete') {
            const cursorPosition = (e.target as HTMLInputElement).selectionStart
            if (
                (cursorPosition === inputDaySlashIndex + 1 &&
                    date.length <= dayWithSlashId) ||
                (cursorPosition === inputMonthSlashIndex + 1 &&
                    date.length <= monthWithSlashId)
            ) {
                handleChangeDateInput(
                    date.slice(0, cursorPosition - 1) +
                        date.slice(cursorPosition)
                )
            }
        }
    }

    const handleClearDate = () => {
        handleChangeDateInput('')
        handleChangeError('')
    }
    const maxLenInput = 10
    return (
        <Container>
            <InputBlock>
                <CalendarImageButton onClick={handleOpenCalendar}>
                    <Image src={icons.calendarIcon} />
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
                    <Image src={icons.clearIcon} />
                </ClearImageButton>
            </InputBlock>
        </Container>
    )
}
