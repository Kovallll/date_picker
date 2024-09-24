import { memo, useCallback, useContext, useMemo, useRef, useState } from 'react'

import {
    datePlaceholder,
    endRangePlaceholder,
    startRangePlaceholder,
    todoButtonText,
} from './config'
import {
    CalendarArticle,
    CalendarSection,
    ErrorMesssage,
    InputBlock,
    TodoButton,
} from './styled'
import { DefaultCalendarProps } from './types'

import DateBar from '@components/DateBar'
import { DateInput } from '@components/DateInput'
import DaysTable from '@components/DaysTable'
import TodoModal from '@components/TodoModal'
import WeekBar from '@components/WeekBar'
import { initialActiveCellId, initialWeekDays, todosKey } from '@constants'
import { InputContext } from '@context'
import { useClickOutside, useInputDate } from '@hooks'
import { calendarInfo } from '@service'
import { getValidInputCell, LocalStorage } from '@utils'

const DefaultCalendar = (props: DefaultCalendarProps) => {
    const calendarData = new calendarInfo()

    const {
        isWithRange = false,
        isWithTodos,
        onClickWithRange,
        isChangeStartDay,
        handleChangeWeekDays,
        handleRemoveTodo,
        handleAddTodo,
        handleRemoveAllTodos,
        handleUpdateTodo,
        handleGetHoliday,
        handleGetAllHolidays,
        minMaxDate,
        startDay = 1,
        ...restProps
    } = props
    const isWithInput = useContext(InputContext)
    const [isOpenTable, setIsOpenTable] = useState(!isWithInput)
    const [isOpenModal, setIsOpenModal] = useState(false)
    const [error, setError] = useState('')
    const [isKeyboardChange, setIsKeyboardChange] = useState(false)
    const [weekDays, setWeekDays] = useState(initialWeekDays)
    const [activeCellId, setActiveCellId] = useState(initialActiveCellId)

    const calendarRef = useRef(null)
    const {
        firstInputDate,
        handleChangeFirstDateInput,
        secondInputDate,
        handleChangeSecondDateInput,
    } = useInputDate()

    calendarData.updateData({
        firstInputDate,
        secondInputDate,
    })

    const handleChangeActiveCellId = (id: string) => {
        setActiveCellId(id)
    }

    const handleChangeModalState = useCallback(() => {
        setIsOpenModal((prev) => !prev)
    }, [])
    const { isValidDate: isValidFirstInput } = getValidInputCell(firstInputDate)
    const validFirstInput = isValidFirstInput ? firstInputDate : ''
    const { isValidDate: isValidSecondInput } =
        getValidInputCell(secondInputDate)
    const validSecondInput = isValidSecondInput ? secondInputDate : ''

    const isSunday =
        !!isChangeStartDay &&
        weekDays === initialWeekDays &&
        !!handleChangeWeekDays

    const isTodos =
        isWithTodos &&
        handleAddTodo &&
        handleRemoveTodo &&
        handleUpdateTodo &&
        handleRemoveAllTodos

    if (isSunday) {
        const newWeekDays = handleChangeWeekDays()
        setWeekDays(newWeekDays)
    }

    const isDisabledTodos =
        activeCellId === initialActiveCellId || secondInputDate !== ''

    const isDisabled = !validFirstInput
    const handleChangeError = useCallback((error: string) => {
        setError(error)
    }, [])

    useClickOutside(calendarRef, () => {
        if (isWithInput) {
            setError('')
            handleChangeFirstDateInput('')
            handleChangeSecondDateInput('')
            if (!isOpenModal) setIsOpenTable(false)
        }
    })

    const handleKeyboardChange = useCallback((isKeyboard: boolean) => {
        setIsKeyboardChange(isKeyboard)
    }, [])

    const handleFocus = () => {
        setIsOpenTable(true)
    }

    const handleOpenCalendar = () => {
        setIsOpenTable((prev) => !prev)
        handleChangeFirstDateInput('')
        handleChangeSecondDateInput('')
        handleChangeError('')
    }

    const handleClickTodoButton = () => {
        if (!isDisabledTodos) handleChangeModalState()
    }

    const todo = useMemo(() => {
        const localStorage = new LocalStorage()

        return (
            localStorage
                .getItem(todosKey, [])
                .find((todo) => todo.id == activeCellId) ?? { id: '', data: [] }
        )
    }, [activeCellId])
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
            {isOpenTable && (
                <>
                    <CalendarArticle {...restProps} $isWithTodos={isWithTodos}>
                        <DateBar minMaxDate={minMaxDate} />
                        <WeekBar weekDays={weekDays} />
                        <DaysTable
                            firstInputDate={validFirstInput}
                            secondInputDate={validSecondInput}
                            handleChangeError={handleChangeError}
                            isWithRange={isWithRange}
                            handleKeyboardChange={handleKeyboardChange}
                            isKeyboardChange={isKeyboardChange}
                            onClickWithRange={onClickWithRange}
                            handleChangeFirstDateInput={
                                handleChangeFirstDateInput
                            }
                            handleChangeSecondDateInput={
                                handleChangeSecondDateInput
                            }
                            activeCellId={activeCellId}
                            handleChangeActiveCellId={handleChangeActiveCellId}
                            weekDays={weekDays}
                            startDay={startDay}
                            isWithTodos={isWithTodos}
                            handleGetHoliday={handleGetHoliday}
                            handleGetAllHolidays={handleGetAllHolidays}
                            minMaxDate={minMaxDate}
                            calendarData={calendarData}
                        />
                        {isOpenModal && isTodos && (
                            <TodoModal
                                onClose={handleChangeModalState}
                                todo={todo}
                                addTodo={handleAddTodo}
                                removeTodo={handleRemoveTodo}
                                removeAllTodos={handleRemoveAllTodos}
                                updateTodo={handleUpdateTodo}
                            />
                        )}
                    </CalendarArticle>
                    {isTodos && (
                        <>
                            <TodoButton
                                $isDisabled={isDisabledTodos}
                                onClick={handleClickTodoButton}
                            >
                                {todoButtonText}
                            </TodoButton>
                        </>
                    )}
                </>
            )}
        </CalendarSection>
    )
}

export default memo(DefaultCalendar)
